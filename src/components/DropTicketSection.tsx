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
    <div className="bg-white rounded-xl flex flex-col items-center justify-between">
      <section className="flex-grow w-full">
        {drawingState === "initialized" && <DropTicketArea />}
        {drawingState === "drawing" && <DrawingTicketArea />}
        {drawingState === "result-out" && <DrawResultArea />}
      </section>

      <hr className="border-1 border-horizontalRuler" />

      <section>
        <DrawTicket />
      </section>
    </div>
  );
}
