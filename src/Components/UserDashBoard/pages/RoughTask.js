// import React, { useContext } from 'react'
// import { AppContext } from '../../../App'

// const Example = () => {
//   const { state, dispatch } = useContext(AppContext)
//   const mainData = state.name.person
//   const mainData1 = state.name.possible_persons
//   console.log(state)
//   console.log(state)
//   var query = state.name.query

//   const showName = () => {
//     console.log(mainData)
//     if (query.phones) {
//       console.log('Abdullah')
//     } else if (query.names) {
//       console.log(query.names[0].display)
//     } else if (query.usernames) {
//       console.log('Aisha')
//     } else if (query.emails) {
//       console.log('Asra')
//     }
//     console.log('KKR')
//   }
//   return (
//     <div className='container'>
//       <button onClick={showName}>Hello</button>{' '}
//     </div>
//   )
// }

// export default Example



// import React, { useContext } from 'react'
// import { AppContext } from '../../../App'

// const Example = () => {
//   const { state, dispatch } = useContext(AppContext)

//   var mainData = state.name.possible_persons
//   console.log(state)
//   console.log(state)
//   var query = state.name.query
//   const phone = state.name.query.phones
//   const names = state.name.query.names
//   const userNames = state.name.query.usernames
//   const emails = state.name.query.emails

//   const hi = () => {
//     console.log(phone)
//     console.log('buzzzzzzzzz')
//     console.log(mainData[1].names[1].display)
//   }
//   const hi1 = () => {
//     console.log(phone)
//     console.log('buzzzzzzzzz')
//     console.log(mainData[1].names[0].display)
//   }
//   const showName = () => {
//     console.log(mainData)
//     if (query.phones) {
//       console.log('Abdullah')
//     } else if (query.names) {
//       console.log(query.names[0].display)
//     } else if (query.usernames) {
//       console.log('Aisha')
//     } else if (query.emails) {
//       console.log('Asra')
//       mainData = state.name.person
//       console.log('Shazia')
//       console.log(mainData)
//     }
//     console.log('KKR')
//   }
//   return (
//     <>
//       <button style={{ marginLeft: '800px' }} onClick={hi}>
//         Hello
//       </button>
//       {phone && (
//         <div className='home container'>
//           {mainData.map((currElement, index) => (
//             <div className='example_main'>
//               <h3>{mainData[index].names[0].display}</h3>
//               <h5 className='example_h3'>
//                 {mainData[index].phones[0].display_international}
//               </h5>
//               <hr className='example_hr' />
//               <p className='example_p'>
//                 {mainData[index].addresses[0].display}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//       <button style={{ marginLeft: '800px' }} onClick={hi1}>
//         Hello from{' '}
//       </button>
//       {names && (
//         <div className='home container'>
//           {mainData.map((currEle, index) => (
//             <div>
//               {mainData[index].map((currElement, ind) => (
//                 <h1> {mainData[index].name[ind].display}</h1>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   )
// }
// {names && (
//   <div className='home container'>    
//             {mainData.map((item) => {
//               //   console.log(item)
//                 item?.names?.map((val) => {
//                   console.log(val.display)
//               })
//             })}
//   </div>
// )}
// export default 
// {userNames && (
//   <div className='home container'>    
//             {mainData.map((item) => {
//               //   console.log(item)
//                 item?.usernames?.map((val) => {
//                   console.log(val.content)
//               })
//             })}
//   </div>
// )
// }

// {phone && (
//   <div className='home container'>
//     {mainData.map((currElement, index) => (
//       <div className='example_main'>
//         <h3>{mainData[index].names[0].display}</h3>
//         <h5 className='example_h3'>
//           {mainData[index].phones[0].display_international}
//         </h5>
//         <hr className='example_hr' />
//         <p className='example_p'>
//           {mainData[index].addresses[0].display}
//         </p>
//       </div>
//     ))}
//   </div>
//     )}
// {names && (
//   <div className='home container'>
//             {mainData.map((item) => {
//                 //   console.log(item)
//                 item?.names?.map((val) => (
//                     <div className='example_main'>
//                         <h3>{val.display}</h3>
//                         <h5 className='example_h3'>
//                             {val.display_international}
//                         </h5>
//                         <hr className='example_hr' />
//                         <p className='example_p'>
//                             {val.addresses[0].display}
//                         </p>
//                     </div>
//                 ))
//             })}
//         </div>)}
