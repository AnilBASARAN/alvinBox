import Box from "./Box.jsx"
import './index.css'; // Importing Tailwind styles

const App = () => {
  return ( 
  <div className="flex h-screen flex-col justify-center items-center" >
    <Box 
      flex= "flex justify-center items-center"
      textColor="text-white"
      bgColor = "bg-rose-500"
      border="border-4 border-blue-800"
      padding= "p-5"
      margin= "m-1"
      size= "w-24 h-24 "
      >
      Box1
    </Box>

    <Box 
      flex= "flex justify-center items-center"
      textColor="text-green-500"
      bgColor = "bg-yellow-500"
      border="border-4 border-slate-200"
      padding= "p-5"
      margin= "m-10"
      size= "w-24 h-24 "
      >
      Box2
    </Box>

    <Box 
      flex= "flex justify-center items-center"
      textColor="text-blue-500"
      bgColor = "bg-green-500"
      border="border-8 border-black"
      margin= "m-2"
      size= "w-24 h-24 "
      >
      Box3
    </Box>
  </div>
  );
};

export default App;
