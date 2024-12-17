import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {

    const {transactions} = useContext(GlobalContext); 

    // create an amount array and calculate total corrosponding to it 
    const amounts = transactions.map(transactions => transactions.amount); 
    const total = amounts.reduce((sum,amount)=>{return sum + amount},0).toFixed(2); 
 
    return (
      <>
        <h4 className='text-center'>Your Balance</h4>
        <h1 className='text-center'>${total}</h1>
      </>
    )
}

export default Balance
