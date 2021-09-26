import { TicketsCard } from "../components/TicketsCard";
import { DrawTicketActivitySection } from "../components/DrawTicketActivitySection";
import { DrawTicketInformationSection } from "../components/DrawTicketInformationSection";

export function DesktopDrawingLayout() {
  return (
    <section className="flex flex-row space-x-10 justify-center mt-10">
      <TicketsCard />

      <div className="bg-white rounded-xl flex flex-col items-center justify-between">
        <section className="md:flex-grow">
          <DrawTicketActivitySection />
        </section>

        <hr className="w-full border-1 border-horizontalRuler" />
        <DrawTicketInformationSection />
      </div>
    </section>
  );
}
