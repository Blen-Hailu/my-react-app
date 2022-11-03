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


      <div className="pagelayout">
            <div className ="geninfo">

                    <div className ="container">
                    <h2> A trusted Partner For Your Ideal Home Servces.</h2>
                    
                
                        <div className="text">
        
                            <div className="inner">
                                Welcome to KOTIBET! <br></br> 
                                Kotibet is a platform where you can find all home care services in one place to make your home living experience easy, enjoyable and stress free.
                                Our services include:
            
                            </div>
                        </div>
                
                    </div>

                    <Subscribe/> 
            </div>

                < div className = "halfpage">
                            
                        <p className ="tocontact"> Contact us to get the best offers! </p>
                    <div className='form'>
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
