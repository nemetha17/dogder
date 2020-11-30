export const initialState= [];

export const reducer =(state, {type, payload}) => {
    switch(type) {
        case 'add':
            if (!state.includes(payload)) {
                return [...state, payload];
              }
              return state;
        case 'reload':
            if (!state.includes(payload)) {
                return [...state, payload];
              }
              return state;
        case 'unsave':
            return state.filter(s=>s!== payload);
        case 'clear':
             return initialState;
        default:
            throw new Error("unkown type")
    }
}