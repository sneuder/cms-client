import { FC } from 'react';

import { Role, Auth } from '@/interfaces/Crendentials';
import Context from '@/interfaces/Context';

import { ContainerCredentials, ContainerForm } from './elements';
import CredentialsForm from '@/components/credentialsForm';
import Cover from '@/components/cover';

import { rolesCollection, authsCollection } from '@/constants/webPaths';
import credentialsGenerator from '@/services/credentials';
import withSession from '@/services/withSession';

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
  async function serverSideProps() {
    const { role, auth } = context.query;

    if (rolesCollection.includes(role) && authsCollection.includes(auth))
      return {
        props: {
          role: role,
          auth: auth,
        },
      };
  }

  return withSession(context, serverSideProps);
}

export default Auth;
