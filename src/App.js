import Login from './pages/Login/Login'
import Home from './pages/home/Home'
import List from './Pages/List/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path= "/"/>
    <Route index element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path= "users"/>
    <Route index element={<List/>}/>
    <Route path="userId" element={<Single/>}/>
    <Route path="new" element={<New/>}/>
    <Route path= "products"/>
    <Route index element={<List/>}/>
    <Route path="productId" element={<Single/>}/>
    <Route path="new" element={<New/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
