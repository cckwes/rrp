import { useSelector } from "react-redux";
import { DrawCardState } from "../state/reducers/drawCard.reducer";
import { State } from "../state/store";
import { DrawCardType } from "../state/actions/drawcard.action";

export function RewardDrawResult() {
  const drawCardState = useSelector(
    (state: State) => state.drawCard as DrawCardState,
  );

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
    <div className="w-full h-full px-4 py-4 md:py-0 flex flex-col items-center justify-center">
      <img
        src="/prize.png"
        alt="draw ticket prize"
        className="w-1/2 md:w-full"
      />
      <h2 className="text-xl font-bold mt-4 md:mt-11">Congratulations! 🎉</h2>
      <p className="mt-4">
        You’ve just won the <strong>{drawCardState.drawResult.prize}</strong>{" "}
        from the <strong>{getTicketName()} Raffle!</strong>
      </p>

      <button className="bg-primary px-10 py-4 mt-7 text-white">
        Redeem Prize
      </button>
    </div>
  );
}
