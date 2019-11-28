export const accounting = (state = 100,action) =>{
switch (action.type) {
    case "CREATE_POLICY":
        return state + parseInt(action.payload.amount)

    case "CREATE_CLAIM":
        return state - parseInt(action.payload.amount)

    default:
        return state
}
}

export const claimHistory = (state = [{name:'shahar holzman',amount:50},{name:'yam chen',amount:50}],action) =>{
    switch (action.type) {
        case "CREATE_CLAIM":
             return state = [...state,{name:action.payload.name,amount:action.payload.amount}]
         
        case "DELETE_CLAIM":
                return  state.filter(obj => obj.name !== action.payload.name)

        default:
            return state
    }    
}


export const policies = (state =[{name:'alex grinberg',amount:50},{name:'yam soliman',amount:50}] ,action) =>{
    switch (action.type) {
        case "CREATE_POLICY" :
                return state = [...state,{name:action.payload.name,amount:action.payload.amount}]

        case "DELETE_POLICY" :
                return   state.filter(obj => obj.name !== action.payload.name)

    
        default:
                return state

    }
    
}
