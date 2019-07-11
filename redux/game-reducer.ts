import { INITIAL_GAME } from './__proto__';
import { GAME } from './__action__';

const initialState = new INITIAL_GAME();

export default (state = initialState, action) => {
    switch (action.type) {
        case GAME.TAB:
            return Object.assign({}, { ...state, tab: action.tab });
        case GAME.FRAME:
            return Object.assign({}, { ...state, frame: action.frame });
        case GAME.BRAND:
            return Object.assign({}, { ...state, brand: action.brand });
        case GAME.IMAGE:
            return Object.assign({}, { ...state, tab: 3, frame: 3, image: action.image });
        case GAME.TIME:
            return Object.assign({}, { ...state, tab: 6, frame: 6, time: action.time });
        case GAME.PRICE:
            return Object.assign({}, { ...state, tab: 10, frame: 10, price: action.price });
        default:
            return state;
    }
}

export const tab = (tab) => ({ type: GAME.TAB, tab });
export const frame = (frame) => ({ type: GAME.FRAME, frame });
export const name = (name) => ({ type: GAME.NAME, name });
export const image = (image) => ({ type: GAME.IMAGE, image });
export const time = (time) => ({ type: GAME.TIME, time });
export const price = (price) => ({ type: GAME.PRICE, price });