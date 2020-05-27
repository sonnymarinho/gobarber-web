import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImage from '../../assets/sign-up-background.png';

export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100%;
max-width: 700px;

form {
  margin: 80px 0;
  width: 340px;
  text-align: center;

  h1 {
    margin-bottom: 24px;
  }


   a {
    color: #F4EDE8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover{
      color: ${shade(0.45, '#F4EDE8')}
    }
  }


}
  > a {
    color: #F4EDE8;
    display: block;
    margin-top: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    &:hover{
      color: ${shade(0.3, '#F4EDE8')}
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
flex: 1;
background: url(${signUpBackgroundImage}) no-repeat center;
background-size: cover;
`;
