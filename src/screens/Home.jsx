import { useState, useEffect } from 'react';
// import { useForm } from '../hooks/useForm.js';
import { validationForm } from '../utils/helpers.js';
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

  const handleInputChange = e => {
    const { name, value } = e.target;

    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
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
