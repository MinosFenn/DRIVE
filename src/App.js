// import logo from './logo.svg';
import React from "react";
import './App.css';
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import SingleCar from "./pages/SingleCar";
import Events from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";
import Error from "./pages/Error";
import Services from "./pages/Services";
import ContactForm from "./pages/Contact";
import About from "./pages/About";
import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
<>
<Navbar />
<Switch>
<Route exact path="/" component={Home}/>
  <Route exact path="/Cars" component={Cars} />
  <Route exact path="/Cars/:slug" component={SingleCar} />
  {/* <Route exact path="/Events" component={Events} />
  <Route exact path="/Events/:slug" component={SingleEvent} /> */}
  <Route exact path="/About" component={About} />
  <Route exact path="/Services" component={Services} />
  <Route exact path="/Contact" component={ContactForm} />
  <Route component={Error} />
  </Switch>
  <Footer />
</>
  );
}

export default App;
