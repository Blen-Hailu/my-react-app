
function Customer(props) {

    return (
        <div className="Customer">
       

           <p>Please leave your name and email here and we will notify you when our product launches.<br></br>
           Thank you for registering.</p>  
           <input
          type= "text"
          className= "Customername"
           />
                     <input
          type= "text"
          className= "Customeremail"
           />
        </div>
    );
}
export default Customer;