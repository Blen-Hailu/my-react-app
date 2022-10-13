import logo from './Components/logo.jpg';
import React,{useState} from 'react';
import backgroundImage from './Components/backgroundImage.jpg';
import './App.css';
import Menubar from './Components/menubar';
import Button from './Components/button';
import Create from './Components/create';
import {Buttonfortwo} from './Components/Buttonfortwo'
import './App.css';

function App() {
  return (
   <>


      <div>
          <Menubar/>
        </div>

        <div className = "Pagelayout">


            <div className ="Geninfo">
              <p>
                  KOTIBET is a platform where you can find all home care services in one place to make your home living experience easy, enjoyable and stress free by providing services ranging from customized shopping, food prepping, cooking, appliance fixing, electricity works, plumbing, landscaping, home cleaning etc.<br></br>
                  KOTIBET has the ambitious goal of launching the MVP/MSP by the end of 2022 and acquisition of registered users and professional freelancers on the platform.<br></br>
                  A trusted Partner For Your Ideal Home Servces.<br></br>
                </p>
            </div>


            <div className ="Buttontwo">

              <div>
                <Buttonfortwo/>
              </div>

              <div className ="Submitbutton">
                <Button/>
              </div>

            </div>


        </div>    


      
        
        <Create/>
        
     </>


      )

  
};    


export default App;
