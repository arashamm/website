
import React  , { useState , useEffect} from 'react' 
import useForm from 'react-hook-form'
import { Link } from 'react-router-dom'
const axios = require('axios');


// import styled from 'styled-components'

//==============CategoryForm Component==========
const CategoryForm = () => {

  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const { Data , setData } = useState("") // initialise the hook
    
   
    const onSubmit = (data) => { 
      fetch('http://localhost:5002/categories/post', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'           
           } , 
          //  credentials: "same-origin",
          //  mode: 'no-cors',
      })
      .then(response => console.log('Categories  :', data))
      .catch(error => console.error('Error:', error));
      
    } 
      
    return (
                <div className='CategoryForm'>
                   <h1>CategoryRegister</h1>
                        <form onSubmit={handleSubmit(onSubmit)} >
                        
                        <label>CatPageTitle</label>
                        <input name="CatPageTitle" ref={register({ required: false })} /> {/* register an input */}
                        {errors.CatPageTitle && 'CatPageTitle is required.'} {/* error message */}
                        <label>CatTitle</label>
                        <input name="CatTitle" ref={register({ required: false })} /> {/* register an input */}
                        {errors.CatTitle && 'CatTitle is required.'} {/* error message */}
                        <label>CatDecription</label>
                        <input name="CatDecription" type='Select' ref={register({ required: false })} /> {/* apply required validation */}
                        {errors.CatDecription && 'CatDecription is required.'} {/* error message */}                       
                        <label>Catsvg</label>
                        <input name="Catsvg" type='file' ref={register( { required: false })} /> {/* apply a Refex validation */}
                        {errors.Catsvg && 'Please select on file.'} {/* error message */}
                
                        <input type="submit" />
                    </form>
                </div>
            )
    }


    

    //=========FeaturesForm Component ============
    const FeaturesForm = () => {
        const { register, handleSubmit, errors } = useForm() // initialise the hook
        // const [Data , setData] = useState({
        //     featTitle:'' ,
        //     featDecription:'' ,
        //     featsvg:'' ,
        // })
        
        const onSubmit = (FeatData) => {
          
          fetch('http://localhost:5002/features/post', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(FeatData), // data can be `string` or {object}!
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'           
               }, 
              //  credentials: "same-origin",
              //  mode: 'no-cors',
          })
          .then(response => console.log('Features :', FeatData))
          .catch(error => console.error('Error:', error));
        }
          
   return (
           <div className='FeaturesForm'>
             <h1>FeaturesRegister</h1>
             <form onSubmit={handleSubmit(onSubmit)}>            
             <label>featTitle</label>
             <input name="featTitle" ref={register({ required: true })} /> {/* register an input */}
             {errors.featTitle && 'featTitle is required.'} {/* error message */}             
             <label>featDecription</label>
             <input name="featDecription" ref={register({ required: true })} /> {/* apply required validation */}
             {errors.featDecription && 'featDecription is required.'} {/* error message */}            
             <label>featsvg</label>
             <input name="featsvg" type='file' ref={register( { required: true })} /> {/* apply a Refex validation */}
             {errors.featsvg && 'Please select on file.'} {/* error message */}
             <label>CategoriesTitleName</label>
             <input name="CategoriesTitleName" type='Text' ref={register( { required: true })} /> {/* apply a Refex validation */}
             {errors.featsvg && 'Please select on file.'} {/* error message */}
       
             <input type="submit"/>
           </form>
          </div>
       )}


       //=========Cat GEt Component==========
      const Cat  = () => {
          const   [catData , setcatData] = useState ([])

        useEffect(() => {
          async function getData() {
                let resCat = await fetch('http://localhost:5002/cat')
                let cat = await resCat.json();
                setcatData(cat)
              }
              getData();
            }, []);
            
        console.log('catData : ' ,catData)

        return (
          <div>
              {catData.map(x=> {
               return  (
                    <div key={x.categoriesId}>
                        <h1>{x.categoriesPageTitle}</h1>
                        <p>{x.categoriesTitle}</p>
                        <p>{x.categoriesDescription}</p>
                        <Link to={`/CatEdit/${x.categoriesId}`}>edit</Link>
                    </div>
                 )
              })}
        </div>
        )
      }

      //===========Catedit Component 
      const CatEdit = (props) => {

        let state = {
          catPageTitle : '' , 
          catgoriesTitle : '' , 
          catDescription : '' , 
          catSvg:''
        }  

        const [catEdit , setCatedit ] = useState (state)
        // const [imgData , setimgData] = useState([])
        
        let {catPageTitle , catTitle , catDescription , catSvg } = catEdit
       
        function  onChange( ) {
            setCatedit({
              catPageTitle:catPageTitle.value, 
              catTitle:catTitle.value, 
              catDescription:catDescription.value, 
              catSvg:catSvg.value,
            });
            // console.log('e.target.files: ' ,files)
            console.log('reg data : ' ,catEdit )
          }
          
          useEffect(() => {
              console.log(props)         
           }
          , []);
    
          function onSubmit (e) {
            let {id} = props.match.params

            e.preventDefault()
            axios.put(`http://localhost:5002/CatEdit/${id}`, {catEdit})
            .then(res => console.log(res))
            .catch(err => console.log('Login: ', err));
            // fetch(`http://localhost:5002/CatEdit/${categoriesId}`, {
            //   method: 'PUT', // or 'PUT'
            //   body: JSON.stringify(catEdit), // data can be `string` or {object}!
            //   headers:{
            //       'Accept': 'application/json',
            //       'Content-Type': 'application/json'            
            //      } , 
            //     //  credentials: "same-origin",
            //     //  mode: 'no-cors',
            // })
            // .then(response => console.log('CLass Compo response data to node  is :', response))
            // .catch(error => console.error('Error:', error));
          }
          return ( 
             <form onSubmit={onSubmit}>
                catPageTitle : <input type="text" ref={x => { catPageTitle = x; }} value={catPageTitle} onChange={onChange}/>
                catgoriesTitle : <input type="text" ref={x => { catTitle = x; }} onChange={onChange}/>
                {/* catDescription : <input type="textarea" ref={x => { catDescription = x; }} onChange={onChange}/> */}
                catDescription : <textarea ref={x => { catDescription = x; }} onChange={onChange} rows = "5" cols = "50" name = "description"/>
                catSvg : <input type="file" ref={x => { catSvg = x; }} onChange={onChange}/>
                <input  type='submit' />
              </form>
             )
            }

                
            //==========Backoffice page component=============
            const BackOffice = () => {
            
              return (
                    <div> 
                        <CategoryForm />
                        <FeaturesForm />
                        <Cat />
                    </div>
                )
              }
     

              
            


    
    
          
    



    
       
       export {BackOffice ,  CatEdit};
              
    

  

           



  

      
   
    









      




