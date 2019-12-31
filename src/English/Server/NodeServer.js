require('dotenv').config()

const express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const bcrypt = require("bcrypt")
const cors = require("cors")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const passport = require("passport")
const jwt = require('jsonwebtoken')


//routes....
const FeatRouter = require("./Routes/Categories")
const CatRouter = require("./Routes/Features")
const UserRouter = require("./Routes/Users")

const app = express({credentials: true})

app.use(cors({
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true } 
  ))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json()) // to support JSON-encoded bodies
app.use(express.urlencoded()) // to support URL-encoded bodies

//======coockie parser=======
app.use(cookieParser())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})
// app.set('view engine','ejs');
// app.use('http://localhost:5002/api/toReact', express.static(path.join(__dirname, 'public/index.html')))

// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
//   })

// app.use(bodyParser.json({ type: 'application/*+json' }))

// // // parse some custom thing into a Buffer
const PORT = process.env.PORT || 5002
app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`)
})

//sql databases ----------------------------
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "arash",
  database: "webadvisers"
  // port:'3308'
})

db.connect(err => {
  err
    ? console.error("error:" + err.message)
    : console.log("=>Connected to the MySQL server.")
})

//=======session========
app.set("trust proxy", 1) // trust first proxy

app.use(
  session({
    secret: "arash",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
)

//categories RESTAPI
app.use("/", CatRouter)
//Features RESTAPI
app.use("/", FeatRouter)
//Users RESTAPI
app.use("/", UserRouter)


app.get("/SideServiceTitle", (res, req) => {
  var sqlSelect =
    "Select categoriesPageTitle , categoriesTitle  from applika.categories"
  db.query(sqlSelect, (err, rows) => {
    if (err) throw err.message
    console.log(rows)
    req.send(JSON.stringify(rows))
  })
})
//post categories ----------------------------



// post features------------------------



 

// app.post('/getToken' , (req, res)=> {

//   let user ={name:req.body.username , email:req.body.email}

//   let accestoken = jwt.sign(user , process.env.ACCES_TOKEN_SECRET)
//    res.json({accesToken : accestoken});
// })




// =====userLogin=============







//SideService menu---------------------






// app.get('/setCoockie' , (req , res) => {
//   let users = {
//     name:'ali' ,
//     age:23
//   }
//   res.cookie('user Data' , users)
//   res.send('hey cpoopckie seted ')
// })

// app.get('/getuser', (req, res)=>{
//   //shows all the cookies
//   console.log(req.cookies);
//   });

// app.use('/' , require('./Routes/Routes'))

//     var obj = [{
//       name: "Simon",
//       age: "20",
//       child: [{id:1 , name:'mina'} , {id:2 , name:'rozhin'}]
//     } ,
//      {
//     name: "ali",
//     age: "30",
//     child: [{id:3 , name:'zhale'} , {id:4 , name:'shhre'}]

//   }
// ]
//     console.log(...obj)

//  const a =  obj.map(x=> {return x.name})

// console.log('a : ', a)

// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))


// const sort = (arr) => { 
//   var len = arr.length;
//       for (let i = 0; i < len; i++) {
//               if (arr[i] > arr[i+1]) {
//                 var temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//               }
//           }
//           return arr
//         }
//         let array =[3,2,5,1,6]
//         let sortedArr = sort(array)
//         console.log(sortedArr) 

// class Student  {
//   constructor(name , age) {
//     this.name=name
//     this.age=age
//   }

//   print() {
//     console.log(`student name  : ${this.name} & age is ${this.age}`)
//   }
// }
// const student1 = new Student('ali' , 19)
// const student2 = new Student('mohsen' , 30)

// console.log(student1.print())
// console.log(student2.print())

// let rateColor = (color , level) => 
//   ({...color , level})

  // const schools = ['name' , 'age' , 'sex']

  // console.log(schools.join('-'))

  // let state1 = ('' == undefined)
  // console.log(state1)




  // let funct = function(par) {
  // return `parameter is ${par}`
  // }
  // console.log(funct('ali'))
  
  // let funct2 = par => {
  // return  `parameter is ${par}`
  // }
  // let fu = funct2('mohsen')
  // console.log(fu)









   
    

