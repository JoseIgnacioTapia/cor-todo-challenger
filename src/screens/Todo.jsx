import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getTaskItem,
  updateTaskItem,
  deleteTaskItem,
} from '../features/tasks/taskslice';
import { validationForm, isEmpty } from '../utils/helpers';

import Form from '../components/Form';
import Button from '../components/Button';

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

  const navigate = useNavigate();

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

  const handleSubmit = e => {
    e.preventDefault();

    const errors = validationForm(data);
    setFormErrors(prevState => ({ ...prevState, ...errors }));

    if (Object.values(formErrors).every(isEmpty)) {
      dispatch(updateTaskItem(data));
    }

    setData(initialForm);
  };

  const handleDelete = () => {
    console.log('Me ejecuto');
    dispatch(deleteTaskItem(id));

    navigate('/');
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

  return (
    <>
      <Form {...additionalProps} />;
      <Button
        className="bg-red-600"
        type="button"
        buttonTitle="Eliminar"
        onClick={handleDelete}
      />
    </>
  );
}

export default Todo;
