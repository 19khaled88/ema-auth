import { Routes, Route } from 'react-router'
import './App.css'
import { Header } from './components/Header/Header'
import { Profile } from './components/Profile/Profile'
import { Home } from './components/Home/Home'
import { Product } from './components/Product/Product'
import { Orders } from './components/Orders/Orders'
import { About } from './components/About/About'
import { Login } from './components/Login/Login'
import { SignUp } from './components/Signup/SignUp'
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/product" element={<Product></Product>} />
        <Route path="/orders" element={<Orders></Orders>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  )
}

export default App
