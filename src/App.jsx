import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ServiceList from './pages/ServiceList';
import Service from './pages/Service';
import Layout from './components/Layout';
import RetryButton from './components/RetryButton';

function App() {
  return (
    <Routes>
      <Route page="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <ErrorBoundary FallbackComponent={<RetryButton />}>
              <ServiceList />
            </ErrorBoundary>
          }
        />
        <Route
          path="/service/:serviceId"
          element={
            <ErrorBoundary FallbackComponent={<RetryButton />}>
              <Service />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<h2>Nothing here...</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
