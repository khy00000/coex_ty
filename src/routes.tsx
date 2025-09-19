import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Not from "./pages/Not";

interface FirestoreData {
  eventlistData: any[];
  mainnewsData: any[];
}

interface RoutesProps {
  data: FirestoreData;
}

const RoutesComponent: React.FC<RoutesProps> = ({ data }) => (
  <Routes>
    <Route index element={<Home data={data} />} />
    <Route path="*" element={<Not />} />
  </Routes>
);

export default RoutesComponent;