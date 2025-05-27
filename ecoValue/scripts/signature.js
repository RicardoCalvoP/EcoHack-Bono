import figlet from 'figlet';

console.clear();

figlet('Eco { Value } ', (err, data) => {
  if (err) {
    console.log('Error generando ASCII');
    return;
  }
  console.log(data);
  console.log('\n 🌱 Hecho con ♥ para el EcoHack-Bono\n');
});
