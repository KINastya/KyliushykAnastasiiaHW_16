// 1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let array = ["banana", 74, {animal: "lion"}, 2, false, [80]];
function des(arr){
    let arrayResult = arr.filter((value) => typeof value === 'number');
    return arrayResult.reduce((a, b) => (a + b) / arrayResult.length);
}
const desRes = des(array);
console.log(desRes);

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
const x = prompt('Введіть число x:');
const y = prompt('Введіть число y:');
const znak = prompt('Введіть рядок (+, -, *, /, %, ^ (ступінь))');

const mathResult = doMath(x, znak, y);

function doMath(x, znak, y) {
    if(!['+', '-', '*', '/', '%', '^'].includes(znak)) {
        return 'Ви допустились помилку у введенні значеннь';
    }
    return eval(`${x} ${znak.replace('^', '**')} ${y}`);
}
console.log(mathResult);

// 3.Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
function data() {
    const userDataFirst = prompt('Будь ласка вкажіть своє: Імя, Фамілію, Рік народження та улюбленні книги через кому.');
    const userDataSecond = prompt('Вкажіть своє хоббі, улюбленні місця відочинку та зарплатту яку ви би хотіли оримувати через кому.');
    const userArrFirs = userDataFirst.split(',');
    const userArrSec = userDataSecond.split(',');
    const userResult = [userArrFirs, userArrSec];

    console.log(userResult);
}
data();

// 4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
const answer = prompt('Введіть ряд слів');
const delet = prompt('Які символи бажаєте видалити?');

function userAnswer(answerByUser, deletByUser) {
    const symbol = new RegExp(`${deletByUser}`, 'g');
    return answerByUser.replace(symbol, '');
}

const result = userAnswer(answer, delet);
console.log(result);