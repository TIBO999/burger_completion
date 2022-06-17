// создаем класс 'Hamburger'
class Hamburger {
    constructor () {
        // ассоциативный массив данных связанный с размером
        this.size = {
            name: '',
            price: 0,
            calories: 0
        };
        // ассоциативный массив данных связанный с начинкой
        this.stuffing = {
            name: '',
            price: 0,
            calories: 0
        };
        // ассоциативный массив данных связанный с добавками
        this.topping = {
            name: [],
            price: 0,
            calories: 0
        };
        // цена бургера в сборе
        this.price = 0;
        // калорийность бургера в сборе
        this.calories = 0;
        // Узнать цену - запускаем расчет цены при создании объекта
        this.calculateCalories();
        // Узнать калорийность - запускаем расчет калорийности при создании объекта
        this.calculatePrice();
    }
    // Узнать размер гамбургера
    getSize() {
        this.size.name = [];
        this.size.price = 0;
        this.size.calories = 0;
        let arr = document.getElementsByName('size');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].checked) {
                this.size.name = arr[i].value;
                switch (this.size.name) {
                    case 'big':
                        this.size.price += 100;
                        this.size.calories += 40;
                        break;
                    case 'small':
                        this.size.price += 50;
                        this.size.calories += 20;
                        break;
                    default:
                        this.size.price += 0;
                        this.size.calories += 0;
                }
            }
        }
        return this.size;
    }
    // Узнать начинку гамбургера
    getStuffing() {
        this.stuffing.name = [];
        this.stuffing.price = 0;
        this.stuffing.calories = 0;
        let arr = document.getElementsByName('stuffing');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].checked) {
                this.stuffing.name = arr[i].value;
                switch (this.stuffing.name) {
                    case 'cheese':
                        this.stuffing.price += 10;
                        this.stuffing.calories += 20;
                        break;
                    case 'salad':
                        this.stuffing.price += 20;
                        this.stuffing.calories += 5;
                        break;
                    case 'potato':
                        this.stuffing.price += 15;
                        this.stuffing.calories += 10;
                        break;
                    default:
                        this.stuffing.price += 0;
                        this.stuffing.calories += 0;
                }
            }
        }
        return this.size;
    }
    // Получить список добавок
    getToppings() {
        this.topping.name = [];
        this.topping.price = 0;
        this.topping.calories = 0;
        let arr = document.getElementsByName('topping');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].checked) {
                this.topping.name.push(arr[i].value);
                this.topping.name.forEach((value, index) => {
                    if (this.topping.name[index] == 'spices' && this.topping.price <= 0) {
                        this.topping.price += 15;
                        this.topping.calories += 0;
                    }
                    else
                        if (this.topping.name[index] == 'mayonnaise') {
                            this.topping.price += 20;
                            this.topping.calories += 5;
                        }
                });
            }
        }
        return this.topping;
    }
    // Узнать цену
    calculatePrice() {
        this.getSize()
        this.getStuffing()
        this.getToppings()
        this.price = this.size.price + this.stuffing.price + this.topping.price;
        document.querySelector('.bprice').innerHTML = `Your Burger Costs ${this.price} rubles`;
        return this.price;
    }
    // Узнать калорийность
    calculateCalories() {
        this.getSize()
        this.getStuffing()
        this.getToppings()
        this.calories = this.size.calories + this.stuffing.calories + this.topping.calories;
        document.querySelector('.calories').innerHTML = `Your Burger Has ${this.calories} calories`;
        return this.calories;
    }
}

//создаем объект Humburger и запускаем программу
let hum = new Hamburger();
// пересчет Humburger по событию изменения радио и чекбоксов
document.querySelectorAll('.ingredient').forEach(item => item.addEventListener('change', () => {
    document.querySelector('.bprice').innerHTML = `Your Burger Costs ${hum.calculatePrice()} rubles`;
    document.querySelector('.calories').innerHTML = `Your Burger Has ${hum.calculateCalories()} calories`;
}));
