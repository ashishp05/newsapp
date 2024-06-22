
import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { NewsItems } from './components/NewsItems';

function App() {
  const [category , setCategory] = useState("general")
  return (
    <div className='bg-dark'>
         <Navbar setCategory={setCategory} q/>
         <NewsItems category={category}/>
    </div>
  );
}

export default App;
