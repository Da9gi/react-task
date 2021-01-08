import { LOAD_SCORE, REMOVE_SCORE, SAVE_SCORE } from "../actions/index";
import caseUpdate from "./reducerHandler";

const initialState = {
  teamOne: [],
  teamTwo: [],
};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SCORE:
      return {
        ...state,
        teamOne: [...state.teamOne],
        teamTwo: [...state.teamTwo],
      };
    case REMOVE_SCORE:
      return {
        ...state,
        teamOne: [],
        teamTwo: [],
      };
    case SAVE_SCORE:
      let teamOne = [...action.payload.teamOne];
      let teamTwo = [...action.payload.teamTwo];
      teamOne = caseUpdate(teamOne);
      teamTwo = caseUpdate(teamTwo);
      return {
        ...state,
        teamOne: [...teamOne],
        teamTwo: [...teamTwo],
      };
    default:
      return {
        ...state,
      };
  }
}
