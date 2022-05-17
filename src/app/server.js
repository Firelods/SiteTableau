let express = require("express");
let cors = require("cors");
var path = require('path');
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
var url = "mongodb://localhost:27017/";
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
    
  })

  //!Recherche par id
  app.get("/select/:id", function (req, res) {
    dbo.collection("tableau").find({idINT:req.params.id.toString()}).toArray(function (err, result){
      let json = JSON.stringify(result);
      console.log(json);
      res.end(json);
    })
  });


  //! Get le nombre de tableau 

  app.get("/len", function (req, res) {
    console.log(dbo.collection("tableau").find().toArray(function (err, result) {
      res.end(result.length.toString());
    }));
  })
});
// console.log("test : ",dbco.type)
// console.log(result1)
var Schema = mongo.Schema;

var UsersSchema = new Schema({
  id: {
    Type: String
  },
  type: {
    Type: String
  },
  nom: {
    Type: String
  },
  prix: {
    Type: Number
  }
})
