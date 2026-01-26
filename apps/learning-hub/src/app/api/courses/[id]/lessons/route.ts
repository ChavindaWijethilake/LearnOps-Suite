import { cookies } from 'next/headers';

let lessons = [
  {
    id: '1',
    courseId: '1',
    title: 'HTML Basics',
    description: 'Learn the fundamentals of HTML',
    content: 'HTML is the standard markup language for web pages.\n\nKey concepts:\n- Tags and elements\n- Document structure\n- Semantic HTML\n\nStart by creating a basic HTML document with proper structure.',
    completed: false,
  },
  {
    id: '2',
    courseId: '1',
    title: 'CSS Styling',
    description: 'Master CSS for beautiful designs',
    content: 'CSS is used to style and layout web pages.\n\nKey concepts:\n- Selectors\n- Box model\n- Flexbox and Grid\n\nLearn to create responsive designs with CSS.',
    completed: false,
  },
  {
    id: '3',
    courseId: '1',
    title: 'JavaScript Fundamentals',
    description: 'Introduction to JavaScript programming',
    content: 'JavaScript is a programming language for web development.\n\nKey concepts:\n- Variables and data types\n- Functions\n- DOM manipulation\n\nPractice by building interactive web pages.',
    completed: false,
  },
  {
    id: '4',
    courseId: '2',
    title: 'React Components',
    description: 'Understanding React components',
    content: 'React is built on the concept of components.\n\nKey concepts:\n- Functional components\n- Props\n- State\n- Lifecycle\n\nBuild reusable components for scalable applications.',
    completed: false,
  },
  {
    id: '5',
    courseId: '2',
    title: 'Hooks Deep Dive',
    description: 'Master React hooks',
    content: 'Hooks let you use state and other React features in functional components.\n\nKey hooks:\n- useState\n- useEffect\n- useContext\n- Custom hooks\n\nWrite more efficient and maintainable code.',
    completed: false,
  },
  {
    id: '6',
    courseId: '3',
    title: 'Database Basics',
    description: 'Learn database fundamentals',
    content: 'Databases store and organize data efficiently.\n\nKey concepts:\n- Tables and relationships\n- SQL queries\n- Normalization\n\nDesign robust data schemas.',
    completed: false,
  },
];

let completedLessons: { [key: string]: Set<string> } = {
  'demo-user': new Set(),
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth')?.value;

    if (!token) {
      return Response.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const userId = 'demo-user';
    const completed = completedLessons[userId] || new Set();

    const courseLessons = lessons
      .filter(l => l.courseId === params.id)
      .map(l => ({
        ...l,
        completed: completed.has(l.id),
      }));

    return Response.json(courseLessons);
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
