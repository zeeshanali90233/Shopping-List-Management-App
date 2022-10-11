import './App.css';
import Header from './components/Header';
import {About} from './components/about';
import { ShoppingList } from './components/ShoppingList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
      <Header heading="Calculator" searchBar={true}/>
      <Routes>
          <Route path="about" element={<About/>} />
        <Route path="/" element={<ShoppingList/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
