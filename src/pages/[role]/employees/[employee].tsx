import { FC } from 'react';

import { StaticRoleAuth } from '@/interfaces/StaticPaths';
import { Role, Auth } from '@/interfaces/Crendentials';

const Auth: FC<{ role: Role; auth: Auth }> = ({ role, auth }) => {
  return <p>Esneider</p>;
};

export async function getStaticPaths() {
  // TODO the fetch to get employee info

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
  return {
    props: params,
  };
}

export default Auth;
