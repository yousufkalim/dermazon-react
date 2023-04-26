import React from 'react';
import { useTranslation } from 'react-i18next';
import herosearch from '../../assets/home/herosearch.svg';

export default function InputSearch({ handleChange }) {
  const { t } = useTranslation();

  return (
    <div className="home_btn_div">
      <div className="home_btn_div_inner">
        <div className="home_btn_div_inner_img">
          <img src={herosearch} alt="Home Search Icon" />
        </div>
        <input type="text" name="" placeholder="Exemple" onChange={handleChange} />
      </div>
      <button className="home_btn" type="submit">
        {t('Search')}
      </button>
    </div>
  );
}
