import { useEffect, useState } from 'react';
import './App.css';
import noresult from './img/noresult.jpg'
import AdCard from './components/AdCard';
import 'fontawesome-free/css/all.min.css';
function App() {
  const [ads, setAds] = useState([]);
  const [inputData, setInputData] = useState('');
  const [loading, setLoading] = useState(false);

  const loadAds = async (key = "") => {

    try {
      setLoading(true);
      const res = await fetch('http://localhost:8000/fetchAds', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          key
        })
      });

      if (res.status !== 200) {
        throw new Error(res.error);
      }
      const rdata = await res.json();
      setAds(rdata.matchedAds)
      // console.log(rdata.matchedAds);

    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  }
  useEffect(() => {
    loadAds();
  }, [])
  return (
    <div className='container my-4'>
    <h1><span className='text-primary'>Ad</span>-<span className='text-success'>Search</span></h1>
      <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
        <div className="input-group">
          <input type="search" placeholder="Enter keyword to search for particular ads" onChange= {(e)=>setInputData(e.target.value)}
           value={inputData} onKeyDown={(e)=>{if(e.key==='Enter'){loadAds(inputData)}}} className="form-control border-0 bg-light" />
          <div className="input-group-append">
            <button id="button-addon1" type="submit" onClick={()=>{loadAds(inputData)}} className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
          </div>
        </div>
      </div>

      <AdCard adData={ads} />
      {ads.length===0 && !loading?<><h1> Sorry no match found<i class="fa fa-exclamation"></i></h1><img src={noresult} 
      style={{width:'100vw',maxWidth:'600px'}} alt='noresult'></img></>:loading?<h1>Loading data...</h1>:null}
    </div>
  );
}

export default App;
