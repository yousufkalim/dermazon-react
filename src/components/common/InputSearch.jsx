import React from 'react';

import herosearch from '../../assets/home/herosearch.svg';

export default function InputSearch() {
  return (
    <div className="home_btn_div">
      <img src={herosearch} alt="Home Search Icon" />
      <input type="text" name="" placeholder="Example" />
      <button className="home_btn" type="submit">
        Search
      </button>
    </div>
  );
}
