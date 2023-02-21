import { FC } from 'react';

import { Role, Auth } from '@/interfaces/Crendentials';
import Context from '@/interfaces/Context';

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

export async function getServerSideProps(context: Context) {
  const rolesCollection: Role[] = ['admin', 'employee'];
  const authsCollection: Auth[] = ['signup', 'signin'];

  const sessionToken = context.req.cookies.token;
  const { role, auth } = context.query;

  if (sessionToken)
    return {
      redirect: {
        destination: '/cms',
        permanent: false,
      },
    };

  if (rolesCollection.includes(role) && authsCollection.includes(auth))
    return {
      props: {
        role: role,
        auth: auth,
      },
    };

  return {
    redirect: {
      destination: '/error',
      permanent: false,
    },
  };
}

export default Auth;
