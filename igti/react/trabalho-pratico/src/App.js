import logo from './logo.svg';
import './App.css';
import Twitter from './Twitter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Escreva um Twitt
        </p>
    
      </header>
      <section>
        <Twitter/>
      </section>
    </div>
  );
}

export default App;
