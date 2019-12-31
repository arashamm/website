const express = require('express')
const bcrypt = require('bcrypt')
const mysql = require('mysql');
let passport = require('passport')



const CatRouter = express.Router()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'arash',
    database: 'applika',
    // port:'3308'asd
})

//GET HTTP
CatRouter.get("/categories/get", (res, req) => {
    var nested = `SELECT * FROM webadvisers.categories;`
    db.query(nested, (err, rows) => {
      if (err) throw err.message
      console.log(rows)
      req.send(JSON.stringify(rows))
    })
  })


  //POST HTTP
CatRouter.post("/categories/post", function(req, res) {
    var state = {
      catPageTitle: req.body.CatPageTitle,
      catTitle: req.body.CatTitle,
      catDescription: req.body.CatDecription,
      catSvg: req.body.Catsvg
    }
  
    let { catPageTitle, catTitle, catDesciption, catSvg } = state
    console.log(state)
  
let sql = ''
    db.query(sql, function(err, result) {
      if (err) {
        console.log(err.message)
      } else {
        console.log("success")
      }
    })
  
    res.send(JSON.stringify(state))
    console.log(state)
  })


  //PUT HTTP
  CatRouter.put('/Category/put/:id' , (req , res ) => {
    console.log('params : ' , req.params.id)
    console.log('body: ' , req.body)
    let {id} = req.params.id

    let {catPageTitle , catTitle , catDescription , catSvg} = req.body.catEdit
    let state = { 
    categoriesPageTitle :catPageTitle , 
    categoriesTitle :catTitle , 
    categoriesDescription :catDescription , 
    categoriesSvg :catSvg , 
    }
    console.log('state:' , state)
    let que = `UPDATE applika.categories SET ? WHERE categoriesId = ${req.params.id}`
    db.query(que , state , function (err, result) {
        if (err) {
        console.log(err.message);
        } else {
            console.log('success');    
        }   
    })
  })

  module.exports = CatRouter
