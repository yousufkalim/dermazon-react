/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import DownArrow from '../../assets/DownArrow.svg';
import UpArrow from '../../assets/UpArrow.svg';

function TermsText({ val }) {
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText(!showText);
  };
  return (
    <div>
      <div className={showText ? 'terms_dropdown2' : 'terms_dropdown'}>
        <div className="terms_quiz_div" onClick={handleClick} onKeyDown={handleClick}>
          <div>
            <span className="counter">{val.id}</span>
            <span className={showText ? 'terms_quiz_title2' : 'terms_quiz_title'}>{val.quiz}</span>
            {/* <span className="terms_quiz_title">{val.quiz}</span> */}
          </div>
          {showText ? (
            <img className="img_terms_downArrow" src={UpArrow} alt="" />
          ) : (
            <img className="img_terms_downArrow" src={DownArrow} alt="" />
          )}
        </div>

        <div className="terms_ans">
          <div>{showText ? <p className="terms_p">{val.ans}</p> : ''}</div>
        </div>
      </div>
    </div>
  );
}

export default TermsText;
