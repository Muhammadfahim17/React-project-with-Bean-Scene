import React from 'react'

const Components1 = ({image,name,description,price}) => {
return (
    <>

        <div className='border border-[#F9C06A6B] shadow-xs rounded-xl w-70 bg-[#FFF9F1] h-95 flex flex-col items-center justify-between relative'>
        <img src={image} className='rounded-sm' alt="" />
        <h2 className='text-[#603809] font-bold font-serif text-[22px]'>{name}</h2>
        <p className='text-[#1E1E1E] text-[17px] font-serif'>{description}</p>
        <p className='text-[#603809] font-bold font-serif text-[18px]'>{price}</p>
        <button className='bg-[#F9C06A] cursor-pointer text-[#1E1E1E] px-7.5 py-2 rounded-full font-bold relative top-5'>Order Now</button>   
        </div>


    </>
)
}

export default React.memo(Components1)