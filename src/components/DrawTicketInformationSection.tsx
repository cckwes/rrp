import { useDispatch, useSelector } from "react-redux";
import { State } from "../state/store";
import { DrawCardState } from "../state/reducers/drawCard.reducer";
import { bindActionCreators } from "redux";
import { drawCardActionCreators } from "../state/action-creators/drawCard.action-creator";
import { DrawCardType } from "../state/actions/drawcard.action";

export function DrawTicketInformationSection() {
  const drawCardState = useSelector(
    (state: State) => state.drawCard as DrawCardState,
  );
  const drawCardsCount = drawCardState.drawCards;
  const dispatch = useDispatch();
  const { selectDrawCard, startDrawing } = bindActionCreators(
    drawCardActionCreators,
    dispatch,
  );

  const getTotalDrawCars = () => {
    return Object.keys(drawCardsCount).reduce((previous, current) => {
      return previous + drawCardsCount[current as DrawCardType];
    }, 0);
  };

  const hasDrawCard = (type: DrawCardType) => {
    return drawCardState.drawCards[type] !== 0;
  };

  return (
    <div className="flex flex-col items-center px-10 py-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:px-4 md:py-10">
      <img src="/draw-ticket.png" alt="draw ticket" className="w-150px" />
      <div className="flex flex-col items-center md:items-start flex-grow">
        <h2 className="text-xl font-bold">Draw Tickets</h2>
        <p className="text-lg">{getTotalDrawCars()} Tickets found</p>

        <p className="mt-4 md:mt-2">
          Open your tickets and get a chance to win $1000 worth of high quality
          NFTs! Learn More
        </p>
      </div>

      <div className="flex flex-col mx-7 justify-center">
        <select
          name="ticket"
          id="ticket"
          value={drawCardState.selectedDrawCard ?? ""}
          onChange={(e) => {
            selectDrawCard(e.currentTarget.value as DrawCardType);
          }}
          className="p-4 border-1 border-searchBox"
        >
          <option value="" hidden selected>
            Select Draw Card
          </option>
          <option value="silver" hidden={!hasDrawCard(DrawCardType.SILVER)}>
            Silver Ticket ({drawCardsCount.silver})
          </option>
          <option value="gold" hidden={!hasDrawCard(DrawCardType.GOLD)}>
            Gold Ticket ({drawCardsCount.gold})
          </option>
          <option value="diamond" hidden={!hasDrawCard(DrawCardType.DIAMOND)}>
            Diamond Ticket ({drawCardsCount.diamond})
          </option>
        </select>

        <button
          className="bg-primary text-white py-2 disabled:opacity-50"
          disabled={!drawCardState.selectedDrawCard}
          onClick={() => {
            startDrawing();
          }}
        >
          Draw Ticket
        </button>
      </div>
    </div>
  );
}
