import { BrowserRouter as Router } from 'react-router-dom';
import "./assets/css/App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routers } from './components/Routers';

function App() {
  return (

    <Router>
      <div className="App">
        {/* Aquí puedes colocar un navbar o links */}
        <Header />
       
        <Routers/> {/* EN ESTE COMPONETE MANEJO LAS RUTAS */}
      </div>
      <div className='clearfix'>
      </div>
        <Footer />
    </Router>
  );
}

export default App;
