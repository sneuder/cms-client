import Context from '@/interfaces/Context';

const withSession = (contextProps: Context, getServerSidePropsFunc) => {
  const sessionToken = contextProps.req.cookies.token;

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
