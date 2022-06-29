import React, { useEffect } from "react";
import Sidebar from "./components/sidebar.js";
import CardLayout from "./components/cardlayout";
import Header from "./components/header.js";
import InfoModal from "./components/infomodal.js";
import { Footer } from "./components/footer.js";
import SmallScreen from "./components/smallscreen.js";

import LoadBldgModal from "./components/loadbldgmodal";
import LoadConfirmDialog from "./components/loadconfirmdialog";
import UtilityRateModal from "./components/utilityratemodal";
import Resizer from "./components/resizer";

import "./App.css";
import "./css/sidebar.css";
import "./css/mainlayout.css";
import "./css/header.css";
import "./css/chart.css";
import "./css/printlayout.css";
import "./css/infomodal.css";
import "./css/loadmodal.css";
import "./css/typography.css";
import "./css/logos.css";
import "./css/footer.css";

const App = () => {
  return (
    <React.Fragment>
      <Resizer />
      <InfoModal />
      <LoadBldgModal />
      <LoadConfirmDialog />
      <UtilityRateModal />
      <SmallScreen />
      <div className="main-container">
        <Header />
        <Sidebar />
        <CardLayout />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
