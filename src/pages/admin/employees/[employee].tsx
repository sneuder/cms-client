import { FC } from 'react';

import { getAllEmployees } from '@/services/employee';

const Employee: FC<any> = () => {
  return <p>Esneider</p>;
};

export async function getServerSideProps() {
  // const employees = await getAllEmployees(
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDZlZjU3YTZmNDkzYTRiYTNlNGNmYSIsImVtYWlsIjoiZXNuZWlkZXJAZ21haWwuY29tIiwiaWF0IjoxNjc1MDMxMjUyfQ.LLBUZlfkwjUN-tN6ETIKRss9y1Da883R_KXFDCG3hf0'
  // );
  return {
    props: {},
  };
}

export default Employee;
