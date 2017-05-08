// Задание 1. Создайте ассоциативный массив содержащий описание
// человека. Задайте поля: имя, возраст, пол, индивидуальный номер.
//     Заполните массив. Выведите его в консоли
// Name, age, gender, individual number.

// Задание 2. Добавьте в массив метод, который будет рассчитывать год рождения
// человека исходя из его возраста и возвращать его.

var human = {
    'name' : 'Alex',
    'age' : 32,
    'gender' : 'man',
    'indNumber' : 123456789,
    'year': function () {
        var yearB=2017-this.age;
        alert(yearB);
        console.log(yearB);
    }
};

console.log(human);
console.log('name: '+ human['name']);
console.log('age: '+ human['age']);
console.log('gender: '+ human['gender']);
human.year();


// Задание 3. Создайте ассоциативный массив свойство mas которое
// содержит массив чисел (любого количества), добавьте метод, который
// выводит сумму чисел содержащихся в mas.
var sumAll =0;
var sumArray = {
    'mas': [5, 6, 34, 12, 45],
    'sum': function () {
        for (var i=0; i<this.mas.length; i++) {
            sumAll += this.mas[i];
        }
        console.log('Sum Array: '+ sumAll);
    }
}
console.log(sumArray['mas']);
sumArray.sum();

// Задание 4. Создайте массив, ключами которого служат артикулы товара
// (любое пятизначное число), а значениями – ассоциативный массив,
// который содержит название товара, стоимость, вес единицы товара,
// ссылку на изображение, отметку о доступности товара на складе.
// Выведите массив в консоль. Выведите на страницу HTML описание
// первого товара.

var tovaru = {
    12341: {'name':'nametovar1','cost': 25, 'col': 3,'img':'images/cat_1.png','nal':'есть'},
    12342: {'name':'nametovar2','cost': 35, 'col': 2,'img':'images/cat_2.png','nal':'есть'},
    12343: {'name':'nametovar3','cost': 45, 'col': 3,'img':'images/cat_3.png','nal':'есть'},
    12344: {'name':'nametovar4','cost': 55, 'col': 1,'img':'images/cat_4.png','nal':'есть'}
}
console.log(tovaru);

//key - ключ
//tovaru - ассоциативный массив
//tovaru[key] - значение ключа
out = '';
for(key in tovaru) {
    out+='<div class="tovar">';
    out+='<div class="id_tovar">Id: '+ [key]+'</div>';
    out+='<div class="name">Название: '+ tovaru[key].name+'</div>';
    out+='<div class="cost">Цена : '+ tovaru[key].cost+'</div>';
    out+='<div class="col">Кол: '+ tovaru[key].col+'</div>';
    out+='<div class="img">'+'<img src="'+tovaru[key].img+'" alt="'+tovaru[key].name+'"></div>';
    out+='<div class="nal">Наличие: '+ tovaru[key].nal +'</div>';
    out+='</div>';
    break;
}
document.getElementById('tovar_wrapper').innerHTML = out;