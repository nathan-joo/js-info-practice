//https://javascript.info/string#tasks

//task 1 Uppercase the first character


function ucFirst(str){
    let first = str.slice(0,1).toUpperCase();
    let second = str.slice(1);
    return first+second;
}

//task 2 Check for spam

function checkSpam(str){
    let lowerstr = str.toLowerCase();
    return lowerstr.includes("viagra")||lowerstr.includes("xxx");
        
}

//task 3 Truncate the text

function truncate(str, maxlength){
    
    if (maxlength >= str.length){
    return str; 
    }
    else{
        return str.slice(0, maxlength-1) + "…"
    }    
}

//task 4 Extract the money

function extractCurrencyValue(dollar){
    return +dollar.slice(1);
}