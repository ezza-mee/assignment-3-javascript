// Exercise 4
// Sub array dapat diartikan sebagai bagian dari sebuah array yang bersambung.Subarray merupakan subset dari array asli yang mencakup elemen-elemen yang berurutan dari sebuah indeks awal hingga indeks akhir.Sebagai contoh, misalkan kita memiliki sebuah array berikut arr = [1, 2, 3, 4, 5, 6, 7][1, 2, 3] adalah sub array yang dimulai dari indeks 0 dan berakhir pada indeks 2.[4, 5] adalah subarray yang dimulai dari indeks 3 dan berakhir pada indeks 4.[1,2,4,5] bukan sub array karena tidak bersambung Diberikan satu buah input a.Dari semua kemungkinan sub array yang berasal dari a, sub array manakah yang akan memberikan sum terbesar apabila semua anggota subarray tersebut dijumlahkan.Input:a = [-2, -3, 4, -1, -2, 1, 5, -3]Expected Output:[[ 4, -1, -2, 1, 5] , 7]Explanation:[ 4, -1, -2, 1, 5] : Sub array yang akan memberikan jumlah terbesar7 : Sum dari subarray

function arrSum(arr) {
	let subSet = arr[0];
	let subArray = [];

	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			let useArr = arr.slice(i, j + 1);
			let sumArr = useArr.reduce((a, b) => a + b, 0);

			if (sumArr > subSet) {
				subSet = sumArr;
				subArray = useArr;
			}
		}
	}
	return [subArray, subSet];
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));
// output [[4, -1, -2, 1, 5], 7]
