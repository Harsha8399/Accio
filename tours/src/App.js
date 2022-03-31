import './App.css';
import React,{ useState , useEffect} from 'react'
import Tours from './Components/Tours'


const url = "https://course-api.com/react-tours-project"

const App = () =>{
  const [tours,setTours] = useState([])
  const removeTour = (id) => {
    setTours(tours.filter((tour)=>tour.id!==id))
  }

  useEffect(()=>{
    fetchTours()
  },[])               //ComponentDidMount

  const fetchTours = async() => {
    try{
      const response = await fetch(url)
      const toursFetched = await response.json()
      setTours(toursFetched)
    }
    catch(err){
      console.log(err)
    }
  }
  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button onClick={fetchTours}>refresh</button>
        </div>
      </main>
    )  
    }
    return(
      <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
    )
  }

export default App;








// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       tours:[]
//     }
//     this.fetchTours = this.fetchTours.bind(this)
//   }
  

//   async fetchTours(){
//     try{
//       const response = await fetch(url)

//       const toursFetched = await response.json()
//       console.log(toursFetched)
      
//       this.setState({tours:toursFetched})
//     }catch(err){
//       console.log(err)
//     }
//   }
//   componentDidMount(){
//     this.fetchTours()
//   }

//   render(){
//     return (
//       <div className="App">
//         <Tours/>
        
//       </div>
//     );
//   }
  
// }

