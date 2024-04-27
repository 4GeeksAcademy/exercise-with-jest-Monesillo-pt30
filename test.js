// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("1.07 dollars should be 156.5 yen", function(){
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(2);
    const expected = 2 * 156.5;
    expect(fromDollarToYen(2)).toBe(313);
})
test("156.5 yen should be 0.79 pound", function(){
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(2);
    const expected = 2 * 0.79 ;
    expect(fromYenToPound(2)).toBe(1.58);
})