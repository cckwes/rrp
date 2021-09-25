import { BuyTickets } from "./BuyTickets";
import { useSelector } from "react-redux";
import { State } from "../state/store";
import { DrawCardState } from "../state/reducers/drawCard.reducer";

export function TicketsCard() {
  const drawCardsCount = useSelector(
    (state: State) => (state.drawCard as DrawCardState).drawCards,
  );

  return (
    <div className="bg-white rounded-xl">
      <BuyTickets />
      <hr className="bg-horizontalRuler w-full h-1" />

      <div className="flex flex-col space-y-4 items-center py-8">
        <div className="relative">
          <div className="bg-primary block rounded-full h-10 w-10 absolute top-0 right-0 text-white align-middle text-center">
            {drawCardsCount.silver}
          </div>
          <img
            src="/mintable-silver-card-nft.png"
            alt="silver card NFT"
            className="w-150px"
            draggable={true}
          />
        </div>

        <div className="relative">
          <div className="bg-primary block rounded-full h-10 w-10 absolute top-0 right-0 text-white align-middle text-center">
            {drawCardsCount.gold}
          </div>
          <img
            src="/mintable-gold-card-nft.png"
            alt="silver card NFT"
            className="w-150px"
            draggable={true}
          />
        </div>

        <div className="relative">
          <div className="bg-primary block rounded-full h-10 w-10 absolute top-0 right-0 text-white align-middle text-center">
            {drawCardsCount.diamond}
          </div>
          <img
            src="/mintable-diamond-card-nft.png"
            alt="silver card NFT"
            className="w-150px"
            draggable={true}
          />
        </div>
      </div>
    </div>
  );
}
