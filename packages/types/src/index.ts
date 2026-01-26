// Common types used across all apps

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
}

export interface AuthSession {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

export interface ServiceRequest {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  userId: string;
  name: string;
  description?: string;
  status: 'active' | 'archived' | 'completed';
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  userId: string;
  projectId: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  content: string;
  videoUrl?: string;
  order: number;
  duration?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  status: 'active' | 'completed' | 'dropped';
  enrolledAt: Date;
  completedAt?: Date;
}

export interface Resource {
  id: string;
  userId: string;
  title: string;
  description?: string;
  category: string;
  link?: string;
  filePath?: string;
  fileType?: string;
  createdAt: Date;
  updatedAt: Date;
}
