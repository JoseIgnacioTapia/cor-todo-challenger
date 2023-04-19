import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskItem } from '../features/tasks/taskslice';

import Form from '../components/Form';

function Todo() {
  const { id } = useParams();

  const task = useSelector(state => state.tasks.task);
  console.log(task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaskItem(id));
  }, [dispatch]);

  return (
    <Form
      title={task.title}
      priority={task.priority}
      state={task.state}
      description={task.description}
      buttonTitle="Actualizar"
    />
  );
}

export default Todo;
