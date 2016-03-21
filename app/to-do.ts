interface IPerson {
  name: string;
  email: string;
}

interface ITask {
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
}

class Task implements ITask {
  done: boolean = false;
  // ? means its optional
  constructor(public description: string, public priority: string, public assignedTo?: IPerson) {}
  markDone() {
    this.done = true;
  }
}

//extends keyword is used to inherit from parent class Task
class HomeTask extends Task {
    constructor(public description: string, public priority: string, public assignedTo?: IPerson) {
      super(description, priority, assignedTo);
    }
}

class WorkTask extends Task {
  //you can also change constructor. In this case WorkTask takes in dueDate property on top of base properties inherited from Parent class.
  constructor(public dueDate: Date, public description: string, public priority: string, assignedTo: IPerson) {
    super(description, priority, assignedTo);
  }
}

class HobbyTask extends Task {
  constructor(public description: string) {
    super(description, "low"); // use super() when you want to modify methods inherited from parent class. In this case vale of property "priority"
  }
}

var diane: IPerson = {
  name: "Diane D",
  email: "diane@epicodus.com"
}

var thor: IPerson = {
  name: "Thor son of Odin",
  email: "thor@asgard.com"
}
var loki: Iperson = {
  name: "God of mschief",
  email: "loki@geocities.com"
}

var tasks = [];
tasks.push(new HomeTask("Do the dishes", "High"));
tasks.push(new HomeTask("Buy chocolate", "Low", diane));
tasks.push(new HomeTask("Wash the laundry", "High"));

tasks.push(new HobbyTask("Practice origami"));
tasks.push(new HobbyTask("Bake a pie"));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog", "High", diane));
tasks.push(new WorkTask(tomorrow, "Go to meeting", "Medium", thor));
tasks.push(new WorkTask(nextDay, "Clean ceiling", "Low", loki));

console.log(tasks);
