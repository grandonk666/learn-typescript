// * Type Aliases
type Combinalbe = number | string; // * Union Types
type Converter = "as-number" | "as-string"; // * Literal Types w/ Union Types

// * Function w/ return type
function combine(
  input1: Combinalbe,
  input2: Combinalbe,
  convert: Converter
): Combinalbe {
  let result: Combinalbe;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (convert === "as-number") {
    return +result;
  }
  return result.toString();
}
