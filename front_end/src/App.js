import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {button,Jumbotron} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
