import Banner from './components/Banner'
import './App.css'
import HouseList from './components/HouseList'
import TestComponent from './components/TestComponent'
import { Suspense } from 'react'
function App() {
  return (
    <>
      <Banner headerText="This is my header!" />
      <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
        <HouseList />
      </Suspense>

      <TestComponent >
        <h1 className="text-center">This is a test component!</h1>
        <p className="text-center">This is a paragraph inside the test component.</p>

      </TestComponent>
    </>
  )
}

export default App
