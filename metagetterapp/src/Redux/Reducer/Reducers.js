import ACTIONTYPE from "../Actions/ActionType";

//  this is our initital state of the app //
const initialState = {
  quiz: [],

};

// the reducer containes all the necessary functions in order to update our state accordingly //

 const reducer = (state = initialState, actions) => {
  if (actions.type === ACTIONTYPE.ADDQUIZ) {
    return { ...state, quiz: [...state.quiz, actions.payload] };
  }


  return state;
};

export default reducer;