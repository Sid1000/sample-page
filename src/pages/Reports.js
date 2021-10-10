import React, { useState } from 'react';
import Select from 'react-select';
 
function Reports() {
  const data = [
    {
      value: 1,
      label: "Python"
    },
    {
      value: 2,
      label: "Swift"
    },
    {
      value: 3,
      label: "Javascript"
    },
    {
      value: 4,
      label: "PHP"
    },
    {
      value: 5,
      label: "C#"
    },
    {
      value: 6,
      label: "Go"
    }
  ];
 
  const [selectedOption, setSelectedOption] = useState(null);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }
    return (
        <div className="App">
      
 
      <Select
        isMulti
        placeholder="Issues"
        value={selectedOption} 
        options={data} // list of the data
        onChange={handleChange} // assign onChange function
      />
 
      {/* {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <b>Selected Options</b><br />
        <pre>{JSON.stringify(selectedOption, null, 2)}</pre>
      </div>} */}
    </div>
    )
}

export default Reports;
