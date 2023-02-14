import Link from 'next/link';
import { FC } from 'react';

import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { ContainerForm, Form, DoubleInputs } from './elements';
import Input from '@/common/input';

import inputCredentials from '@/constants/inputCrendentials';
import useForm from '@/hooks/useForm';

const CredentialsForm: FC<any> = ({ role, auth, service }) => {
  const { handleFormSubmit, handleInputChange } = useForm(service);

  return (
    <Form onSubmit={handleFormSubmit}>
      <ContainerForm>
        {role === 'admin' && auth === 'signup' && (
          <Input
            {...inputCredentials.organization}
            onChange={handleInputChange}
          />
        )}

        {role === 'employee' && auth === 'signup' && (
          <DoubleInputs>
            <Input
              {...inputCredentials.frName}
              onChange={handleInputChange}
            />
            <Input
              {...inputCredentials.lsName}
              onChange={handleInputChange}
            />
          </DoubleInputs>
        )}

        <Input
          {...inputCredentials.email}
          onChange={handleInputChange}
        />
        <Input
          {...inputCredentials.password}
          onChange={handleInputChange}
        />

        {auth === 'signup' && (
          <Input
            {...inputCredentials.coPassword}
            onChange={handleInputChange}
          />
        )}

        <FormControlLabel
          control={<Checkbox />}
          label="Remember me"
        />

        <Button
          type="submit"
          variant="contained"
        >
          {auth === 'signin' ? 'Sign In' : 'Sign Up'}
        </Button>

        {auth === 'signup' ? (
          <Link href={`/${role}/signin`}>Already have an account?</Link>
        ) : (
          <Link href={`/${role}/signup`}>Don&#39;t have an account?</Link>
        )}
      </ContainerForm>
    </Form>
  );
};

export default CredentialsForm;
