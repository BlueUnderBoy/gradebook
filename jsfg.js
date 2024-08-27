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

function possible_points(id){
  for (b=0;b<AssignmentGroup.length;b++){
    if (AssignmentGroup["assignments"][b]["id"] == id){
      return AssignmentGroup["assignments"][b]["points_possible"]
    }
    else{continue}
  }
}

function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmission]) {
  let dopr = 0
  let dtpr = 0
  let dopp = 0
  let dtpp = 0
  const today = new Date();
  const date = today.toISOString().split('T')[0];

  let d1 = {
    "id": 125,
    "avg":0
  }

  let d2 = {
    "id": 132,
    "avg":0
  }

  for(i=0;i<LearnerSubmission.length;i++){
    if (LearnerSubmission[i]["learner_id"] == d1["id"]){
      for(a=0;a<AssignmentGroup.length;a++){
        if (AssignmentGroup["assignments"][a]["id"] == LearnerSubmission[i]["assignment_id"]){
          const AGDO = new Date(AssignmentGroup["assignments"][a]["due_at"])
          const LSDO = new Date(LearnerSubmission[i]["submission"]["submitted_at"])
          if (date>AGDO && AGDO >= LSDO) {
            d1[LearnerSubmission[i]["assignment_id"]] = (LearnerSubmission[i]["submission"]["score"])/possible_points(LearnerSubmission[i]["assignment_id"])
            dopr += LearnerSubmission[i]["submission"]["score"]
            dopp += possible_points(LearnerSubmission[i]["assignment_id"])
          }
          else if (date>AGDO) {
            d1[LearnerSubmission[i]["assignment_id"]] = (LearnerSubmission[i]["submission"]["score"]*0.9)/possible_points(LearnerSubmission[i]["assignment_id"])
            dopr += LearnerSubmission[i]["submission"]["score"]*0.9
            dopp += possible_points(LearnerSubmission[i]["assignment_id"])
          }
          else {continue}
        }
      }
    }  
  else {
    for(a=0;a<AssignmentGroup.length;a++){
      if (AssignmentGroup["assignments"][a]["id"] == LearnerSubmission[i]["assignment_id"]){
        const AGDO = new Date(AssignmentGroup["assignments"][a]["due_at"])
        const LSDO = new Date(LearnerSubmission[i]["submission"]["submitted_at"])
        if (date>AGDO && AGDO >= LSDO) {
          d2[LearnerSubmission[i]["assignment_id"]] = LearnerSubmission[i]["submission"]["score"]/possible_points(LearnerSubmission[i]["assignment_id"])
          dtpr += LearnerSubmission[i]["submission"]["score"]
          dtpp += possible_points(LearnerSubmission[i]["assignment_id"])
        }
        else if (date>AGDO) {
          d2[LearnerSubmission[i]["assignment_id"]] = (LearnerSubmission[i]["submission"]["score"]*0.9)/possible_points(LearnerSubmission[i]["assignment_id"])
          dtpr += LearnerSubmission[i]["submission"]["score"]*0.9
          dtpp += possible_points(LearnerSubmission[i]["assignment_id"])
        }
        else {continue}
      } 
    }
  }
  d1["avg"] = dopr/dopp
  d2["avg"] = dtpr/dtpp
  return d1["avg"] + "\n" + d2["avg"]
  }
}

const result = getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]);

console.log(result)
