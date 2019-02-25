import plus1 from './plus1';
console.log('sandbox');
console.log('call plus1', plus1(3));

console.log('NODE_ENV', process.env.NODE_ENV);
