// const removeFromArray = function(arr, item) {
//     let index;
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] == item){
//             index = i;
//         }
//     }
//     arr.splice(index, 1);
//     return arr;
// };

const removeFromArray = function(arr, ...args) {
    let index;
    for(let j = 1; j< arguments.length;j++){
        for(let i = 0; i< arr.length; i++){
            if(arr[i] == arguments[j]){
                index = i;
            }
         }
        if(arr.includes(arguments[j]))
            arr.splice(index, 1);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
