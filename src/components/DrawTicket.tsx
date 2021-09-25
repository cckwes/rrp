import { useDispatch, useSelector } from "react-redux";
import { State } from "../state/store";
import { DrawCardState } from "../state/reducers/drawCard.reducer";
import { bindActionCreators } from "redux";
import { drawCardActionCreators } from "../state/action-creators/drawCard.action-creator";
import { useState } from "react";
import { DrawCardType } from "../state/actions/drawcard.action";

export function DrawTicket() {
  const [selectedCard, setSelectedCard] = useState("silver");
  const drawCardsCount = useSelector(
    (state: State) => (state.drawCard as DrawCardState).drawCards,
  );
  const dispatch = useDispatch();
  const { unselectDrawCard, selectDrawCard } = bindActionCreators(
    drawCardActionCreators,
    dispatch,
  );

  return (
    <div className="flex flex-row py-10">
      <img src="/draw-ticket.png" alt="draw ticket" className="w-150px" />
      <div className="flex flex-col flex-grow">
        <h2 className="text-xl font-bold">Draw Tickets</h2>
        <p className="text-lg">10 Tickets found</p>

        <p className="mt-">
          Open your tickets and get a chance to win $1000 worth of high quality
          NFTs! Learn More
        </p>
      </div>

      <div className="flex flex-col mx-7 justify-center">
        <select
          name="ticket"
          id="ticket"
          value={selectedCard}
          onChange={(e) => setSelectedCard(e.currentTarget.value)}
          className="p-4 border-1 border-searchBox"
        >
          <option value="silver">
            Silver Ticket ({drawCardsCount.silver})
          </option>
          <option value="gold">Gold Ticket ({drawCardsCount.gold})</option>
          <option value="diamond">
            Diamond Ticket ({drawCardsCount.diamond})
          </option>
        </select>

        <button
          className="bg-primary text-white py-2"
          onClick={() => {
            unselectDrawCard();
            selectDrawCard(selectedCard as DrawCardType);
          }}
        >
          Draw Ticket
        </button>
      </div>
    </div>
  );
}
