/* eslint-disable no-unused-vars */

import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import useUser from "./hooks/useUser";

//
function App() {
  const { user } = useUser();
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={user ? <Dashboard /> : <Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
