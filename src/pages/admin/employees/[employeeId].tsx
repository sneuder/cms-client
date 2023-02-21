import { FC } from 'react';
import Context from '@/interfaces/Context';

import { getOneEmployee } from '@/services/employee';
import withSession from '@/services/withSession';

const Employee: FC<any> = ({ employee }) => {
  return <p>Esneider</p>;
};

export async function getServerSideProps(context: Context) {
  async function serverSideProps() {
    const sessionToken = context.req.cookies.token as string;
    const employeeId = context.params.employeeId as string;

    const { data } = await getOneEmployee(sessionToken, employeeId);

    return {
      props: {
        employee: data,
      },
    };
  }

  return withSession(context, serverSideProps);
}

export default Employee;
