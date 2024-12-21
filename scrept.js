// let greeting = "Привет, мир!";
// console.log(greeting.length);

// let str = "Привет, мир!"
// console.log(str.trim());


// let str1 = "Жим отир";
// let str2 = "Кисиб";
// let result = str1.concat(",", str2);
// console.log(result)

// let textL = "hello"
// console.log(textL.toUpperCase());

// let textU = "HELLO"
// console.log(textU.toLowerCase());

// let sentence ="JavaScript - отличный язык програмирования.";
// console.log(sentence.includes("отличный"));  //true
// console.log(sentence.includes("Python"));  //false

// let phrase = "Я люблю JavaScript! JavaScript";
// let newPhrase = phrase.replace("JavaScript", "Python");
// console.log(newPhrase);  // "Я люблю Python"

// let text = "JavaScript";
// console.log(text.slice(2,4));  // "va" (С 0 по 3 индекс)
// console.log(text.slice(4));  // "Script" (С 4 конца)

// console.log(text.slice(-6));  // "Script" 

let ism = prompt("Ismingizni kiriting:");
let harf = prompt("Qaysi harfni tekshirmoqchisiz? Kiriting:");
if (ism.includes(harf)) {
    alert(`Ha, hurmatli ${ism} ismida '${harf}' harfi bor.`);
} else {
    alert(`Yo'q, hurmatsiz ${ism} ismida '${harf}' harfi yo'q.`);
}