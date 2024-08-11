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
    const r = n + "_" + cn 
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

function AssignmentObject(id, n, deadline, mp, agn) {
        aid++
        const r = agn + "_" + n
        let d = {
            "aid":id,
            "aname":n,
            "duedate":deadline,
            "maxpoints":mp,
            "agid":ago[agn]["agid"]
        }
        ao[r] = d
        return "Assignment " + ao[r]["aname"] + " has been added to " + ago[agn]["agname"]
}
console.log(ago)
console.log(AssignmentObject(aid, "JavaScript Exam", "2024-09-25", 25, "KBA_JSC"))
console.log(AssignmentObject(aid, "JavaScript Fundamentals", "2024-09-25", 75, "SBA_JSC"))
console.log(AssignmentObject(aid, "Python Exam", "2024-09-25", 25, "KBA_PYC"))
console.log(AssignmentObject(aid, "Python Fundamentals", "2024-09-25", 75, "SBA_PYC"))
console.log(AssignmentObject(aid, "Ruby Exam", "2024-09-25", 25, "KBA_RBC"))
console.log(AssignmentObject(aid, "Ruby Fundamentals", "2024-09-25", 75, "SBA_RBC"))
console.log(ao)