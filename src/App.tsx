import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { isMobile } from "react-device-detect";

import { Header } from "./components/Header";
import { drawCardActionCreators } from "./state/action-creators/drawCard.action-creator";
import { MobileDrawingLayout } from "./components/MobileDrawingLayout";
import { DesktopDrawingLayout } from "./components/DesktopDrawingLayout";

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
    </div>
  );
}

export default App;
