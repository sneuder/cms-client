import { FC } from 'react';

import { getOneEmployee } from '@/services/employee';

const Employee: FC<any> = ({ employee }) => {
  return <p>Esneider</p>;
};

export async function getServerSideProps(context: any) {
  const sessionToken = context.req.cookies.token;
  const { employeeId } = context.params;

  const { data } = await getOneEmployee(sessionToken, employeeId);

  return {
    props: {
      employee: data,
    },
  };
}

export default Employee;
