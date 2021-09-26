import {
  DrawCardAction,
  DrawCardType,
  NoRewardDrawResult,
  RewardingDrawResult,
} from "../actions/drawcard.action";
import { Dispatch } from "redux";
import { DrawCardActionType } from "../action-types/drawCard.action-type";

const getCards = () => {
  // simulate get card result from server
  const cards: { [k in DrawCardType]: number } = {
    silver: 2,
    gold: 3,
    diamond: 4,
  };

  return (dispatch: Dispatch<DrawCardAction>) => {
    dispatch({
      type: DrawCardActionType.INITIALIZE,
      payload: cards,
    });
  };
};

const unselectDrawCard = () => {
  return (dispatch: Dispatch<DrawCardAction>) => {
    dispatch({ type: DrawCardActionType.UNSELECT });
  };
};

const selectDrawCard = (cardType: DrawCardType) => {
  return (dispatch: Dispatch<DrawCardAction>) => {
    dispatch({
      type: DrawCardActionType.SELECT,
      payload: {
        cardType,
      },
    });
  };
};

const startDrawing = () => {
  return async (dispatch: Dispatch<DrawCardAction>) => {
    dispatch({
      type: DrawCardActionType.START_DRAWING,
    });

    // simulate calling backend
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // randomly decide if drawing yields reward or not
    const drawIsRewarding = Math.random() < 0.5;
    console.log("draw result");
    console.log(drawIsRewarding);

    const payload: RewardingDrawResult | NoRewardDrawResult = drawIsRewarding
      ? {
          result: "reward",
          prize: "Spinning Bitcoin",
        }
      : { result: "no-reward" };

    dispatch({
      type: DrawCardActionType.DRAW_RESULT,
      payload,
    });
  };
};

const resetDrawing = () => {
  return (dispatch: Dispatch<DrawCardAction>) => {
    dispatch({
      type: DrawCardActionType.RESTART_DRAW,
    });
  };
};

export const drawCardActionCreators = {
  getCards,
  unselectDrawCard,
  selectDrawCard,
  startDrawing,
  resetDrawing,
};
