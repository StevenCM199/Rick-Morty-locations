import { useEffect, useState } from "react";
import LocationInfo from "../components/LocationInfo";
import ResidentInfo from '../components/ResidentInfo'; 
import locations from '../src/locations.json'
import "./styles.css";


function App() {

  const [id, setId] = useState(Math.floor(Math.random() * 126) + 1)
  const [value, setValue ] = useState("");

  let locationURL = `https://rickandmortyapi.com/api/location/${id}`;
  
  useEffect(() => {
    setId(Math.floor(Math.random() * 126) + 1);
    locationURL = `https://rickandmortyapi.com/api/location/${id}`;
  }, [])

  const onSearch = (searchTerm, id) => {
    setValue(searchTerm);
    setId(id);
    console.log('search', searchTerm, 'id', id);
  }

  return (
    <>
      <div className="main-banner"></div>

      <div className="banner-logo">
        <img className="logo" src='./assets/logo.png' alt="" />
        <h1 className="center">Locations Wiki</h1>

          <div className='search-container'> 
          <div className='seach-inner'>
            <input type='text' value={value} onChange = {(e) => setValue(e.target.value)} />
            <button onClick = {() => onSearch(value)}> Search </button>
          </div> 
          <div className ='dropdown'>
            {locations
              .filter((item)=> {
                const searchTerm = value.toLowerCase();
                const charName = item.name.toLowerCase();
                
                return (
                  searchTerm && 
                  charName.startsWith(searchTerm) && 
                  charName !== searchTerm
                );          
              })
              .slice(0,5)
              .map((item) => (
              <div onClick={()=> onSearch(item.name, item.id)} 
                className='drowdown-row' 
                key={item.id}
              > 
                {item.name}
              </div>
            ))}
          </div>
        </div>

      </div>
      
      <LocationInfo url={locationURL}/>
      <ResidentInfo url={locationURL}/>
    </>

  );
}

export default App;
