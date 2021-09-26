import { TicketsCard } from "./TicketsCard";
import { DropTicketSection } from "./DropTicketSection";
import { DrawTicket } from "./DrawTicket";

export function DesktopDrawingLayout() {
  return (
    <section className="flex flex-row space-x-10 justify-center mt-10">
      <TicketsCard />

      <div className="bg-white rounded-xl flex flex-col items-center justify-between">
        <section className="md:flex-grow">
          <DropTicketSection />
        </section>

        <hr className="w-full border-1 border-horizontalRuler" />
        <DrawTicket />
      </div>
    </section>
  );
}
