import { combineReducers } from "redux";
import { BannerReducer } from "./reducer/BannerReducer";

const rootReducer = combineReducers({
    banner : BannerReducer,
  });
  
export default rootReducer;