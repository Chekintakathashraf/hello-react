import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl p-4 m-4'>Contact Page</h1>
      <form>
        <input type='text' className='border border-black p-2 m-2' placeholder='name'></input>
        <input type='text' className='border border-black p-2 m-2' placeholder='message'></input>
        <button className='border border-black bg-gray-300 p-2 m-2'>submit</button>

      </form>
    </div>
  )
}

export default Contact
