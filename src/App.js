import "./styles/app.scss"    
import "./styles/Home.scss"    
import "./styles/Cart.scss"    

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        <Toaster/>
      </Router>
      
    </div>
  );
}

export default App;
