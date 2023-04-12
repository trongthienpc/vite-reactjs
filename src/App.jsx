import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { publicRoutes, authProtectedRoutes } from "./routes/index";
import NonAuthLayout from "./components/NonAuthLayout";
import VerticalLayout from "./components/VerticalLayout/Index";
// Import scss
import "./assets/scss/theme.scss";
import Login from "./pages/Authentication/Login";

// check authorized
function RequireAuth({ children }) {
  // console.log("let me first");
  let login = useSelector((state) => state.auth?.login);
  const location = useLocation();
  const from = location.pathname || "/test";
  // console.log(["login", login]);
  if (!login?.user?.accessToken)
    return <Navigate to="/login" state={{ from: from }} />;
  return children;
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <NonAuthLayout>
                <route.component />
              </NonAuthLayout>
            }
            key={idx}
          />
        ))}

        <Route
          path="/"
          element={
            <RequireAuth>
              <VerticalLayout />
            </RequireAuth>
          }
        >
          {authProtectedRoutes.map((route, idx) => (
            <Route path={route.path} element={<route.element />} key={idx} />
          ))}
        </Route> */}
        <Route
          path="/"
          element={<VerticalLayout isPreloader={false} />}
        ></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
