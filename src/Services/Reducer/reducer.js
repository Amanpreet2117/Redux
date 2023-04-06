import { ADD_TO_CART } from "../../Contants"
const initialState = {
    cardData:[]
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("reducer",action)
            console.warn("state",state)

            return [
                ...state,
                {cardData: action.data}
            ]
        default:
            return state
    }


}