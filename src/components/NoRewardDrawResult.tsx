import { useDispatch, useSelector } from "react-redux";
import { DrawCardState } from "../state/reducers/drawCard.reducer";
import { State } from "../state/store";
import { DrawCardType } from "../state/actions/drawcard.action";
import { bindActionCreators } from "redux";
import { drawCardActionCreators } from "../state/action-creators/drawCard.action-creator";

export function NoRewardDrawResult() {
  const drawCardState = useSelector(
    (state: State) => state.drawCard as DrawCardState,
  );
  const dispatch = useDispatch();
  const { resetDrawing } = bindActionCreators(drawCardActionCreators, dispatch);

  const getTicketName = () => {
    switch (drawCardState.drawResult.drawCardType) {
      case DrawCardType.SILVER:
        return "Silver";

      case DrawCardType.GOLD:
        return "Gold";

      case DrawCardType.DIAMOND:
        return "Diamond";

      default:
        return "";
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <img src="/sad-square.png" alt="no reward draw result" />
      <h2 className="text-xl font-bold mt-11">Awww..Bad Luck 😓</h2>
      <p className="mt-4">
        Lady luck is not in your favor for this{" "}
        <strong>{getTicketName()} Raffle!</strong>
      </p>

      <button
        className="bg-primary px-10 py-4 mt-7 text-white"
        onClick={() => resetDrawing()}
      >
        Try Again
      </button>
    </div>
  );
}
