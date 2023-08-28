import styled from 'styled-components';

import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;
