// Reza Arya Irhamilah

// exercie 2
// Diberikan sebuah function yang menerima satu parameter berupa string. Function tersebut mengembalikan nilaitrue jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.Jika tidak ditemukan sama sekali, kembalikan nilai false.

function threeStepAB(text) {
	for (let i = 0; i < text.length; i++) {
		if (text[i] === 'a') {
			if (text[i + 4] === 'b') {
				return true;
			}
		}
		if (text[i] === 'b') {
			if (text[i + 4] === 'a') {
				return true;
			}
		}
	}
	return false;
}

console.log(threeStepAB('lane borrewed')); // true
console.log(threeStepAB('i am sick')); // false
console.log(threeStepAB('you are boring')); // true
console.log(threeStepAB('barbarian')); //true
console.log(threeStepAB('bacon and meat')); // false
