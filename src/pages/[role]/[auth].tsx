import { ContainerCredentials, ContainerForm } from './elements';
import CredentialsForm from '@/components/credentialsForm';
import Cover from '@/components/cover';

import credentialsGenerator from '@/services/credentials';

const Auth = ({ role, auth }) => {
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
  return {
    paths: [
      { params: { auth: 'signin', role: 'admin' } },
      { params: { auth: 'signup', role: 'admin' } },
      { params: { auth: 'signin', role: 'employee' } },
      { params: { auth: 'signup', role: 'employee' } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  return {
    props: params,
  };
}

export default Auth;
