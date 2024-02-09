function isDecimal(decimal) {
    let strBinary = ""; 

    while (decimal >= 1) {
        if(decimal % 2 ==0){
            strBinary= "0" + strBinary
        }
        else if(decimal % 2 == 1){
            strBinary= "1" + strBinary
        }
        decimal = Math.floor(decimal / 2)
    }
    return strBinary;
}

console.log( isDecimal(22))