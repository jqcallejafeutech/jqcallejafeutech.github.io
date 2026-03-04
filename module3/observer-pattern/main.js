function Subject() {
    this.observers = [];
}

Subject.prototype = {
    subscribe: function (observer) {
        this.observers.push(observer);
    },
    unsubscribe: function (observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    },
    notify: function (data) {
        this.observers.forEach(observer => observer.update(data));
    }
};

function Observer(name) {
    this.name = name;
}