import ACTIONTYPE from "./ActionType";

export const addQuiz = (data) => {
    return {
      type: ACTIONTYPE.ADDQUIZ,
      payload: data,
    };
  };
  
 