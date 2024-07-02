import React, { useState } from 'react';
import Card from './Card';
import webApi from './ApiData';

const updatedList = [...new Set(webApi.map((item) => item.category)),"All",];

const Cardsholder = () => {
  const [originalData] = useState(webApi); // Keep the original data
  const [filteredData, setFilteredData] = useState(webApi); // Filtered data to display

  const handleClick = (category) => {
    if(category==="All"){
      setFilteredData(webApi)
      return;
    }
    const updatedData = originalData.filter((newitem) => newitem.category === category);
    setFilteredData(updatedData); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div>
        {updatedList.map((item, id) => (
          <button key={id} className="bg-green-300 mx-2" onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        <Card data={filteredData} />
      </div>
    </div>
  );
};

export default Cardsholder;
