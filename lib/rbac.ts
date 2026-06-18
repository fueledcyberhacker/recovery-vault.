import { AppRole } from "./auth";
export const permissions: Record<AppRole, string[]> = { CLIENT:["case:create","case:read:self","vault:read:self"], ADMIN:["users:manage","case:read:all","investigation:read","vault:manage"], INVESTIGATOR:["case:read:assigned","investigation:update"], VAULT_MANAGER:["vault:manage","case:read:recovered"] };
export function hasPermission(role: AppRole, permission: string) { return permissions[role]?.includes(permission) ?? false; }
