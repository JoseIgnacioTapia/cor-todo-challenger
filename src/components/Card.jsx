function Card({ title, description, priority, state }) {
  return (
    <div className="w-full flex flex-col rounded-lg mx-auto bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl justify-start p-6 mb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-200">
      <div className="mb-2">
        <h5 className="text-m inline mr-3 text-neutral-500 dark:text-neutral-300">
          Prioridad: <span>{priority}</span>
        </h5>
        <h5 className="text-m inline text-neutral-500 dark:text-neutral-300">
          Estado: <span>{state}</span>
        </h5>
      </div>
      <h3 className="mb-2 text-xl dark:text-neutral-50">
        Título: <span className="font-medium text-neutral-800">{title}</span>
      </h3>
      <h3 className="mb-2 text-xl dark:text-neutral-50">Descripción:</h3>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {description}
      </p>
    </div>
  );
}

export default Card;
