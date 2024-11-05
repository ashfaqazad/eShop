// Define the initial state
export const initialState = {
    basket: []
};

export const total = (basket) => {
    return basket.reduce((amount, item) => amount + item.price, 0);
};

// Define the reducer function to handle actions
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        
        case "Remove_from_Cart":
            const index = state.basket.findIndex(item => item.id === action.id)
            let newBasket = [...state.basket];
            if (index >= 0 ) {
                newBasket.splice(index, 1);
            }else {
                console.log("cant find the ID")
            }

            return {
                ...state, basket: newBasket
                // basket: state.basket.filter(item => item.id !== action.id)
            };

        default:
            return state;  // Return the current state if action type is unrecognized
    }
};

export default Reducer;
