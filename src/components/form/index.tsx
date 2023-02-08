import { FC } from 'react';

import useForm from '@/hooks/useForm';
import Input from '@/common/input';

const Form: FC<any> = ({ auth, service }) => {
  const { handleFormSubmit, handleInputChange } = useForm(service);

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        type={'email'}
        name={'email'}
        onChange={handleInputChange}
      />
      <Input
        type={'password'}
        name={'password'}
        onChange={handleInputChange}
      />
      {auth === 'signup' && (
        <Input
          type={'password'}
          name={'coPassword'}
          onChange={handleInputChange}
        />
      )}
      <input type="submit" />
    </form>
  );
};

export default Form;
