export declare enum Role {
    STUDENT = "STUDENT",
    PROFESSOR = "PROFESSOR",
    ADMIN = "ADMIN",
    FINANCE_ADMIN = "FINANCE_ADMIN",
    SUPPORT_AGENT = "SUPPORT_AGENT",
    SUPER_ADMIN = "SUPER_ADMIN"
}
export declare function parseRole(role: string): Role;
