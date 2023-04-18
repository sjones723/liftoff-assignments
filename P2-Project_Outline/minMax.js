function minMax(arr) {
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]
	let sorted = arr.sort(function(a, b){return a-b});
	let min;
	let max;
	if(sorted.length == 2){
		if(sorted[0]==sorted[1]){
			return sorted[0];
		}else{
			return [sorted[0],sorted[1]]
		}
	}
	return [sorted[0],sorted[sorted.length-1]]
}