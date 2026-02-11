import React from 'react'

const CategoryCircle = ({ data, selected, setSelectedCategory }) => {


    return (<>
        <div className={`flex flex-col justify-center pt-2 px-1  ${selected === data._id && "bg-gray-300 shadow-2xl rounded-2xl "}`} onClick={() => setSelectedCategory(data._id)}>

            <img className='object-fill size-16 rounded-full' src={data.image} />
            <h3 className='text-base text-center'>{data.name}</h3>
        </div>
    </>
    )
}

export default CategoryCircle