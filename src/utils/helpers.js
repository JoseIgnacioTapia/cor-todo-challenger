export const validationForm = form => {
  let errors = {
    title: '',
    description: '',
    priority: '',
    state: '',
  };

  if (!form.title || !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.title)) {
    errors.title =
      "El campo 'Título' es requerido y puede contener solo letras y espacios en blancos";
  }

  if (!form.description) {
    errors.description = 'El campo descripción no puede estar vacío';
  }

  if (!form.priority || form.priority === 'default') {
    console.log(form.priority);
    errors.priority = 'Debe selecionar la prioridad';
  }

  if (!form.state || form.state === 'default') {
    console.log(form.state);
    errors.state = 'Debe selecionar el estado';
  }

  return errors;
};

export function isEmpty(value) {
  return value === '';
}
