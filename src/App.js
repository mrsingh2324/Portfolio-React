import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import Blogs from './components/Blogs';
import About from './components/About';
import Contacts from './components/Contacts';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Menu from './components/Menu';



function App() {
  return (
    <div className="App overflow-hidden w-[100%]">
    <Homepage />
    {/* <Menu/> */}
    </div>
  );
}

export default App;
