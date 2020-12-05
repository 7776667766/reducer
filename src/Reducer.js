const ReducerAdd = (state,action) => {

    switch(action.type){
        case"DEL_TRANSACTION":
        return{
            ... state,
            transactions: state.transactions
            .filter(transaction => transaction.id !== action.payload)
        }
        case"ADD_TRANSACTION":
        return{
            ... state,
            transactions: [action.payload , ...state. transactions]
        }
        
        default:
            return state;
    
    };
    }
    
    
    
    
      
    export default ReducerAdd;
    