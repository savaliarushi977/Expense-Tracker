import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'



const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext); 
    const amounts = transactions.map(transactions => transactions.amount); 

    // finding the income using the filter and reducing the amounts array 
    const income = amounts.filter(item => item>0).reduce((sum,item) => sum + item,0).toFixed(2);

    //similarly finding the expense by filtering and reducing 
    const expense = amounts.filter(item => item<0).reduce((sum,item) => sum + item,0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
            <h4 className='font-bold text-xl'>Income</h4>
            <p className="money plus">${income}</p>
            </div>
            <div>
            <h4 className='font-bold text-xl'>Expense</h4>
            <p className="money minus">${Math.abs(expense).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
