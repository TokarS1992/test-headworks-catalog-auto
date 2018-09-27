export interface IUser {
    name: string;
    surname: string;
    email: string;
    city: string;
    address: string;
    avatarUrl: string;
    getFullName(): string;
}

export class User implements IUser {
    public name: string;
    public surname: string;
    public email: string;
    public city: string;
    public address: string;
    public avatarUrl: string;

    constructor(params) {
        for (const p in params) {
            this[p] = params[p];
        }
    }

    getFullName(): string {
        return `${this.name} ${this.surname}`;
    }
}
