import { DrawCardAction, DrawCardType } from "../actions/drawcard.action";
import { DrawCardActionType } from "../action-types/drawCard.action-type";

export interface DrawCardState {
  drawCards: { [k in DrawCardType]: number };
  selectedDrawCard?: DrawCardType;
  drawState: "initialized" | "drawing" | "result-out";
  drawResult: {
    drawCardType?: DrawCardType;
    result?: "reward" | "no-reward" | "error";
    prize?: string;
  };
}

const initialState: DrawCardState = {
  drawCards: {
    [DrawCardType.SILVER]: 0,
    [DrawCardType.GOLD]: 0,
    [DrawCardType.DIAMOND]: 0,
  },
  drawState: "initialized",
  drawResult: {},
};

export const drawCardReducer = (
  state = initialState,
  action: DrawCardAction,
) => {
  switch (action.type) {
    case DrawCardActionType.INITIALIZE:
      return { ...state, drawCards: action.payload };

    case DrawCardActionType.SELECT:
      const drawCards = { ...state.drawCards };
      drawCards[action.payload.cardType] =
        drawCards[action.payload.cardType] - 1;
      return { ...state, drawCards, selectedDrawCard: action.payload.cardType };

    case DrawCardActionType.UNSELECT:
      const cards = { ...state.drawCards };
      if (state.selectedDrawCard) {
        cards[state.selectedDrawCard] = cards[state.selectedDrawCard] + 1;
      }
      return { ...state, drawCards: cards, selectedDrawCard: undefined };

    case DrawCardActionType.START_DRAWING:
      return { ...state, drawState: "drawing" };

    case DrawCardActionType.DRAW_RESULT:
      return {
        ...state,
        selectedDrawCard: undefined,
        drawState: "result-out",
        drawResult: {
          drawCardType: state.selectedDrawCard,
          result: action.payload.result,
          prize:
            action.payload.result === "reward"
              ? action.payload.prize
              : undefined,
        },
      };

    case DrawCardActionType.RESTART_DRAW:
      return {
        ...state,
        drawResult: {},
        selectedDrawCard: undefined,
        drawState: "initialized",
      };

    default:
      return state;
  }
};
