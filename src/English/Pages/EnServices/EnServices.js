import React, { Component } from "react"
import { NavLink, Route } from "react-router-dom"

import EnNavMenu from "../../Components/EnNavMenu/EnNavMenu.js"
import EnFooter from "../../Components/EnFooter/EnFooter.js"
import ServiceDetails from "../../Components/ServicesDetails/ServiceDetails.js"

import _EnServices from "./_EnServices.css"
//-----------------------EnService.css

class EnServices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Categories: [],
      Features: [],
      Nested: []
    }
  }

  //-----------merge function
  merge() {
    const { Categories, Features, Nested } = this.state

    let result = Categories.map(item => {
      return {
        ...item,
        children: Features.filter(el => el.categoriesId === item.categoriesId)
      }
    })

    this.setState({
      Nested: result
    })
    console.log("result is: ", result)
    console.log("Nested is: ", Nested)        
  }

  //----------------------------compnentdidmount
  async componentDidMount() {
    //--------------fetchDetails--------------------
    let resCat = await fetch("http://localhost:5002/categories")
    let resFeat = await fetch("http://localhost:5002/features")
    const cat = await resCat.json()
    const feat = await resFeat.json()
    this.setState({
      Categories: cat
    })
    this.setState({
      Features: feat
    })
    this.merge()
  }

  onChangeHandler(e) {
    console.log("file is : ", e.target.files[0])
  }

  render() {
    const { Categories } = this.state
    console.log("Services props is: ", { ...this.props })

    return (
      <div>
        <EnNavMenu />
        <div className="EnServices">
          <div className="ServicesMenu">
            <div className="TopServicesCmp"> Services : </div>
             <div className="BottomServicesMenu">
              {Categories.map(r => {
                return (
                  <ul>
                    <h1 key={r}>
                      <NavLink to={`/Services/${r.categoriesPageTitle}`}>
                        {r.categoriesPageTitle}
                      </NavLink>
                    </h1>
                    <ul>
                      <li key={r}>
                        <NavLink to={`/Services/${r.categoriesTitle}`}>
                          {r.categoriesTitle}
                        </NavLink>
                      </li>
                    </ul>
                  </ul>
                )
              })}
            </div>
          </div>

          <div className="DetailView">
            <Route
              path="/Services/:name"
              render={props => <ServiceDetails name={props} />}
            />
          </div>
        </div>
        <EnFooter />
      </div>
    )
  }
}

export default EnServices
