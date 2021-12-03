import { incrementByAmount } from './counterSlice';
import { fetchCount } from './counterAPI';

export const addAsyncAmount = (value) => {
  return async (dispatch) => {
    const amount = await fetchCount(value);
    dispatch(incrementByAmount(Number(amount.data)));
  };
};
