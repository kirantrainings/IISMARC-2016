//1. object literals

var employee={};
employee.id="1234";
employee.name="kiran";

//department class
var department ={};
department.deptId="D001";

employee.dept=department;

console.log(employee);

//second way
var person ={
    name:"Kiran", 
    age:30,
    dateOfBirth:"11/11/1998"
};


//third way
var vehicle=function(){
    //PRIVATE PROPERTY
    var vin="AKASDFADFADAS";
    //public properties
    this.year="";
    this.make="";
    this.model="";
};

var car= new vehicle();
car.year=2016;
car.make="nissan";
car.model="Terrano";
console.log(car);