import React from 'react';

import herosearch from '../../assets/home/herosearch.svg';

export default function InputSearch({ handleChange }) {
  return (
    <div className="home_btn_div">
      <img src={herosearch} alt="Home Search Icon" />
      <input type="text" name="" placeholder="Example" onChange={handleChange} />
      <button className="home_btn" type="submit">
        Search
      </button>
    </div>
  );
}
