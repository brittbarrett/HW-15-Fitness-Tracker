let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate() - 10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 9),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 8),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 7),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 6),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 5),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 4),
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 3),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 2),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 1),
    exercises: [
      {
        type: "resistance",
        name: "Bench",
        duration: 30,
        distance: 2,
      },
    ],
  },
];

//const reducer = (accumulator, currentValue) => accumulator + currentValue;
//console.log(workoutSeed[0].exercises.reduce(reducer));
const allExercise = workoutSeed.map((workout) => workout.exercises);
//console.log(allExercise);

//console.log(allExercise[0][0].duration);
const sum = allExercise.reduce((sum, workout) => sum + workout[0].duration, 0);
console.log(sum);

// 1 + 2 + 3 + 4
//console.log(workoutSeed.exercises.duration.reduce(reducer));
