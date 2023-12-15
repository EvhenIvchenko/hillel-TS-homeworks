type Levels = "junior" | "middle" | "senior";
type Directions ="up" | "down" | "left" | "right";

class School {
  grades: any = {};
  attendance: number[] = [];
  firstName: string;
  lastName: string;
  birthYear: number;
  
  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: any): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: number ): void {
    this.attendance.push(present);
  }
}
class Direction {
  directions: Directions[] = ["up", "down", "left", "right"];

  addDirection(direction: Directions): void {
    this.directions.push(direction);
  }
}

class Level {
  levels: Levels[] = ["junior", "middle", "senior"];
  grades: any = {};
  attendance: number[] = [];
  private _name: string;

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: Levels): void {
    this.levels.push(level);
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage: number =
      (this.attendance.filter((present) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

class Group {
  groups: string[] = [];
  private _program: string[];
  private _name: string;

  constructor(name: string, program: string[]) {
    this._name = name;
    this._program = program;
  }

  get name(): string {
    return this.name;
  }

  get program(): Array<string> {
    return this._program;
  }

  addGroup(group: string ): void {
    this.groups.push(group);
  }

}
class Student  {
  private _students: any[] = [];
  directionName: string;
  levelName: string;
  grades: any = {};
  attendance: number[] = [];
  
  get students() {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student: string): void {
    this._students.push(student);
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage: number =
      (this.attendance.filter((present) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }

  showPerformance() {
    const sortedStudents = this.students.sort(
      (a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }

}
