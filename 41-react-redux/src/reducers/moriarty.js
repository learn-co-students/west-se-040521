const intialState = [{location: 'Picadilly Circus', time: "6/20/20 at 11am"}]

export const moriartyReducer = (state=intialState, action) => {
    switch(action.type){
        case 'ADD_MORIARTY':
            return [...state, action.payload]
        default:
            return state
    }

}