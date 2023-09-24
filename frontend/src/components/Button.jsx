import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
const Button = () => {
  return (
    <div>
        <label className='button' htmlFor='file_picker'>
            <AiFillPlusCircle />
            <input type="file" name='file_picker' id='file_picker' hidden />
        </label>
    </div>
  )
}

export default Button