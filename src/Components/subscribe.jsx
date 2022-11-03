import {useState} from "react";
import MailingForm from "./click";


export default function Subscribe() {
    const [subscribe, setSubscribe] = useState(false);


    function handleSubscribeClick(event) {
      setSubscribe (!subscribe);
    }
    
      
    return (
      <div>
        <p className="tosubscribe"> Subscribe to our mailing list here.</p>
          <button className= "subscribebutton" onClick={handleSubscribeClick}>Subscribe</button>
            

        {subscribe && <MailingForm/> }

      </div>
    );
}
