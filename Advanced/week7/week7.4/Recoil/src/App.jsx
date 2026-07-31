import { useState } from 'react'

import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom,totalNotificationCountAtom, notificationAtom } from './atom'

function App() {
  return <RecoilRoot>
    <MainApp/>
    
  </RecoilRoot>
}

function MainApp(){
    const networkNotificationCount=useRecoilValue(networkAtom)
    const messageCount=useRecoilValue(messagingAtom)
    const jobsAtomCount=useRecoilValue(jobsAtom)
    const notificationAtomCount=useRecoilValue(notificationAtom)
    // const totalNotificationCoun=usememo and add all the above vars  or WE CAN USE SELECTORS
    const totalNotificationCnt=useRecoilValue(totalNotificationCountAtom)
  return (
    <>
      <button>Home</button>
      <button>My network ({networkNotificationCount>=100? "99+":networkNotificationCount})</button>
      <button>Jobs{jobsAtomCount}</button>
      <button>Messaging {messageCount}</button>
      <button>Notifications{notificationAtomCount}</button>
      <button>Me {totalNotificationCnt}</button>
    </>
  )
}


export default App
