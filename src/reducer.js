
export const initialState = {
    thi:"",
    user:null,
    gun:null,
}

export const actionTypes ={
    SET_THI: "SET_THI",
    SET_USER: "SET_USER",
    SET_GUN: "SET_GUN", 
}

const reducer = (state, action) =>{
    console.log(action);

    switch(action.type){

        case "SET_THI":
        return{
            ...state,
            thi: action.thi,
        }
        case "SET_USER":
        return{
            ...state,
            user: action.user,
        }
        case "SET_GUN":
        return{
            ...state,
            gun: action.gun,
        }
        default:
            return state;
    }
}

export default reducer 