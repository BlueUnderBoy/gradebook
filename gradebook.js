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
let co = [];
let ao = [];
let ago = [];
let so = [];
function CourseObject(id,n) {
    cid++
    let d = {
        "courseid":id,
        "coursename":n
    }
    co[n] = d
    return "Course " + co[n]["coursename"] + " has been added" 
}

console.log(CourseObject(cid,"JSC"))
console.log(CourseObject(cid,"PYC"))
console.log(CourseObject(cid,"RBC"))

function AGObject(id, n, cid, wp) {
    agid++
    let d = {
        "agid":id,
        "agname":n,
        "courseid":cid,
        "wp": wp,
        "alist":[]
    }
    ago[n] = d
    return "Assignment Group " + ago[n]["agname"] + " has been added for " + co[(cid-1)]
}

console.log(AGObject(agid,"KBA", 1, 0.25))
console.log(AGObject(agid,"SBA", 1, 0.75))
console.log(AGObject(agid,"KBA", 2, 0.25))
console.log(AGObject(agid,"SBA", 2, 0.25))
console.log(AGObject(agid,"KBA", 3, 0.25))
console.log(AGObject(agid,"SBA", 3, 0.25))