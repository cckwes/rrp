import { DrawTicketActivitySection } from "../components/DrawTicketActivitySection";
import { TicketsCard } from "../components/TicketsCard";
import { DrawTicketInformationSection } from "../components/DrawTicketInformationSection";

export function MobileDrawingLayout() {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="bg-white w-full">
        <DrawTicketActivitySection />
        <TicketsCard />
      </div>

      <div className="bg-white w-full mt-4">
        <DrawTicketInformationSection />
      </div>
    </div>
  );
}
