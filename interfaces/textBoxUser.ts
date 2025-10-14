export interface TextBoxUser {
    fullName: string;
    email: string;
    currentAddress: string;
    permanentAddress: string;
}

export interface TextBoxEnvData {
    [env: string]: TextBoxUser;
}