import { useState } from 'react'
import './App.module.css'

const App = () => {
  const [count, setCount] = useState(0);
  const hendleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hendleSubmit");
    const formData = new FormData(e.currentTarget);
    console.log("formData", formData.get("name"));
    e.currentTarget.reset();
    
  };

  return (
    <form onSubmit={hendleSubmit}>
      <label>Name</label>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
      </form>
  )
}

export default App
