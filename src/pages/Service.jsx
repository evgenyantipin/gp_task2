import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  serviceLoading,
  serviceLoadingError,
  selectItem,
  serviceActions,
} from '../features/service/serviceSlice';
import RetryButton from '../components/RetryButton';
import Loader from '../components/Loader';

const Service = () => {
  let { serviceId } = useParams();
  const loading = useSelector(serviceLoading);
  const loadingError = useSelector(serviceLoadingError);
  const item = useSelector(selectItem);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (serviceId) {
      dispatch(serviceActions.fetchService(serviceId));
    }
  }, [dispatch, serviceId]);

  if (loadingError) return <RetryButton />;
  if (loading) return <Loader />;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.price}</h6>
        <p className="card-text">{item.content}</p>
      </div>
    </div>
  );
};

export default Service;
