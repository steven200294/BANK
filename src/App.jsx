
import { useState, useEffect} from 'react'
import './App.css'
import Header from './component/Header'
import 'boxicons'
import DataDisplay from './DataDisplay'

function App() {
 
  const [description , setdescription] = useState('')
  const [prix , setprix] = useState('')
  const [categorie , setcategorie] = useState('')

 useEffect(()=>{
const savdescription = localStorage.getItem('description');
if (savdescription) setdescription(savdescription);

const savprix = localStorage.getItem('prix');
if (savprix) setprix(savprix);


const savcategorie = localStorage.getItem('categorie');
if (savcategorie) setcategorie(savcategorie);


}, [setdescription, setprix, setcategorie]);

const handleChange1 = (event) => {
  const value = event.target.value;
  setdescription(value);
  localStorage.setItem('description', value);
};
   const  handleChange2 = (event) => {
    const value = event.target.value;
    setprix(value);
    localStorage.setItem('prix', value);
  };

  const handleChange3 = (event) => {
    const value = event.target.value;
    setcategorie(value);
    localStorage.setItem('categorie', value);
  };





  return (
   
     <div  className=' w-full   flex flex-col items-center justify-center min-h-screen '>
     <Header />
     <div className='w-full h-20 flex items-center justify-center space-x-10'>
     <box-icon name='bank' type='solid' color='#2b95ea' size='4rem' ></box-icon>
     <h1 className='font-bold text-black text-2xl'>gestion des dépence    </h1>
      </div>
       <div className='w-[80%] h-90 shadow-2xl bg-white  rounded-2xl p-5'>
       <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">description</label>
                <input type="text" id="description"  value={description}    name="description" onChange={handleChange1} className="w-full bg-transparent border border-blue-500 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=" the description" />
              
              
            <label for="prix" class="block text-sm font-medium text-gray-700 mt-4">Price </label>
            <input type="number" id="prix" name="prix"  value={prix}   onChange={handleChange2} class="w-full bg-transparent border border-blue-500 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="the price" />
               
            <label for="categorie" class="block text-sm font-medium text-gray-700 mt-4">Catégorie</label>
            <input type="text" id="categorie" name="categorie" value={categorie} onChange={handleChange3}  class="w-full bg-transparent border border-blue-500 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="the catégorie" />

            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md ">send</button>

       </div>
       <DataDisplay
        description={description}
        prix={prix}
        categorie={categorie}
      />
     </div>
  
  )
}

export default App
