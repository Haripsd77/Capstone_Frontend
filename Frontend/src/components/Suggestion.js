import React from "react";
import { API } from "../pages/global";
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export const Suggestion = () => {
  const [dresses, setDresses] = useState([]);
  const [filteredDresses, setFilteredDresses] = useState([]);

  useEffect(() => {
    const fetchDresses = async () => {
      try {
        const response = await fetch(`${API}/dress`);
        if (!response.ok) {
          throw new Error('Failed to fetch dresses');
        }

        const dressesData = await response.json();
        setDresses(dressesData);
      } catch (error) {
        console.error('Error fetching dresses:', error);
      }
    };

    fetchDresses();
  }, []);

  const handleFilterByColor = (color) => {
    const filteredByColor = dresses.filter(dress => dress.color.toLowerCase() === color.toLowerCase());
    setFilteredDresses(filteredByColor);
  };

  return (
    <div>
      <h1 style={{color:"violet"}}>Dress Suggestion based on Colour</h1>
      <h2 style={{color:"grey"}}>Select your desired Colour</h2>
      <div>
        <Button onClick={() => handleFilterByColor('Red')} style={{ backgroundColor: 'red', color: 'white' }}>Red</Button>
        <Button onClick={() => handleFilterByColor('Black')} style={{ backgroundColor: 'black', color: 'white' }}>Black</Button>
        <Button onClick={() => handleFilterByColor('Green')} style={{ backgroundColor: 'green', color: 'white' }}>Green</Button>
        <Button onClick={() => handleFilterByColor('Yellow')} style={{ backgroundColor: 'yellow', color: 'black' }}>Yellow</Button>
        <Button onClick={() => handleFilterByColor('Purple')} style={{ backgroundColor: 'purple', color: 'white' }}>Purple</Button>
        <Button onClick={() => handleFilterByColor('Pink')} style={{ backgroundColor: 'pink', color: 'black' }}>Pink</Button>
        <Button onClick={() => handleFilterByColor('White')} style={{ backgroundColor: 'white', color: 'black' }}>White</Button>
        <Button onClick={() => handleFilterByColor('Blue')} style={{ backgroundColor: 'blue', color: 'white' }}>Blue</Button>
      </div>
      <h2 style={{color:"grey"}}>Suggested Dresses</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredDresses.map(dress => (
          <Card key={dress._id} style={{ maxWidth: 400, margin: 10 }}>
            <CardMedia
              component="img"
              alt={dress.dressname}
              height="500"
              image={dress.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {dress.dressname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {dress.cat}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Summary: {dress.summary}
              </Typography>
              <Button href={dress.info} target="_blank" rel="noopener noreferrer">
                More Info
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
