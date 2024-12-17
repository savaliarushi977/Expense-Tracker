import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';



const TransactionList = () => {

    // object destructing => passed the parameter of GlobalContext directly to transactions
    const {transactions} = useContext(GlobalContext); 

    return (
        <>
            <h3 className='text-2xl'>History</h3>
            <ul className="list">
                {transactions.map( (transaction) => { 
                    return(<Transaction key={transaction.id} transaction={transaction}/>)
                })}
                
            </ul>
        </>
  )
}

export default TransactionList
