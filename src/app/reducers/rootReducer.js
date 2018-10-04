import { FETCH_BEERS, FETCH_SINGLE_BEER, FETCH_RANDOM_BEER, FETCH_SEARCHED_BEERS, HANDLE_ERROR } from "../action-creators/actionCreators";

const initialState = {
    beers: [],
    beer: [],
}

export const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BEERS:
            return { ...state, beers: action.beers };
        case FETCH_SINGLE_BEER:
            return { ...state, beer: action.beer };
        case FETCH_RANDOM_BEER:
            return { ...state, randomBeer: action.randomBeer };
        case FETCH_SEARCHED_BEERS:
            return { ...state, searchedBeers: action.searchedBeers };
        case HANDLE_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}
