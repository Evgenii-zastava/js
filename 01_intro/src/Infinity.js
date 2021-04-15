// infinity - бесконечность, больше любого числа

Infinity > 100500; //true
-Infinity < -100500; //true
100500 / 0; //infinity

Infinity === Infinity; //true

Infinity > Infinity; //false
Infinity < Infinity; //false

Infinity >= Infinity;// true
Infinity <= Infinity; //true

Infinity + Infinity;//Infinity
-Infinity - Infinity;// -Infinity

Infinity - Infinity;// NaN O_o
-Infinity + Infinity;//NaN O_o
Infinity/Infinity; //NaN

Infinity/10; //Infinity
Infinity*10;//Infinity
Infinity**10;//Infinity
Infinity**Infinity;//Infinity

Infinity ** -Infinity; //0
(-Infinity) ** Infinity;//Infinity

// Правила использования Infinity
//1. Не используйте Infinity без явной необходимости
//2. Все, что делает бесконечность еще более бесконечной, возвращает бесконечность
//3. Любые операции с Infinity, вернет Infinity
//4. Уменьшение Infinity при делении и вычитании (прибавлении при отрицательной) Infinity в JavaScript не работает
//5. Две Infinity равны
//6. Деление на 0 дает Infinity 