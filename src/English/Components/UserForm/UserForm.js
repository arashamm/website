import React, { component  , useState  , Cookie } from 'react';
import  { Route  , Link } from 'react-router-dom';
import styled from 'styled-components';

import __UserForm from  './_UserForm.css'
// import Login from './English/Components/UserForm/UserForm'
// import SignUp from './English/Components/UserForm/UserForm'

const UserForm = () => {
  
    // -------styles-------
    const FormCont = styled.div `
    /* display:grid; */
    height:500px;
    
    /* grid-template-columns:1fr 1fr 1fr 1fr ; */
    background-color:rgb(201, 201, 201);
`;

    const Para = styled.p ` 
    color:white;
    font-size:20px ;
    &:hover {
      color: white;
    }

    a{
      color: #fff;
      list-style-type:none;
      text-decoration:none;
    }

    a:hover{
      color: rgb(46, 97, 191);
      list-style-type:none;
      text-decoration:none;
    }
  `;  

        return(
           <FormCont>
              <p>this is user page</p>
              <Route path="/UserForm/SignIn" component={SignIn} />
              <Route path="/UserForm/SignUp" component={SignUp} />
           </FormCont>
          )
        }
        export default UserForm
                    
                
             
           
        
  
 

 
    //=========LoginComp=========
    const SignIn = () => {
      const [logData , setlogData ] = useState ({
        email :'', 
        password : ''
      })
      let { email , password } = logData

 

      const onChange = () => {
        setlogData({
          password:password.value , 
          email:email.value
        })
        console.log(logData)
      }
    
      const onSubmit = (e) => 
      {
        e.preventDefault();

        fetch('http://localhost:5002/SignIn', {
          method: 'POST', // or 'PUT'
          withCredentials: true,
          body: JSON.stringify(logData),
          headers:{
              'Accept': 'application/json',
              "Content-Type": "application/json; charset=utf-8" 
            } , 
           //  credentials: "same-origin",
           //  mode: 'no-cors',
       })
       .then(response => console.log('data is  :', response))
       .catch(error => console.error('Error:', error));   
      }
      
      const Reset = (e) => {
        setlogData({
            email:'',
            password :'',
          });
        }



    

        //----Styels----
              const Form = styled.form `
              background-color:beige;
              `;
    
              const Input = styled.input `
              border:2px solid blue;
              `;
        //----Styels----
 
        
        return (
            <div className='formCont'>
            <p>SignIn</p>
              <form onSubmit={onSubmit}>
                  <label>Email : </label>
                   <input type="text" ref={x => { email = x; }} onChange={onChange}/>
                  <label>password : </label>
                   <input type="password" ref={x => { password = x; }} onChange={onChange}/>
                  <input  type='submit' />
                  <button onClick={Reset}>Reset</button>
              </form>  
            <p>you didn't register ? then <Link to='/UserForm/SignUp'>SignUp</Link></p>
            </div>
        )
      }
    
        
        
    
    
    
    
    
    
      
    
    //===============SiunUpComp====================
    const SignUp = (props) => {
    
      const [regData , setregData ] = useState ({
        userName : '' , 
        email : '' , 
        password : '' , 
        image:''
      })
      // const [imgData , setimgData] = useState([])
      
      let {userName , email , password , image } = regData

      const onChange = (e , key ) => {
        // let img = new FormData()
        // img.append('file' , files)
        setregData({
          username:userName.value, 
          email:email.value, 
          password:password.value, 
        });
        // console.log('e.target.files: ' ,files)
        console.log('reg data : ' ,regData)
          
        // let reader =new FileReader() ; 
        // reader.onload( x => {
        //     return (
        //        <img src={image} alt=''/>
        //     )
        // })
      }
      //===============onSubmit========
        const onSubmit =  (e) => {
          e.preventDefault();
          fetch('http://localhost:5002/SignUp', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(regData),
            headers:{
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=utf-8" 
              } , 
             //  credentials: "same-origin",
             //  mode: 'no-cors',
         })
         .then(response => console.log('data is  :', response))
         .catch(error => console.error('Error:', error));
       };
                         
        const Reset = (e) => {
          
        setregData({
            userName:'',
            email:'',
            password :'',
          });
        }
  
        //-----style------
        const Button =styled.button `
        display:transparent;
        `;
  
        const ImageDiv = styled.div`
        width: 70px;
        height: 70px;
        `;
  
  
        return(
      
          <div className='formCont'>
            <h>SignUp </h>
             <form onSubmit={onSubmit}>
                <label>username : </label>
                 <input type="text" ref={x => { userName = x; }}  onChange={onChange}/>
                <label>email : </label>
                 <input type="text" ref={x => { email = x; }} onChange={onChange}/>
                <label>password : </label>
                 <input type="password" ref={x => { password = x; }} onChange={onChange}/>
                <input  type='submit' />
                <Button onClick={Reset}>Reset</Button>
             </form>
              <p>you registered ? then <Link to='/UserForm/SignIn'>SignIn</Link></p>
              
             <ImageDiv>
               <img  src={image} alt=''/>
              </ImageDiv>
           </div>
        )
      }

   
        




    



        
    

  

  
  



















