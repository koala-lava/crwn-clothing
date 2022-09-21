import {Routes, Route} from 'react-router-dom'

import Home from "./routes/home/home.component"
import SignIn from './routes/sign-in/sign-in.component'
import Navigation from './routes/navigation/navigation.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

const Shop = () => (
  <div>I am shop</div>
)

export default App
