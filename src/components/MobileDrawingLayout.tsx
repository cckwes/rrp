import { DropTicketSection } from "./DropTicketSection";
import { TicketsCard } from "./TicketsCard";
import { DrawTicket } from "./DrawTicket";

export function MobileDrawingLayout() {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="bg-white w-full">
        <DropTicketSection />
        <TicketsCard />
      </div>

      <div className="bg-white w-full mt-4">
        <DrawTicket />
      </div>
    </div>
  );
}
