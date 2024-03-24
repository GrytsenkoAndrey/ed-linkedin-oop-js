// JavaScript code​​​​​​‌​‌​‌‌‌​​‌‌​‌​​‌​‌‌‌‌‌​‌​ below
// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const orderData = {
    restaurant: 'Chick-Fil-A',
    total: 14.73,
    customer: 'Henry Cavill'
}

// Your code goes here
class Order {
    construct(restaurant, total, customer) {
        this.restaurant = restaurant;
        this.total = total;
        this.customer = customer;
        this.foodStatus = 0;
        this.validFoodStatuses= [0, 1, 2, 3];
    }

    set restaurant(value) {
        this.restaurant = value;
    }

    set total(value) {
        this.total = value;
    }

    set customer(value) {
        this.customer = value;
    }

    set orderStatus(newStatus) {
        if (this.validFoodStatuses.includes(newStatus)) {
            this.foodStatus = newStatus;
        } else {
            this.foodStatus = null;
        }
    }

    get restaurant() {
        return this.restaurant;
    }

    get total() {
        return this.total;
    }

    get customer() {
        return this.customer;
    }

    get orderStatus() {
        switch(this.foodStatus) {
            case 0:
                return 'Waiting for the restaurant to accept the order';
            case 1:
                return 'Your order is being prepared';
            case 2:
                return 'Your order is ready for pick up';
            case 3:
                return 'Your order has been collected';
            default:
                return 'Something went wrong';
        }
    }
}