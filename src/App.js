import React, { Component } from 'react';


import { Route } from "react-router-dom";


import Home from '././Persian/Pages/Home/Home.js'
import About from './Persian/Pages/About/About.js'
import Contact from '././Persian/Pages/Contact/Contact.js'

import EnHome from '././English/Pages/EnHome/EnHome.js'
import EnAbout from '././English/Pages/EnAbout/EnAbout.js'
import EnContact from '././English/Pages/EnContact/EnContact.js'
import EnServices from '././English/Pages/EnServices/EnServices.js'
import UserForm from './English/Components/UserForm/UserForm.js'
import {CatEdit   , BackOffice} from './English/Components/BackOffice/BackOffice.js'
import DataProvider from './English/Components/Data context/DataProvider'
// import Login from './English/Components/UserForm/UserForm'
// import SignUp from './English/Components/UserForm/UserForm'
import ServiceDetails from './English/Components/ServicesDetails/ServiceDetails.js'



class App extends Component {

  render() {
    return (
      <DataProvider>
        <div className="App">
          <Route path="/fa" exact component={Home} />
          <Route path="/fa/About/" component={About} />
          <Route path="/fa/Contact/" component={Contact} />
          <Route exact path="/"  component={EnHome} />
          <Route path="/About/" component={EnAbout} />
          <Route path="/Contact/" component={EnContact} />
          <Route path="/Services/" component={EnServices} />
          {/* <Route path="/Services/:name" component={ServiceDetails} /> */}
          <Route path="/BackOffice/" component={BackOffice} />
          <Route path="/CatEdit/:id" component={CatEdit} />
          <Route path="/UserForm/" component={UserForm} />
        </div>
      </DataProvider>
      
    );
  }
}

export default App;

                
                       


