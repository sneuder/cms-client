import { FC } from 'react';
import Context from '@/interfaces/Context';

import { getAllEmployees } from '@/services/employee';
import withSession from '@/services/withSession';

const Employees: FC<any> = ({ employees }) => {
  return <p>Esneider</p>;
};

export async function getServerSideProps({ req }: Context) {
  async function serverSideProps() {
    const sessionToken = req.cookies.token as string;
    const { data } = await getAllEmployees(sessionToken);

    return {
      props: {
        employees: data,
      },
    };
  }

  return withSession(req, serverSideProps);
}

export default Employees;
