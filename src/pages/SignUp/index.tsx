import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background, AnimationContainer } from './styles';

import getValidationErrors from '../../utils/getValidationErros';
import api from '../../services/api.client';
import { useToast } from '../../hooks/toast';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  // console.log(formRef);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(
            6,
            'A senha deve conter no mínimo 6 digitos',
          ),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro Realizado',
          description: 'Agora você já pode fazer seu login no GoBarber! 😉',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao tentar fazer o cadastro.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <>
      <Container>
        <Background />
        <Content>
          <AnimationContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <img src={logoImg} alt="GoBarber" />
              <h1>Faça Seu Cadastro</h1>

              <Input name="name" icon={FiUser} placeholder="Nome" />
              <Input name="email" icon={FiMail} placeholder="E-mail" />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Password"
              />

              <Button type="submit">Cadastrar</Button>
            </Form>

            <Link to="/">
              {' '}
              <FiArrowLeft />
              Voltar para Login
            </Link>
          </AnimationContainer>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
