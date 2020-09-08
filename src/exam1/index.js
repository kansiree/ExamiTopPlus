function convertArabicToRoman(value) {
    let roman = '';

    if(typeof value == 'number'){
        value = parseInt(value,10)
        roman +=  'M'.repeat(value / 1000);  value %= 1000; 
        roman += 'CM'.repeat(value / 900);   value %= 900; 
        roman +=  'D'.repeat(value / 500);   value %= 500;  
        roman += 'CD'.repeat(value / 400);   value %= 400;
        roman +=  'C'.repeat(value / 100);   value %= 100;
        roman += 'XC'.repeat(value / 90);    value %= 90;
        roman +=  'L'.repeat(value / 50);    value %= 50;
        roman += 'XL'.repeat(value / 40);    value %= 40;
        roman +=  'X'.repeat(value / 10);    value %= 10;
        roman += 'IX'.repeat(value / 9);     value %= 9;
        roman +=  'V'.repeat(value / 5);     value %= 5;
        roman += 'IV'.repeat(value / 4);     value %= 4;
        roman +=  'I'.repeat(value);
    return roman;
    }
    else {
        return "not support";
    }
}

module.exports = {
    convertArabicToRoman:convertArabicToRoman,
};
