function Freelancer (props){
  return (
      <div className="Freelancer">
         <p>Please leave your name and email here if you want us to contact your when our prpduct launches.<br></br>
         Thank you for registering.</p> 
         <input
          type= "text"
          className= "Freelanceremail"
           />
           <input
          type= "text"
          className= "Freelancername"
           />  
      </div>
  );
}
export default Freelancer;