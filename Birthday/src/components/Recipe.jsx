import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';
import Footer from './Footer';
import axios from 'axios';

function Recipe() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;

    const fetchFoods = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/foods/all');
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };

    fetchFoods();
  }, []);

  const handleSearch = async () => {
    try {
      
      const response = await axios.get(`http://localhost:8080/api/foods/search?term=${searchTerm}`);
      setSearch(response.data);
    } catch (error) {
      console.error('Error searching foods:', error);
    }
  };

  return (
    <div>
      <div className='hero'>
        <h2 className="hero-head">Choose Your Food!</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Foods..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="job-list">
          {searchResults.map((food) => (
            <div className="job" key={food.id}>
              <img src={food.imageUrl} alt={food.foodname} className="st" />
              <h3>{food.foodName}</h3>
              <p>{food.foodDescription}</p>
              <Link to={`/BookingForm`}>Book</Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Recipe;
