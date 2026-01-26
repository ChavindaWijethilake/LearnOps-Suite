// prisma/seed.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const hash = (password) => bcrypt.hashSync(password, 10);

async function main() {
  console.log('Starting database seed...');
  
  // Clear existing data
  await prisma.progress.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.course.deleteMany();
  await prisma.bookmark.deleteMany();
  await prisma.resourceTag.deleteMany();
  await prisma.resource.deleteMany();
  await prisma.task.deleteMany();
  await prisma.project.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.attachment.deleteMany();
  await prisma.serviceRequest.deleteMany();
  await prisma.user.deleteMany();

  console.log('Cleared existing data');

  // Create demo users
  const user1 = await prisma.user.create({
    data: {
      email: 'student@example.com',
      name: 'Alex Student',
      password: hash('password123'),
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: hash('password123'),
    },
  });

  console.log('Created demo users');

  // ===== Service Requests =====
  await prisma.serviceRequest.create({
    data: {
      userId: user1.id,
      title: 'Need help with course registration',
      description: 'I cannot find the Computer Science major in the registration system.',
      category: 'Registration',
      status: 'open',
      priority: 'high',
    },
  });

  await prisma.serviceRequest.create({
    data: {
      userId: user1.id,
      title: 'Diploma request',
      description: 'Need official diploma for job application.',
      category: 'Documents',
      status: 'in-progress',
      priority: 'medium',
    },
  });

  await prisma.serviceRequest.create({
    data: {
      userId: user2.id,
      title: 'Building maintenance issue',
      description: 'Water leak in Room 301.',
      category: 'Facility',
      status: 'resolved',
      priority: 'high',
    },
  });

  console.log('Created service requests');

  // ===== Projects =====
  const project1 = await prisma.project.create({
    data: {
      userId: user1.id,
      name: 'Website Redesign',
      description: 'Complete redesign of the university website',
      color: '#3b82f6',
      status: 'active',
    },
  });

  const project2 = await prisma.project.create({
    data: {
      userId: user1.id,
      name: 'Mobile App Development',
      description: 'Build a companion mobile app',
      color: '#8b5cf6',
      status: 'active',
    },
  });

  console.log('Created projects');

  // ===== Tasks =====
  await prisma.task.create({
    data: {
      userId: user1.id,
      projectId: project1.id,
      title: 'Design homepage',
      description: 'Create mockups for the new homepage',
      status: 'todo',
    },
  });

  await prisma.task.create({
    data: {
      userId: user1.id,
      projectId: project1.id,
      title: 'Implement responsive design',
      description: 'Ensure mobile and tablet compatibility',
      status: 'in-progress',
    },
  });

  await prisma.task.create({
    data: {
      userId: user1.id,
      projectId: project1.id,
      title: 'Testing',
      description: 'Cross-browser testing',
      status: 'done',
    },
  });

  await prisma.task.create({
    data: {
      userId: user1.id,
      projectId: project2.id,
      title: 'Setup development environment',
      description: 'Configure React Native project',
      status: 'done',
    },
  });

  console.log('Created tasks');

  // ===== Courses & Lessons =====
  const course1 = await prisma.course.create({
    data: {
      title: 'Introduction to Web Development',
      description: 'Learn the basics of HTML, CSS, and JavaScript',
      category: 'Technology',
      level: 'beginner',
      duration: 480,
    },
  });

  const course2 = await prisma.course.create({
    data: {
      title: 'Advanced Python Programming',
      description: 'Master Python for data science and backend development',
      category: 'Technology',
      level: 'advanced',
      duration: 600,
    },
  });

  console.log('Created courses');

  // Create lessons for course 1
  const lesson1 = await prisma.lesson.create({
    data: {
      courseId: course1.id,
      title: 'HTML Basics',
      content: 'Learn HTML structure and semantic elements',
      duration: 45,
    },
  });

  const lesson2 = await prisma.lesson.create({
    data: {
      courseId: course1.id,
      title: 'CSS Styling',
      content: 'Master CSS for styling web pages',
      duration: 60,
    },
  });

  const lesson3 = await prisma.lesson.create({
    data: {
      courseId: course1.id,
      title: 'JavaScript Fundamentals',
      content: 'Learn JavaScript basics and DOM manipulation',
      duration: 90,
    },
  });

  // Create lessons for course 2
  await prisma.lesson.create({
    data: {
      courseId: course2.id,
      title: 'Python Syntax and Data Types',
      content: 'Review Python syntax and built-in data types',
      duration: 60,
    },
  });

  await prisma.lesson.create({
    data: {
      courseId: course2.id,
      title: 'Object-Oriented Programming',
      content: 'Learn OOP concepts in Python',
      duration: 90,
    },
  });

  console.log('Created lessons');

  // ===== Enrollments & Progress =====
  const enrollment1 = await prisma.enrollment.create({
    data: {
      userId: user1.id,
      courseId: course1.id,
      enrolledAt: new Date(),
    },
  });

  await prisma.enrollment.create({
    data: {
      userId: user1.id,
      courseId: course2.id,
      enrolledAt: new Date(),
    },
  });

  console.log('Created enrollments');

  // Create progress records
  await prisma.progress.create({
    data: {
      enrollmentId: enrollment1.id,
      lessonId: lesson1.id,
      completed: true,
      completedAt: new Date(),
    },
  });

  await prisma.progress.create({
    data: {
      enrollmentId: enrollment1.id,
      lessonId: lesson2.id,
      completed: true,
      completedAt: new Date(),
    },
  });

  await prisma.progress.create({
    data: {
      enrollmentId: enrollment1.id,
      lessonId: lesson3.id,
      completed: false,
    },
  });

  console.log('Created progress records');

  // ===== Resources =====
  const resource1 = await prisma.resource.create({
    data: {
      userId: user1.id,
      title: 'Ultimate Web Development Guide',
      description: 'Comprehensive guide covering modern web development practices',
      link: 'https://example.com/web-dev-guide',
      category: 'Guide',
    },
  });

  const resource2 = await prisma.resource.create({
    data: {
      userId: user1.id,
      title: 'React Best Practices',
      description: 'Collection of best practices for React development',
      link: 'https://example.com/react-best-practices',
      category: 'Article',
    },
  });

  const resource3 = await prisma.resource.create({
    data: {
      userId: user2.id,
      title: 'Database Design Patterns',
      description: 'Learn common database design patterns',
      link: 'https://example.com/db-patterns',
      category: 'Tutorial',
    },
  });

  console.log('Created resources');

  // Add tags to resources
  await prisma.resourceTag.create({
    data: {
      resourceId: resource1.id,
      tag: 'web',
    },
  });

  await prisma.resourceTag.create({
    data: {
      resourceId: resource1.id,
      tag: 'development',
    },
  });

  await prisma.resourceTag.create({
    data: {
      resourceId: resource2.id,
      tag: 'react',
    },
  });

  await prisma.resourceTag.create({
    data: {
      resourceId: resource2.id,
      tag: 'javascript',
    },
  });

  await prisma.resourceTag.create({
    data: {
      resourceId: resource3.id,
      tag: 'database',
    },
  });

  console.log('Created resource tags');

  // Add bookmarks
  await prisma.bookmark.create({
    data: {
      userId: user1.id,
      resourceId: resource1.id,
    },
  });

  await prisma.bookmark.create({
    data: {
      userId: user1.id,
      resourceId: resource2.id,
    },
  });

  console.log('Created bookmarks');

  console.log('✅ Database seeded successfully!');
}

main()
  .catch(e => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
