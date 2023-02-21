import Context from '@/interfaces/Context';
import { rolesCollection, authsCollection } from '@/constants/webPaths';

const withSession = (contextProps: Context, getServerSidePropsFunc) => {
  const sessionToken = contextProps.req.cookies.token;
  const { role, auth } = contextProps.query;

  if (
    rolesCollection.includes(role) &&
    authsCollection.includes(auth) &&
    sessionToken
  ) {
    return {
      redirect: {
        destination: '/cms',
        permanent: false,
      },
    };
  }

  if (!sessionToken) {
    return {
      redirect: {
        destination: '/admin/signin',
        permanent: false,
      },
    };
  }

  return getServerSidePropsFunc();
};

export default withSession;
