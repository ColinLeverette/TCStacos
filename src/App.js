import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Tacos from './components/Tacos';
import Footer from './components/Footer';
import Quesadillas from './components/Quesadillas';
import Papas from './components/Papas';
import Otras from './components/Otras';
import Hamburguesas from './components/Hamburguesas';
import Frijoles from './components/Frijoles';
import Events from './components/Events';
import Contact from './components/Contact';
import Bebidas from './components/Bebidas';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Harina from './components/Harina';
import Maiz from './components/Maiz';
import 'bootstrap/dist/css/bootstrap.css';
import Ioadd from 'react-icons/io'

function App() {
  return (
    <BrowserRouter> 
    <Header/>
    <Switch> 
      <Route exact path= '/' component={Home}></Route>
      <Route exact path= '/tacos' component={Tacos}></Route>
      <Route exact path= '/footer' component={Footer}></Route>
      <Route exact path= '/quesadillas' component={Quesadillas}></Route>
      <Route exact path= '/papas' component={Papas}></Route>
      <Route exact path= '/otras' component={Otras}></Route>
      <Route exact path= '/home' component={Home}></Route>
      <Route exact path= '/hamburguesas' component={Hamburguesas}></Route>
      <Route exact path= '/frijoles' component={Frijoles}></Route>
      <Route exact path= '/events' component={Events}></Route>
      <Route exact path= '/contact' component={Contact}></Route>
      <Route exact path= '/bebidas' component={Bebidas}></Route>
      <Route exact path= '/aboutUs' component={AboutUs}></Route>
      <Route exact path= '/menu' component={Menu}></Route>
      <Route exact path= '/harina' component={Harina}></Route>
      <Route exact path= '/maiz' component={Maiz}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
