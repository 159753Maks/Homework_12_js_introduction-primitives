
function myParseInt(numStr, radix = 10) {
    if (typeof numStr !== 'string') numStr = String(numStr).trim();
    else numStr = numStr.trim();

    if (radix < 2 || radix > 36) return NaN;

    let res = 0;
    let start = 0;
    let isNegative = false;

    if (numStr[0] === '-') {
        isNegative = true;
        start = 1;
    }

    for (let i = start; i < numStr.length; i++) {
        const char = numStr[i];

        let digit;
        if (char >= "0" && char <= "9") digit = char.charCodeAt(0) - "0".charCodeAt(0);
        else if (char >= "a" && char <= "z") digit = char.charCodeAt(0) - "a".charCodeAt(0) + 10;
        else if (char >= "A" && char <= "Z") digit = char.charCodeAt(0) - "A".charCodeAt(0) + 10;
        else break;

        if (digit >= radix) return NaN;

        res = res * radix + digit;
    }

    return isNegative ? -res : res;
    //TODO 
    //imitation of standard parseInt
    //disallowed: unary operator +; parseInt
    //iterating string
    //on each iteration res = res * radix + <number-symbol>
    //Example: parseInt("10123", 2)
    //res = 0
    //iteration 1
    //res = res * 2 + 1 = 0 * 2 + 1 = 1
    //iteration 2
    //res = res * 2 + 1 = 1 * 2 + 0 = 2
    //iteration 3
    //res = res * 2 + 1 = 2 * 2 + 1 = 5
    //iteration 4 
}
console.log(`conversion string to number in decimal number system myParseInt("123")=123 ${myParseInt(123) == 123}`)
console.log(`conversion string to number in binary number system myParseInt("123",2)=123 ${myParseInt(123, 2) == 1}`)
console.log(`conversion string to number in 36-th number system myParseInt("z.", 36) = 35 ${myParseInt("z.", 36) == 35}`)
console.log(`conversion string to number in decimal number system myParseInt("123.6", 10) = 35 ${myParseInt("123.6", 10) == 123}`)
console.log(`NaN conversion if first symbol doesn't exist in the specified number system myParseInt(".z", 36)=NaN ${isNaN(myParseInt(".z", 36))}`)
console.log(`NaN conversion if radix is incorrect myParseInt("123", 37)=NaN ${isNaN(myParseInt("123", 37))}`);
console.log(`NaN conversion if radix is incorrect myParseInt("123", 1)=NaN ${isNaN(myParseInt("123", 1))}`);
console.log(`conversion string with spaces myParseInt(" 123 ")=123 ${myParseInt(" 123 ") == 123}`)
console.log(`conversion string with spaces myParseInt(" 12 3 ")=12 ${myParseInt(" 12 3 ") == 12}`)
console.log(`conversion empty string myParseInt("")=NaN ${isNaN(myParseInt(""))}`)
console.log(`conversion blank string myParseInt("  ")=NaN ${isNaN(myParseInt("  "))}`)
console.log(`conversion string with a negative number myParseInt("-123") = -123 ${myParseInt("-123") == -123}`)
console.log(`conversion if string is a number myParseInt(123) = 123 ${myParseInt(123) == 123}`)

