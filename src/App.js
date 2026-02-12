import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import AssistantButton from "./components/assistant/AssistantButton";
import AssistantPanel from "./components/assistant/AssistantPanel";
import './App.css';

function App() {
  const [buttonPosition, setButtonPosition] = useState({ 
    x: typeof window !== "undefined" ? window.innerWidth - 80 : 0, 
    y: typeof window !== "undefined" ? window.innerHeight - 80 : 0 
  });

  return (
     <>
      <AppRoutes />
      <AssistantButton 
        position={buttonPosition} 
        setPosition={setButtonPosition} 
      />
      <AssistantPanel position={buttonPosition} />
    </>
  );
}

export default App;
