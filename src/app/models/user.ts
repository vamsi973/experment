import { Role } from "./role";

export class User {
    id: number;
    name: string;
    lastName: string;
    username: string;
    role: Role;
    token?: string;
}