import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [likesCard1, setLikesCard1] = useState(0);
  const [likesCard2, setLikesCard2] = useState(0);

  const handleLikeCard1 = () => {
    setLikesCard1(likesCard1 + 1);
  };

  const handleLikeCard2 = () => {
    setLikesCard2(likesCard2 + 1);
  };

  const totalLikes = likesCard1 + likesCard2;

  return (
    <div className="App">
      <h1>Likes Colores</h1>
      <div className="card-container">
        <Card 
          title="Carta N°1" 
          content="Haga click en Carta N°1 si te gusta el color azul más que el rojo." 
          initialLikes={likesCard1} 
          onLike={handleLikeCard1} 
        />
        <Card 
          title="Carta N°2" 
          content="Haga click en Carta N°2 si te gusta el color rojo más que el azul." 
          initialLikes={likesCard2} 
          onLike={handleLikeCard2} 
        />
        <Card 
          title="Carta N°3" 
          content={`Likes totales entre azul y rojo: ${totalLikes}`} 
          initialLikes={totalLikes} 
          additionalContent="Haga click en Like en Carta N°3 para indicar que te gustan ambos." 
        />
      </div>
    </div>
  );
};

export default App;
