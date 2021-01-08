export const LOAD_SCORE = "scores/load";
export const SAVE_SCORE = "scores/save";
export const REMOVE_SCORE = "scores/remove";

// action creators

export function GetScore() {
  return {
    type: LOAD_SCORE,
  };
}

export function SaveScore(payload) {
  return {
    type: SAVE_SCORE,
    payload,
  };
}

export function RemoveScore() {
  return {
    type: REMOVE_SCORE,
  };
}
