import { useState } from 'react';

const useForm = (service): any => {
  const [formInfo, setFormInfo] = useState({});

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
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
