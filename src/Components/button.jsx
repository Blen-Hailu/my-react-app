function Button(){ 
  function handleClick (event){
    console.log("Button was clicked");
    alert("Button was clicked!");
  }
   return (
    <>      
    <button className="main-button" onClick ={handleClick}> Subscribe to our mailing list </button>
    </>
   )
}
export default Button;