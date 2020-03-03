const initialState = {
    notas: [{
        title: 'Nota 1',
        text: 'Hola mundo'
    },{
        title: 'Nota 2',
        text: 'Adiós mundo'
    }]
}

function statusReducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_NOTAS':
            return { ...state, notas: action.notas}
        default:
            return state
    }
}

export default statusReducer