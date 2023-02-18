import { FC } from 'react';
import { getAllEmployees } from '@/services/employee';

const Employees: FC<any> = ({ employees }) => {
  console.log(employees);
  return <p>Esneider</p>;
};

export async function getServerSideProps(context: any) {
  const sessionToken = context.req.cookies.token;
  const { data } = await getAllEmployees(sessionToken);

  return {
    props: {
      employees: data,
    },
  };
}

export default Employees;
