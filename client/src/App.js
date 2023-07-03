import { createContext } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Header from "./Components/Home/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import SignInForm from "./Components/Login/LoginMain/SignInForm";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AppointMent from "./Components/Appointment/AppointMent/AppointMent";
import AllPatients from "./Components/Appointment/AllPatients/AllPatients";
import AddDoctor from "./Components/Dashboard/AddDoctor/AddDoctor";
import DoctorList from "./Components/Dashboard/DoctorList/DoctorList";
import AddReview from "./Components/Dashboard/My Review/AddReview";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

// import PageNotFound from './components/Shared/PageNotFound/PageNotFound.jsx';
// import PreLoad from './components/Shared/Preload/PreLoad';

// const Home = lazy(() => import('./components/Home/Home/Home'))

export const UserContext = createContext();

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <SignInForm /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/patients", element: <AllPatients /> },
  { path: "/addDoctor", element: <AddDoctor /> },
  { path: "/doctors", element: <DoctorList /> },
  { path: "/auth/review", element: <AddReview /> },
  {
    path: "/appointment",
    element: (
      <PrivateRoute>
        <AppointMent />
      </PrivateRoute>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    // <Suspense fallback={<PreLoad />}>
    // <Route exact path="*">
    // <PageNotFound />
  );
}
export default App;
