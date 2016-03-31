// understand the loops

function getStudentInformation() {
    var students = [
        "Kiran",
        "Jasvir",
        "Avinash",
        "Ankur",
    "Mamatha",
    "Sachin"];
    return students;
}

function printStudentNames() {
    var students = getStudentInformation();
    // length 
    // string or arrary .length will give the count of elements.

    var myName = "kiran";
    console.log(students.length);
    console.log(myName.length);

    //understaing For loop
    //var i=0;// initializaiton of i;
    // i<students // condition
    // i++ increment
    // i-- decrement
    for (var i = 0; i < students.length;i++){
        console.log(i);
        console.log(students[i]);
    }
    for (var k = 0; k<students.length;k++) {
        console.log(students[k]);
        if (k == 3) {
            break;
        }
    }
}

function whileLoop() {
    var i = 0;
    var students = getStudentInformation();
    while (i < students.length) {
        console.log(students[i]);
        i++;
    }
}

//whileLoop();
//printStudentNames()

function UnderstandForInLoop() {
    var person = {
        firstName: "Kiran",
        lastName: "PVS",
        age: 30,
        address:"Hyderabad"
    };

    var employees = [{ firstName: "kiran", lastName: "PVS" },
                       { firstName: "Chandana", lastName: "Shree" }
                       ];
    for (var emp in employees) {
        console.log(employees[emp]);
    }

}

UnderstandForInLoop();