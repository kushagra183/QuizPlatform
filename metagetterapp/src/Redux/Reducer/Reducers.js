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
  if (actions.type === ACTIONTYPE.TOGGLEACTIVE) {
    const quizElem = state.quiz.find((el) => el.id === actions.payload);

    const filteredArr = state.quiz.filter((el) => el.id !== actions.payload);

    const newArr = [
      { ...quizElem, isActive: !quizElem.isActive },
      ...filteredArr,
    ];

    return {
      ...state,
      quiz: newArr,
    };
  }
  if (actions.type === ACTIONTYPE.DELETEQUIZ) {
    const filteredArr = state.quiz.filter((el) => el.id !== actions.payload);

    return {
      ...state,
      quiz: filteredArr,
    };
  }



  return state;
};

export default reducer;