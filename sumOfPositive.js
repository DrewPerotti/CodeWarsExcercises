//https://www.codewars.com/kata/5715eaedb436cf5606000381

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr=[0]){
	let result = 0;
	for(let number of arr){
		if(Math.sign(number)>0){
			result += number
		}
	}
	return result
}
console.log(positiveSum())

//Worked as desired