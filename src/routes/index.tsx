import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LayOut from "../components/LayOut";
import Spinner from "../components/Spinner";
import PortfolioBackOffice from "../pages/backOffice/Portfolio";
import PortfolioAddItem from "../pages/backOffice/PortfolioAddItem";
import PortfolioDeleteItem from "../pages/backOffice/PortfolioDeleteItem";
import PortfolioEditItem from "../pages/backOffice/PortfolioEditItem";
import UserBackOffice from "../pages/backOffice/User";
import AddUser from "../pages/backOffice/Users/UserAddItem";
import DeleteUser from "../pages/backOffice/Users/UserDeleteItem";
import EditUser from "../pages/backOffice/Users/UserEditItem";
import PrivateRoutes from "../utils/PrivateRoutes";

const LayOutBackOffice = lazy(() => import("../components/LayOutBackOffice"));
// const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const StaticPortfolio = lazy(() => import("../pages/StaticPortfolio"));
const StaticPortfolioItem = lazy(() => import("../pages/StaticPortfolioItem"));
const PortfolioItem = lazy(() => import("../pages/PortfolioItem"));
const BackOfficeMain = lazy(() => import("../pages/backOffice/Main"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<LayOut />}>
            <Route path="/" element={<Login />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="/portafolio2" element={<StaticPortfolio />} />
            <Route path="/portafolioItem/:key" element={<PortfolioItem />} />
            <Route
              path="/portafolioItem2/:key"
              element={<StaticPortfolioItem />}
            />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route element={<LayOutBackOffice />}>
              <Route path="backoffice/user" element={<UserBackOffice />} />
              <Route
                path="backoffice/portfolio"
                element={<PortfolioBackOffice />}
              />
              <Route
                path="backoffice/portfolio-additem"
                element={<PortfolioAddItem />}
              />
              <Route
                path="backoffice/portfolio-delete-item"
                element={<PortfolioDeleteItem />}
              />
              <Route
                path="backoffice/portfolio-edit-item"
                element={<PortfolioEditItem />}
              />
              <Route
                path="backoffice/user/delete-user"
                element={<DeleteUser />}
              />
              <Route path="backoffice/user/add-user" element={<AddUser />} />
              <Route path="backoffice/user/edit-user" element={<EditUser />} />
              <Route path="backoffice/home" element={<BackOfficeMain />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
