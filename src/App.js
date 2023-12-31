import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import List from './Pages/List/List'
import Single from './Pages/Single/Single'
import New from './pages/new/New'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarkModeContext } from './Context/darkModeContext'
import { productInputs, userInputs } from "./formSource";
import "./Style/darkMode.scss";
import {useContext} from "react";
import { DarkModeContext } from './Context/darkModeContext'
function App() {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
   <BrowserRouter>
   <Routes>
    <Route path= "/">
    <Route index element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path= "users">
    <Route index element={<List/>}/>
    <Route path="userId" element={<Single/>}/>
    <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
    </Route>
    <Route path= "products">
    <Route index element={<List/>}/>
    <Route path="productId" element={<Single/>}/>
    <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
    </Route>
    </Route>
   </Routes>
   
   </BrowserRouter>
   </div>
  );
}

export default App;
