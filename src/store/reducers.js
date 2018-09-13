
const initialState = {
    firstName: 'Tomas',
    secondName: 'Anderson'
};
export const rootReducer2 = (state = initialState, action) => {
    switch (action.type){
        case 'ACTION_CHANGE_FIRST_NAME':{
            return{
                ...state, firstName:action.payload
            }
        }
        case 'ACTION_CHANGE_SECOND_NAME':{
            return{
                ...state, secondName:action.payload
            }
        }
    }
    return state
};