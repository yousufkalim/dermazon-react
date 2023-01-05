import React from 'react';
import loadingIcon from '../../assets/Vector (1).png';

export default function LoadMoreButton() {
  return (
    <div className="button_outer">
      <div className="laser_Loadmore_button">
        <div type="submit">Load more</div>
        <div className="laser_loading_icon">
          <img src={loadingIcon} alt="home page" />
        </div>
      </div>
    </div>
  );
}
