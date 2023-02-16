import { useState } from 'react';
import Credentials from '@/interfaces/Crendentials';

const useForm = (service: any): any => {
  const [formInfo, setFormInfo] = useState<Credentials>({} as Credentials);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (!formInfo.coPassword && formInfo.coPassword !== formInfo.password)
      return;

    service(formInfo)
      .then((data: any) => console.log(data))
      .catch((e: any) => console.log(e));
  };

  const handleInputChange = (e: any) => {
    const { value, name } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  return {
    handleFormSubmit,
    handleInputChange,
  };
};

export default useForm;
