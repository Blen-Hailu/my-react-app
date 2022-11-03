import React from 'react';
//import backgroundImage from './Components/backgroundImage.jpg';
import './App.css';
import Menubar from './Components/menubar';
import Subscribe from './Components/subscribe';
import BasicForm from './Components/forms';
import Footer from './Components/footer';
import './App.css';

function App() {
return (
   <>

        <div>
            <Menubar/>
        </div>

<<<<<<< HEAD
        < div className="Pagelayout">

            <div className ="Geninfo">
                <p>
                Welcome to KOTIBET! <br></br> 
                Kotibet is a platform where you can find all home care services in one place to make your home living experience easy, enjoyable and stress free by providing services ranging from customized shopping, food prepping, cooking, appliance fixing, electricity works, plumbing, landscaping, home cleaning etc.<br></br>
                KOTIBET has the ambitious goal of launching the MVP/MSP by the end of 2022 and acquisition of registered users and professional freelancers on the platform.<br></br>
                A trusted Partner For Your Ideal Home Servces.<br></br>
=======
      <div>
          <Menubar/>
      </div>

      < div className="Pagelayout">
        
            <div className ="Geninfo">
              <p>
                  Welcome to KOTIBET! <br></br> 
                  Kotibet is a platform where you can find all home care services in one place to make your home living experience easy, enjoyable and stress free by providing services ranging from customized shopping, food prepping, cooking, appliance fixing, electricity works, plumbing, landscaping, home cleaning etc.<br></br>
                  A trusted Partner For Your Ideal Home Servces.<br></br>
>>>>>>> 556bda166cdde6aa9e5055a539d50c5ca4c4b79c
                </p>
            
                <Subscribe/> 
            </div>

            <div className = "Halfpage">
<<<<<<< HEAD

                <div className ="tocontact">
                    <p> Contact us to get the best offers! </p>
                </div>
=======
                        <div className ="tocontact">
                            <p> Contact us to get the best offers! </p>
                        </div>
>>>>>>> 556bda166cdde6aa9e5055a539d50c5ca4c4b79c

                <div className='Form'>
                <BasicForm/>
                </div>
            </div>
<<<<<<< HEAD
        </div>
=======

        <div>
            <Footer/>
        </div>          


        </div>    


      
>>>>>>> 556bda166cdde6aa9e5055a539d50c5ca4c4b79c
        
        <div>
        <Footer/>
        </div>

        
    </>
)


}


export default App;
