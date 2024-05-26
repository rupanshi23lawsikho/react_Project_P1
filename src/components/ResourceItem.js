import React from 'react';
import './resourceItem.css';

const ResourceItem = ({ resource }) => (
  <div className="resource-item-wrapper">
    <div className="resource-header">
      <img className="resource-icon" src={resource.icon_url} alt="Icon" />
      <div>
        <h2 className="resource-title">{resource.title}</h2>
        <p className="resource-category">{resource.category}</p>
      </div>
    </div>
    <a className="resource-link" href={resource.link}>{resource.link}</a>
    <p className="resource-description">{resource.description}</p>
  </div>
);

export default ResourceItem;
