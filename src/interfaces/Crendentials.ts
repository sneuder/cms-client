interface Credentials {
  email: string;
  password: string;
  coPassword?: string;
  adminId?: string;
}

export type Role = 'admin' | 'employee';

export type Auth = 'signup' | 'signin';

export default Credentials;
