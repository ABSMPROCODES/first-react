import type { IPlayer } from './types/typeplayer'
import { Suspense } from 'react'
import Banner from './Components/Banner'
import Nav from './Components/nav'
import Players from './Components/player/Players'
import { useState } from 'react'

const playerFetch= async (): Promise<IPlayer[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}

function App() {
 const playersPromise = playerFetch();
  const [coin, setcoin] = useState(5000);
  return (
    <>
     <Nav coin={coin} />
     <Banner />
     <Suspense fallback={<div>Loading...</div>}>
      <Players playerspromise={playersPromise} coin={coin} setcoin={setcoin} />
     </Suspense>
    </>
  )
}

export default App;
