import {useState} from "react";


export default function Subscribe() {
    const [isSubscribe, setIsSubscribe] = useState(false);
   
      return (
        <div className="subscribebutton">
          <p ClassName="tosubscribe"> Subscribe to our mailing list here.</p>
            <button className= "Subscribebutton" onClick={handleSubscribeClick}>Subscribe</button>
            

            {isSubscribe && <Subscribe/> }
            {setIsSubscribe && <p>Back button would be here</p>}

        </div>
      )
    };


  


