import { combineReducers } from "redux";
import errorsReducer from "./errorsReducers";
import projectTaskReducer from "./projectTaskReducer"

export default combineReducers({
    errors:errorsReducer,
    project_task:projectTaskReducer
});
