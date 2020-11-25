export const initialState= [];

export const reducer =(state, {type, payload}) => {
    switch(type) {
        case 'add':
            if (!state.includes(payload)) {
                return [...state, payload];
              }
              return state;
        case 'remove':
            return state.filter(s=>s!== payload);
        case 'clear':
             return initialState;
        default:
            throw new Error("unkown type")
    }
}