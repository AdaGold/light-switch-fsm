import React from 'react';
import './LightBulb.css';

// Adapted from https://codepen.io/benwoodley/pen/YqmPyg

const LightBulb = ({ checked }) => {

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" id="bulb" viewBox="0 0 154.72 276.77">
        <path d="M55.2 139.26l-.5 1.67 4.63 15.48.5-1.67-4.63-15.48zM85.62 123.84l-.5 1.67 4.63 15.48.49-1.67-4.62-15.48z" className={`filament ${ checked ? 'filament-checked' : '' }`} />
        <path d="M90.24 139.32l-.49 1.67 4.62 15.48.5-1.67-4.63-15.48zM68.11 123.84l-.5 1.67 4.62 15.48.5-1.67-4.62-15.48z" className={`filament ${ checked ? 'filament-checked' : '' }`} />
        <path d="M72.73 139.32l-.5 1.67 4.63 15.48.5-1.67-4.63-15.48zM58.85 154.8l.5 1.67 4.63-15.48-.5-1.67-4.63 15.48z" className={`filament ${ checked ? 'filament-checked' : '' }`} />
        <path d="M76.36 154.8l.5 1.67 4.63-15.48-.5-1.67-4.63 15.48zM63.48 139.32l.5 1.67 4.62-15.48-.49-1.67-4.63 15.48zM80.99 139.32l.5 1.67 4.62-15.48-.49-1.67-4.63 15.48zM93.88 154.8l.49 1.67L99 140.99l-.5-1.67-4.62 15.48z" className="filament { checked ? : 'filament-checked': '' }" />
        <rect width="2.36" height="59.85" x="53.05" y="138.65" className="prong" rx="1.18" ry="1.18" />
        <rect width="2.36" height="58.81" x="98.3" y="138.65" className="prong" rx="1.18" ry="1.18" />
        <path d="M41.05 193.11h71.61v46.03H41.05z" className="cls-2" />
        <ellipse cx="76.85" cy="239.14" className="cls-2" rx="35.81" ry="37.63" />
        <rect width="83" height="6.33" x="276.75" y="505.69" className="cls-3" rx="3.17" ry="3.17" transform="rotate(13.12 1474.696 -687.534)" />
        <rect width="83" height="6.33" x="277.26" y="518.19" className="cls-3" rx="3.17" ry="3.17" transform="rotate(13.12 1475.208 -675.038)" />
        <rect width="83" height="6.33" x="277.51" y="530.7" className="cls-3" rx="3.17" ry="3.17" transform="rotate(13.12 1475.454 -662.554)" />
        <rect width="27.39" height="6.33" x="278.36" y="536.89" className="cls-3" rx="3.17" ry="3.17" transform="rotate(13.12 1448.504 -656.327)" />
        <rect width="27.47" height="6.33" x="330.82" y="499.48" className="cls-3" rx="3.17" ry="3.17" transform="rotate(13.12 1500.99 -693.73)" />
        <g className="cls-4">
          <rect width="94.5" height="30.6" x="30.11" y="169.86" className={`cls-5 ${ checked ? 'cls-5-checked' : 'cls-5-unchecked' }`} rx="12.26" ry="12.26" />
          <circle cx="77.36" cy="77.36" r="77.36" className={`cls-5 ${ checked ? 'cls-5-checked' : 'cls-5-unchecked' }`} />
          <path d="M16.24 124.35c4 0 13.86 40.77 13.86 57.21h94.5c0-16.44 9.88-57.21 13.86-57.21H16.24z" className={`cls-5 ${ checked ? 'cls-5-checked' : 'cls-5-unchecked' }`} />
        </g>
      </svg>
    </div>
  );
}

export default LightBulb;