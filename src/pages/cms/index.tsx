import withSession from '@/services/withSession';

const CMS = () => {
  return <>es</>;
};

export async function getServerSideProps(context) {
  function serverSideProps() {
    return {
      props: {},
    };
  }

  return withSession(context, serverSideProps);
}

export default CMS;
