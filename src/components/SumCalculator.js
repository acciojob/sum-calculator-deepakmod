import React, { useState } from 'react';

const SumCalculator = () => {
    const [sum, setSum] = useState(0);
    return (
        <div>
            <h1>Sum Calculator</h1>
            <input type="number" onChange={(e)=>{setSum(sum+parseInt(e.target.value))}} ></input>
            <p>Sum: {sum}</p>
        </div>
    );
};

export default SumCalculator;