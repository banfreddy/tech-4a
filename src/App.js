import './App.css';
import Home from './composants/Home';
import Navbar from './composants/NavBar';



function App() {
    return ( 
        <div className = "App" >
             <Navbar/>
        <div className="contenu">
             <Home/>
        </div>

        </div>
    );
}

export default App;