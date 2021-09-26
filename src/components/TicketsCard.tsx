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

  const countIndicatorClassName =
    "bg-primary block rounded-full h-8 w-8 md:h-10 md:w-10 absolute top-0 right-0 -mr-2 -mt-2 md:-mr-3 md:-mt-3 text-white align-middle text-center leading-8 md:leading-10 md:text-2xl";

  return (
    <div className="bg-white rounded-xl flex flex-col md:flex-col-reverse">
      <div className="flex flex-row px-2 py-8 space-x-4 md:flex-col md:space-x-0 md:space-y-4 md:items-center">
        <div className="relative">
          <img
            src="/mintable-silver-card-nft.png"
            alt="silver card NFT"
            className={
              "md:w-150px" + semiTransparentWhenZeroCount(DrawCardType.SILVER)
            }
          />
          <div className={countIndicatorClassName}>{drawCardsCount.silver}</div>
        </div>

        <div className="relative">
          <img
            src="/mintable-gold-card-nft.png"
            alt="silver card NFT"
            className={
              "md:w-150px" + semiTransparentWhenZeroCount(DrawCardType.GOLD)
            }
          />
          <div className={countIndicatorClassName}>{drawCardsCount.gold}</div>
        </div>

        <div className="relative">
          <img
            src="/mintable-diamond-card-nft.png"
            alt="silver card NFT"
            className={
              "md:w-150px" + semiTransparentWhenZeroCount(DrawCardType.DIAMOND)
            }
          />
          <div className={countIndicatorClassName}>
            {drawCardsCount.diamond}
          </div>
        </div>
      </div>

      <hr className="bg-horizontalRuler w-full h-1" />

      <BuyTickets />
    </div>
  );
}
