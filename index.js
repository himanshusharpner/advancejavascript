var obj = {num:2};
var obj2 = {num : 5};
var student = {age: 20};

let printAge = function (){
	console.log(this.age);

}

var addtoThis = function(a,b,c){
	return this.num + a + b + c;
}
//call Methode
console.log(addtoThis.call(obj, 1, 2, 3));

var arr = [1,2,3];
//apply Methode
console.log(addtoThis.apply(obj,arr));
console.log(addtoThis.apply(obj2, arr));

//bind methode
var bound = addtoThis.bind(obj);
console.log(bound(1,2,3));

//student object using bind

var bound1 = printAge.bind(student);
bound1();