import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {

    test("debería devolver 1 si recibe 1", () => {
        expect(fizzbuzz(1)).toEqual(1);
    });
    
    test("debería devolver el mismo número si recibe otro número", () => {
        expect(fizzbuzz(2)).toEqual(2);
    });

     test("debería devolver Fizz si el número es múltiplo de 3", () => {
        expect(fizzbuzz(3)).toEqual("Fizz");
    });

    test("debería devolver Buzz si el número es múltiplo de 5", () => {
        expect(fizzbuzz(5)).toEqual("Buzz");
    });
});