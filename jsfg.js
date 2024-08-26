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
      if (AssignmentGroup[b]["id"] == id){
        return AssignmentGroup[b]["points_possible"]
      }
      else{continue}
    }
  }

  function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmission]) {
    let avg = 0
    let dopr = 0
    let dtpr = 0
    let dopp = 0
    let dtpp = 0
    const today = new Date();
    const date = today.toISOString().split('T')[0];
    
    let d1 = {
      "id": 125,
        "avg":avg
        //aid: score on assignment
    }

    let d2 = {
        "id": 132,
        "avg":avg
        //aid: score on assignment
    }

    for(i=0;i<LearnerSubmission.length;i++){
      if (LearnerSubmission[i]["learner_id"] == d1["id"]){
          if (date>AssignmentGroup["assignments"][i]["due_at"] && AssignmentGroup["assignments"][i]["due_at"] >= LearnerSubmission[i]["submission"]["submitted_at"]) {
              d1[LearnerSubmission[i]["assignment_id"]] = (LearnerSubmission[i]["submission"]["score"])/possible_points(LearnerSubmission[i]["assignment_id"])
              dopr += LearnerSubmission[i]["submission"]["score"]
              dopp += possible_points(LearnerSubmission[i]["assignment_id"])
          }
          else if (date>AssignmentGroup["assignments"][i]["due_at"]) {
            d1[LearnerSubmission[i]["assignment_id"]] = (LearnerSubmission[i]["submission"]["score"]*0.9)/possible_points(LearnerSubmission[i]["assignment_id"])
            dopr += LearnerSubmission[i]["submission"]["score"]*0.9
            dopp += possible_points(LearnerSubmission[i]["assignment_id"])
          }
          else {continue}
      }
      else {
          if (date>AssignmentGroup["assignments"][i]["due_at"] && AssignmentGroup["assignments"][i]["due_at"] >= LearnerSubmission[i]["submission"]["submitted_at"]) {
            d2[LearnerSubmission[i]["assignment_id"]] = LearnerSubmission[i]["submission"]["score"]/possible_points(LearnerSubmission[i]["assignment_id"])
            dtpr += LearnerSubmission[i]["submission"]["score"]
            dtpp += possible_points(LearnerSubmission[i]["assignment_id"])
          }
          else if (date>AssignmentGroup["assignments"][i]["due_at"]) {
            d2[LearnerSubmission[i]["assignment_id"]] = (LearnerSubmission[i]["submission"]["score"]*0.9)/possible_points(LearnerSubmission[i]["assignment_id"])
            dtpr += LearnerSubmission[i]["submission"]["score"]*0.9
            dtpp += possible_points(LearnerSubmission[i]["assignment_id"])
          }
          else {continue}
      }
  }


}

  
  /*function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0, // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833, // late: (140 - 15) / 150
      },
    ];
  
    return result;
  }*/
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
  