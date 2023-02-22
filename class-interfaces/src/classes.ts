class Department {
  // id:string
  // name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`This is ${this.name} department with id (${this.id})`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(
      `${this.name} departmen have ${this.employees.length} employees`
    );
    console.log("Employees: " + this.employees.join(", "));
  }
}

class AccountingDepartment extends Department {
  private lastAdmin: string;
  constructor(id: string, private admins: string[]) {
    super(id, "Accounting");
    this.lastAdmin = admins[0];
  }
  get recentAdmin() {
    if (!this.lastAdmin) {
      throw new Error("No admins");
    }
    return this.lastAdmin;
  }
  addEmployee(employee: string) {
    if (employee.length > 3) {
      this.employees.push(employee);
    }
  }
  addAdmin(admin: string) {
    this.admins.push(admin);
    this.lastAdmin = admin;
  }
  printAdmin() {
    console.log("Admin: " + this.admins.join(", "));
  }
}

const accounting = new AccountingDepartment("A1", []);
accounting.addEmployee("Grandonk");
accounting.addEmployee("As");
accounting.describe();
accounting.printEmployees();
accounting.addAdmin("Tejo");
accounting.printAdmin();

console.log(accounting.recentAdmin);
console.log(accounting);
