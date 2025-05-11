// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
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
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  console.log(LearnerSubmissions[0].submission.score+LearnerSubmissions[1].submission.score+LearnerSubmissions[2].submission.score/ AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible+AssignmentGroup.assignments[2].points_possible);
  console.log(LearnerSubmissions[3].submission.score +LearnerSubmissions[4].submission.score/AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible);
  try {
     function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    let studentids = [];
    for(let i = 0; i < LearnerSubmissions.length; i++){
     studentids.push(LearnerSubmissions[i].learner_id);
 
    }
    console.log (studentids);

   let id = [];
   for(let i = 0; i < studentids.length; i++){
    if(!id.includes(studentids[i])){
        id.push(studentids[i]);
    }
   }
   console.log(id);

   const obj1 = {};
   const obj2 = {};
   let result = [];
   for(let i = 0;i< id.length;i++){

    if(id[i] === 125){
      obj1.id = id[0];
      obj1["1"] = studentgrades[0];
      obj1["2"] = studentgrades[1];
      obj1["3"] = studentgrades[2];

    }else if(id[i] === 132){
      obj2.id = id[1];
      obj2["1"] = studentgrades[3];
      obj2["2"] = studentgrades[4];
    }
   }
   console.log(obj1);
   console.log(obj2);
   console.log(studentgrades[0]);
   console.log(id);
   result.push(obj1);
   result.push(obj2);
   
   obj1.average = LearnerSubmissions[0].submission.score+LearnerSubmissions[1].submission.score+LearnerSubmissions[2].submission.score/ AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible+AssignmentGroup.assignments[2].points_possible;
   obj2.average = LearnerSubmissions[3].submission.score +LearnerSubmissions[4].submission.score/AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible;
   console.log(result)


   let student = [];
   for(let i = 0;i< id.length && studentgrades.length;i++){
    let studentID = id[i]
    let StudentGrade = studentgrades[i]
    let obj = {
      id:studentID,
      grades: StudentGrade,
      grades1: StudentGrade

    }
    student.push(obj);
   }
   console.log(student)

   return student


  }
 

  let studentgrades = [];
  for(i = 0; i < LearnerSubmissions.length; i++){
    studentgrades.push(LearnerSubmissions[i].submission.score);
  }
  console.log(studentgrades);


  // let gradID = [];
  // for(let i = 0; i < studentgrades.length;i++){
  //   if(!gradID.includes(studentgrades[i])){
  //     gradID.push(studentgrades[i]);

  //   }
  // }
  // console.log(gradID);

  LearnerSubmissions.forEach ((array) =>{
    console.log("id:"+array.learner_id + " grade:" + array.submission.score );


  })
  // let total = 0;

  console.log(AssignmentGroup.assignments[0].points_possible);
  // console.log(AssignmentGroup.assignments[1].id/LearnerSubmissions[1].submission.score);
  // console.log(AssignmentGroup.assignments[2].id/LearnerSubmissions[2].submission.score);
  
  
//  console.log(LearnerSubmissions[0].submission.score+LearnerSubmissions[1].submission.score+LearnerSubmissions[2].submission.score/ AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible+AssignmentGroup.assignments[2].points_possible);
//  console.log(LearnerSubmissions[3].submission.score +LearnerSubmissions[4].submission.score/AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible);




  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
  
  } catch (error) {
    console.log(error)
  }
   