import React, { useState } from 'react'

const AddDynamic = () => {

    const [val, setVal] = useState([]);
    const handleAdd=()=>{
        const abc = [...val, []]
        setVal(abc)
    }

    const handleChange = () =>
    {

    }
  return (
    <div>
      <button onClick={() => handleAdd()}>Add</button>

      {val.map((data, i) => {
        return(
            <input onChange={e=>handleChange(e, i)}/>
        )
      })}
    </div>
  )
}

export default AddDynamic

