import logo from './Components/logo.jpg';
import backgroundImage from './Components/background-Image.jpg';
import './App.css';
import Button from './Components/button';
function App() {
  return (
  <div style={{backgroundImage:`url(${background-Image})`}}>
    <div className ="App">
      <header className= "App-header">
        <img src={logo} className="logoKotibet" alt="logo"/>  
        <p>
          Welcome to Kotibet
        </p>
      </header>
      <backgroundImage/>
      <Button/>
    </div>
  </div>  
  );
}

export default App;
