export interface AuthResponse {
    message: string;
    isAuthenticated: string;
    username: string;
    email: string;
    Roles: [],
    token: string;
}
