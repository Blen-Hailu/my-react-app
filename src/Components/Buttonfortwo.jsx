import {useState } from "react";
import Freelancer from "./freelancer";
import Customer from "./customer";

function Buttonfortwo(props) {
    const [isFreelancer, setIsFreelancer] = useState(false);
    function handleFreelancerClick(event) {
        setIsFreelancer (true);
        setIsCustomer(false);
    }
    const [isCustomer, setIsCustomer] = useState(false);
    function handleCustomerClick(event) {
        setIsCustomer(true);
        setIsFreelancer(false);
    }
    return (
        <div className="buttonone">
            <button className= "Customerbutton" onClick={handleFreelancerClick}>Freelancer</button>
            <button className= "Freelancerbutton" onClick={handleCustomerClick}>Customer</button>

            { isCustomer && <Customer/> }
            { isFreelancer && <Freelancer/> }


        </div>
    )
}
export {Buttonfortwo};