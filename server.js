const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5900;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("./middlewares/errroHandler");

const authRouter = require("./routes/authRoute");
const contactFormRouter = require("./routes/contactFormRoute");
const uploadRouter = require("./routes/uploadRoute");
const socialLinksRouter = require("./routes/socialMediaLinkRoute");
const ourProgContRouter = require("./routes/ourProgContRoute");
const galleryRouter = require("./routes/galleryRoute");
const phoneRouter = require('./routes/phoneRoute');
const addressRouter = require('./routes/addressRoute');
const emailRouter = require('./routes/EmailRoute');
const mapRouter = require('./routes/mapRoute')
// teaching staff routes
const teachingStaffRouter = require("./routes/teachingStaffRoute");
// team routes
const teamRouter = require('./routes/ourTeamRoute');
const clientRouter = require('./routes/testimonialRoute')
const blogRouter = require('./routes/blogRoute');
const certificateRouter = require("./routes/certificateRoute");
const upComingEventRouter = require("./routes/upComingEventRoute");
const youtubeRouter = require("./routes/youtubeRoute")

// mongodb connection
connectDB();

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());
// app.use("/files", express.static("files"))

// routes
app.use('/check', (req, res) => {
  res.send('API is working properly');
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/upload", uploadRouter);
app.use("/api/v1/contactQuery", contactFormRouter);
app.use("/api/v1/socialLinks", socialLinksRouter);
app.use("/api/v1/progCont", ourProgContRouter);
app.use("/api/v1/gallery", galleryRouter);
app.use("/api/v1/certificate", certificateRouter)
app.use('/api/v1/phone', phoneRouter);
app.use('/api/v1/address', addressRouter);
app.use('/api/v1/email', emailRouter);
// teaching staff
app.use("/api/v1/teaching-staff", teachingStaffRouter);
// our team
app.use('/api/v1/team', teamRouter);
app.use('/api/v1/testimonial', clientRouter)
app.use('/api/v1/map', mapRouter);
app.use('/api/v1/blog', blogRouter);
app.use('/api/v1/upcoming', upComingEventRouter);
app.use('/api/v1/youtube', youtubeRouter);

// middlewares
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${PORT}`.bgCyan
      .white
  );
});
