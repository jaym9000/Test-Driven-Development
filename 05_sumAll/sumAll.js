const sumAll = function(numOne, numTwo) {
    let sum = 0;

    if(numOne < 0 || numTwo < 0 || typeof numOne === 'string' || typeof numTwo === 'string'){ 
        return "ERROR";
    }else if(numOne > numTwo){
        for(let i=numTwo; i<= numOne; i++){
            sum+=i;
        }
    }else if(numOne < numTwo){
        for(let i=numOne; i<= numTwo; i++){
            sum+=i;
        }
    }else{
        return "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
