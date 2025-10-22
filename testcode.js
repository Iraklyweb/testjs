class Box{
    constructor(name, age) {
        console.log('coздание класса');
        this.name = name;
        this.age = age;
    }

    hi(){
        console.log(this.name, this.age);
    }


}

let myBox = new Box('Bro', 22)
myBox.hi()
/**
 * Задача 1.7: Комбинирование методов массивов
 *
 * У вас есть массив пользователей:
 * const users = [
 *   { name: 'Иван', age: 25, city: 'Москва' },
 *   { name: 'Мария', age: 30, city: 'СПб' },
 *   { name: 'Петр', age: 35, city: 'Москва' },
 *   { name: 'Анна', age: 20, city: 'Казань' },
 *   { name: 'Сергей', age: 28, city: 'Москва' }
 * ];
 *
 * Выполните следующие операции, комбинируя методы массивов:
 *
 * 1. Получите имена пользователей старше 25 лет
 * 2. Получите пользователей из Москвы и преобразуйте их в строки
 * 3. Найдите средний возраст всех пользователей
 * 4. Создайте объект с количеством пользователей по городам
 * 5. Получите пользователей с именем длиннее 4 букв и отсортируйте по возрасту
 *
 * Пример результата:
 * Пользователи старше 25: ['Мария', 'Петр', 'Сергей']
 * Москвичи: ['Иван из Москвы', 'Петр из Москвы', 'Сергей из Москвы']
 * Средний возраст: 27.6
 * По городам: { 'Москва': 3, 'СПб': 1, 'Казань': 1 }
 * Длинные имена по возрасту: ['Сергей', 'Мария', 'Петр']
 */

const users = [
    { name: 'Иван', age: 25, city: 'Москва' },
    { name: 'Мария', age: 30, city: 'СПб' },
    { name: 'Петр', age: 35, city: 'Москва' },
    { name: 'Анна', age: 20, city: 'Казань' },
    { name: 'Сергей', age: 28, city: 'Москва' }
];

// Ваш код здесь:

// 1. Имена пользователей старше 25 лет
const olderNames = users
    .filter((user) => user.age > 25)
    .map(user => user.name);

// 2. Пользователи из Москвы в виде строк
const moscowUsers = users
    .filter(user => user.city === 'Москва')
    .map(user => user.name + ' из ' + user.city);

// 3. Средний возраст всех пользователей
const averageAge = users
    .map(user => user.age)
    .reduce((accumulator, current) => accumulator + current, 0) / users.length;

// 4. Количество пользователей по городам
//const cityCount = /* ваш код */;

// 5. Пользователи с длинными именами, отсортированные по возрасту
const longNamesSorted = users
    .filter(user => user.age.length > 4)
    .map(user => user.name);

// Проверка результатов
console.log('Пользователи старше 25:', olderNames);
console.log('Москвичи:', moscowUsers);
console.log('Средний возраст:', averageAge);
//console.log('По городам:', cityCount);
console.log('Длинные имена по возрасту:', longNamesSorted);







































/*

const fruits = ['яблоко', 'банан', 'апельсин', 'груша'];
const settings = { theme: 'dark', language: 'ru', notifications: true };

// Ваш код здесь:

// 1. for...of для фруктов
for (const fruit of fruits){
    console.log('Фрукты:', fruit)
}

 // 2. for...in для настроек
for (const key in settings) {
    console.log('Настройки:', key, settings[key]);
}

// 3. forEach для нумерации
fruits.forEach((fruit,index) => {
    console.log((index + 1)+". " +fruit);
})

// 4. Классический for в обратном порядке
console.log('\nОбратный порядок:');

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}


// 5. Строка с перечислением
const fruitsString = / ваш код /;
console.log('\nВсе фрукты:', fruitsString);

*/
