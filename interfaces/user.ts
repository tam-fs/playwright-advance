export interface UserCred {
    username: string;
    password: string;
}

export interface EnvUsers {
    [env: string]: { [role: string]: UserCred };
}