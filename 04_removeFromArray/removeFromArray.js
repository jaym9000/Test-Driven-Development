const removeFromArray = function(arr, item) {
    let index;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] == item){
            index = i;
        }
    }
    arr.splice(index, 1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
