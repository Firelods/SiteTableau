let express = require("express");
let cors = require("cors");
const multer = require("multer");

var path = require('path');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/var/www/test.clement-lefevre/assets/img/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) //Appending extension
  }
})


const upload = multer({storage: storage });
var bodyParser = require('body-parser');
var mongo = require('mongoose');
let app = express();
var bodyParser = require('body-parser');
let assert = require("assert");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cors());


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
app.listen(8810);
var dbco;
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("VenteTableaux");

  //! Recherche TOTALE
  app.get("/", function (req, res) {
    console.log(dbo.collection("tableau").find().toArray(function (err, result) {
      let json = JSON.stringify(result);
      console.log(json);
      res.end(json);
    }));
  });

  //!Recherche par id
  app.get("/select/:id", function (req, res) {
    dbo.collection("tableau").findOne({
      'idINT': parseInt(req.params.id)
    }).then(result => {
      if (result == null) {
        res.status(404);
      }
      let json = JSON.stringify(result);
      console.log(result);
      res.end(json);
    })
  });


  //! Get le nombre de tableau 

  app.get("/len", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    dbo.collection("tableau").find().toArray(function (err, result) {
      res.end(result.length.toString());
      console.log(result.length);
    });
  });


  //! Ajout d'un tableau
  app.post("/add", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    dbo.collection("tableau").insertOne(req.body, function (err, result) {
      console.log(req.body);
      if (err) throw err;
      console.log("1 document inserted");
    })
  });


});

//! Ajout image

app.post("/addImage", upload.single("imgSent"), function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // console.log(req.file);
  res.json({ message: "Successfully uploaded files" });
});



