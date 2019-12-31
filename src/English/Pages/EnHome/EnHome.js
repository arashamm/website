import React, { Component } from 'react';

// React lottieee---------
import Lottie from 'react-lottie';
import animationData from './../../../English/Assets/Lottie/data.json'


import EnNavMenu from '../../Components/EnNavMenu/EnNavMenu.js'
import EnFooter from '../../Components/EnFooter/EnFooter.js'




//cssssss
import './_EnHome.css'
import './_EnHomeHeader.css'
import './_EnTopMain.css' 
import './_EnHomeMain.css'



import HeaderSvg from './../../../English/Assets/HomePage/HeaderSVG.svg'
import ApllikaLogo from './../../../English/Assets/HomePage/ApllikaLogo.png'
import Connections from './../../../English/Assets/HomePage/Connections.svg'
import HomeMainAppsvg from './../../../English/Assets/HomePage/HomeMainAppsvg.svg'

import HomeMainWebOpt from './../../../English/Assets/HomePage/HomeMainWebOpt.svg'
import HomeMainOptSvg from './../../../English/Assets/HomePage/HomeMainOptSvg.svg'

import HomeMainGeraphic from './../../../English/Assets/HomePage/HomeMainGeraphic.svg'
import HomeMainGeraphicSvg from './../../../English/Assets/HomePage/HomeMainGeraphicSvg.svg'

import HomeMainPromo from './../../../English/Assets/HomePage/HomeMainPromo.svg'
import HomeMainPromoSvg from './../../../English/Assets/HomePage/HomeMainPromoSvg.svg'


class EnHome extends Component {
  constructor(Probs) {
    super(Probs)
    this.state = {isStopped: false, isPaused: false};
  }


   

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (



        <div class='wrapper'>
                        <EnNavMenu />

                   <div className='HomeHeader'> 
                          <div class='SectHeaderRight'>
                            <img src={HeaderSvg} class='HeaderSvg'/>
                          </div>

                        <div class='SectHeaderleft'>
                          <div class='HeaderLeftParag'>
                              <span class='spanH'><img src={ApllikaLogo}/><h1>َWeb badvisers..</h1></span>
                              <h1>Grow Your Bussines With Our It And  Digital Marketing Solotuions </h1>
                              <p>Applica is an Top-Rate web & mobile app development Team that helps businesses thrive in the digital world. We specialize in creating digital form factors  , E-commerce , advertising & promotion  and  online start up bussines web and mobile applications that are secure, scalable and intuitive enough to make your goals & Dreams come true and make your bussines so much  better and more professional.</p>
                              <div class='HeaderBtn'>Contact</div>
                          </div>
                        </div>
                    </div> 



                    <div class='topMain'>
                      <div class='topMainRight'>
                        <img src={Connections}/>
                      </div>
                      
                      <div class='TopMainLeft'>
                          <div class='TopMainParag'>
                            <h1>3.2 billion people  ,  would be online by the end of the year</h1>
                            <p> We publish your Data , Images , Files and Content  the best possible   </p>
                            <p> We are constantly communicating with you ,  Even after completing your project </p>
                            <p> We make your Business Valid and professional in the world wide web  </p>
                            <span class='TopMainBtn'>Web Log</span>
                          </div>
                      </div>
                    </div>
                    

{/* ----------------HomeMain------------------ */}
                        <div class='HomeMain'>
                            <div class='MainDIv MainApp'>
                              <div class='Left'><img class='SimpleSvg ' src={HomeMainAppsvg}/></div>
                              <div class='Center MainAppParag'>
                                <h1>Web & Moile App Developing</h1>
                                <p>A website or mobile app should be both clean and tidy, understandable and comprehensible to the reader, as well as the best in terms of performance, speed and security. The team ... started a different direction in designing and developing a variety of websites and mobile apps. We are always looking to update our information using new technologies and unique ideas.</p>   
                                <h>Learn more</h>
                              </div>
                                  <div class='Right'>
                                    <Lottie class='lottieAnim' options={defaultOptions}
                                    height={500}
                                    width={500}
                                    isStopped={this.state.isStopped}
                                    isPaused={this.state.isPaused} />
                                  </div>
                            </div>

                            <div class='MainDIv MainOpt' >
                              <div class='Left'><img src= {HomeMainWebOpt}/></div>
                              <div class='Center MainOptParag' id='CenterParag'>
                                <h1>Web site optimization</h1>
                                <p> There are millions of opportunities for your business to become found on search engines. One of the most important benefits of SEO is that your customers are using search engines daily.Traffic on search engines is the best traffic. Why? Because people are actually searching for the problem you solve. You can “pull” traffic to your business. You do not have to “push” out advertisements to persuade people to buy. Search traffic is already interested in your products and services. This is why the SEO industry is worth $65 billion. </p>
                                <h>Learn more</h>
                              </div>
                              <div class='Right'><img class='SimpleSvg' src={HomeMainOptSvg} /></div>
                            </div>

                            
                            <div class='MainDIv MainGeraphic'>
                              <div class='Left'><img class='SimpleSvg' src={HomeMainGeraphicSvg} /></div>
                              <div class='Center'>
                                <h1>Graphic Design </h1>
                                <p>A unique graphic design of your business and company is a valid and proprietary name. In all areas, such as logo design, catalog design, brochure, digital banner for websites and mobile software, and many other places, it can surprise customers and audiences.
                                    By implementing professional tips, we upload and update your app with special techniques and methodologies above the top of the ranking tables , such as Google Stores and App Store, and you can use the features of an  incredible app and get the most out of  it . 
                                    Either your Android or ios mobile operation system.</p>
                                <h>Learn more</h>
                              </div>
                              <div class='Right'><img src={HomeMainGeraphic}/></div>
                            </div>
                            
                            <div class='MainDIv MainAdds'>
                              <div class='Left'><img src={HomeMainPromo} /></div>
                              <div class='Center MainAddsParag'>
                                <h1>Promotions  , Branding and Digital marketing </h1>
                                <p>Our advertising and marketing team, according to your taste, introduces you products and services through high-tech and technical promotions. Your brand will quickly be seen by your contacts and will get your desired result in a very short time. With a team of the best and most skilled marketers and designers who technically and professionally deal with the marketing of digital marketing, social networking ads, Google ads, brochure design, catalogs, logos, unique online digital banners and also 24-hour s in a day We will be with you and solve all you advertising needs.</p>
                                <h>Learn more</h>
                              </div>
                              <div class='Right'><img class='SimpleSvg' src={HomeMainPromoSvg}/></div>
                            </div>
                         </div>
                         

                        <EnFooter />

                        </div>
          );
        }
      }

      export default EnHome;






















































































     




                        
                       














        

                 



