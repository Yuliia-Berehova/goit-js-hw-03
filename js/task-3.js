const findBestEmployee = function (employees) {
  let bestEmployee;
  let maximumTasksAmount = 0;

  for (const employee in employees) {
    const tasks = employees[employee];
    if (tasks > maximumTasksAmount) {
      maximumTasksAmount = tasks;
      bestEmployee = employee;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);
