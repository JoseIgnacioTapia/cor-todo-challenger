import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskItem } from '../features/tasks/taskslice';

import Form from '../components/Form';

function Todo() {
  const { id } = useParams();
  console.log(id);
  const task = useSelector(state => state.tasks.task);
  console.log(task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaskItem(id));
  }, [dispatch, id]);

  const additionalProps = {
    title: task.title,
    priority: task.priority,
    state: task.state,
    description: task.description,
    buttonUpdated: 'Actualizar',
  };

  return <Form {...additionalProps} />;
}

export default Todo;
