import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App pt-2">
      <h1 className='text-gray-800 text-4xl'>Hello CodeSandbox</h1>

      <div className="sm:flex justify-between items-start max-w-4xl m-auto mt-8">
        <div className="w-2/6 border shadow-lg" style={{height: 400}}></div>

        <p className='w-4/6 px-3'>
          <input type="file" className='bg-purple-300 rounded-md mb-2 cursor-pointer' /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, iure perspiciatis commodi a excepturi itaque saepe ducimus omnis doloremque molestias vitae distinctio iste veritatis harum illo numquam nostrum ex pariatur?
          Cumque, impedit. Vero amet modi laudantium quo fugiat veritatis corporis asperiores mollitia perferendis minus ut molestias veniam in, repellat unde velit magnam perspiciatis rerum maiores delectus harum, illum distinctio. Repellendus.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis minus iste at dolor qui! Fugiat ratione consectetur beatae eum sed maiores veniam animi accusantium! Pariatur magni doloribus similique dolorem atque!</p>
      </div>
      
    </div>
  );
}

export default App;
