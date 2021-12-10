import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  /* When you use multiple slicers, you should select your state first with the name
  on the reducer in the store.
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter); */
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={() => dispatch(counterActions.increase(5))}>
          Increment by 5
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
