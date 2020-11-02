import { useEffect } from 'react';
import {useDispatch} from 'react-redux';

const useInit = (onInit, extraDeps = []) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onInit());
  }, [onInit, dispatch, ...extraDeps]);
};

export default useInit;
