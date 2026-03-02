import './App.css';

// render the exported component from math_curriculum_MHS directly
import MathCurriculum from './math_curriculum_MHS';

function App() {
  // App is just a thin wrapper around the main curriculum component
  return <MathCurriculum />;
}

export default App;
