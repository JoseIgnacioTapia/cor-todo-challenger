export const validationForm = form => {
  let errors = {};

  if (
    !form.title.trim() ||
    !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.name.trim())
  ) {
    errors.title =
      "El campo 'Título' es requerido y puede contener solo letras y espacios en blancos";
  }

  if (!form.description.trim()) {
    errors.description = 'El campo descripción no puede estar vacío';
  }

  if (!form.priority === '' || !form.priority === 'default') {
    errors.priority = 'Debe selecionar la prioridad';
  }

  if (!form.state === '' || !form.state === 'default') {
    errors.priority = 'Debe selecionar el estado';
  }
};
