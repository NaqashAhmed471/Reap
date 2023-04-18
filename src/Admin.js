import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Queries from "./components/Queries/Queries";
import Properties from "./components/Properties/Properties";
import Tasks from "./components/Tasks/Tasks";
import LteNavbar from "./components/Navbar/LteNavbar";
import SidebarLte from "./components/Sidebar/LteSidebar";
import PropertyTable from "./pages/PropertyTable/PropertyTable";
import Certificate from "./pages/Certificates/Certificate";

const Admin = () => {
  const switchRoutes = () => {
    return (
      <Routes>
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/queries" element={<Queries />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/properties" element={<PropertyTable />}></Route>
        <Route path="/propertiesform" element={<Properties />}></Route>
        <Route path="/certificates" element={<Certificate />}></Route>
      </Routes>
    );
  };
  return (
    <>
      <LteNavbar />
      <SidebarLte />
      <div className="content-wrapper">{switchRoutes()}</div>
    </>
  );
};

export default Admin;
