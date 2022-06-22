const users = (state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                token:action.payload.token
            }
        case 'LOGOUT':
            return{
                ...state,
                user:null,
                token:null
            }
        case 'GETINFO':
            return{
                ...state,
                user:action.payload
            }
            default:
                return state
    }
}

export default users