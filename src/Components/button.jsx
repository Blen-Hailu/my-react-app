function Button(){ 
  function handleButtonClick (event){
    console.log("Button was clicked");
    alert("Thank you!");
  }
   return (
    <>      
    <button className="main-button" onClick ={handleButtonClick}> Subscribe to our mailing list </button>
    </>
   )
}
export default Button;
