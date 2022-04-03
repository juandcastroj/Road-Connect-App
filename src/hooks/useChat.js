// import { useEffect, useState } from "react"
// import { db } from "../firebase/firebaseConfig"

// export const useChat = () => {

//     const [error, setError] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const [messages, setMessages] = useState([])

//     useEffect(() => {
     
//         const unSubscribe = db.collection('messages').onSnapshot(
//             snapShot => {
//                 setLoading(false)
//                 setMessages(snapShot.docs.map(d => ({ id: d.id, ...d.data() })))
//             },
//             err => {
//                 setError(err)
//             }
//         )
//         return () => unSubscribe()
//     }, [setMessages])
    
//   return { error, loading, messages }
// }

