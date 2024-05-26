import React, { useState } from 'react';
import './itemDetails.css';

const ItemDetails = () => {
  const initialFormData = {
    itemTitle: '',
    link: '',
    iconUrl: '',
    tagName: 'User',
    category: '',
    description: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch('https://media-content.ccbp.in/website/react-assignment/add_resource.json', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // });

    const response = await fetch('https://media-content.ccbp.in/website/react-assignment/add_resource.json');

    if (response.ok) {
      alert('Item created successfully!');
      setFormData(initialFormData); 
    } else {
      alert('Failed to create item.');
    }
  };

  const handleBackClick = () => {
    // Add your back button logic here
    console.log("Back button clicked");
  };

  return (
    <div className="container">
      <div className="item-details-outer">
      <button className="back-button" onClick={handleBackClick}><span className='text-arrow'>&lt;</span> Users</button>
      <div className="item-details">
      <h2>Item Details</h2>
        <form className='form-class' onSubmit={handleSubmit}>
          <label>
            Item Title:
            <input
              type="text"
              name="itemTitle"
              value={formData.itemTitle}
              onChange={handleChange}
              placeholder="Enter item title"
              required
            />
          </label>
          <label className='each-label'>
            Link:
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="Enter Link"
              required
            />
          </label>
          <label className='each-label'>
            Icon URL:
            <input
              type="url"
              name="iconUrl"
              value={formData.iconUrl}
              onChange={handleChange}
              placeholder="Enter URL"
              required
            />
          </label>
          <label className='each-label'>
            Tag Name:
            <select
              className='tag-name'
              name="tagName"
              value={formData.tagName}
              onChange={handleChange}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </label>
          <label className='each-label'>
            Category:
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter Category"
              required
            />
          </label>
          <label className='each-label'>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              required
            ></textarea>
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
       
      </div>
      <div className="image-container">
        <img src="https://images.unsplash.com/photo-1567449303117-2695b47d1738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcmdlJTIwb2ZmaWNlfGVufDB8fDB8fHww" alt="Office" />
      </div>
    </div>
  );
};

export default ItemDetails;
