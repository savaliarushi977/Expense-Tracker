import React,{ createContext, useReducer } from "react";
import AppReducer from "./AppReducer"; 

// Create an initial State 
const initialstate = {
    transactions : []
}


// Create a Context 
export const GlobalContext = createContext(initialstate); 



// Create a Provider Component 
// Provider provides the states , actions of the children it is wrapped around of 
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialstate); 

    // adding a delete action to the page 
    function deleteTransaction(id){
        dispatch({
            type : "DELETE_TRANSACTION",
            payload : id
        });
    }

    // adding an add action to the page 
    function addTransaction(transaction){
        dispatch({
            type : "ADD_TRANSACTION",
            payload : transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

}
