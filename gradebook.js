//Create gradebook
/*function copyPerson(oldPerson) {
    const newPerson = {
        name: {},
        age: null,
        location: {}
    };
    newPerson.name.first = oldPerson.name.first;
    newPerson.name.last = oldPerson.name.last;
    newPerson.age = oldPerson.age;
    newPerson.location.city = oldPerson.location.city;
    newPerson.location.state = oldPerson.location.state;
    newPerson.location.zip = oldPerson.location.zip;
    
    return newPerson; 
};
*/
var sid = 1;
var cid = 1;
var aid = 1;
var agid = 1;
function CourseObject(id,n) {
    cid++
    n = {
        courseid:id,
        coursename:n
    }
    return n
}

console.log(CourseObject(cid,"JSC"))
console.log(CourseObject(cid,"PYC"))
console.log(CourseObject(cid,"RBC"))

