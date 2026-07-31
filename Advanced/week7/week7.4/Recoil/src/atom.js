import {atom, selector } from 'recoil'

export const networkAtom=atom({
    key:"networkAtom"
    ,default:102
})

export const jobsAtom=atom({
    key:"jobsAtom"
    ,default:102
})

export const notificationAtom=atom({
    key:"notificationAtom"
    ,default:102
})

export const messagingAtom=atom({
    key:"messagingAtom"
    ,default:102
})
export const totalNotificationCountAtom=selector({
    key:"totalNotificationCountAtom",
    get:({get})=>{
        const networkAtomCount=get(networkAtom);
        const jobsAtomCnt=get(jobsAtom);
        const notifactionAtomCnt=get(notificationAtom)
        const messageAtomCnt=get(messagingAtom)
        return (networkAtomCount+jobsAtomCnt+notifactionAtomCnt+messageAtomCnt)
    }
})


