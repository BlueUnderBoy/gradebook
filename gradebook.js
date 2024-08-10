//Create gradebook
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

function AGObject(id, n, cn, wp) {
    agid++
    r = cn + "_" + n 
    let d = {
        "agid":id,
        "agname":n,
        "courseid":co[cn]["courseid"],
        "wp": wp,
        "alist":[]
    }
    ago[r] = d
    return "Assignment Group " + ago[r]["agname"] + " has been added for " + co[cn]["coursename"]
}
console.log(co)
console.log(AGObject(agid,"KBA", "JSC", 0.25))
console.log(AGObject(agid,"SBA", "JSC", 0.75))
console.log(AGObject(agid,"KBA", "PYC", 0.25))
console.log(AGObject(agid,"SBA", "PYC", 0.75))
console.log(AGObject(agid,"KBA", "RBC", 0.25))
console.log(AGObject(agid,"SBA", "RBC", 0.75))
console.log(ago)