import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTaskItem } from '../features/tasks/taskslice';
import Form from '../components/Form';
import FiltersSection from '../components/FiltersSection';
import SectionCards from '../components/SectionCards';

const initialForm = {
  title: '',
  priority: '',
  state: '',
  description: '',
};

function Home() {
  const [formState, setFormState] = useState(initialForm);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formState);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createTaskItem(formState));
  };

  return (
    <div>
      <Form
        formData={formState}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        buttonCreate="Crear Tarea"
      />
      <FiltersSection />
      <SectionCards />
    </div>
  );
}

export default Home;
