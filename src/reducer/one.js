import ActionType from './../utils/ActionTypeUtils';
export default (state = {'num':0}, action) => {
    switch(action.type){
    case ActionType.SYSTEM_INIT:{
        var value=action.value

        var num=state.num
        state.num=Number(state.num)+1
        
        return  Object.assign({}, state);
    
     }
    default:
        return state;
    }
}
