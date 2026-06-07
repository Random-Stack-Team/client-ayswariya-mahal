const TextToSVG = require('text-to-svg');
const fs = require('fs');

TextToSVG.load('C:\\Windows\\Fonts\\georgia.ttf', function(err, textToSVG) {
  if (err) {
    console.error(err);
    return;
  }
  
  const options1 = { x: 0, y: 0, fontSize: 48, anchor: 'top', attributes: { stroke: 'var(--color-gold-leaf)', fill: 'transparent' } };
  const svg1 = textToSVG.getPath('Welcome to', options1);
  
  const options2 = { x: 0, y: 0, fontSize: 64, anchor: 'top', attributes: { stroke: 'var(--color-gold-leaf)', fill: 'transparent' } };
  const svg2 = textToSVG.getPath('Ayswariya Mahal', options2);
  
  fs.writeFileSync('paths.json', JSON.stringify({ p1: svg1, p2: svg2 }, null, 2));
});
