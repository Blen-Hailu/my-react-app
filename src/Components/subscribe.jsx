import {useState} from "react";


export default function Subscribe(props) {
    const [isSubscribe, setIsSubscribe] = useState(false);
    function handleSubscribeClick(event) {
      setIsSubscribe (true);
      
      return (
        <div className="subscribebutton">
          <p ClassName="tosubscribe"> Subscribe to our mailing list here.</p>
            <button className= "Subscribebutton" onClick={handleSubscribeClick}>Subscribe</button>
            

            {isSubscribe && <Subscribe/> }

        </div>
      )
    };
};


  


