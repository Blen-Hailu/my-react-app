export default function Menubar (){
  return (
    <nav className ="nav">
      <a href="/" className="home-title">Kotibet Home Services</a>
      <ul>
        <li>
          <a href="/home">Home</a>
         </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/whyUs">Why Us</a>
        </li>
        <li>
          <a href= "/contact">Contact</a>
        </li>
      </ul>

    </nav>
    
  );
};