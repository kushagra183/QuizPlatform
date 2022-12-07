import ACTIONTYPE from "./ActionType";

export const addQuiz = (data) => {
    return {
      type: ACTIONTYPE.ADDQUIZ,
      payload: data,
    };
  };
  export const toggleActive = (id) => {
    return {
      type: ACTIONTYPE.TOGGLEACTIVE,
      payload: id,
    };
  };
  
  export const deleteQuiz = (id) => {
    return {
      type: ACTIONTYPE.DELETEQUIZ,
      payload: id,
    };
  };
  
  
 