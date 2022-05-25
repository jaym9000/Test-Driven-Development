const repeatString = function(string, num) {
    let i =1;
    let hey = '';

    if(string === ''){
        return '';
    }

    while(i<num){
        string+="hey";
        i++;
    }

    if(num < 0){
        return hey += "ERROR";
    }else if(num === 0){
        return '';    
    }else{
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
