/* вычисляем количество квартир в доме
дано количество подъездов, этажей и квартир на одном этаже.
нужно вывести количество квартир в одном подъезде и во всем доме.
*/

//количество подъездов
let entrances = 4;
//количестьво этажей
let floors = 9;
//кол - во квартир на этаже
let flatsPerFloor = 4;

let flatsPerEntrance = floors * flatsPerFloor;
console.log('Количество квартир в подъезде', flatsPerEntrance)

let flats = entrances * flatsPerEntrance;
console.log('всего квартир в доме', flats);

/*
пропорции для рецепта кровавой мери
даны пропорции ингридиентов для кровавой мери и объем напитка, 
который нужно получить. Выичслить необходимый объем ингридиентов из этих данных
*/

// ингридиенты
let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tobasco = 1;
let worcester = 1;

//желаемый объем
let volume = 500;

// коэффициент для получения объема ингридиента

let k = (vodka + tomatoJuice + lemonJuice + tobasco + worcester) / volume;

// сколько нужно водки для желаемого объема кровавой мери
console.log(vodka * k);


/*
вычисление дискримента и решение квадратного уравнения
a*x*x + b*x + c = 0
Даны параметры a, b и c для квадратного уравнения.
Нужно вывести возможные значения х этого уравнения.
*/

let a = 3;
let b = 5;
let c = 10;

let d = b * b - 4 * a * c;

// корень дискриминанта 
let dRoot = Math.sqrt(d);
console.log('x1 = ', (-b + dRoot) / (2 * a));
console.log('x2 = ', (-b + dRoot) / (2 * a));

/*
вычисляем n чисел ряда Финбоначчи.
Кажде следующее число - сумма двух предыдущих
*/

let n = 10;

let current = 0;
let prev = 1;
let prevPrev = 0;

while (n -- > 0) {
    prevPrev = prev;
    prev = current;
    current += prevPrev;
    console.log(current);
}