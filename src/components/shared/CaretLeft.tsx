import React from 'react';

export default ({ color = '#07689F' }) => (
  <svg
    width='8'
    height='14'
    viewBox='0 0 8 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.22788 13.8094L7.8466 13.1906C7.99303 13.0442 7.99303 12.8068 7.8466 12.6603L2.19975 7.00001L7.8466 1.3397C7.99303 1.19326 7.99303 0.955826 7.8466 0.809357L7.22788 0.190639C7.08144 0.0442012 6.844 0.0442012 6.69753 0.190639L0.153346 6.73486C0.0069087 6.8813 0.0069087 7.11873 0.153346 7.2652L6.69753 13.8094C6.844 13.9558 7.08144 13.9558 7.22788 13.8094Z'
      fill={color}
    />
  </svg>
);