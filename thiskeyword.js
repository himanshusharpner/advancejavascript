
class Student{
	constructor(n, a, p, m) {
  this.name = n;
  this.age = a;
  this.pnum = p;
  this.bmarks = m;

  Student.instances += 1;
 
  this.printDetails = function() {
    console.log('Name: ' + this.name + ' Age: ' + this.age + ' Phone Number ' + this.pnum +  ' board marks: ' + this.bmarks);
  }
}
}
Student.instances = 0;
 function eleigibale(){
 	if(student1.bmarks > 40){
 		console.log("eleigibale for college");
 	}
 	else{
 		console.log("not eleigibale for college");
 	}

 }

var student1 = new Student('Abhinav', 21, 345623, 34);
var student2 = new Student('Himanshu', 24, 345623, 37);
var student3 = new Student('Rajat', 25, 345623, 34);
var student4 = new Student('Akshit', 25, 345623, 39);
var student5 = new Student('Aman', 26, 345623, 35);

student1.printDetails();
student2.printDetails();
student3.printDetails();
student4.printDetails();
student5.printDetails();
console.log("Student created: " + Student.instances) 
eleigibale();

