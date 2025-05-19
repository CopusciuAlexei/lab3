 // Класс предмет (Item)
class Item {
    constructor(name, weight, rarity) {
        this.name = name;       // Название предмета
        this.weight = weight;   // Вес предмета
        this.rarity = rarity;   // Редкость: common, uncommon, rare, legendary
    }

    // Метод для получения информации о предмете
    getInfo() {
        return "Название: " + this.name + 
               ", Вес: " + this.weight + 
               " кг, Редкость: " + this.rarity;
    }

    // Метод для изменения веса
    setWeight(newWeight) {
        this.weight = newWeight;
    }
}

// Класс оружие (Weapon), который наследует Item
class Weapon extends Item {
    constructor(name, weight, rarity, damage, durability) {
        // Сначала вызываем конструктор родителя (Item)
        super(name, weight, rarity);
        this.damage = damage;         // Урон
        this.durability = durability; // Прочность (0 - 100)
    }

    // Метод использования оружия — уменьшает прочность
    use() {
        if (this.durability > 0) {
            this.durability = this.durability - 10;
            console.log(this.name + " использовано. Прочность теперь: " + this.durability);
        } else {
            console.log(this.name + " сломано! Нужен ремонт.");
        }
    }

    // Метод ремонта — восстанавливает прочность до 100
    repair() {
        this.durability = 100;
        console.log(this.name + " полностью отремонтировано.");
    }

    // Переопределяем getInfo для оружия
    getInfo() {
        return super.getInfo() + 
               ", Урон: " + this.damage + 
               ", Прочность: " + this.durability;
    }
}

// ---------- Тестирование ----------

// Создаём обычный предмет
let potion = new Item("Зелье здоровья", 0.5, "common");
console.log(potion.getInfo());
potion.setWeight(0.6);  // Меняем вес
console.log("Вес изменён.");
console.log(potion.getInfo());

console.log("\n");

// Создаём оружие — меч
let sword = new Weapon("Стальной меч", 3.5, "rare", 25, 100);
console.log(sword.getInfo());
sword.use();  // Используем меч
sword.use();  // Используем ещё раз
console.log("Прочность после использования: " + sword.durability);
sword.repair(); // Чиним меч
console.log("Прочность после ремонта: " + sword.durability);
console.log(sword.getInfo());

console.log("\n");

// Создаём оружие — лук
let bow = new Weapon("Длинный лук", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());
bow.use();  // Используем лук
console.log("Прочность лука: " + bow.durability);
