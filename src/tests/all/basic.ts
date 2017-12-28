function greet(name: string, greeting = "hello"): string {
  return [greeting, name].join(" ");
}

const person = "john";

greet(person, "hi");
