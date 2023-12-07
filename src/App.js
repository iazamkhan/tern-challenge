import './App.css';
import React, {lazy, Suspense} from 'react';

function App() {
  const JobsDropdown = lazy(() => import('./JobsDropdown'))
  return (
    <div className="App">
      <h2>Hello from Tern Challenge</h2>
      <Suspense fallback = {<h1>Loading</h1>}>
      <JobsDropdown />
      </Suspense>
    </div>
  );
}

export default App;
