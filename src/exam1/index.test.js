var index = require("./index");

describe("Test",()=>{
    test("input 1 output I",()=>{
        var result = index.convertArabicToRoman(1);
        expect(result).toEqual("I");
    })
    test("input 2 output II",()=>{
        var result = index.convertArabicToRoman(2);
        expect(result).toEqual("II");
    })
        test("input 3 output III",()=>{
        var result = index.convertArabicToRoman(3);
        expect(result).toEqual("III");
    })
        test("input 4 output IV",()=>{
        var result = index.convertArabicToRoman(4);
        expect(result).toEqual("IV");
    })
        test("input 5 output V",()=>{
        var result = index.convertArabicToRoman(5);
        expect(result).toEqual("V");
    })
        test("input 6 output VI",()=>{
        var result = index.convertArabicToRoman(6);
        expect(result).toEqual("VI");
    })
        test("input 7 output VII",()=>{
        var result = index.convertArabicToRoman(7);
        expect(result).toEqual("VII");
    })
        test("input 8 output VIII",()=>{
        var result = index.convertArabicToRoman(8);
        expect(result).toEqual("VIII");
    })
        test("input 9 output IX",()=>{
        var result = index.convertArabicToRoman(9);
        expect(result).toEqual("IX");
    })
        test("input 10 output X",()=>{
        var result = index.convertArabicToRoman(10);
        expect(result).toEqual("X");
    })
     test("input not 1-10 output not support",()=>{
        var result = index.convertArabicToRoman("d");
        expect(result).toEqual("not support");
    })
})