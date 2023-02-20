import withSession from '@/services/withSession';

const CMS = () => {
  return <>es</>;
};

export const getServerSideProps = async (context) => {
  function serverSideProps() {
    return {
      props: {},
    };
  }

  return withSession(context, serverSideProps);
};

export default CMS;
