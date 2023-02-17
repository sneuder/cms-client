import { FC } from 'react';

const Auth: FC<any> = () => {
  return <p>Esneider</p>;
};

export async function getStaticProps() {
  // TODO the fetch to get employee info
  return {
    props: {},
  };
}

export default Auth;
