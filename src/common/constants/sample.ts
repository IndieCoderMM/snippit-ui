export interface Snippet {
  id: number;
  title: string;
  description: string;
  code: string;
  language: string;
  stars_counter: number;
  comments_counter: number;
  created_at: string;
  updated_at: string;
  user_id: number;
}

export const snippets: Snippet[] = [
  {
    id: 1,
    title: 'Python Fibonacci Sequence',
    description: 'A Python function to generate the Fibonacci sequence',
    code: 'def fibonacci(n):\n    fib = [0, 1]\n    for i in range(2, n+1):\n        fib.append(fib[i-1] + fib[i-2])\n    return fib\n\nprint(fibonacci(10))',
    language: 'Python',
    stars_counter: 10,
    comments_counter: 3,
    created_at: '2023-07-25T12:34:56',
    updated_at: '2023-07-25T14:12:34',
    user_id: 101,
  },
  {
    id: 2,
    title: 'JavaScript Event Listener',
    description: 'A code snippet demonstrating an event listener in JavaScript',
    code: "document.getElementById('myButton').addEventListener('click', function() {\n    alert('Button clicked!');\n});",
    language: 'JavaScript',
    stars_counter: 5,
    comments_counter: 2,
    created_at: '2023-07-25T10:20:30',
    updated_at: '2023-07-25T11:15:25',
    user_id: 102,
  },
  {
    id: 3,
    title: 'CSS Flexbox Layout',
    description: 'A CSS snippet demonstrating a basic flexbox layout',
    code: '.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}',
    language: 'CSS',
    stars_counter: 15,
    comments_counter: 7,
    created_at: '2023-07-25T08:45:10',
    updated_at: '2023-07-25T09:30:20',
    user_id: 103,
  },
  {
    id: 4,
    title: 'Custom React Hooks for Fetching Data in JavaScript',
    description:
      'This custom React hook provides a convenient and reusable way to fetch data from APIs or other external sources in React applications.',
    code: '/* Code for the custom React hook here */',
    language: 'JavaScript',
    stars_counter: 8,
    comments_counter: 4,
    created_at: '2023-07-24T16:50:12',
    updated_at: '2023-07-25T10:05:40',
    user_id: 104,
  },
  {
    id: 5,
    title: 'GDScript Player Movement',
    description:
      'A GDScript snippet demonstrating basic player movement in a 2D game.',
    code: 'extends KinematicBody2D\n\n/* GDScript code for player movement here */',
    language: 'GDScript',
    stars_counter: 12,
    comments_counter: 6,
    created_at: '2023-07-23T14:15:40',
    updated_at: '2023-07-25T13:00:00',
    user_id: 105,
  },
];
