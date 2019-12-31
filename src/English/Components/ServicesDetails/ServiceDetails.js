import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom"

import _ServiceDetails from "./_ServiceDetails.css"

import WebSiteSvg1 from "../../../English/Assets/Srvices page/Web & Mobile/Web site/WebSiteSvg1.svg"

const ServiceDetails = props => {
  const [Categories, setCategories] = useState([])
  const [Features, setFeatures] = useState([])

  const { match } = props

  // -----Merg ct and feat to Nested
  let Result = Categories.map(item => {
    return {
      ...item,
      children: Features.filter(el => el.categoriesId === item.categoriesId)
    }
  })

  console.log("Result is: ", Result)
  console.log("detail prop: ", props)

  // console.log('data: ', data)

  // var obj = [{
  //         name: "Simon",
  //         age: "20",
  //         child: [{id:1 , name:'mina'} , {id:2 , name:'rozhin'}]
  //       } ,
  //        {
  //       name: "ali",
  //       age: "30",
  //       child: [{id:3 , name:'zhale'} , {id:4 , name:'shhre'}]

  //     }
  //   ]
  // console.log('obj: ', obj)
  console.log("detal params : ", match.params)

  //=======================================useffect1

  useEffect(() => {
    async function getData() {
      let resCat = await fetch("http://localhost:5002/categories")
      let resFeat = await fetch("http://localhost:5002/features")
      const cat = await resCat.json()
      const feat = await resFeat.json()
      setCategories(cat)
      setFeatures(feat)
    }
    getData()
  }, [])

  return (
    <div classname="ServiceDetails">
      <div>
        {/* <p>{match.params.name}</p> */}
        {Result.map(x => {
          return  (match.params.name == x.categoriesPageTitle) ? (
            <div className="GenDiv">
              <div className="CatDiv">
                <h1>{x.categoriesPageTitle}</h1>
                <h>{x.categoriesTitle}</h>
                <p>{x.categoriesDescription}</p>
              </div>
              {/* <img src={WebSiteSvg1} ></img> */}
              <div class="featDiv">
                {x.children.map(y => {
                  return (
                    <div className="featCont">
                      <h1>{y.FeaturesTitle}</h1>
                      <p>{y.FeaturesDescription}</p>
                      <img src={y.FeaturesSvg} alt="" />
                    </div>
                  )
                })}
              </div>
            </div>
          ) : null
        })}

        {/* {Result.map(x=>{
                          return   ( 
                            <h key={x.categoriesId}>{x.categoriesTitle}</h> 
                          )
                         }
                        )} */}
        {/* <p>{JSON.stringify(obj[0].name)}</p> */}
        {/* <p>{JSON.stringify(Result[0].categoriesTitle)}</p> */}
      </div>
    </div>
  )
}
export default withRouter(ServiceDetails)
