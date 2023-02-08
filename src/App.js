import Login from './Components/Login/Login'
import Login2 from './Components/Login2/Login2'
import PasswordChange from './Components/PasswordChange/PasswordChange'
import NavigationPanel from './Components/NavigationPanel/NavigationPanel'
import RecoverPage from './Components/RecoverPage/RecoverPage'
import Navbar from './Components/UserDashBoard/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/UserDashBoard/pages/Home'
import Search from './Components/UserDashBoard/pages/Search'
import Users from './Components/UserDashBoard/pages/Users'
import SearchMain from './Components/UserDashBoard/pages/SearchMain'
import AddUser from './Components/UserDashBoard/pages/AddUser'
import Example from './Components/UserDashBoard/pages/Example'
// import Kainat from './Components/UserDashBoard/pages/Kainat';
import React, { createContext, useReducer } from 'react'
//Import immutability-helper
import update from 'immutability-helper'
import FirstModal from './Components/UserDashBoard/pages/FirstModal'
import UserDetail from './Components/UserDashBoard/pages/UserDetail'
import Actual from './Components/UserDashBoard/pages/Actual'
import MoreDetails from './Components/UserDashBoard/pages/MoreDetails'
import NameResponse from './Components/UserDashBoard/NameResponse'
import NewExample from './Components/UserDashBoard/pages/NewExample'
import Print from './Components/UserDashBoard/pages/Print'
import WithNav from './Components/UserDashBoard/pages/WithNav'
import WithoutNav from './Components/UserDashBoard/pages/WithoutNav'
import NoPerson from './Components/UserDashBoard/pages/NoPerson.js'
import Kainat from './Components/UserDashBoard/pages/Kainat'
import Test from './Components/UserDashBoard/pages/Test'
import Roughh from './Components/UserDashBoard/pages/Roughh'

export const AppContext = createContext()

const initialState = {
  inputText: '',
  testText: 'Hello world',
  name: {},
}
const initialState1 = {
  inputText: '',
  inputLocation: '',
  testText: 'Hello world',
  name: {},
}
const initialState2 = {
  inputText: '',
  testText: 'Hello world',
  name: {},
}

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return update(state, { name: { $set: action.data } })
    case 'UPDATE_TEXT':
      return update(state, { inputText: { $set: action.data } })
      case 'UPDATE_LOCATION':
        return update(state, {inputLocation : {$set: action.data}})
    // case 'SEARCH_POINTER':
    //   return update(state, { searchpointer: { $merge: action.data } })

    default:
      return initialState
  }
}
function reducer1(state1, action) {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return update(state1, { name: { $set: action.data } })
    // case 'SEARCH_POINTER':
    //   return update(state, { searchpointer: { $merge: action.data } })

    default:
      return initialState1
  }
}
function reducer2(state2, action) {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return update(state2, { name: { $set: action.data } })
    // case 'SEARCH_POINTER':
    //   return update(state, { searchpointer: { $merge: action.data } })

    default:
      return initialState2
  }
}
function App() {
  let routes
  const [state, dispatch] = useReducer(reducer, initialState)
  const [state1, dispatch1] = useReducer(reducer1, initialState1)
  const [state2, dispatch2] = useReducer(reducer2, initialState2)
  let check = true

  return (
    <>
      <AppContext.Provider
        value={{
          val1: { state, dispatch },
          val2: { state1, dispatch1 },
          val3: { state2, dispatch2 },
        }}
      >
        <Router>
          <Routes>
            <Route element={<WithoutNav />}>
              <Route path='/login' element={<Login />} />
              <Route path='/kainat' element={<Print />} />
              <Route path='/token' element={<Login2 />} />
              <Route path='/passwordchange' element={<PasswordChange />} />
              <Route path='/navigate' element={<NavigationPanel />} />
              <Route path='/recover' element={<RecoverPage />} />
            </Route>
          </Routes>

          {/* <Route path='/' exact element={<Home />} /> */}
          {/* <Route path='/search' element={<Search />} /> */}

          <Routes>
            <Route element={<WithNav />}>
              <Route path='/' element={<SearchMain />} />
              <Route path='/users' element={<Home />} />
              <Route path='/adduser' element={<AddUser />} />
              <Route path='/example' element={<Test/>} />
              <Route path='/actual' element={<Actual />} />
              <Route path='/userDetail' element={<UserDetail />} />
              <Route path='/fmodal' element={<FirstModal />} />
              <Route path='/userDetails' element={<MoreDetails />} />
              <Route path='/nameResponse' element={<NameResponse />} />
              <Route path='/noPerson' element={<NoPerson />} />
              <Route path='/Rough' element={<Roughh />} />
            </Route>
          </Routes>

          {/* <Routes>
            <Route path='/kainat' element={<Print />} />
            <Route path='/login' element={<Login />} />
            <Route path='/token' element={<Login2 />} />
            <Route path='/passwordchange' element={<PasswordChange />} />
            <Route path='/navigate' element={<NavigationPanel />} />
            <Route path='/recover' element={<RecoverPage />} />
            <Route path='/print' element={<Print/> } /> 
          </Routes> */}
        </Router>
      </AppContext.Provider>
    </>
  )
}

export default App
