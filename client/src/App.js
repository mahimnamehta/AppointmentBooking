import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Features/Login/Login";
import Layout from "./Components/Layout";
import LinkPage from "./Components/LinkPage";
import Unauthorized from "./Components/Unauthorized";
import PersistLogin from "./Components/PersistLogin";
import Doctor from "./Components/Doctors";
import Admin from "./Components/Admin";
import Missing from "./Components/Missing";
import RequireAuth from "./Components/RequireAuth";
import Register from "./Features/Register/Register";
import Availability from "./Features/Availibility/Availability";

function App() {
  const ROLES = {
    Patient: 2001,
    Doctor: 1984,
    Admin: 5150,
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="/bookAnAppointment" element={<Availability />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="/" element={<Landing />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}></Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Doctor />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
