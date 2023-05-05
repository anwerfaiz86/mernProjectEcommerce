const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URI)
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify:false
    //})
    .then((con) =>
      console.log(`Mongodb connected with server: ${con.connection.host}`)
    );
};

//module.exports = connectDatabase;
