import {useState} from "react";

export default function MailingForm() {
  const [fullName, setFullName] =useState('')

  const handleFullNameChange = event => {
    setFullName(event.target.value)
  };

  const [email, setEmail] = useState('')
  
  const handleEmailChange = event => {
    setEmail(event.target.value)
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    alert('Thank you for subscrbing to our newsletter!');

  };

return (
    <div>
        <form className ="mail-form" onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              onChange={handleFullNameChange}
              value={fullName}
            />
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleEmailChange}
              value={email}
            />
            </div>
          <button type="submit">
            Submit
          </button>
        </form>
    </div>
  )
}