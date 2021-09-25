import { DrawCardActionType } from "../action-types/drawCard.action-type";

export enum DrawCardType {
  SILVER = "silver",
  GOLD = "gold",
  DIAMOND = "diamond",
}

export interface RewardingDrawResult {
  result: "reward";
  prize: string;
}

export interface NoRewardDrawResult {
  result: "no-reward";
}

export interface ErrorDrawResult {
  result: "error";
}

interface InitializeAction {
  type: DrawCardActionType.INITIALIZE;
  payload: { [key in DrawCardType]: number };
}

interface SelectDrawCardAction {
  type: DrawCardActionType.SELECT;
  payload: {
    cardType: DrawCardType;
  };
}

interface UnselectDrawCardAction {
  type: DrawCardActionType.UNSELECT;
}

interface StartDrawingAction {
  type: DrawCardActionType.START_DRAWING;
}

interface DrawResultAction {
  type: DrawCardActionType.DRAW_RESULT;
  payload: RewardingDrawResult | NoRewardDrawResult | ErrorDrawResult;
}

interface RestartDrawAction {
  type: DrawCardActionType.RESTART_DRAW;
}

export type DrawCardAction =
  | InitializeAction
  | SelectDrawCardAction
  | UnselectDrawCardAction
  | StartDrawingAction
  | DrawResultAction
  | RestartDrawAction;
