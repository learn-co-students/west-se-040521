export function addVillain(vObj){
    return {
        type: 'ADD_VILLAIN',
        payload: vObj
    }
}

export function arrestVillain(villainObj){
    return{
        type: 'ARREST_VILLAIN',
        payload: villainObj
    }
}