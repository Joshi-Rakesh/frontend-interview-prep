import { Difficulty } from "../../../utility/difficultyColor";

export const jsQuestions = [
  {
    id: "what-is-jsx",
    title: "What is JSX and how is it converted into JavaScript?",
    description:
      "## React Example\n\nHere is some **important** code:\n\n```jsx\nconst [count, setCount] = useState(0);\n```",
    difficulty: Difficulty.Medium,
  },
  {
    id: "deep-equal",
    title: "What is Deep Equal?",
    description: ` 
# Main Heading

This is a normal paragraph below the main heading.

## Sub Heading

Here is some **bold text**, some *italic text*, and some ~~strikethrough text~~.

### Smaller Heading

Here are some bullet points:

- First bullet point
- Second bullet point
- Third bullet point
  - Nested bullet point
  - Another nested bullet
- Fourth bullet point

## Numbered List

1. First step
2. Second step
3. Third step

## Code Example

Here is some inline code: \`const name = "Rakesh";\`

And here is a code block:

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Rakesh"));
\`\`\`

## Blockquote

> This is a blockquote.
>
> It can contain multiple lines.

## Links

Visit [Microsoft](https://www.microsoft.com) for more information.

---

## Final Section

This is the final paragraph with **important information** and some \`inline code\`.

- Item A
- Item B
- Item C
**Deep equality** \n\n ## compares## two objects or arrays to determine whether they are structurally identical. Unlike shallow equality, which only checks whether object references are the same, deep equality examines every nested value.\n\nHere is a simple deepEqual implementation:\n\n\`\`\`js\nfunction deepEqual(obj1, obj2) {\n  if (obj1 === obj2) return true;\n\n  if (\n    obj1 == null ||\n    typeof obj1 !== "object" ||\n    obj2 == null ||\n    typeof obj2 !== "object"\n  ) {\n    return false;\n  }\n\n  const keys1 = Object.keys(obj1);\n  const keys2 = Object.keys(obj2);\n\n  if (keys1.length !== keys2.length) return false;\n\n  for (const key of keys1) {\n    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nconst object1 = {\n  name: "John",\n  age: 30,\n  address: {\n    city: "New York",\n    zip: "10001",\n  },\n};\n\nconst object2 = {\n  name: "John",\n  age: 30,\n  address: {\n    city: "New York",\n    zip: "10001",\n  },\n};\n\nconsole.log(deepEqual(object1, object2)); // true\n\`\`\`\n\nThis function uses recursion to check nested properties, ensuring that all values match in both objects and arrays. It is a useful concept when comparing complex data structures in frontend development.`,
    difficulty: Difficulty.Medium,
  },
];
