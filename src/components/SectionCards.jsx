import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksItems } from '../features/tasks/taskslice.js';

import Card from './Card';
import { Link } from 'react-router-dom';

function SectionCards() {
  const tasks = useSelector(state => state.tasks.tasks);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksItems());
  }, [dispatch]);

  return (
    <div className="mt-6 flex justify-center flex-wrap">
      {tasks.length ? (
        tasks.map(task => {
          return (
            <Link
              className="inline-block w-full"
              to={`/todo/${task.id}`}
              key={task.id}
            >
              <Card
                title={task.title}
                description={task.description}
                priority={task.priority}
                state={task.state}
              />
            </Link>
          );
        })
      ) : (
        <p>No existen tareas</p>
      )}
    </div>
  );
}

export default SectionCards;
