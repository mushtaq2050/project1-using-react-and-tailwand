import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Experts from './components/Experts'
import Newslatter from './components/Newslatter'
import Last from './components/Last'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <Banner/>
     <Experts/>
     <Newslatter/>
     <Last/>
    </>
  )
}

export default App
