import React from 'react'

const Components2 = ({image,name,description}) => {
return (
    <>

    <div className='border border-[#F9C06A6B] shadow-xs rounded-xl w-70 bg-[#FFF9F1] h-75 flex flex-col items-center justify-around relative'>
    <img src={image} alt="" />
    <h2 className='text-[#603809] font-bold font-serif text-[27px]'>{name}</h2>
    <p className='text-[#707070] text-[18px] text-center'>{description}</p>
    </div>

    </>
)
}

export default React.memo(Components2)