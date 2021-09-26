import { DrawTicket } from "./DrawTicket";
import { DropTicketArea } from "./DropTicketArea";
import { useSelector } from "react-redux";
import { State } from "../state/store";
import { DrawCardState } from "../state/reducers/drawCard.reducer";
import { DrawingTicketArea } from "./DrawingTicketArea";
import { DrawResultArea } from "./DrawResultArea";

export function DropTicketSection() {
  const drawingState = useSelector(
    (state: State) => (state.drawCard as DrawCardState).drawState,
  );

  return (
    <section className="w-full h-drawing-area md:h-full">
      {drawingState === "initialized" && <DropTicketArea />}
      {drawingState === "drawing" && <DrawingTicketArea />}
      {drawingState === "result-out" && <DrawResultArea />}
    </section>
  );
}
