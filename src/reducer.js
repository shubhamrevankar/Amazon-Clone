export const initialState = {
    basket: [],
    user: null,
    category: "ALL",
    search: ""
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price*item.count + amount, 0);

export const getTotalItems = (basket) => 
    basket?.reduce((amount, item) => item.count + amount, 0);

function reducer(state, action){
    
    switch (action.type) {
        case "SET_USER" :
            return {
                ...state,
                user: action.user
            }




        case 'ADD_TO_BASKET':
            console.log(state.basket)

            let oldBasket = [...state.basket];
            const ind = state.basket.findIndex((basketItem) => (basketItem.id===action.item.id))

            if(ind >= 0){
                oldBasket[ind] = {
                    ...oldBasket[ind],
                    count: oldBasket[ind].count + 1
                }
                return {
                    ...state,
                    basket: oldBasket
                }
            } else {
                return {
                    ...state,
                    basket: [...state.basket, action.item]
                }
            }




        case 'REMOVE_FROM_BASKET':

            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => (basketItem.id===action.item.id))

            if(index >= 0){
                newBasket.splice(index,1);
            } else {
                console.warn(`Can't remove product (id: ${action.item.id})`);
            }

            return {...state, basket: newBasket};

        case 'REMOVE_ONE_FROM_BASKET' :
            console.log(state.basket)

            let oldBasket2 = [...state.basket];
            const ind2 = state.basket.findIndex((basketItem) => (basketItem.id===action.item.id))

            if(ind2 >= 0){
                oldBasket2[ind2] = {
                    ...oldBasket2[ind2],
                    count: oldBasket2[ind2].count - 1
                }
                return {
                    ...state,
                    basket: oldBasket2
                }
            } else {
                return {
                    ...state,
                    basket: [...state.basket, action.item]
                }
            }

        case 'SET_CATEGORY' : 
            return {
                ...state,
                category: action.category
            }

        case 'SET_SEARCH' : 
            return {
                ...state,
                search: action.search
            }

        default:
            return state;
    }

};

export default reducer;