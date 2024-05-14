export const validateTaskTitle = (text) => {
  if (!text) return 'Campo obrigatório.';

  if (text.lengt < 1 || text.length > 1000)
    return 'A tarefa deve ter entre 1 e 1000 caracteres.';

  return undefined;
};
