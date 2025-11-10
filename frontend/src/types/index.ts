// This file exports TypeScript types and interfaces used throughout the frontend application.

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user';
}

export interface AuthResponse {
    accessToken: string;
    user: User;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface DashboardData {
    totalUsers: number;
    activeUsers: number;
    totalSales: number;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}