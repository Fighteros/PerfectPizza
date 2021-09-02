import NavBar from './components/NavBar'
import MainSection from './components/MainSection'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <MainSection />
      </Container>
    </>
  )
}

export default App

