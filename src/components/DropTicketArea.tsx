import { useSelector } from "react-redux";
import { DrawCardState } from "../state/reducers/drawCard.reducer";
import { State } from "../state/store";

export function DropTicketArea() {
  const selectedDrawCard = useSelector(
    (state: State) => (state.drawCard as DrawCardState).selectedDrawCard,
  );

  const drawCardImage = {
    silver: "/mintable-silver-card-nft.png",
    gold: "/mintable-gold-card-nft.png",
    diamond: "/mintable-diamond-card-nft.png",
  };

  return (
    <div className="w-full flex flex-col items-center">
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
    </div>
  );
}
