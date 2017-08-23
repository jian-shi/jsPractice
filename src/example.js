/**
 * Created by jshi on 28/04/17.
 */
// var fs = require ('fs')
// var output = fs.readFileSync ('src/data.txt', 'utf8')
//     .trim()
//     .split('\n')
//     .map(e=>e.split(','))
//     .reduce((customers, line)=>{
//         customers[line[0]] = customers[line[0]]||[];
//         customers[line[0]].push({
//             item: line[1],
//             price: line[2],
//             quantity: line[3]
//         })
//         return customers;
//     },{})
// console.log('output',JSON.stringify(output, null, 2));


// const dragonEvents = [
//     {type: 'attack', value: 12, target: 'player-1'},
//     {type: 'attack', value: 13, target: 'player-1'},
//     {type: 'eat', target: 'horse'},
//     {type: 'attack', value: 22, target: 'player-2'},
// ]
//
// const totalDamageOnPlayer1 = dragonEvents
//     .filter(({type})=>type==='attack')
//     .filter(({target})=>target==='player-1')
//     .map(({value})=>value)
//     .reduce((p,c)=> p + c ,0)
//
//
// console.log(totalDamageOnPlayer1);

//
// let dog ={
//     sound: 'woof',
//     talk:function(){
//         console.log(this.sound)
//     }
// }
//
// let talkFunction = dog.talk;
// let boundFunction = talkFunction.bind(dog);
// boundFunction()


// // *** Bind and This ***
// let talk = function talk() {
//     console.log(this.sound)
// };
//
// let robot = {
//     talk:  talk,
//     sound: 'One does not simple walk into mordor'
// }
//
// robot.talk()

// function talk() {
//     console.log(this.sound);
// }
//
// let animal = {
//     talk
// }
//
// let cat = {
//     sound: 'meow'
// }
//
// let dog = {
//     sound:'woof'
// }
//
// let prarieDog = {
//     howl(){console.log(this.sound.toUpperCase())}
// }
//
// Object.setPrototypeOf(cat, animal);
// Object.setPrototypeOf(dog, animal);
// Object.setPrototypeOf(prarieDog, dog);
//
// cat.talk();
// dog.talk();
// prarieDog.howl();
//
// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();

// console.log(1 +  "2" + "2");
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);

// for (var i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i); }, i * 1000 );
// }

// function indexOf(arr, item) {
//     var index = arr.indexOf(item);
//     console.log(index);
// }
//
// indexOf([ 1, 2, 3, 4 ], 3)

// function sum(arr) {
//     var total = (arr.reduce((a,b)=>a+b,0));
//     return total;
// }
//
// console.log(sum([1,2,3,4]));

// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
// 输入例子:
//     remove([1, 2, 3, 4, 2], 2)
//
// 输出例子:
//     [1, 3, 4]
// function remove(arr, item) {
//     function isItem(value) {
//         return value !== item;
//     }
//     var filtered = arr.filter(isItem);
//     return filtered;
// }
//
// console.log(remove([1, 2, 3, 4, 2], 2));

// 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
// 输入例子:
//     removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2)
//
// 输出例子:
//     [1, 3, 4]

// function removeWithoutCopy(arr, item) {
//     arr.forEach(
//         function () {
//             var indexOf = arr.indexOf(item);
//             arr.splice(indexOf,1);
//         }
//     );
//     return arr;
// }
//
// console.log(removeWithoutCopy([1,
// 2, 2, 3, 4, 2, 2], 2));

// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
// 输入例子:
//     append([1, 2, 3, 4],  10)
//
// 输出例子:
//     [1, 2, 3, 4, 10]
// function append(arr, item) {
//     newArray = arr.concat(item);
//     return newArray;
// }
//
// console.log(append([1, 2, 3, 4],10));

// function truncate(arr) {
//     function isLast(value){
//         console.log(arr.indexOf(value) + 1 != arr.length);
//         return arr.indexOf(value) + 1 != arr.length;
//     }
//     var newArr =arr.filter(isLast);
//     return newArr;
// }
// console.log(truncate([1, 2, 3, 4]));

// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
// 输入例子:
//     prepend([1, 2, 3, 4], 10)
//
// 输出例子:
//     [10, 1, 2, 3, 4]

// function prepend(arr, item) {
//     return [item].concat(arr);
// }
//
// console.log(prepend([1, 2, 3, 4], 10));

// function curtail(arr) {
//     function isFirst(v) {
//         return arr.indexOf(v) != 0
//     }
//
//     var newArr = arr.filter(isFirst);
//     return newArr;
// }
// console.log(curtail([1, 2, 3, 4]));

// function concat(arr1, arr2) {
//     var list = arr1.concat(arr2);
//     return list;
// }

// 题目描述
// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
// 输入例子:
//     insert([1, 2, 3, 4], 'z', 2)
//
// 输出例子:
//     [1, 2, 'z', 3, 4]
// function insert(arr, item, index) {
//      var list = arr.concat([]);
//      list.splice(index,0,item);
//      return list;
// }
//
// console.log(insert([1, 2, 3, 4], 'z', 2));


// 统计数组 arr 中值等于 item 的元素出现的次数
// 输入例子:
//     count([1, 2, 4, 4, 3, 4, 3], 4)
//
// 输出例子:
//     3
// function count(arr, item) {
//     var count = arr.reduce(
//         function (total, x) {
//             return x===item? total+1:total
//         }, 0
//     )
//
//     return count;
// }
// console.log(count([1, 2, 4, 4, 3, 4, 3], 4));

// 题目描述
// 找出数组 arr 中重复出现过的元素
// 输入例子:
//     duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort()
//
// 输出例子:
//     [1, 3, 4]
// function duplicates(arr) {
//     var list = [];
//     var newarr = [];
//     function createList (element, index){
//         list[element] = list[element]||[];
//         list[element].push(element);
//     }
//     function addToNewArr(element, index) {
//         if (element.length >1){
//             newarr.push(element[0]);
//         }
//     }
//     arr.forEach(createList);
//     list.forEach(addToNewArr);
//
//     return newarr;
// }
//
// console.log(duplicates([1,1,2,2,3,3,4,4,4,4,4,4,5,6,7,8,8]));

//为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组

// function square(arr) {
//
//     var result = arr.map(
//         function (x) {
//             return Math.pow(x,2);
//         }
//     );
//     return result;
// }
//
// console.log(square([1, 2, 3, 4]));

// function Foo() {
//     var i = 0;
//     return function() {
//         console.log(i++);
//     }
// }
//
// var f1 = Foo(),
//     f2 = Foo();
// f1(); //0
// f1(); //1
// f2(); //0

// var bb = 1;
// function aa(bb) {
//     bb = 2;
//     console.log(bb);
// }
// aa(bb);
// console.log(bb);

// var numbers = [111, 21, 13, 41];
// var number1 = Math.max(...numbers) // 4
// var number2 = Math.min(...numbers) // 1
//
// console.log(number1, number2);

// var count = (function(){
//     var _counter=0;
//     return function () {
//         return _counter +=1;
//     }
// })();
//
// console.log(count());


// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
// 输入例子:
//     findAllOccurrences('abcdefabc'.split(''), 'a').sort()
//
// 输出例子:
//     [0, 6]
// function findAllOccurrences(arr, target) {
//     var list = [];
//     function isMatch(value, index) {
//         value !== target || list.push(index);
//     }
//     arr.forEach(isMatch);
//     return list;
// }
//
// console.log(findAllOccurrences('abcdefabc'.split(''), 'a'))

// function globals() {
//     var myObject = {
//         name : 'Jory'
//     };
//
//     return myObject;
// }
//
// console.log(globals());

// function parse2Int(num) {
//     return parseInt(num, 10);
// }
//
// console.log(parse2Int('12'),parse2Int('12px'),parse2Int('0x12'));

// 实现一个打点计时器，要求
// 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 3、第一个数需要立即输出
// function count(start, end) {
//     console.log(start++);
//
//         var myVar = setInterval(
//             function () {
//                 if(start<=end){
//                     myTimer();
//                 }
//                 else{
//                     clearInterval(myVar)
//                 }
//
//             },1000
//         );
//
//
//     function myTimer() {
//         console.log(start++);
//     }
//
//     return {
//         cancel:function(){
//             clearInterval(myVar);
//         }
//     };
//
// }
//
// count(1,10);

// function fizzBuzz(num) {
//     switch (true){
//         case num == null || isNaN(num):
//             return false;
//             break;
//         case num%3==0&&num%5==0:
//             return "fizzbuzz";
//             break;
//         case num%3==0 :
//             return "fizz";
//             break;
//         case num%5==0:
//             return "buzz";
//             break;
//         default:
//             return num;
//


//     }
// }
//
// console.log(fizzBuzz(15));

// var items = [1,2,3,4];
// function printItems(a,b,c) {
//     console.log(a, b,c);
// }
// printItems(...items);
//
// var num = [1,23,343];
// var numPlusTen=num.map(
//     (n)=>n+10
// )
// console.log(numPlusTen)

// class Dog{
//     constructor(){
//         //this.bark=this.bark.bind(this);
//     }
//     bark(){
//         console.log("Hello");
//     }
// }
//
// var dog = new Dog();

//dog.print();

// var Button = function(content) {
//     this.content = content;
// };
// Button.prototype.click = function() {
//     console.log(this.content + ' clicked');
// }
//
// var myButton = new Button('OK');
// myButton.click();
//
// var looseClick = myButton.click;
// looseClick(); // not bound, 'this' is not myButton - it is the global object
//
// var boundClick = myButton.click.bind(myButton);
// boundClick(); // bound, 'this' is myButton

//use reduce to count items in an array
// var votes = [
//     'tacos',
//     'pizza',
//     'pizza',
//     'tacos',
//     'fries',
//     'ice cream',
//     'ice cream',
//     'pizza'
// ]
//
// var reducer = function(items, vote) {
//     items[vote]?items[vote] += 1:items[vote] = 1; //if param vote exist then vote value +1, else create vote and set it equals to 1
//     return items;
// }
// var result = votes.reduce(reducer, {}) // {tacos: 2, pizza: 3, fries: 1, ice cream: 2}
// console.log(result);
//
//     let dog = ()=>{
//         const sound = "woof"
//         return{
//             talk:()=>console.log(sound)
//         }
//     }
//
//     var sniffles = dog()
//     sniffles.talk()

// function isPrime(n)
// {
//     var divisor = 3,
//         limit = Math.sqrt(n);
//
//     //check simple cases
//     if (n == 2 || n == 3)
//         return true;
//     if (n % 2 == 0)
//         return false;
//
//     while (divisor <= limit)
//     {
//         if (n % divisor == 0)
//             return false;
//         else
//             divisor += 2;
//     }
//     return true;
// }
//
// console.log(isPrime(3));

// function twoSum(nums, target) {
//     let twoSumIndex = [];
//     nums.forEach(
//         (num) => {if (nums.indexOf(target-num) !== -1 && twoSumIndex.length === 0){
//             twoSumIndex.push(nums.indexOf(num));
//             twoSumIndex.push(nums.indexOf(target-num));
//         }}
//     )
//     return twoSumIndex;
// };
//
// console.log(twoSum([3,2,4],6))

// // Spread operator 把array分裂为独立元素
// var parts = ['shoulders', 'knees'];
// var lyrics1 = ['head', parts, 'and', 'toes'];
// var lyrics2 = ['head', ... parts, 'and', 'toes'];
//
// console.log(lyrics1) // [ 'head', [ 'shoulders', 'knees' ], 'and', 'toes' ]
// console.log(lyrics2) // [ 'head', 'shoulders', 'knees', 'and', 'toes' ]

// var person1 = {name: 'Marvin', age: 42, size: '2xM'};
// var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};
//
// var say = function(greeting){
//     console.log(greeting + " " + this.name);
// };
//
//
// say.apply(person1, ['Hello']); //call and apply both take obj as argument, apply takes array as argument
// say.call(person2, 'Hello'); //cal takes individual arguments
//
// var arr = [1,2,3];
// var arr2 = [...arr]; // like arr.slice()
// arr2.push(4)
// console.log(arr,arr2)

let numbers = [9, 4, 7, 1];
let result = Math.min(...numbers); // 1
console.log(result);
