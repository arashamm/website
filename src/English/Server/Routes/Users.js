const express = require('express')
const bcrypt = require('bcrypt')
const mysql = require('mysql');
let passport = require('passport')



const UserRouter = express.Router()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '<#arash09357961996>',
    database: 'applika',
    // port:'3308'asd
})


UserRouter.post("/SignUp",  (req, res) => {

  // passport.authenticate('local' , (err , user , info) => {
    
  // })  
    let state = {
      Name: req.body.username,
      Email: req.body.email, 
      Password: req.body.password
    }
    console.log("state is : ", state)
    
    let { Name, Email, Password } = state

    let dbquery =`SELECT userName , userEmail from applika.users WHERE userEmail=${Email}`

    db.query(dbquery , (err , results) => {
      if (results) {
          console.log('db result is : ' , results)      
        }
      else { 
         console.log('eroor')
       }
    })

    // bcrypt.hash(Password, 10, (err, hash) => {
    //   if (err) console.log(err)
    //   Password = hash
    //   console.log("hash pas is : ", Password)
    //   var sql =
    //     'INSERT INTO applika.users ( userName , userEmail , userPassword  ) VALUES ("' +
    //     Name +
    //     '" , "' +
    //     Email +
    //     '" ,  "' +
    //     Password +
    //     '" )'
    //   // db.query(sql, (err, result) => {
    //   //   err ? console.log(err) : console.log("user registerd succesfully")
    //   // })
    // })
  })

  UserRouter.post('/SignIn' , (req, res , error) => {
    const {email , password} = req.body
    
    let state = {
      Email:email,
      Password:password,
    }
    console.log('Login Data : ' , state)
      // console.log('cs',state)
      let SingUpQuery = `SELECT * FROM users WHERE userEmail = ${email}`
        db.query(SingUpQuery , (err  , rows) => {
     
      // if (rows.length >0) {
      //   console.log('data is exist ')
      // }

        });

      
      
      //   bcrypt.compare(password  ,hash , (err, res)  => {
      //   // db.query(`select userEmail , userPassword where userEmail = ${email} AND userpassword = ${hash}`)
      //   if (err) {
      //     res.send(err)
      //   } else {
      //     console.log('login succes');
      //   }
      // });
      
      })


  module.exports = UserRouter
