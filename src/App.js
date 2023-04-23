import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/textForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" Home="Home" About="About" links="Contact us"/>
    <div className="container my-3 ">
      <TextForm heading="Enter the text" />
    </div>
    </>
  );
}

export default App;
