import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { TicketsCard } from "./components/TicketsCard";
import { DropTicketSection } from "./components/DropTicketSection";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { drawCardActionCreators } from "./state/action-creators/drawCard.action-creator";

function App() {
  const dispatch = useDispatch();
  const { getCards } = bindActionCreators(drawCardActionCreators, dispatch);
  useEffect(() => {
    getCards();
  });

  return (
    <div className="flex flex-col w-screen">
      <Header />

      <section className="flex flex-row space-x-10 justify-center mt-10">
        <TicketsCard />
        <DropTicketSection />
      </section>
    </div>
  );
}

export default App;
