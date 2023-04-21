function Button({ type, buttonTitle }) {
  let bgColor = '';
  if (type === 'submit') {
    bgColor = 'bg-yellow-500';
  } else if (type === 'button') {
    bgColor = 'bg-red-500';
  }

  return (
    <button
      type={type}
      className={`block mx-auto ${bgColor}  hover:bg-gray-400 text-white font-bold py-2 px-4 rounded`}
    >
      {buttonTitle}
    </button>
  );
}

export default Button;
