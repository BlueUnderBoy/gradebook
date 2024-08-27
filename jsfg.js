// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript",
  };
  
// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function get_learner_ids(LearnerSubmission){
  let learner_ids = []
  for(a=0;a<LearnerSubmission.length;a++){
    if (learner_ids.includes(LearnerSubmission[a]["learner_id"])){
      continue
    }
    else {
      learner_ids.push(LearnerSubmission[a]["learner_id"])
    }
  }
  return learner_ids
}

function FindValidAssignments(AssignmentGroup) {
  const today = new Date();
  const date = today.toISOString().split('T')[0];
  let va = []
  for (c=0;c<AssignmentGroup["assignments"].length;c++){
    const sday = new Date(AssignmentGroup.assignments[c].due_at);
    const sdate = sday.toISOString().split('T')[0];
    if (sdate > date) {
      continue
    }
    else {
      va.push(AssignmentGroup["assignments"][c]["id"])
    }
  }
  return va
}

function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmission]) {
  let dopr = 0
  let dtpr = 0
  let dopp = 0
  let dtpp = 0

  //Create list of learners who submitted
  let lid = get_learner_ids(LearnerSubmission)
  
  console.log(lid)
  //create hashes for all learners who submitted
  let d1 = {}
  let d2 = {}
  for (b=0;b<lid.length;b++){
    if (b==0){
      d1["id"] = lid[b]
    }
    else {
      d2["id"] = lid[b]
    }
  }
  console.log(d1)
  console.log(d2)
  //Sort valid assignments from invalid
  let valid_assignments = FindValidAssignments(AssignmentGroup)
  console.log(valid_assignments)
  //Sort valid assignments submitted by learner
  let dos = []
  let dts = []
  for (d=0;d<LearnerSubmission.length;d++){
    if (LearnerSubmission[d]["learner_id"] == d1["id"]){
      if (valid_assignments.includes(LearnerSubmission[d]["assignment_id"])){
        dos.push(LearnerSubmission[d]["assignment_id"])
      }
      else {continue}
      }
    else {
      if (valid_assignments.includes(LearnerSubmission[d]["assignment_id"])){
        dts.push(LearnerSubmission[d]["assignment_id"])
      }
      else {continue}
    } 
  }
  console.log(dos)
  console.log(dts)

  //calculating possible points for all valid assignments for all learners who submitted
  for (e=0;e<dos.length;e++){
    for (f=0;f<AssignmentGroup["assignments"].length;f++){
      if (AssignmentGroup["assignments"][f]["id"] == dos[e]){
        dopp += AssignmentGroup["assignments"][f]["points_possible"]
      }
      else {continue}
    }
  }

  console.log(dopp)
  
  for (g=0;g<dts.length;g++){
    for (h=0;h<AssignmentGroup["assignments"].length;h++){
      if (AssignmentGroup["assignments"][h]["id"] == dos[g]){
        dtpp += AssignmentGroup["assignments"][h]["points_possible"]
      }
      else {continue}
    }
  }

  console.log(dtpp)

  //calculate earned points for all assignments for each learner
  for (y=0;y<dos.length;y++){
    for (z=0;z<LearnerSubmission.length;z++){
      for (yy=0;yy<AssignmentGroup["assignments"].length;yy++){
        const sday = new Date(LearnerSubmission[z]["submission"]["submitted_at"])
        const dday = new Date(AssignmentGroup["assignments"][yy]["due_at"])
        const sdate = sday.toISOString().split('T')[0];
        const ddate = dday.toISOString().split('T')[0];
        if (LearnerSubmission[z]["assignment_id"] == dos[y] && LearnerSubmission[z]["assignment_id"] == AssignmentGroup["assignments"][yy]["id"] && LearnerSubmission[z]["learner_id"] == d1["id"] && sdate <= ddate){
          dopr += LearnerSubmission[z]["submission"]["score"]
          d1[dos[y]] = ((LearnerSubmission[z]["submission"]["score"])/(AssignmentGroup["assignments"][yy]["points_possible"]))
        }
        else if (LearnerSubmission[z]["assignment_id"] == dos[y] && LearnerSubmission[z]["assignment_id"] == AssignmentGroup["assignments"][yy]["id"] && LearnerSubmission[z]["learner_id"] == d1["id"] && sdate>ddate){
          dopr += (LearnerSubmission[z]["submission"]["score"]*0.9)
          d1[dos[y]] = ((LearnerSubmission[z]["submission"]["score"]*0.9)/(AssignmentGroup["assignments"][yy]["points_possible"]))
        }
        else {continue}
      }
    }
  }

  console.log(dopr)
  
  for (k=0;k<dts.length;k++){
    for (l=0;l<LearnerSubmission.length;l++){
      for (kk=0;kk<AssignmentGroup["assignments"].length;kk++){
        const sday = new Date(LearnerSubmission[l]["submission"]["submitted_at"])
        const dday = new Date(AssignmentGroup["assignments"][kk]["due_at"])
        const sdate = sday.toISOString().split('T')[0];
        const ddate = dday.toISOString().split('T')[0];
        if (LearnerSubmission[l]["assignment_id"] == dts[k] && LearnerSubmission[l]["assignment_id"] == AssignmentGroup["assignments"][kk]["id"] && LearnerSubmission[l]["learner_id"] == d2["id"] && sdate <= ddate){
          dtpr += LearnerSubmission[l]["submission"]["score"]
          d2[dts[k]] = ((LearnerSubmission[l]["submission"]["score"])/(AssignmentGroup["assignments"][kk]["points_possible"]))
        }
        else if (LearnerSubmission[l]["assignment_id"] == dts[k] && LearnerSubmission[l]["assignment_id"] == AssignmentGroup["assignments"][kk]["id"] && LearnerSubmission[l]["learner_id"] == d2["id"] && sdate>ddate){
          dtpr += (LearnerSubmission[l]["submission"]["score"]*0.9)
          d2[dts[k]] = ((LearnerSubmission[l]["submission"]["score"]*0.9)/(AssignmentGroup["assignments"][kk]["points_possible"]))
        }
        else {continue}
      }
    }
  }
  console.log(dtpr)
  
  //get avg (weighted grade) for the class for each learner
  try{
    d1["avg"] = (dopr/dopp)*100 + "%"
    d2["avg"] = (dtpr/dtpp)*100 + "%"
  }
  catch (error) {
    console.log("Cannot divide by zero!")
  }

  //return output
  
  return [d1, d2]
}
 
const result = getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]);

console.log(result);
