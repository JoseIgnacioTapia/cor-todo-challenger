import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskItem, updateTaskItem } from '../features/tasks/taskslice';
import { validationForm, isEmpty } from '../utils/helpers';

import Form from '../components/Form';

const initialForm = {
  title: '',
  priority: '',
  state: '',
  description: '',
};

function Todo() {
  const { id } = useParams();

  const task = useSelector(state => state.tasks.task);

  const dispatch = useDispatch();

  const [data, setData] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    dispatch(getTaskItem(id));
  }, [dispatch, id]);

  useEffect(() => {
    setData(task);
  }, [task]);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setData(prevState => ({
      ...prevState,
      [name]: value,
    }));

    const errors = validationForm(data);

    setFormErrors(prevState => ({ ...prevState, ...errors }));
  };
  console.log(data);

  const handleSubmit = e => {
    e.preventDefault();

    const errors = validationForm(data);
    setFormErrors(prevState => ({ ...prevState, ...errors }));

    if (Object.values(formErrors).every(isEmpty)) {
      dispatch(updateTaskItem(data));
    }

    setData(initialForm);
  };

  const additionalProps = {
    title: data.title,
    priority: data.priority,
    state: data.state,
    description: data.description,
    onInputChange: handleInputChange,
    onSubmit: handleSubmit,
    formErrors: formErrors,
    buttonUpdated: 'Actualizar',
  };

  return <Form {...additionalProps} />;
}

export default Todo;
