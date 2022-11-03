import {useState} from 'react';
//import useLocalStorageState from 'use-local-storage-state';

function BasicForm(){

/* const [fullName, setFullName] =useLocalStorageState(
    'text',
    {defaultValue: ""}
    );
 */

  const [fullName, setFullName] =useState('')

  const handleFullNameChange = event => {
    setFullName(event.target.value)
  };

  const [email, setEmail] = useState('')
  
  const handleEmailChange = event => {
    setEmail(event.target.value)
  };

  const [role, setRole]= useState ('')

  const handleRoleChange =event => {
    setRole(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault();
    alert('Thank you!');

  };

  


  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              onChange={handleFullNameChange}
              value={fullName}
            />
            <label>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleEmailChange}
              value={email}
            />
            <label for="role"> Choose a role</label>
            <input
              type="text"
              name="role"
              placeholder="Choose from options"
              onChange={handleRoleChange}
              value={role}
              list= "myOptions" />
              <datalist id="myOptions">
                <option>Customer</option>
                <option>Freelancer</option>
              </datalist>
              
          </div>
          <button type="submit" className = "main-button">
            Submit
          </button>
        </form>
    </div>
  )
}
export default BasicForm;




/* function Forms (){

const { register, handleSubmit, errors} = useForm()

const onSubmit = (data) => {
  console.log(data)
}
return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input type = "text" placeholder = "Name" name= "name" ref={register}/>
    <input type = "text" placeholder = "Email" name= "email" ref={register({required: true})}/>
    {errors.email && <p> Email required</p>}
    <input type = "submit"/>

  </form>
)
} 
export default Forms; */


