import React, { useEffect, useState } from 'react';
import './Card.css';
import Card from './Card';
import { fetchApiData } from '../api';

export default function CardGrid() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const data = await fetchApiData();
      setCardData(data);
    }
    fetchData();
  }, [])

  return (
    <div className='cardgrid'>
        {cardData.map( (card) => {
            return <Card data={card}/>
        }
        )}           
    </div>
  );
}