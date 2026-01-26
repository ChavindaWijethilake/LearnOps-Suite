import { LayoutDashboard, BookOpen, DollarSign, BarChart3, Settings, LogOut, CreditCard, TrendingUp, Users, Zap } from 'lucide-react';
import type { NavigationItem } from '@/lib/types';

/**
 * NAVIGATION CONFIGURATIONS FOR EACH PORTAL
 * Each portal should import the appropriate config and pass it to AppShell
 */

// ============================================================================
// IDENTITY & ACCESS PORTAL (MAIN)
// ============================================================================
export const identityPortalNav: NavigationItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin', 'super_admin'],
  },
  {
    label: 'My Profile',
    href: '/profile',
    icon: <Users className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin', 'super_admin'],
  },
  {
    label: 'Security',
    href: '/security',
    icon: <Zap className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin', 'super_admin'],
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <Settings className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin', 'super_admin'],
  },
  {
    label: 'Portals Hub',
    href: '/portals',
    icon: <LayoutDashboard className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin', 'super_admin'],
  },
];

// ============================================================================
// LMS PORTAL
// ============================================================================
export const lmsPortalNav: NavigationItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin'],
  },
  {
    label: 'Courses',
    href: '/courses',
    icon: <BookOpen className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin'],
  },
  {
    label: 'Assignments',
    href: '/assignments',
    icon: <BookOpen className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher'],
  },
  {
    label: 'Attendance',
    href: '/attendance',
    icon: <TrendingUp className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin'],
  },
  {
    label: 'Exams',
    href: '/exams',
    icon: <TrendingUp className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin'],
  },
  {
    label: 'Class Management',
    href: '/classes',
    icon: <Users className="w-5 h-5" />,
    allowedRoles: ['teacher', 'institution_admin'],
  },
];

// ============================================================================
// FEES & SCHOLARSHIP PORTAL
// ============================================================================
export const feesPortalNav: NavigationItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin'],
  },
  {
    label: 'My Invoices',
    href: '/invoices',
    icon: <CreditCard className="w-5 h-5" />,
    allowedRoles: ['student', 'institution_admin'],
  },
  {
    label: 'Payments',
    href: '/payments',
    icon: <DollarSign className="w-5 h-5" />,
    allowedRoles: ['student', 'institution_admin'],
  },
  {
    label: 'Scholarships',
    href: '/scholarships',
    icon: <TrendingUp className="w-5 h-5" />,
    allowedRoles: ['student', 'institution_admin'],
  },
  {
    label: 'Disbursements',
    href: '/disbursements',
    icon: <DollarSign className="w-5 h-5" />,
    allowedRoles: ['student', 'institution_admin'],
  },
];

// ============================================================================
// ANALYTICS PORTAL
// ============================================================================
export const analyticsPortalNav: NavigationItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin', 'super_admin'],
  },
  {
    label: 'Performance',
    href: '/performance',
    icon: <BarChart3 className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin'],
  },
  {
    label: 'Attendance Insights',
    href: '/attendance-insights',
    icon: <TrendingUp className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher', 'institution_admin'],
  },
  {
    label: 'Dropout Risk',
    href: '/dropout-risk',
    icon: <AlertTriangle className="w-5 h-5" />,
    allowedRoles: ['teacher', 'institution_admin', 'super_admin'],
  },
  {
    label: 'Reports',
    href: '/reports',
    icon: <BarChart3 className="w-5 h-5" />,
    allowedRoles: ['institution_admin', 'super_admin'],
  },
];

// ============================================================================
// PORTAL REGISTRY - For navigation hubs
// ============================================================================
export const portalRegistry = [
  {
    name: 'Identity & Access Portal',
    slug: 'identity',
    description: 'Manage your account, security, and access to other portals',
    url: 'http://localhost:3001',
    requiredRoles: ['student', 'teacher', 'institution_admin', 'super_admin'],
  },
  {
    name: 'Learning Management System',
    slug: 'lms',
    description: 'Access courses, assignments, attendance, and exams',
    url: 'http://localhost:3002',
    requiredRoles: ['student', 'teacher', 'institution_admin'],
  },
  {
    name: 'Fees & Scholarships',
    slug: 'fees',
    description: 'Manage invoices, payments, and scholarship applications',
    url: 'http://localhost:3003',
    requiredRoles: ['student', 'institution_admin'],
  },
  {
    name: 'Academic Analytics',
    slug: 'analytics',
    description: 'View performance metrics, attendance, and risk indicators',
    url: 'http://localhost:3004',
    requiredRoles: ['student', 'teacher', 'institution_admin', 'super_admin'],
  },
];

import { AlertTriangle } from 'lucide-react';
