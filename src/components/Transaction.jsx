import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({transaction}) => {

    // dont need to use curly brackets here as this is already a javascript code 
    const sign = transaction.amount > 0 ? "+" : "-"; 

    const { deleteTransaction } = useContext(GlobalContext); 

    return (
        <li  key={transaction.id} className={ transaction.amount > 0 ? "plus" : "minus" }>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button 
            onClick={()=> deleteTransaction(transaction.id) } className="delete-btn">x</button>
        </li>
  )
}

export default Transaction
