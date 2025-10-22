import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";

import Header from "./section/Header";
import Footer from "./section/Footer";
import Cursor from "./components/Cursor";

import usefirestore from "./services/usefirestore";

const COLLECTION_NAMES = ["eventlistData", "mainnewsData"] as const;

interface FirestoreData {
  eventlistData: any[];
  mainnewsData: any[];
}

const App: React.FC = () => {
  const { data, loading, error } = usefirestore<FirestoreData>(COLLECTION_NAMES);

  if (loading || error) {
    return <div></div>;
  }

  return (
    <Router>
      <Header />
      <RoutesComponent data={data} />
      <Footer />
      <Cursor />
    </Router>
  );
};

export default App;