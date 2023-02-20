const CMS = () => {
  return <>es</>;
};

export async function getServerSideProps(context: any) {
  const sessionToken = context.req.cookies.token;

  if (sessionToken) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: '/admin/signin',
      permanent: false,
    },
  };
}

export default CMS;
