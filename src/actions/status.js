const SET_NOTAS = 'SET_NOTAS'

export function setNotas(notas) {
    return {
        type: SET_NOTAS,
        notas: notas
    }
}