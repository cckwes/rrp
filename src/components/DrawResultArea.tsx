import { useSelector } from "react-redux";
import { State } from "../state/store";
import { DrawCardState } from "../state/reducers/drawCard.reducer";
import { RewardDrawResult } from "./RewardDrawResult";
import { NoRewardDrawResult } from "./NoRewardDrawResult";

export function DrawResultArea() {
  const drawCardState = useSelector(
    (state: State) => state.drawCard as DrawCardState,
  );

  if (drawCardState.drawResult.result === "reward") {
    return <RewardDrawResult />;
  } else {
    return <NoRewardDrawResult />;
  }
}
