import { GET_TIMULIST } from "../actions_type";
export default function (preState = [], action) {
  const { type, data } = action;
  // console.log(data);
  let newState;
  switch (type) {
    case GET_TIMULIST:
      newState = data;
      return newState;
    default:
      return preState;
  }
}
