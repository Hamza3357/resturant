import React from 'react'

const Navbar = ({handleClick, tabLinks}) => {
  return (
    <>
    <div className='bg-red-100'>
    {tabLinks.map((item, id)=> {
    return (
      <>
      <div className=''>
      <button key={id} className='bg-green-300 mx-2' onClick={() => handleClick(item)}>{item}</button> 
      </div>
      
       </>
    )
        })}
   
    </div>
    </>

  )
}

export default Navbar
