import Context from '@/interfaces/Context';
import withSession from '@/services/withSession';

const CMS = () => {
  return <>es</>;
};

export async function getServerSideProps(context: Context) {
  function serverSideProps() {
    return {
      props: {},
    };
  }

  return withSession(context, serverSideProps);
}

export default CMS;
