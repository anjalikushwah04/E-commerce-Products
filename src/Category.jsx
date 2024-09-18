import React from 'react'
import './category.css'

export const Category = ({finalcategory,setCatname}) => {
    const cat=finalcategory.map((v,i)=>{
        return(
            <li onClick={()=>setCatname(v)} key={i} className='bg-[#ccc]'>{v}</li>
        )

    })
  

  return (
    <div>
        <h2>Product Category</h2>
        <ul>
            {cat}
        </ul>
    </div>
  )
}
