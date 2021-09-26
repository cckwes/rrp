import { BuyTickets } from "./BuyTickets";
import { useSelector } from "react-redux";
import { State } from "../state/store";
import { DrawCardState } from "../state/reducers/drawCard.reducer";
import { DrawCardType } from "../state/actions/drawcard.action";

export function TicketsCard() {
  const drawCardsCount = useSelector(
    (state: State) => (state.drawCard as DrawCardState).drawCards,
  );

  const semiTransparentWhenZeroCount = (cardType: DrawCardType) => {
    return drawCardsCount[cardType] === 0 ? " opacity-25" : "";
  };

  return (
    <div className="bg-white rounded-xl">
      <BuyTickets />
      <hr className="bg-horizontalRuler w-full h-1" />

      <div className="flex flex-col space-y-4 items-center py-8">
        <div className="relative">
          <img
            src="/mintable-silver-card-nft.png"
            alt="silver card NFT"
            className={
              "w-150px" + semiTransparentWhenZeroCount(DrawCardType.SILVER)
            }
          />
          <div className="bg-primary block rounded-full h-10 w-10 absolute top-0 right-0 -mr-3 -mt-3 text-white align-middle text-center leading-10 text-2xl">
            {drawCardsCount.silver}
          </div>
        </div>

        <div className="relative">
          <img
            src="/mintable-gold-card-nft.png"
            alt="silver card NFT"
            className={
              "w-150px" + semiTransparentWhenZeroCount(DrawCardType.GOLD)
            }
          />
          <div className="bg-primary block rounded-full h-10 w-10 absolute top-0 right-0 -mr-3 -mt-3 text-white align-middle text-center leading-10 text-2xl">
            {drawCardsCount.gold}
          </div>
        </div>

        <div className="relative">
          <img
            src="/mintable-diamond-card-nft.png"
            alt="silver card NFT"
            className={
              "w-150px" + semiTransparentWhenZeroCount(DrawCardType.DIAMOND)
            }
          />
          <div className="bg-primary block rounded-full h-10 w-10 absolute top-0 right-0 -mr-3 -mt-3 text-white align-middle text-center leading-10 text-2xl">
            {drawCardsCount.diamond}
          </div>
        </div>
      </div>
    </div>
  );
}
