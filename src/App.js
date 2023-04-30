import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import data from './data.json'
import Main from "./components/Main/Main";
import Category from "./components/Category/Category";

function App() {
  const [state, setState] = useState([]);
  let currentItems = [...state];

  const [product, setProduct] = useState([]);
  
  function delToProduct (id) {
    setProduct([...product.filter(el => el.id !== id)]);
  }

  function addToProduct (item) {
    let isInArray = false;
    
    product.forEach(el => { 
      if(el.id === item.id) {
        isInArray = true;
      }
    })

    if(!isInArray) {
      setProduct([...product, item]);        
    }
  }


  useEffect(() => {
    setState(data);
  }, [])


  return (
    <div className="wrappper">
        <Header product = {product} onDel = {delToProduct}/>
        <Category />
        <Main data = {currentItems} onAdd = {addToProduct}/>
        <Footer />
    </div>
  );
}

export default App;
