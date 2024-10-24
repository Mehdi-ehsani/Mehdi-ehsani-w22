import { BrowserRouter , Routes , Route } from "react-router-dom"
import ProductsPage from "../pages/ProductsPage"
import LoginPage from "../pages/LoginPage"
import RegisterationPage from "../pages/RegistrationPage"
import NotFound from "../pages/NotFound"

const Router = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<ProductsPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegisterationPage/>}/>
        <Route path="*" element={<NotFound/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default Router