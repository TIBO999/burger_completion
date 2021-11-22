// создаем общий родительский класс
class Food {
    constructor(price, calories) {
        this.price = price;
        this.calories = calories;
    }
    getPrice() {
        return this.price;
    }
    getCalories() {
        return this.calories;
    }
}
// создаем дочерний класс - 'Burger' со свойством 'size'
class Burger extends Food {
    constructor(price, calories, size) {
        super(price, calories);
        this.size = size;
        this.getSize();
        this.getPrice();
        this.getCalories();
    }
    getSize() {
        let arr = document.getElementsByName('size');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].checked) {
                this.size = arr[i].value;
                return this.size;
            }
        }
    }
    getPrice() {
        switch (this.size) {
            case 'big':
                this.price = 100;
                break;
            case 'small':
                this.price = 50;
                break;
            default:
                this.price = 0;
        }
        return this.price;
    }
    getCalories() {
        switch (this.size) {
            case 'big':
                this.calories = 40;
                break;
            case 'small':
                this.calories = 20;
                break;
            default:
                this.calories = 0;
        }
        return this.calories;
    }
}
// создаем дочерний класс - 'Stuffing' со свойством 'stuffing'
class Stuffing extends Food {
    constructor(price, calories, stuffing) {
        super(price, calories);
        this.stuffing = stuffing;
        this.getStuffing();
        this.getPrice();
        this.getCalories();
    }
    getStuffing() {
        let arr = document.getElementsByName('stuffing');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].checked) {
                this.stuffing = arr[i].value;
                return this.stuffing;
            }
        }
    }
    getPrice() {
        switch (this.stuffing) {
            case 'cheese':
                this.price = 10;
                break;
            case 'salad':
                this.price = 20;
                break;
            case 'potato':
                this.price = 15;
                break;
            default:
                this.price = 0;
        }
        return this.price;
    }
    getCalories() {
        switch (this.stuffing) {
            case 'cheese':
                this.calories = 20;
                break;
            case 'salad':
                this.calories = 5;
                break;
            case 'potato':
                this.calories = 10;
                break;
            default:
                this.calories = 0;
        }
        return this.calories;
    }
}
// создаем дочерний класс - 'Topping' со свойством 'toppingType'
class Topping extends Food {
    constructor(price, calories, toppingType) {
        super(price, calories);
        this.toppingType = [];
        this.getTopping();
        this.getPrice();
        this.getCalories();
    }
    getTopping() {
        let arr = document.getElementsByName('topping');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].checked) {
                this.toppingType.push(arr[i].value);
            }
        }
        return this.toppingType;
    }
    getPrice() {
        this.price = 0;
        this.toppingType.forEach((value, index) => {
            if (this.toppingType[index] == 'spices') {
                this.price += 15;
            }
            else
                if (this.toppingType[index] == 'mayonnaise') {
                    this.price += 20;
                }
        });
        return this.price;
    }
    getCalories() {
        this.calories = 0;
        this.toppingType.forEach((value, index) => {
            if (this.toppingType[index] == 'spices') {
                this.calories += 0;
            }
            else
                if (this.toppingType[index] == 'mayonnaise') {
                    this.calories += 5;
                }
        });
        return this.calories;
    }
}
// создаем класс - 'Hamburger' со свойствами 'sumPrice' и 'sumCalories'
class Hamburger {
    constructor() {
        this.sumPrice = 0;
        this.sumCalories = 0;
        this.getSumPrice();
        this.getSumCalories();
    }
    getSumPrice() {
        let burg = new Burger();
        let stuff = new Stuffing();
        let topp = new Topping();
        this.sumPrice = burg.price + stuff.price + topp.price;
        document.querySelector('.bprice').innerHTML = `Your Burger Costs ${this.sumPrice} rubles`;
        return this.sumPrice;
    }
    getSumCalories() {
        let burg = new Burger();
        let stuff = new Stuffing();
        let topp = new Topping();
        this.sumCalories = burg.calories + stuff.calories + topp.calories;
        document.querySelector('.calories').innerHTML = `Your Burger Has ${this.sumCalories} calories`;
        return this.sumCalories;
    }
}
//создаем объект класса 'Humburger' и запускаем программу
let hum = new Hamburger();
// пересчет Humburger по событию изменения радио и чекбоксов
document.querySelectorAll('.ingredient').forEach(item => item.addEventListener('change', () => {
    document.querySelector('.bprice').innerHTML = `Your Burger Costs ${hum.getSumPrice()} rubles`;
    document.querySelector('.calories').innerHTML = `Your Burger Has ${hum.getSumCalories()} calories`;
}));
