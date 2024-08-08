import React from 'react'
import { Route, Routes, Link, BrowserRouter as Router} from 'react-router-dom'
import Read from './components/Read'
import Home from './components/Home'
import Edit from './components/Edit'

const MiRouter = () => {
  return (
    <Router>
        <div>
            <Link to="/edit"><button>Edit</button></Link>
            <Link to="/read"><button>Read</button></Link>
            <Link to="/"><button>Home</button></Link>
        </div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/edit' element={<Edit />}/>
            <Route path='/read' element={<Read />}/>
        </Routes>

    </Router>
  )
}

export default MiRouter