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

        < div className="Pagelayout">

            <div className ="Geninfo">
                <p>
                Welcome to KOTIBET! <br></br> 
                Kotibet is a platform where you can find all home care services in one place to make your home living experience easy, enjoyable and stress free by providing services ranging from customized shopping, food prepping, cooking, appliance fixing, electricity works, plumbing, landscaping, home cleaning etc.<br></br>
                KOTIBET has the ambitious goal of launching the MVP/MSP by the end of 2022 and acquisition of registered users and professional freelancers on the platform.<br></br>
                A trusted Partner For Your Ideal Home Servces.<br></br>
                </p>
            
                <Subscribe/> 
            </div>

            <div className = "Halfpage">

                <div className ="tocontact">
                    <p> Contact us to get the best offers! </p>
                </div>

                <div className='Form'>
                <BasicForm/>
                </div>
            </div>
        </div>
        
        <div>
        <Footer/>
        </div>

        
    </>
)


}


export default App;
