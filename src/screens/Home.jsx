import { useSelector, useDispatch } from 'react-redux';
import { getTasksItems } from '../features/tasks/taskslice';
import { useEffect } from 'react';
import Form from '../components/Form';

function Home() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksItems());
  }, [dispatch]);

  return (
    <div>
      <Form />
    </div>
  );
}

export default Home;
