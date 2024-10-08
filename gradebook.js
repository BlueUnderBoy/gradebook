//Create gradebook 
var sid = 1;
var cid = 1;
var aid = 1;
var agid = 1;
var lid = 1;
let co = [];
let ao = [];
let ago = [];
let so = [];
let lo = [];
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

function LearnerObject(id, n) {
    lid++
    let d = {
        "learnerid":id,
        "lname":n
    }
    lo[n] = d
    return n + " has been added."
}

console.log(LearnerObject(lid, "LeBron James"))
console.log(LearnerObject(lid, "Kevin Durant"))
console.log(LearnerObject(lid, "Stephen Curry"))

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
        ago[agn]["alist"].push(r)
        return "Assignment " + ao[r]["aname"] + " has been added to " + ago[agn]["agname"]
}
console.log(ago)
console.log(AssignmentObject(aid, "JavaScript Exam", "2024-07-25", 25, "KBA_JSC"))
console.log(AssignmentObject(aid, "JavaScript Fundamentals", "2024-07-30", 75, "SBA_JSC"))
console.log(AssignmentObject(aid, "Python Exam", "2024-07-25", 25, "KBA_PYC"))
console.log(AssignmentObject(aid, "Python Fundamentals", "2024-07-30", 75, "SBA_PYC"))
console.log(AssignmentObject(aid, "Ruby Exam", "2024-07-25", 25, "KBA_RBC"))
console.log(AssignmentObject(aid, "Ruby Fundamentals", "2024-07-30", 75, "SBA_RBC"))
console.log(ao)

function SubmissionObject(ln, an) {
    sid++
    const today = new Date();
    const date = today.toISOString().split('T')[0];
    if (an.includes("KBA")) {
        const sday = new Date(ao[an]["duedate"])
        const ddate = sday.toISOString().split('T')[0];
        if (date > ddate) {
            let sub = ln + "_Submission_" + an
            let d = {
                "learnerid":lo[ln]["learnerid"],
                "assignmentid":ao[an]["aid"],
                "sinfo":{
                    "sdate":date,
                    "grade":((Math.random()+0.1)*25)-2.5
                }
            }
            so[sub] = d 
            return ln + " has succussfully submitted a KBA."
        }
        else {
            let sub = ln + "_Submission_" + an
            let d = {
                "learnerid":lo[ln]["learnerid"],
                "assignmentid":ao[an]["aid"],
                "sinfo":{
                    "sdate":date,
                    "grade":(Math.random()+0.1)*25
                }
            }
            so[sub] = d 
            return ln + " has succussfully submitted an KBA."
        }
    }
    else if (an.includes("SBA")) {
        const sday = new Date(ao[an]["duedate"])
        const ddate = sday.toISOString().split('T')[0];
        if (date > ddate) {
            let sub = ln + "_Submission_" + an
            let d = {
                "learnerid":lo[ln]["learnerid"],
                "assignmentid":ao[an]["aid"],
                "sinfo":{
                    "sdate": date,
                    "grade":(Math.random()+0.1)*75
                        }
                    }
            so[sub] = d 
            return ln + " has succussfully submitted a SBA."
            }
        else {
            let sub = ln + "_Submission_" + an
            let d = {
                "learnerid":lo[ln]["learnerid"],
                "assignmentid":ao[an]["aid"],
                "sinfo":{
                    "sdate": date,
                    "grade":(Math.random()+0.1)*75-7.5
                        }
                    }
            so[sub] = d 
            return ln + " has succussfully submitted a SBA."
            }
                                    }
    else {
        return "Enter a valid assignment"
        }
}                                                                                                                                                                                                               
console.log(SubmissionObject("LeBron James", "SBA_RBC_Ruby Fundamentals"))
console.log(SubmissionObject("LeBron James", "SBA_PYC_Python Fundamentals"))
console.log(SubmissionObject("LeBron James", "SBA_JSC_JavaScript Fundamentals"))
console.log(SubmissionObject("LeBron James", "KBA_RBC_Ruby Exam"))
console.log(SubmissionObject("LeBron James", "KBA_PYC_Python Exam"))
console.log(SubmissionObject("LeBron James", "KBA_JSC_JavaScript Exam"))
console.log(SubmissionObject("Kevin Durant", "SBA_RBC_Ruby Fundamentals"))
console.log(SubmissionObject("Stephen Curry", "SBA_RBC_Ruby Fundamentals"))

function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmission]) {
    /*let sub = ln + "_Submission_" + an
    let a = ao[an]["aid"]
    var pp = 0
    var sp = 0
    var avg = 0
    for (i=0;i<so.length;i++) {
        if (so[sub].includes(ln)) {
            sp += so[sub]["sinfo"]["grade"]
            pp += ao[an]["maxpoints"]
        }
        else {
            continue
        }
        avg += (sp/pp)*100
    }*/
    let d = {
        "id":lo[ln]["learnerid"],
        "avg":avg,
        [a]: so[sub]["sinfo"]["grade"]
    }
    return d
}
console.log(getLearnerData())
console.log(ao)