import React, { Component } from 'react';



import NavMenu from '../../Components/NavMenu/NavMenu.js'
import Footer from '../../Components/Footer/Footer.js'

//cssssss

import '../../../Persian/Pages/Home/_Home.css';
import '../../../Persian/Pages/Home/_HomeHeader.css'
import '../../../Persian/Pages/Home/_TopMain.css' 
import '../../../Persian/Pages/Home/_HomeMain.css'




import HeaderSVG from './../../../Assets/HomePage/HeaderSVG.svg'
import ApllikaLogo from './../../../Assets/HomePage/ApllikaLogo.png'
import Connections from './../../../Assets/HomePage/Connections.svg'


class Home extends Component {
  
  render() {
    return (



        <div class='wrapper'>
                        <NavMenu />

                        <div className='HomeHeader'> 
                        <div class='SectHeader_right'>
                          <div class='parag'>
                            <span class='hl'><img src={ApllikaLogo}/><h>گروه اپلیکا</h></span>
                            <h1> کسب و کار خود را ارتقا ببخشید </h1>
                            <span><p>امروزه یکی از مهمترین ارکان فروش و بازاریابی , تبلیغات اینترنتی  و آنلاین هست 
ما به مشتریامون کمک میکنیم که محصولات و خدمات  خودشون رو سریع تر  ,  حرفه ای تر و بیشتر به افراد و بازار هدف معرفی کنند . تیم تخصصی طراحی وب سایت  و اپلیکیشن ما شما را در راستای رسیدن به اهداف بزرگ حمایت میکند       </p></span>
                            <div class='btn'>وبلاگ</div>
                            </div>
                        </div>
                        
                        <div class='SectHeader_left'>
                          <img src={HeaderSVG}/>
                        </div>
                    </div> 



                    <div class='topMain'>
                      <div class='TopParag'>
                        <h1>  45+ میلیون کاربر فعال  اینترنت در سراسر کشور </h1>
                        <p>اطلاعات   ,  فایل ها   , تصاویر و محتوا ی شما رو بهترین شکل ممکن انتشار میدیم       </p>
                        <p>با شما به صورت مداوم در ارتباط هستیم ,  حتی بعد از تکمیل پروژه شما </p>
                        <p>کسب و کار شما رو در دنیای وب  ,  معتبر و حرفه ای میکنیم </p>
                        <span>وبلاگ</span>
                      </div>
                      <div class='topMainSVG'>
                        <img src={Connections}/>
                      </div>
                    </div>
                    


                        <div clas='HomeMain'>
                            <div class='MainWeb'>
                              <div class='Left'><img src='' /></div>
                              <div class='Center'><img src='' /></div>
                              <div class='Right'>
                                <h1>h1</h1>
                                <p>p1</p>
                                <p>p2</p>
                              </div>
                            </div>

                            <div class='MainApp'>
                              <div class='Left'><img src='' /></div>
                              <div class='Center'><img src='' /></div>
                              <div class='Right'>
                                <h1>h1</h1>
                                <p>p1</p>
                                <p>p2</p>
                              </div>
                            </div>

                            <div class='MainSoft'>
                              <div class='Left'><img src='' /></div>
                              <div class='Center'><img src='' /></div>
                              <div class='Right'>
                              <h1>h1</h1>
                                <p>p1</p>
                                <p>p2</p>
                              </div>
                            </div>

                            <div class='MainAdds'>
                              <div class='Left'><img src='' /></div>
                              <div class='Center'><img src='' /></div>
                              <div class='Right'>
                                <h1>h1</h1>
                                <p>p1</p>
                                <p>p2</p>
                              </div>
                            </div>
                         </div>
                         

                        <Footer />
              </div>
          );
        }
      }

      export default Home;











        

                 



