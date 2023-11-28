import React, { useState } from 'react';
import imgMais from './images/mais.png';
import imgMenos from './images/menos.png';
import imgHomem from './images/homem.png';
import imgMulher from './images/mulher.png';
import imgResete from './images/resete.png';

import './Contador.css';

const Contador = () => {
  const [counts, setCounts] = useState({
    homem: 0,
    mulher: 0,
    total: 0,
  });

  const handleReset = () => {
    setCounts({ homem: 0, mulher: 0, total: 0 });
  };

  const handleAdd = () => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      total: prevCounts.total + 1,
    }));
  };

  const handleMinus = () => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      total: prevCounts.total - 1,
    }));
  };

  const handleAddPerson = (gender) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [gender]: prevCounts[gender] + 1,
      total: prevCounts.total + 1,
    }));
  };

  const handleMinusPerson = (gender) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [gender]: prevCounts[gender] - 1,
      total: prevCounts.total - 1,
    }));
  };

  return (
    <div className='Contador-contador-full'>
      <div className='Contador-header'>
        <h1 className='Contador-title'>Total</h1>
        <button className='Contador-button' onClick={handleReset}>
          <img className='Contador-button-img' src={imgResete} alt='Reset' />
        </button>
      </div>
      <p className='Contador-contador'>{counts.total}</p>

      <div className='Contador-body'>
        <Person
          gender='homem'
          img={imgHomem}
          onAdd={() => handleAddPerson('homem')}
          onMinus={() => handleMinusPerson('homem')}
          count={counts.homem}
        />

        <Person
          gender='mulher'
          img={imgMulher}
          onAdd={() => handleAddPerson('mulher')}
          onMinus={() => handleMinusPerson('mulher')}
          count={counts.mulher}
        />
      </div>
    </div>
  );
};

const Person = ({ gender, img, onAdd, onMinus, count }) => {
  return (
    <div className='Contador-person'>
      <img src={img} alt={gender} />
      <div className='Contador-buttons'>
        <button className='Contador-button' onClick={onAdd}>
          <img className='Contador-button-img' src={imgMais} alt='Mais' />
        </button>
        <button className='Contador-button' onClick={onMinus}>
          <img className='Contador-button-img' src={imgMenos} alt='Menos' />
        </button>
      </div>
      <h1>Total</h1>
      <p className='Contador-contador'>{count}</p>
    </div>
  );
};

export default Contador;

