import React, { useState } from 'react';

const Card = ({ data }) => {



  return (
    <div className="max-w-sm rounded border flex border-gray-400 flex-wrap gap-2 shadow-lg bg-white p-4 m-4">
     
        {data.map((item)=>  {
          const {id, name, category} = item;
            return (
                <>
                   <div key={item.id} className="px-6 border bg-green-50 border-green py-4">
        <div className="font-bold text-xl mb-2">ID: {id}</div>
        <p className="text-gray-700 text-base">Name: {name}</p>
        <p className="text-gray-700 text-base">Category: {category}</p>
      </div>
 
                </>
            )
        })}
   
    </div>
  );
}

export default Card;