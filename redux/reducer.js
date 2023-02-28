import { LoginSuccess } from "./action";
const initialstate={
    loginstate: false ,
    phoneNumber:null,
};
 function userReducer(state = initialstate, action){
    switch (action.type) {
        case LoginSuccess:
            return{
                ...state,
                loginstate: true,
                phoneNumber:action.payload.phoneNumber
                
            }
        default:
            return state;
    }
};
export default userReducer;