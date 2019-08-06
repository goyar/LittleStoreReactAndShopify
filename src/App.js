import React from 'react';
import ProductList from './ProductCard/ProductList';
import OrderDetails from './OrderDetails/OrderDetails';
import NotFound from './NotFound';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component{

  render() {
    return (
      <Switch>
        <Route exact path='/' render ={function(){return <ProductList apiUrl={process.env.REACT_APP_API_URL}/>}}></Route>
        {<Route exact path='/order' render ={function(props){return <OrderDetails {...props}/>}}></Route>}
        <Route render ={function(){return <NotFound/>}}></Route>
      </Switch>
    );
  }
}

export default App;
