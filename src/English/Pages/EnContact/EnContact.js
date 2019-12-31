import React, { Component } from 'react';
import DataContext from '../../Components/Data context/DataContext';

import './_EnContact.css'



class EnContact extends Component {
  constructor() {
    super()
    this.state = {
      todoData : [1 ,2 ,3 ,4 ] , 
      isClick : false
    }
    // setInterval(() => {
    //   this.setState ({
    //     todoData : [...this.state.todoData , 5]
    //   })
    // }, 2000);
  }

  // static contextType = DataContext

  componentDidMount() {

    // let user = this.context
    // console.log(user)
  }

  toggle() {
    this.setState( {
      isClick : !this.state.isClick
    })
  }

  render() {
    let {todoData , isClick} = this.state

    let Clicked = isClick ? 'red' : 'blue'
    return (
      <DataContext.Consumer>
       {value => <div class="wrapperHeader">
          <ul id="uList">
            <li>{value.name}</li>
          </ul>
          <div className={Clicked} >hi</div>
          <button onClick={this.toggle.bind(this)}> change color </button>

        </div>}

    </DataContext.Consumer>
    );
  }
}

export default EnContact;
       

