const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { generateRefreshToken } = require("../config/refreshtoken");
const { generateToken } = require("../config/jwtToken");
const userModel = require("../models/userModel");


// register user
const createUser = asyncHandler(async(req, res) => {
    try {
        const {username, email, phone, password, role} = req.body;
        
        if (!username || !email || !phone || !password) {
            return res.status(404).send({
              success: false,
              message: "All Fields are required",
            });
          }

          const checkUser = await userModel.findOne({ email });

          if (checkUser) {
            return res.status(400).send({
              success: false,
              message: "User Already Exists",
            });
          }

          const newUser = await new userModel({
            username,
            phone,
            email,
            password,
            role
          }).save();

          res.json(newUser);
        
    } catch (error) {
        return res.status(500).send({
            message: "Error While Creating User",
            success: false,
            error,
        });
    }
})


// user login
const loginUserCtrl = asyncHandler(async(req,res) => {
    const {email, password} = req.body;
    const findUser = await userModel.findOne({ email });
    if(findUser && (await findUser.isPasswordMatched(password))){
        const refreshToken = await generateRefreshToken(findUser?._id);
        const updateUser = await userModel.findByIdAndUpdate(
            findUser.id,
            {
                refreshToken: refreshToken
            },
            {new : true}
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findUser?._id,
            username: findUser?.username,
            phone: findUser?.phone,
            email: findUser?.email,
            token: generateToken(findUser?._id),
        })
    }else{
        throw new Error("Invalid Credentials");
    }
})

// admin login
const loginAdminCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exist or not
    const findAdmin = await userModel.findOne({ email });
    if (findAdmin.role !== "admin") throw new Error("Not Authorized");
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
      const refreshToken = await generateRefreshToken(findAdmin?._id);
      const updateUser = await userModel.findByIdAndUpdate(
        findAdmin.id,
        {
          refreshToken: refreshToken,
        },
        { new: true }
      );
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,
      });
      res.json({
        _id: findAdmin?._id,
        email: findAdmin?.email,
        token: generateToken(findAdmin?._id),
      });
    } else {
      throw new Error("Invalid Credentials");
    }
});

  // handle refresh token
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken)
      throw new Error("No refresh token available in cookies");
    const refreshToken = cookie.refreshToken;
    const user = await userModel.findOne({ refreshToken });
    if (!user) throw new Error("No refresh token present in db or not matched");
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err || user.id !== decoded.id) {
        throw new Error("There is something wrong with refresh token");
      }
      const accessToken = generateToken(user?._id);
      res.json({ accessToken });
    });
});


const getAllUsers = asyncHandler(async(req,res) => {
  try {
    const allUsers = await userModel.find();
    res.json(allUsers);
  } catch (error) {
    throw new Error(error);
  }
});


const deleteUsers = asyncHandler(async(req,res) => {
  const {id} = req.params;
  try {
    const deleted = await userModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
});


module.exports = {createUser, loginAdminCtrl, loginUserCtrl,handleRefreshToken, getAllUsers, deleteUsers};