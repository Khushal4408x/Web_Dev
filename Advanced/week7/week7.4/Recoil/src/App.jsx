import { useState } from 'react'

import { RecoilRoot, useRecoilValue } from 'recoil'
import { notifications ,totalNotificationCountSelector} from './atom'

function App() {
  return <RecoilRoot>
    <MainApp/>
    
  </RecoilRoot>
}

function MainApp(){
    const networkNotificationCount=(useRecoilValue(notifications)).network
    console.log(networkNotificationCount)
    const messageCount=(useRecoilValue(notifications)).messaging
    const jobsAtomCount=(useRecoilValue(notifications)).jobs
    const notificationAtomCount=(useRecoilValue(notifications)).notifications
    
    // const totalNotificationCoun=usememo and add all the above vars  or WE CAN USE SELECTORS
    const totalNotificationCnt=useRecoilValue(totalNotificationCountSelector)//this is better
    //if another var in future depends on above var then selector will give advantage
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
