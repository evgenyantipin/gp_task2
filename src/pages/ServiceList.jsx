import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  serviceListLoading,
  serviceListLoadingError,
  selectListItems,
  serviceListActions,
} from '../features/serviceList/serviceListSlice';
import RetryButton from '../components/RetryButton';
import Loader from '../components/Loader';
import List from '../components/List';

const ServiceList = () => {
  const dispatch = useDispatch();
  const loadingList = useSelector(serviceListLoading);
  const loadingListError = useSelector(serviceListLoadingError);
  const items = useSelector(selectListItems);

  React.useEffect(() => {
    dispatch(serviceListActions.fetchServiceList());
  }, [dispatch]);

  if (loadingListError) return <RetryButton />;
  if (loadingList) return <Loader />;

  return (
    <>
      <List items={items} />
    </>
  );
};

export default ServiceList;
