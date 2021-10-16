import { combineReducers, Reducer } from "redux";
import { AppState } from "../Models";
import { UtilityReducer } from "./UtilityReducer";

const AppReducer: Reducer = combineReducers({
    utility: UtilityReducer,
});

const App = (state: AppState | undefined, action: any) => {

    return AppReducer(state, action);
};

export default App;
