const express = require('express')
const bcrypt = require('bcrypt')
const mysql = require('mysql');
let passport = require('passport')



const FeatRouter = express.Router()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '<#arash09357961996>',
    database: 'applika',
    // port:'3308'asd
})

FeatRouter.post("/features/post", function(req, res) {
    var state = {
      FeaturesTitle:req.body.featTitle,
      FeaturesDescription:req.body.featDecription,
      FeaturesSvg:req.body.featsvg,
    }
    console.log(state)
    var sql = ''
    db.query(sql, function(err, result) {
      if (err) {
        console.log(err.message)
      } else {
        console.log("success")
      }
    })
  })

  FeatRouter.get("/features/get", (res, req) => {
    var nested = `SELECT * FROM applika.features;`
    db.query(nested, (err, rows) => {
      if (err) throw err.message
      console.log(rows)
      req.send(JSON.stringify(rows))
    })
  })

  module.exports = FeatRouter