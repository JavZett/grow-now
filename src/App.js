import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aplicaciones from './Components/Aplicaciones/Aplicaciones';
import Contacto from './Components/Contacto/Contacto';
import Inicio from './Components/Inicio/Inicio';
import Servicios from './Components/Servicios/Servicios';
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
          <Route exact path="/aplicaciones/:nombre" component={Aplicaciones} />
          <Route exact path="/servicios/:nombre" component={Servicios} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
