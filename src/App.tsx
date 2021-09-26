import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { isMobile } from "react-device-detect";

import { Header } from "./components/Header";
import { drawCardActionCreators } from "./state/action-creators/drawCard.action-creator";
import { MobileDrawingLayout } from "./layout/MobileDrawingLayout";
import { DesktopDrawingLayout } from "./layout/DesktopDrawingLayout";
import { Footer } from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const { getCards } = bindActionCreators(drawCardActionCreators, dispatch);
  useEffect(() => {
    getCards();
  });

  return (
    <div className="flex flex-col w-screen">
      <Header />

      {isMobile ? <MobileDrawingLayout /> : <DesktopDrawingLayout />}

      <Footer />
    </div>
  );
}

export default App;
