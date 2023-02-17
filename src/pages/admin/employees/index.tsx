import { FC } from 'react';
import { getAllEmployees } from '@/services/employee';

const Employees: FC<any> = () => {
  return <p>Esneider</p>;
};

export async function getServerSideProps() {
  // TODO the fetch to get employee info

  // const employees = await getAllEmployees(
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDZlZjU3YTZmNDkzYTRiYTNlNGNmYSIsImVtYWlsIjoiZXNuZWlkZXJAZ21haWwuY29tIiwiaWF0IjoxNjc1MDMxMjUyfQ.LLBUZlfkwjUN-tN6ETIKRss9y1Da883R_KXFDCG3hf0'
  // );

  return {
    props: {},
  };
}

export default Employees;
