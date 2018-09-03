// function SuperClass(){
//   this.superValue = "father";
// }
// SuperClass.prototype.getSuperValue = function(){
//   return this.superValue;
// }
// function SubClass(){
//   this.subValue = "son";
// }
// SubClass.prototype = new SuperClass;
// SubClass.prototype.getSubValue = function(){
//   return this.subValue
// }
//
// var instance = new SubClass();
// console.log(instance.getSuperValue());
// console.log(instance.getSubValue());

// var colors = ['red','green','blue'];
// console.log(colors);
// //由于数组的最后一位始终是lenght-1，因此可以用length添加新项目
// colors[colors.length]='black'
// console.log(colors);

// function createComparison(propertyName) {
//   return function (obj1, obj2) {
//     var value1 = obj1[propertyName];
//     var value2 = obj2[propertyName];
//
//     if(value1 < value2){
//       return -1;
//     }else if(value1 > value2){
//       return 1;
//     }else{
//       return 0;
//     }
//   }
// }
// console.log(createComparison)
// var data = [{name: "Zac", age:28}, {name:"Nic", age:29}];
// console.log(data.sort(createComparison("name")));
// var a=[];
// for(let i=0; i<5; i++){
//   a[i]= function(){
//     console.log(i);
//   }();
// };

// let arrayLike={
//   '0':'a',
//   '1':'b',
//   '2':'c',
//   length:3
// };
//
// let arr2 = Array.from(arrayLike);
// console.log(arr2);

// let dog={
//   sound: 'woof',
//   talk: function(){
//     console.log(this.sound);
//   }
// }
// //dog.talk()
// let talkFunction = dog.talk
// talkFunction.bind(dog)()

// function foo(){
//
//   console.log(this.a);
//   debugger;
// }
// var obj2 = {
//   a:2,
//   foo:foo
// }
//
// var obj1 = {
//   a:24,
//   obj2: obj2
// }
//
// obj1.obj2.foo();
// function bar() {
//   console.log("bar");
//   foo();
// }
// function foo() {
//   debugger;
//   console.log("foo");
// }
//
// baz();

// function foo(){
//   console.log(this.a)
// }

// var obj ={
//   a:2,
//   foo:foo
// }

// var bar = obj.foo;
// var a = "opps, global";
// bar();
// var color = "blue"
// function changeColor(){
//   if(color ==="blue"){
//     color="red";
//   }else{
//     color="blue";
//   }
// }
// changeColor();

// console.log(color);


// function sum(a,b){
//   return a+b;
// }
//
// console.log(sum(0.1,0.2));

// function gdpCal(n, total, rate){
//   if(n===1) return total*(1+rate);
//   return dgpCal(n-1, n*total);
// }

// console.log(gdpCal(1,0.5,3));
// function factorial(n, total = 1) {
//   if (n === 1) return total;
//   console.log(total);
//   return factorial(n - 1, n * total);
// }

// console.log(factorial(5)) // 120

// const puddingFlavors = ['chocolate', 'banana', 'butterscotch', 'pistachio'];
// const deletePuddingAtIndex = (index) => {
//   puddingFlavors.splice(index, 1);
// }

// deletePuddingAtIndex(1);
// console.log(puddingFlavors);
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
  
//     console.log('Index: ' + i + ', element: ' + arr[0]);
  
// }

// var decodeBits = function(bits){
//     let trimed = bits.match(/1+.*1/);
//     trimed
//     let len = trimed[0].split('0').filter (v=>v!='').sort()[0].length
//     let rate
//     if (len%3==0){
//         rate = len/3;
//     }
//     else{
//         rate = len;
//     }
    
//     var re3u0 = new RegExp('([0]){'+ 3*rate +'}','g')
//     var re3u1 = new RegExp('([1]){'+ 3*rate +'}','g')
  
//     var re1u0 = new RegExp('([0]){'+ 1*rate +'}','g')
//     var re1u1 = new RegExp('([1]){'+ 1*rate +'}','g')
    
//     return bits[0].replace(re3u1, '-').replace(re3u0, ' ').replace(re1u1, '.').replace(re1u0, '')
// }

// var decodeMorse = function(morseCode){
//     // ToDo: Accept dots, dashes and spaces, return human-readable message

//     return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
// }
// console.log(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'))


// function digital_root(n) {
//     let nums = n.toString().split('').map(Number)
//     result = nums.reduce((a,c) => a+c)
//     result
//     if (nums.length == 1 )
//     {
//         return nums[0];
//     }
//     return digital_root(result);
    
// }
// console.log(digital_root(132189))\

// const barker = (state)=> ({
//     bark:()=>console.log(`Wood, I am ${state.name}`)
// })
// let murderRobotDog =(name)=>{
//     let state = {
//         name, 
//         speed:1000,
//         position: 0
//     }
//     return Object.assign(
//         {},
//         barker(state)
//     )
// }

//murderRobotDog('sniffle').bark()

// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};

// const sleep = (timeountMS) => new Promise((resolve) => {
//     setTimeout(resolve, timeountMS);
// });

// (async () => { 
//     for (var i = 0; i < 5; i++) {
//         await sleep(1000);
//         console.log(new Date, i);
//     }

//     await sleep(1000);
//     console.log(new Date, i);
// })();

var x = 1;
for (var i = 0; i < 3; i++) {
  x += 5 * i;
}
console.log(x);
