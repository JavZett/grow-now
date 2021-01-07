import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contacto from './Components/Contacto/Contacto';
import Inicio from './Components/Inicio/Inicio';
import Footer from './Components/ui/Footer';
import Navbar from './Components/ui/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
