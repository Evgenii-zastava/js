/*
Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка. 
Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. 
Выведите результат с помощью console.log.
*/

let x1 = 10;
let y1 = 5;

let x2 = 2;
let y2 = 3;

let firstSide = Math.abs(Math.abs(x1) - Math.abs(x2));
let secondSide = Math.abs(Math.abs(y1) - Math.abs(y2));

console.log('Площадь квадрата', firstSide * secondSide);



/*
Вычислите дробные части чисел a и b с точностью n.
Выведите получившиеся числа с помощью console.log. 
Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

Примеры для проверки:
Для a = 13.123456789, b = 2.123, n = 5 дробные части: 12345, 12300.
Для a = 13.890123, b = 2.891564, n = 2 дробные части: 89, 89.
Для a = 13.890123, b = 2.891564, n = 3 дробные части: 890, 891.
*/


let a = 13.890123;
let b = 2.891564;
let n = 3;

let integerNumberA = Math.floor(a);
let integerNumberB = Math.floor(b);

let fractionalRemainderA = a - integerNumberA;
let fractionalRemainderB = b - integerNumberB;

let fractionalPartA = Math.floor(fractionalRemainderA * Math.pow(10,n));
let fractionalPartB = Math.floor(fractionalRemainderB * Math.pow(10,n));

console.log('Дробная часть а', fractionalPartA);
console.log('Дробная часть b', fractionalPartB);
console.log('Дробная часть а меньше дробной части b', fractionalPartA < fractionalPartB);
console.log('Дробная часть а больше дробной части b', fractionalPartA > fractionalPartB);
console.log('Дробная часть а меньше/равно дробной части b', fractionalPartA <= fractionalPartB);
console.log('Дробная часть а больше/равно дробной части b', fractionalPartA >= fractionalPartB);
console.log('Дробная часть а не равно дробной части b', fractionalPartA != fractionalPartB);
console.log('Дробная часть а равно дробной части b', fractionalPartA === fractionalPartB);


/*
Написать генератор нечётных случайных чисел в диапазоне между n и m включительно. 
Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m. 
Вывести результат с помощью console.log.

Для проверки подставляйте различные значения m и n и смотрите на корректность результата. 
Так как число случайное, для одного набора входных параметров рекомендуется запустить код 5–10 раз. 
Примеры чисел m и n, для которых алгоритм должен корректно работать:
n = 0, m = 100;
n = 2, m = 5;
n = 100, m = −5;
n = -3, m = −10.
*/
    let min = 0;
    let max = 100;

    min = Math.ceil(min);
    max = Math.floor(max/2);
    console.log((Math.floor(Math.random() * (max - min)) + min)*2+1); 
  