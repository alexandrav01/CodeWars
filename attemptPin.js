// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or
//exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {

    if (Number.isInteger(pin)){
        if (pin>1000 && pin<9999){
            return "true"
        } 
        else if (pin>100000 && pin<999999){
            return "true"
        } else return "false"
    } else return "false"
 
}
console.log(validatePIN("1123a"))
