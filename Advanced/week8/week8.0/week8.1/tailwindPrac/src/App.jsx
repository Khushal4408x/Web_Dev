
import { RevenueCard } from '../components/RevenueCard'
import './App.css'

function App() {

  return (
    <div className='grid grid-cols-3'>
      <RevenueCard title={"Amount Pending"} amount={"92,312.20"} count={"45"}/>
    </div>
  )
}

export default App
