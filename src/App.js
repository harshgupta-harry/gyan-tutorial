import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRoutes from './routes/authRoutes';
import HomeRoutes from "./routes/homeRoutes";
import { useSelector } from "react-redux";

function App() {
const login = useSelector(state => state?.authReducer?.login)
  // here we will take out login from store

  useEffect(()=>{
    // const login = localStorage.getItem('login');
    //with the help of disptch, we will put it in store
  })
  return (
    

    <BrowserRouter>
     {!login ? <AuthRoutes /> : <HomeRoutes />}
    </BrowserRouter>
  );
}

export default App;
