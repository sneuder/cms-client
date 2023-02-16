import { Auth, Role } from './Crendentials';

export interface StaticRoleAuth {
  params: {
    auth: Auth;
    role: Role;
  };
}
