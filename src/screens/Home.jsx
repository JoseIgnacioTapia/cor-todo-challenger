import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTaskItem } from '../features/tasks/taskslice';

import Form from '../components/Form';
import FiltersSection from '../components/FiltersSection';
import SectionCards from '../components/SectionCards';
import { validationForm, isEmpty } from '../utils/helpers';

const initialForm = {
  title: '',
  priority: '',
  state: '',
  description: '',
};

function Home() {
  const [formState, setFormState] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));

    const errors = validationForm(formState);

    setFormErrors(prevState => ({ ...prevState, ...errors }));
  };
  console.log(formState);

  const handleSubmit = e => {
    e.preventDefault();

    const errors = validationForm(formState);

    setFormErrors(prevState => ({ ...prevState, ...errors }));
    console.log(formErrors);
    console.log(Object.values(formErrors).every(isEmpty));
    if (Object.values(formErrors).every(isEmpty)) {
      dispatch(createTaskItem(formState));
    }

    setFormState(initialForm);
  };

  return (
    <div>
      <Form
        formData={formState}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        formErrors={formErrors}
        buttonCreate="Crear Tarea"
      />
      <FiltersSection />
      <SectionCards />
    </div>
  );
}

export default Home;
