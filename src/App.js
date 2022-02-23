
import arrow from './iconmonstr-angel-up-thin.svg'
import './App.scss';
import 'font-awesome/css/font-awesome.min.css'; 


import { useEffect, useState } from 'react';

function App() {

  const url = "https://fakestoreapi.com/products?limit=5"
  const [list, setList] = useState([])
  const [display, setDisplay] = useState(0)
  const [loading, setLoading] = useState(true)
  const [rating, setRating] = useState({})

  const fetchData = async() => {
    const res = await fetch(url)
    const result = await res.json()
    await setList(result.slice(0, 3))
  }
  useEffect(()=> {
    fetchData()
    setLoading(false)
  },[])

  // useEffect(() => {
 
  //   setRating(list[display].rating)
    
  // }, [display])

  const handleClick = (id) => {
    
    setDisplay(id)
  }

  console.log(list)

 console.log(Math.floor(list[display]?.rating.rate))

  // const {price, description,rating} = display
  

  if (loading){
    return(
      <div>loading...</div>
    )
  } else { 
  
  return (

    <div className="container">

      <header>
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odit eaque natus quis iusto sit ea corrupti dolor ullam hic, asperiores dolorem reiciendis nisi! Ullam totam dolor sed non sapiente.</p>
      </header>
      <div className="product-container">
        <div className="menu">
          {list.map((el, i) => {
          const {id, title, price, description, rating, count, image} = el
          return (
            <div key={id} className="item">
              <div className="sub-container">
                <img src={image} alt={title} />
                <div className="title">{title}</div>
              </div>
              <button onClick = {() => handleClick(i)}><i className="fa fa-chevron-up" aria-hidden="true"></i>
              </button>
            </div>
            )
          })}
        </div>

    
        <div className="display">
          <h3>${list[display]?.price}</h3>
          <p>{list[display]?.description}</p>
          <div className="rate">
            { Math.floor(list[display]?.rating.rate) && [...Array(Math.floor(list[display]?.rating?.rate))].map((el, i)=><i key={i} className="fa fa-star" aria-hidden="true"></i>)}
                  
            <span className="count">  ({list[display]?.rating.count})</span>
          </div>

        </div>
      </div>
      


    </div>
  );}
}

export default App;
