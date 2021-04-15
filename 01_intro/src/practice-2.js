/*
Вычисляем расстояние м/д двумя точками.
Даны координаты x, y 2-x точек. Нужно вывести расстояние между ними.
Вычисляем по теореме пифагора
*/

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;

let cathetus1 = Math.abs(x1 - x2); //вычисляем абсолютное расстояние между координатами
let cathetus2 = Math.abs(y1 - y2); //вычисляем абсолютное расстояние между координатами

console.log(Math.sqrt(
    Math.pow(cathetus1,2) + Math.pow(cathetus2,2) //квадратный корень из суммы квадратов
));

/*
Сравниваем два дробных числа с указанной точностью.
Даны два числа и кол-во знаков после запятой, которое необходимо учитывать.
Вывести информацию, равны ли эти числа, больше ли первое число или меньше второго.
*/

let first = 0.1 + 0.2 + 0.033;
let second = 0.33334;
let precision = 3;

let firstNormalized = Math.round(
    first * Math.pow(10,precision) //первую цифру умножаем на 10 в кубе (т.к. нужна точность тысячных) и округляем
);
let secondNormolized = Math.round(
    second * Math.pow(10,precision) //вторую цифру умножаем на 10 в кубе (т.к. нужна точность тысячных) и округляем
);

console.log('Исходные числа равны', first === second); // сравниваем получившиеся цифры, true
console.log('Числа равны', firstNormalized === secondNormolized);// false
console.log('Первое число больше', firstNormalized > secondNormolized);// false
console.log('первое число меньше', firstNormalized < secondNormolized);// false



//Генератор случайных чисел между n до m.
// Учесть, что n необязательно меньше, чем m!

let n = -100;
let m = 350;

//кол-во цифр, которые могут быть сгенерированы
let range = Math.abs(m - n);
console.log(range)
// округленное число от 0 до range
let numberInRange = Math.round(Math.random() * range);
console.log(numberInRange)
//левая граница возможного числа
let min = Math.min(n,m);

console.log(min + numberInRange);


/*
Выводим отдельно целую и дробную части числа n
*/

let precision = 3;
let number = 0x12f + .3 + .1;

console.log('Исходное число', number); //303.40000000000003

console.log('Целая часть', Math.floor(number));//303
//остаток от деления на 1 возвращает дробную часть
console.log('Дробная часть', Math.round(number % 1 * Math.pow(10,precision)));//400


/*
справочник по Math - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
Числа, способы записи, математические функции - https://learn.javascript.ru/number
*/