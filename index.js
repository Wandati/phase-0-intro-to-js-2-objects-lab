// Write your solution in this file!
const employee ={
    name:"Josh",
    StreetAdress:"Chicago",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return{
        ...employee,
        [key]:value
    };
}
const employee1 = updateEmployeeWithKeyAndValue(
     employee,
    'Josh',
    'Sam',
    'Chicago',
    '11 Broadway'
);
    
    

updateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam",
    employee.StreetAdress ="12 Broadway"
    return{
        employee,
        [key]:value
        
    };

}
function deleteFromEmployeeByKey(employee, key, value){
    return{
        ...employee,
        [key]:value
    };
}

const newEmployee = deleteFromEmployeeByKey(
      employee,
      delete employee.StreetAdress,
    
);

destructivelyDeleteFromEmployeeByKey(){
    delete newEmployee.name
    return newEmployee

}