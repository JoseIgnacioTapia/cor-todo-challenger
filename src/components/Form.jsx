import { useSelector } from 'react-redux';
import Button from './Button';

function Form(props) {
  const {
    onInputChange,
    onSubmit,
    buttonCreate,
    title,
    description,
    priority,
    state,
    buttonUpdated,
    formErrors,
  } = props;
  // const formErrors = useSelector(state => state.tasks.formErrors);
  console.log(formErrors);

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            name="title"
            value={title}
            onChange={onInputChange}
            placeholder="Título"
          />
        </div>
        <div className="flex-1 relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            name="priority"
            value={priority}
            onChange={onInputChange}
          >
            <option value="default">Prioridad</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div className="flex-1 relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            name="state"
            value={state}
            onChange={onInputChange}
          >
            <option value="default">Estado</option>
            <option value="Nueva">Nueva</option>
            <option value="En proceso">En proceso</option>
            <option value="Finalizada">Finalizada</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <textarea
          className="block min-h-[auto] w-full rounded border border-gray-200 bg-transparent px-4 py-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
          id="exampleFormControlTextarea1"
          rows={3}
          placeholder="Descripción"
          name="description"
          value={description}
          onChange={onInputChange}
        />
      </div>
      {formErrors.title && (
        <p className="text-xs text-red-500">{formErrors.title}</p>
      )}
      {formErrors.priority && (
        <p className="text-xs text-red-500">{formErrors.priority}</p>
      )}
      {formErrors.state && (
        <p className="text-xs text-red-500">{formErrors.state}</p>
      )}
      {formErrors.description && (
        <p className="text-xs text-red-500">{formErrors.description}</p>
      )}

      <div className="mt-2 w-full">
        <Button
          className="block mx-auto"
          type="submit"
          buttonTitle={buttonCreate ? buttonCreate : buttonUpdated}
        />
      </div>
    </form>
  );
}

export default Form;
