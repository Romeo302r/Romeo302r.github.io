import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [input, inputArea] = useState({
    name: '',
    email: '',
    address: '',
    age: 0
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    inputArea(prev => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value
    }));
  };
  
  const [list,listed] = useState([])
  const handleSave = () => {
    const updatedList = [...list]
    updatedList[id] = input;
    listed(updatedList)
    localStorage.setItem('list', JSON.stringify(updatedList));
  };

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('list')) || [];
    listed(storedList);
    const save = storedList[id];
    if (save) {
      inputArea(save);
    }
  }, [id]);

  return (
    <>   <div className="edit-page">
      <h1>Edit Details</h1>
      <input name="name" value={input.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={input.email} onChange={handleChange} placeholder="Email" />
      <input name="address" value={input.address} onChange={handleChange} placeholder="Address" />
      <input
        type="number"
        name="age"
        value={input.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <button onClick={handleSave}>Save</button>
    </div>

    <div>
      <h1>{list[id]?.name}</h1>
      <p>{list[id]?.email}</p>
      <p>{list[id]?.address}</p>
      <p>{list[id]?.age}</p>
      <button onClick={()=>navigate('/')}>Back</button>
    </div>
    
    </>
 
  );
};

export default EditPage;
