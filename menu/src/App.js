import React,{ useState } from 'react'
import Categories from './Categories'
import Menu from './Menu';

import './App.css';
import items from './data';

const allCategories = ["all",...new Set(items.map((item)=>item.category))]

function App() {
  const [menuItems,setmenuItems] = useState(items)
  const [categories,setcategories] = useState(allCategories)


  return (
    <menu>
      <section className='main-section'>
        <div className='title'>
          <h2> Our Menu</h2>
          <div className='underline'></div>  
        </div>  
        <Categories categories={categories}></Categories>
        <Menu items = {menuItems}></Menu>
      </section>
    </menu>
  );
}

export default App;
