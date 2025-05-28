import figlet from 'figlet';

console.clear();

figlet('Eco { Value } ', (err, data) => {
  if (err) {
    console.log('Error generando ASCII');
    return;
  }
  console.log('\x1b[32m%s\x1b[0m', data); // Color verde
});
