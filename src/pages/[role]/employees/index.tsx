import { FC } from 'react';

import { StaticRoleAuth } from '@/interfaces/StaticPaths';
import { Role, Auth } from '@/interfaces/Crendentials';

const Auth: FC<{ role: Role; auth: Auth }> = ({ role, auth }) => {
  return <p>Esneider</p>;
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { role: 'admin' },
      },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }: StaticRoleAuth) {
  // TODO the fetch to get employee info
  return {
    props: params,
  };
}

export default Auth;
