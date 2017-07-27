export function reducer(
    state={

            fbkey: ''
    
    }, action) {


    switch (action.type) {
        case "FBTOKEN": {
            return {
                ...state,
                fbkey: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}