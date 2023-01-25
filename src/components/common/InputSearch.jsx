import React from 'react';

import herosearch from '../../assets/home/herosearch.svg';

export default function InputSearch({ handleChange }) {
  return (
    <div className="home_btn_div">
      <div className="home_btn_div_inner">
        <div className="home_btn_div_inner_img">
          <img src={herosearch} alt="Home Search Icon" />
        </div>
        <input type="text" name="" placeholder="Example" onChange={handleChange} />
      </div>
      <button className="home_btn" type="submit">
        Search
      </button>
    </div>
  );
}
