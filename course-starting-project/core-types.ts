const person = {
  name: "Grandonk",
  age: 23,
  hobbies: ["Football", "Music"],
};
//* The types infer

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}

// ===============================================================

const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //* Tuple
} = {
  name: "Sugito",
  age: 43,
  hobbies: ["Fishing", "Music"],
  role: [1, "admin"],
};

// ===================================================================

enum Role {
  ADMIN,
  AUTHOR,
  EDITOR,
} // * Enum

const person3 = {
  name: "Grandonk",
  age: 23,
  hobbies: ["Football", "Music"],
  role: Role.ADMIN,
};
