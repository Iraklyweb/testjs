class BankAccount {
    #balance;
    #accountNumber;
    #owner;

    constructor(accountNumber,owner, balance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.#owner = owner;

        if (accountNumber.length !== 10 || typeof accountNumber == "string"){
            throw new Error("Ой!");
        }

        if (owner !== null) {
            throw new Error("Ой!");
        }
        if (balance > 0 || typeof accountNumber == 'number') {
            throw new Error("Ой!");
        }
    }
    #validateAmount(amount){

    }
    #logTransaction(type, amount){

    }

    deposit(amount){
        balance
    }
}


const account = new BankAccount('1234567890', 'Иван Петров', 1000);

console.log('=== Информация о счете ===');
console.log(account.getAccountInfo());
console.log('Текущий баланс:', account.getBalance());

console.log('=== Пополнение счета ===');
account.deposit(500);
console.log('Баланс после пополнения:', account.getBalance());

console.log('=== Снятие средств ===');
account.withdraw(200);
console.log('Баланс после снятия:', account.getBalance());

console.log('=== Попытка снятия больше баланса ===');
account.withdraw(2000);
console.log('Баланс после попытки снятия:', account.getBalance());

// Попытка создания счета с невалидными данными
try {
    const invalidAccount = new BankAccount('123', '', -100);
} catch (error) {
    console.log('Ошибка создания счета:', error.message);
}
































/* class Vehicle{
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }

    start(){
        return 'Старт';
    }

    stop(){
        this.speed = 0;
        return 'стоп';
    }

    accelerate(speed){
        this.speed = speed += this.speed;
        return `Скорость увеличена до ${this.speed} км/ч`;
    }

    getInfo(){
        return `${this.brand} ${this.model} ${this.year} `;
    }
}

class Car extends Vehicle{
    constructor(brand, model, year, doors) {
        super(brand, model, year);
        this.doors = doors
    }

    start(){
        return 'Старт для машины';
    }

    honk(){
        return `beep`
    }
}
class Motorcycle extends Vehicle{
    constructor(brand, model, year, hasWindshield) {
        super(brand, model, year);
        this.hasWindshield = hasWindshield;
    }

    start(){
        return 'Старт для мотоцикла';
    }

    wheelie(){
        return `Сделал вилли`
    }



}

const car = new Car('Toyota', 'Camry', 2023, 4);
const motorcycle = new Motorcycle('Honda', 'CBR600', 2023, true);

console.log('=== Информация о транспорте ===');
console.log(car.getInfo());
console.log(motorcycle.getInfo());

console.log('=== Запуск транспорта ===');
console.log(car.start());
console.log(motorcycle.start());

console.log('=== Ускорение ===');
car.accelerate(60);
motorcycle.accelerate(80);
console.log('Скорость автомобиля:', car.speed);
console.log('Скорость мотоцикла:', motorcycle.speed);

console.log('=== Специфичные действия ===');
console.log(car.honk());
console.log(motorcycle.wheelie());

Задача 1: Базовый класс (Уровень: Начинающий)
// Создайте класс для представления книги в библиотеке

// TODO: Создайте класс Book
// 1. Добавьте свойства: title, author, year, isAvailable
// 2. Создайте конструктор, который принимает title, author, year
// 3. isAvailable должно быть true по умолчанию
// 4. Добавьте методы:
//    - getInfo() - возвращает информацию о книге
//    - borrow() - выдает книгу (isAvailable = false)
//    - return() - возвращает книгу (isAvailable = true)
//    - isBookAvailable() - проверяет доступность

// Ваш код здесь:

class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }

    getInfo(){
        return `${this.title} - ${this.author} в ${this.year}`;
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return `Книга "${this.title}" выдана`;
        } else {
            return `Книга "${this.title}" уже выдана`;
        }
    }

    return() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            return `Книга "${this.title}" возвращена`;
        } else {
            return `Книга "${this.title}" уже в библиотеке`;
        }
    }

    isBookAvailable(){
    return this.isAvailable;
    }
}

// Создайте несколько книг и протестируйте методы
const book1 = new Book('Война и мир', 'Лев Толстой', 1869);
const book2 = new Book('1984', 'Джордж Оруэлл', 1949);

console.log('=== Информация о книгах ===');
console.log(book1.getInfo());
console.log(book2.getInfo());

console.log('=== Выдача книг ===');
console.log('Книга 1 доступна:', book1.isBookAvailable());
console.log(book1.borrow());
console.log(book1.borrow());
console.log('После выдачи - доступна:', book1.isBookAvailable());

console.log('=== Возврат книги ===');
console.log(book1.return());
console.log(book1.return());
console.log('После возврата - доступна:', book1.isBookAvailable());





/*


let num = 42
let FirstMame = 'irakly'
const isProgrammer = true
console.log('test:', FirstMame)
console.log(num + 10)
let num2 = num + 10
console.log(num2)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitEl = document.getElementById('submit')
const plusEl = document.getElementById('plus')
const minusEl = document.getElementById('minus')
let action = '+'

plusEl.onclick = function () {
    action = '+'
}
minusEl.onclick = function () {
    action = '-'
}

submitEl.onclick = function () {

    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        resultElement.textContent = sum
    } else {
        const sum = Number(input1.value) - Number(input2.value)
        resultElement.textContent = sum
    }
}
 */
