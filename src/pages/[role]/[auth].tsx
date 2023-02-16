import { FC } from 'react';

import { StaticRoleAuth } from '@/interfaces/StaticPaths';
import { Role, Auth } from '@/interfaces/Crendentials';

import { ContainerCredentials, ContainerForm } from './elements';
import CredentialsForm from '@/components/credentialsForm';
import Cover from '@/components/cover';

import credentialsGenerator from '@/services/credentials';

const Auth: FC<{ role: Role; auth: Auth }> = ({ role, auth }) => {
  const service = credentialsGenerator(role, auth);

  return (
    <ContainerCredentials>
      <Cover />
      <ContainerForm>
        <CredentialsForm
          role={role}
          auth={auth}
          service={service}
        />
      </ContainerForm>
    </ContainerCredentials>
  );
};

export async function getStaticPaths() {
  const roles: Role[] = ['admin', 'employee'];
  const auths: Auth[] = ['signup', 'signin'];

  const paths: StaticRoleAuth[] = auths.flatMap((auth) =>
    roles.map((role) => ({ params: { auth, role } }))
  );

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }: StaticRoleAuth) {
  return {
    props: params,
  };
}

export default Auth;
