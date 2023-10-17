import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import LoginPage from "../pages/loginPage/LoginPage";
import App from "../App";
import PrivateRoutes from "../utils/PrivateRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<LoginPage />} />
        <Route path="" element={<PrivateRoutes />}>

        </Route>
      </Route>
    </>
  )
)