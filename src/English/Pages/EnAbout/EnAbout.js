import React, { Component } from 'react';




class EnAbout extends Component {
 constructor(){
   super()
   this.state = [{
     count:0
   }]
 }


 btn() {
   this.setState({
     count:1
   })
 }
  render() {
    let {count} = this.state

    return (
        <div class="wrapperHeader">
          <div>
            {/* {
                count.map(x=>
                  <li>index  : {x}</li>
                )
            } */}
          </div>
          <button onClick={this.btn}>
            click me 
          </button>
          </div>
        
    );
  }
}

export default EnAbout;
