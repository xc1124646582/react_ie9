import ActionType from './../utils/ActionTypeUtils';
export const click =  () =>  (dispatch =>{
            dispatch({type:ActionType.SYSTEM_INIT,value:1});
});