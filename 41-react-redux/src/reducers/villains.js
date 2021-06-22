const initialState = [{name: "Irene Adler", dangerLevel: 9, mo: "seduction, disguise"}]

export const villainsReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_VILLAIN':
            return [...state, action.payload]
        default:
            return state
    }
}