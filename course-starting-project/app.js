var person = {
    name: "Grandonk",
    age: 23,
    hobbies: ["Football", "Music"]
};
// The types infer
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
