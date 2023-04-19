function Button({ type, buttonTitle }) {
  return (
    <button
      type={type}
      className="block mx-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
    >
      {buttonTitle}
    </button>
  );
}

export default Button;
