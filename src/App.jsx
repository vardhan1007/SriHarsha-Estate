import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/signin"
import About from "./pages/about"
import Profile from "./pages/Profile"
import Home from "./pages/home"
import Header from "./components/Header"
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile"element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}


