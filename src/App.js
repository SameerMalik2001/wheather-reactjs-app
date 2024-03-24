import './App.css';
import WheatherBox from './components/WheatherBox'

function App() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-start'>
      <div className="w-full h-20">
        <p className='text-[50px] text-center bg-[#232323] text-white font-bold'>WHEATHER APP</p>
      </div>
      <WheatherBox />
    </div>
  );
}

export default App;
