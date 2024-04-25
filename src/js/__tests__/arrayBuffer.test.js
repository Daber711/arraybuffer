const ArrayBufferConverter = require('../ArrayBufferConverter');
const { getBuffer } = require('../getBuffer');

function runTests() {
  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();
  
  converter.load(buffer);
  
  const jsonString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const convertedString = converter.toString();
  
  if (jsonString === convertedString) {
    console.log('Тест успешно пройден.');
  } else {
    console.error('Тест не пройден. Ожидалось:', jsonString);
    console.error('Фактически получено:', convertedString);
  }
}

runTests();