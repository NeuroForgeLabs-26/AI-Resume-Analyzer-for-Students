

function App() {
  return (
    <main className="w-full h-[100vh] bg-[url('./assets/WhiteGround.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="w-[500px] h-[500px] bg-white/20 backdrop:blur-md rounded-2xl flex flex-col">
         <h2 className="text-[72px] text-black text-center font-bold">Login</h2>
         <div className="flex flex-col items-center justify-center gap-5 mt-12">
            <input type="email" placeholder="Enter email" className="px-2 py-3 bg-gray-300 w-72 rounded-4xl"/>
            <input type="password" placeholder="Enter password" className="px-2 py-3 bg-gray-300 w-72 rounded-4xl"/>
            <button type="button" className="px-2 py-4 bg-black w-67 rounded-4xl mt-5 text-white">Login</button>
         </div>
      </div> 
    </main>
  )
}

export default App
