const withSession = (request, getServerSidePropsFunc) => {
  const sessionToken = request.cookies.token;

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
