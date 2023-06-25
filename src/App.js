import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Data from './/Game.json'
import { useState } from 'react';
import './App.css';
function App() {
  const[currentpage,setCurrentpage] = useState(1);
  const recordsperpage =9;
  const lastindex = currentpage*recordsperpage;
  const firstindex = lastindex-recordsperpage;
  const records = Data.slice(firstindex,lastindex);
  const npages = Math.ceil(Data.length/recordsperpage);
  const numbers = [...Array(npages+1).keys()].slice(1);
  return (
 <div> 
  <table class="table table-dark table-hover" >
    <thead>
    <th>Id</th>
    <th>Name</th>
    <th>Price</th>
    <th>Company</th>
    <th>Play Game</th>
    <th>Buy Game</th>
    <th>Game Info</th>
    </thead>
    <tbody>
    {records.map((d,i)=>(
    
    <tr key={i}>
      <td>{d.id}</td>
      <td>{d.Name}</td>
      <td>{d.Price}</td>
      <td>{d.company}</td>
      <td>{<a href='https://www.xbox.com/en-us/play/gallery/all-games' target='_blanck'><button type="button" class="btn btn-danger" >Play</button></a>}</td>
      <td>{<a href='https://gamenation.in/'  target='_blanck'><button type="button" class="btn btn-warning">BUY</button></a>}</td>
      <td>{<a href='https://gamenation.in/'  target='_blanck'><button type="button" class="btn btn-primary">INFO</button></a>}</td>
    </tr>
    ))}
    </tbody>
  </table>
  <nav>
    <ul className='pagination'>
    <li className='page-item'>
      <a className='page-link' onClick={prevpage}>Prev</a>
    </li>
{
 numbers.map((n,i)=>(
<li className={`page-item ${currentpage===n?'active':''}`} key={i}>
  <a href='#' className='page-link'  onClick={()=>changepage(n)}>
   {n}
  </a>
</li>))
}
<li className='page-next'>
      <a className='page-link' onClick={nextpage}>Next</a>
    </li>
    </ul>
  </nav>
 </div>
     );
     function nextpage()
     {
    if(currentpage!==lastindex)
    {
    setCurrentpage(currentpage+1);
    }
     }
     function prevpage()
     {
if(currentpage!==firstindex)
{
setCurrentpage(currentpage-1)
}
     }
     function changepage(id)
     {
    setCurrentpage(id);
     }

}

export default App;
