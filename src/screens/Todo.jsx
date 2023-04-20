import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskItem } from '../features/tasks/taskslice';

import Form from '../components/Form';

function Todo() {
  const { id } = useParams();
  console.log(id);
  const task = useSelector(state => state.tasks.task);
  console.log(task);
  const dispatch = useDispatch();

  const [data, setData] = useState({});

  useEffect(() => {
    dispatch(getTaskItem(id));
  }, [dispatch, id]);

  useEffect(() => {
    setData(task);
  }, [task]);

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const additionalProps = {
    title: data.title,
    priority: data.priority,
    state: data.state,
    description: data.description,
    onInputChange: handleChange,
    buttonUpdated: 'Actualizar',
  };

  return <Form {...additionalProps} />;
}

export default Todo;
