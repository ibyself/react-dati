import { GET_TIMULIST } from "../actions_type";
import { getTimuList } from "../../api";

export const getList = (page) => {
  return async (dispatch) => {
    let result = await getTimuList(page);
    // console.log(result);
    if (result) {
      dispatch({ type: GET_TIMULIST, data: result });
    }
  };
};
