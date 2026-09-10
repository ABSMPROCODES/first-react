import type { IPlayer } from './types/typeplayer'
import { Suspense } from 'react'
import Banner from './Components/Banner'
import Nav from './Components/nav'
import Players from './Components/player/Players'

const playerFetch= async (): Promise<IPlayer[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}

function App() {
 const playersPromise = playerFetch();
  return (
    <>
     <Nav />
     <Banner />
     <Suspense fallback={<div>Loading...</div>}>
      <Players playerspromise={playersPromise} />
     </Suspense>
    </>
  )
}

export default App;
