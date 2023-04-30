import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import data from './data.json'
import Main from "./components/Main/Main";
import Category from "./components/Category/Category";

function App() {
  const [state, setState] = useState(data);
  const [category, setCategory] = useState('all');
  let currentItems = [...state];

  const [product, setProduct] = useState([]);
  
  function handleCategory (category) {
      setCategory(() => category);
  }

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

  let filter = state.filter(item => item.category === category);

  return (
    <div className="wrappper">
        <Header product = {product} onDel = {delToProduct}/>
        <Category getCategory = {handleCategory} />
        {category === 'all' ? 
          (<Main data={currentItems} onAdd={addToProduct} />)
          : 
          <div className="">
            (<Main data={filter} onAdd={addToProduct}/>)
          </div>
        }
        <Footer />
    </div>
  );
}

export default App;
