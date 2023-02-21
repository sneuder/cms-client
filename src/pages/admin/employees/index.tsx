import { FC } from 'react';

import { getAllEmployees } from '@/services/employee';
import withSession from '@/services/withSession';

const Employees: FC<any> = ({ employees }) => {
  return <p>Esneider</p>;
};

export async function getServerSideProps(context: any) {
  async function serverSideProps() {
    const sessionToken = context.req.cookies.token;
    const { data } = await getAllEmployees(sessionToken);

    return {
      props: {
        employees: data,
      },
    };
  }

  return withSession(context, serverSideProps);
}

export default Employees;
