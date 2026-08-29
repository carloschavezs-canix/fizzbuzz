import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {

    test("debería devolver 1 si recibe 1", () => {
        expect(fizzbuzz(1)).toEqual("1");
    });

});