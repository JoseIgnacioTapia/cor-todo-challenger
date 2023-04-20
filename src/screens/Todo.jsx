import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskItem, updateTaskItem } from '../features/tasks/taskslice';

import Form from '../components/Form';

function Todo() {
  const { id } = useParams();

  const task = useSelector(state => state.tasks.task);

  const dispatch = useDispatch();

  const [data, setData] = useState({});

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
  };
  console.log(data);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(updateTaskItem(data));
  };

  const additionalProps = {
    title: data.title,
    priority: data.priority,
    state: data.state,
    description: data.description,
    onInputChange: handleInputChange,
    onSubmit: handleSubmit,
    buttonUpdated: 'Actualizar',
  };

  return <Form {...additionalProps} />;
}

export default Todo;
