import React from 'react'

const IconCard = ({ img, text, title }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
        <img src={img} alt={title} className='size-50' />
        <h2 className='font-semibold text-white text-3xl'>{title}</h2>
        <p className='text-white/20 text-lg max-w-60 text-center'>{text}</p>
    </div>
  )
}

export default IconCard