function Button(props){ 
  function handleClick (event){
    console.log("Button was clicked");
  }
   return (
    <>
<button onClick ={handleClick}> Subscribe to our mailing list </button>
</>
   )
};
export default Button;