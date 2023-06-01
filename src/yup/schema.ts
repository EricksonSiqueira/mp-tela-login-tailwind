import * as Yup from 'yup';

export const emailValidation = Yup.string()
  .required(`É preciso preencher o campo de email.`)
  .email(`O email informado não é válido.`);

export const passwordValidation = Yup.string().required(
  `É preciso preencher o campo de senha.`
);

export const loginSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});
