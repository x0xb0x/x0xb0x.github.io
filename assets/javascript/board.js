'use strict';
d3.json('/assets/media/x0xb0x/schematics/mainboard.geojson-ld.json', (err, mainboard) => {
  if (err) console.error(err);
  console.log('Mainboard loaded');
});