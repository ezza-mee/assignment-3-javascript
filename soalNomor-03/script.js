// exercise 3
// Diberikan function yang menerima 2 parameter, yaitu array of integer (unsorted) dan integer. Function tersebutakan mengembalikan sebuah array di mana di dalam array tersebut mengandung array yang terdiri dari 2 angkayang jika dijumlahkan sama dengan integer.

function sumArray(arr, int) {
	let output = [];

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i; j < arr.length; j++) {
			if (arr[i] + arr[j] === int) {
				output.push([arr[i], arr[j]]);
			}
		}
	}

	return output.length > 0 ? output : false;
}

console.log(sumArray([2, 1, 4, 3], 5)); // output [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // output [[1, 10], [3, 8]]
