import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

    const [text, settext] = useState("");
    const [amount, setamount] = useState("");

    const { addTransaction } = useContext(GlobalContext);

    function onSubmit(e){
        e.preventDefault(); 

        const newTransaction = {
            id : Math.floor(Math.random()*10000000),
            text,
            amount : +amount
        }

        addTransaction(newTransaction); 
        settext(''); 
        setamount(0); 
    }

    return (
        <>
            <h3 className='text-2xl'>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label className='font-semibold' htmlFor="text">Text</label>
                <input id='text' type="text" value={text} onChange={(e)=>{settext(e.target.value)}}  placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label className='font-semibold' htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)</label>
                <input id='amount' type="number" value={amount} onChange={(e)=>{setamount(e.target.value)}} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form> 
        </>
    )
}

export default AddTransaction
