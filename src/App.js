import logo from './logo.svg';
import './App.css';

function App() {
  function decreaseHandler(){
  
  }
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
      <div className='text-[#0398d4] fonst-medium text-size-2xl'>Increment && Decrement</div>
      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
        <button onClick={(decreaseHandler)}>
          -
        </button>
        <div>

        </div>
        <button>
          +
        </button>
      </div>
      <button>
        reset
      </button>
    </div>
  );
}

export default App;
