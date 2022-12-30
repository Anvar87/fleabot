import { Routes, Route } from "react-router-dom";

import Categories from './components/categories';
import Products from './components/products/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Categories/> }/>
        <Route path='/phones' element={ <Products/> }/>
        <Route path='/headphones' element={ <Products/> }/>
        <Route path='/smartwatches' element={ <Products/> }/>
        <Route path='/photos' element={ <Products/> }/>
      </Routes>
    </div>
  );
}

export default App;
