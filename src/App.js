import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Data from './/Data.json'
import { useState } from 'react';
import './App.css';
function App() {
  const[currentpage,setCurrentpage] = useState(1);
  const recordsperpage =5;
  const lastindex = currentpage*recordsperpage;
  const firstindex = lastindex-recordsperpage;
  const records = Data.slice(firstindex,lastindex);
  const npages = Math.ceil(Data.length/recordsperpage);
  const numbers = [...Array(npages+1).keys()].slice(1);
  return (
 <div> 
  <table className="table table-striped table-hover" >
    <thead>
    <th>Id</th>
    <th>Name</th>
    <th>Price</th>
    <th>Brand</th>
    <th>Stock</th>
    <th>Rating</th>
    </thead>
    <tbody>
    {records.map((d,i)=>(
    
    <tr key={i}>
      <td>{d.id}</td>
      <td>{d.title}</td>
      <td>{d.price}</td>
      <td>{d.brand}</td>
      <td>{d.stock}</td>
      <td>{d.rating}</td>
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
