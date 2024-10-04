// soal nomor 1
/* 
Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebutakan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika dan false jika sebaliknya.Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. Contoh,2, 4,6, 8adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan 2, 4, 6, 9bukanlah deret aritmatika karenatidak perbedaan selisih antar angka yang tidak konsisten.
*/

function isArithmeticProgression(numbers) {
	if (numbers.length < 2) {
		return false;
	}

	let numbersSelisih = numbers[1] - numbers[0];

	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] - numbers[i - 1] !== numbersSelisih) {
			return false;
		}
	}
}

return true;

console.log('1', isArithmeticProgression([1, 2, 3, 4, 5])); // true
console.log('2', isArithmeticProgression([2, 4, 5, 6, 12])); // false
console.log('3', isArithmeticProgression([2, 4, 6, 8])); // true
console.log('4', isArithmeticProgression([2, 6, 18, 54])); // false
console.log('5', isArithmeticProgression([1, 2, 3, 4, 7])); // false
