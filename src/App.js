import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Products from './components/Products';
import EditProduct from './components/EditProduct';
import AddProduct from './components/AddProduct';
import Product from './components/Product';

function App() {
  return (
      <Router>
        <Header/> {/*Todo lo que este fuera de Switch se va a mostrar siempre */}
        <main className = "container mt-5">
          <Switch>
            {/* Lo que este dentro de Route, es lo que va a cargar especifico en cada pagina */}
              <Route exact path="/new-product" component = {AddProduct} />
              <Route exact path="/products" component = {Products} />
              <Route exact path="/products/:id" component = {Product} />
              <Route exact path="/products/edit/:id" component = {EditProduct} />
          </Switch>
        </main>
          
          <p className = "mt-4 p2 text-center">All Rights Reserved joelsantz</p>
      </Router>
  );
}

export default App;
