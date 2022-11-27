import React from 'react'

function InputData({value=""}) {
  return (
    <input className='bg-gray-300 w-full p-2 px-2 text-sm' readOnly={true} value={value}/>
  )
}

export default InputData