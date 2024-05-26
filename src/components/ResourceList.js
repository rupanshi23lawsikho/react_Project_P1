import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResourceItem from './ResourceItem';
import './resourceList.css';

const ResourceList = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json')
      .then(response => {
        setResources(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(search.toLowerCase()) ||
    resource.category.toLowerCase().includes(search.toLowerCase()) ||
    resource.description.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading resources.</div>;

  return (
    <div>
      <input 
        className="search-input"
        type="text" 
        placeholder="Search" 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
      />
      <div className="resource-list-wrapper">
        {filteredResources.map(resource => (
          <ResourceItem key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
