import { LOAD_SCORE, REMOVE_SCORE, SAVE_SCORE } from "../actions/index";
import { caseUpdate, assignTeam } from "./reducerHandler";

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
      let teamOne = [...assignTeam(action.payload.teamOne)];
      let teamTwo = [...assignTeam(action.payload.teamTwo)];
      if (teamOne.length) teamOne = caseUpdate(teamOne);
      if (teamTwo.length) teamTwo = caseUpdate(teamTwo);
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
