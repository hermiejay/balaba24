import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react"
export default function App() {
  const [text, setText] = useState("balaba");
  const handleInputChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(text);
    setText("");
  }
  const [theme, setTheme] = useState("Dark");
  const hadleThemeChange = (e) => {
    setTheme(theme === "light" ? "dark" : "light");


  }
  return (
    <div className={`h-screen w-screen flex items-center justify-center  ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
         <div className="p-20 bg-amber-300 rounded-2xl flex  gap-4 "  >
         
            <input value={text} onChange={handleInputChange} className="border-1 rounded-2xl" type="text" />
            <button onClick={handleSubmit}  className="p-2 bg-amber-500 rounded-2xl ">submit</button>
        
             <button onClick={hadleThemeChange}>  {theme == "light" ? <SunIcon/> :
             <MoonIcon/>
            }
            </button>
            <p className="text-3xl">{text}</p>
         </div>

    </div>

     

  )
} 