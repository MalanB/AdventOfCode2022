const fs = require('fs');
const _  = require('underscore')

var fileContent = fs.readFileSync('input.txt','utf-8')

totalCalories = 0;
elfCalorieList = [];
fileContent.split('\n').forEach(element => {
    if(element.length > 0){
        totalCalories += Number(element);
    }
    else {
        elfCalorieList.push(totalCalories);
        totalCalories = 0;
    }
});

maxValue = Math.max(...elfCalorieList);
console.log(maxValue);