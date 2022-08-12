import { ADD_ARTICLE } from "./type";

  export const addArticle = article => ({ 
    type: ADD_ARTICLE,
    payload: article
  });