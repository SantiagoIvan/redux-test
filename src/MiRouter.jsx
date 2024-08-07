import React from 'react'
import { Route, Routes, Link, BrowserRouter as Router} from 'react-router-dom'
import Primary from './components/Primary'
import Secondary from './components/Secondary'
import Home from './components/Home'

const MiRouter = () => {
  return (
    <Router>
        <div>
            <Link to="/primary"><button>Primary</button></Link>
            <Link to="/secondary"><button>Secondary</button></Link>
            <Link to="/"><button>Home</button></Link>
        </div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/primary' element={<Primary />}/>
            <Route path='/secondary' element={<Secondary />}/>
        </Routes>

    </Router>
  )
}

export default MiRouter