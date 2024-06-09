import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  tg.MainButton.show();

  return (
    <div className="App">
      <span>{tg.initDataUnsafe?.user?.username}</span>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
