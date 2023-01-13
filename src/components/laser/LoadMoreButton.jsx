import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function LoadMoreButton({ onPress }) {
  return (
    <div className="button_outer" onClick={onPress} role="presentation">
      <div className="laser_Loadmore_button">
        <div type="submit">Load more</div>
        <div className="laser_loading_icon">
          <RefreshIcon />
        </div>
      </div>
    </div>
  );
}
