import {atom, selector } from 'recoil'
import axios from 'axios'

//asynchronous data queries

export const notifications=atom({
    key:"networkAtom",
    default:selector({
        key:"networkAtomSelector",
        get:async()=>{
            await new Promise(r=>setTimeout(r,3000))
            const res=await axios.get("http://localhost:3000/")
            return res.data
        }
    })
})
export const totalNotificationCountSelector=selector({
    key:"totalNotificationCountSelector",
    get:({get})=>{
        const allNotifications=get(notifications);
        const networkAtomCount=allNotifications.network
        const jobsAtomCnt=allNotifications.jobs
        const notifactionAtomCnt=allNotifications.notifications
        const messageAtomCnt=allNotifications.messaging
        return (networkAtomCount+jobsAtomCnt+notifactionAtomCnt+messageAtomCnt)
    }
})


