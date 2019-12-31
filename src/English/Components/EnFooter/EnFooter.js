import React, { Component } from 'react';



import './_EnFooter.css'

import FooterIcon1 from './../../../English/Assets/HomePage/SVG/FooterIcon1.svg'
import FooterIcon2 from './../../../English/Assets/HomePage/SVG/FooterIcon2.svg'
import FooterIcon3 from './../../../English/Assets/HomePage/SVG/FooterIcon3.svg'


                   
class EnFooter extends Component {
  
  render() {
    return (

      
            <div class='FooterCl'>
                      <div class='FooterLeft'>
                        <div class='Logo'>
                         <h1>Applica Group</h1>  
                        </div>
                        <div class='Titles'>
                          <h1>Multimedia</h1>
                          <h1>Menu</h1>
                        </div>
                        <div class='Multimedia'>
                          <span><img src={FooterIcon1}/><p>www.instagram.com/applikasystems</p></span>
                          <span><img src={FooterIcon2}/><p>www.twitter.com/applikasystems</p></span>
                          <span><img src={FooterIcon3}/><p>www.linekdin.com/webino</p></span>
                        </div>
                        <div class='Menu'>
                          <div class='AppDev'>
                            <h>App Developing</h>
                            <p>Web Site </p>
                            <p>Mobile application</p>
                            <p>Desktop Software </p>
                            <p>Web application</p>
                          </div>
                          <div class='WebDev'>
                            <h>Website optimization</h>
                            <p>analysis and monitoring</p>
                            <p>SEO Services</p>
                            <p>Content Generation</p>
                            <p>Business Intelligence</p>
                          </div>
                          <div class='GeraphDev'>
                            <h>Graphic Design</h>
                            <p>UI / UX</p>
                            <p>Bruchures</p>
                            <p>Logo</p>
                            <p>Cataloge</p>
                          </div>
                          <div class='PromoDev'>
                            <h>Promotions  </h>
                            <p>Social media marketing </p>
                            <p>Banner advertising</p>
                            <p>Click advertising</p>
                            <p>News reportage</p>
                          </div>
                          
                        </div>
                      </div>
                   

                      <div class='FooterRight'>
                        <div class='Parag'>
                          <p>We are looking for international connections and cooperation with different countries and companies, and we aim to create a positive and Concluding relationship in the field of software and online advertising. We work very fast , keep track of the needs of our customers and the people we work with  , and also its our honor to have conversation with you . just contact us.</p>
                        </div>

                        <div class='Emails'>
                            <p class='EmailTitle'>Email : </p>
                            <div class='EmailsCont'>
                              <p>info@applicasystems.com </p>
                              <p>arash_ammarlooi@hotmail.com</p>
                              <p>arashammarlooi@gmail.com</p>
                            </div>
                        </div>
                        
                        <div class='Phone'>
                          <div class='IranPhone'>
                            <p>Phone : </p>
                            <div>
                              <p>+98 (935) 796 19 96</p>
                              <p>+98 (903) 111 63 18</p>
                            </div>
                          </div>

                          <div class='CanadaPhone'>         
                            <p>Canada office : </p>
                            <p>+1 (514) 804 46 90</p>
                          </div>
                        </div>
                      </div>
          </div>
                         


                 




        
    );
  }
}

  export default EnFooter;