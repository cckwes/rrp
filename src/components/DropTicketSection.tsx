import { DrawTicket } from "./DrawTicket";
import { useSelector } from "react-redux";
import { State } from "../state/store";
import { DrawCardState } from "../state/reducers/drawCard.reducer";

export function DropTicketSection() {
  const selectedDrawCard = useSelector(
    (state: State) => (state.drawCard as DrawCardState).selectedDrawCard,
  );

  const drawCardImage = {
    silver: "/mintable-silver-card-nft.png",
    gold: "/mintable-gold-card-nft.png",
    diamond: "/mintable-diamond-card-nft.png",
  };

  return (
    <div className="bg-white rounded-xl flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center py-11">
        <h1 className="text-3xl font-bold">Collectors Event</h1>
        <h3 className="mt-4">Participate and win high quality currated NFTs</h3>
      </div>

      <div className="px-20">
        <div className="w-700px h-450px border-2 border-searchBox border-dashed flex flex-col items-center justify-center">
          <img
            src={
              selectedDrawCard
                ? drawCardImage[selectedDrawCard]
                : "/dropping-card.png"
            }
            alt="drawing card"
            className="w-150px"
          />
          <p className="mt-5">
            Drag a ticket or use the button below to draw your tickets
          </p>
        </div>
      </div>

      <hr className="border-1 border-horizontalRuler" />

      <section>
        <DrawTicket />
      </section>
    </div>
  );
}
