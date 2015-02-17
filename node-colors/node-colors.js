var luminosityExp = function(r,g,b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

var isLightExp = function(r,g,b) {
  if ((0.2126 * r + 0.7152 * g + 0.0722 * b) < 150) 
    return "dark";
  else 
    return "light";
}

var darkenExp = function(num) {
  return (num*80/100);
}

module.exports = {
  luminosityRGB: luminosityExp,
  isLight: isLightExp,
  darken: darkenExp
};


