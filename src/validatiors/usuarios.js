/**
 * Expressão regular para verificar se o e-mail está no formato válido.
 */
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmail = (text) => {
  // se o campo for inválido
  if (!text) return 'Campo obrigatório.';

  // se o email tem menos de 200 caracteres
  if (text.length > 200) return 'O e-mail deve ter no máximo 200 caracteres.';

  // testa a validação do regex
  const isValid = EMAIL_REGEX.test(text);

  // se o email for inválido
  if (!isValid) return 'Informe um endereço de e-mail válido.';

  // se for válido e passar no regex
  return undefined;
};

export const validatePassword = (text) => {
  if (!text) return 'Campo obrigatório.';

  if (text.length < 8 || text.length > 20)
    return 'A senha deve ter no mínimo 8 e no máximo 20 caracteres.';

  return undefined;
};

export const validateName = (text) => {
  if (!text) return 'Campo obrigatório.';

  if (text.length < 1 || text.length > 200)
    return 'A senha deve ter no mínimo 1 e no máximo 200 caracteres.';

  return undefined;
};
