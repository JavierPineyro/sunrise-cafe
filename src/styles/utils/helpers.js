export const breakpoints = [
  {key: 'xs', value: 0},
  {key: 'sm', value: 576},
  {key: 'md', value: 768},
  {key: 'lg', value: 992},
  {key: 'xl', value: 1200},
  {key: 'xxl', value: 1400},
];

export const mediaMinwidth = breakpoints.reduce((minObject, {key, value}) => {
  minObject[key] = `@media (min-width: ${value}px)`;

  return minObject;
}, {});

export const mediaMaxwidth = breakpoints.reduce((maxObject, {key, value}) => {
  maxObject[key] = `@media (max-width: ${value - 0.2}px)`;

  return maxObject;
}, {});
