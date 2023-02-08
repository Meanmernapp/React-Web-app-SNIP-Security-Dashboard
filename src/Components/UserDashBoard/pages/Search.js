import React, { useContext, useState } from 'react'
import img1 from '../../../images/SNIP-MEDIUM.png'
import { Image } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { AppContext } from '../../../App'



const Search = () => {
  const { state, dispatch } = useContext(AppContext); 
  let navigate = useNavigate();
  const [location, setLocation] = useState()
  
  const [text, setText] = useState()
  const checkInput = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }

  const checkLocation = (e) => {
    setLocation(e.target.value)
  }
  const searchMe = async () => {
    if (text.includes('@')) {
      if (location) {
        await axios
          .get(
            `https://api.pipl.com/search/?email=${text}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
          )
          .then(function (response) {
            if (response) {
              dispatch({ type: 'UPDATE_INPUT', data: response?.data.possible_persons, });
              navigate("/example")
            }
          })
      } else {
        await axios
          .get(
            `https://api.pipl.com/search/?email=${text}&key=n6fggbf0hqfr896xrdq16qkc`
          )
          .then(function (response) {
            if (response) {
              dispatch({ type: 'UPDATE_INPUT', data: response?.data.possible_persons, });
              navigate("/example")
            }
          })
      }
    } else {
      const myArray = text.split(' ')
      const arrayLength = myArray.length
      console.log(arrayLength + 'Kainat Kiran Rashid')
      if (arrayLength > 0) {
        if (arrayLength === 2) {
          if (location) {
            await axios
              .get(
                `https://api.pipl.com/search/?first_name=${myArray[0]}&last_name=${myArray[1]}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
              )
              .then(function (response) {
                if (response) {
                  dispatch({ type: 'UPDATE_INPUT', data: response?.data.possible_persons, });
                  navigate("/example")
                }
              })
          } else {
            await axios
              .get(
                `https://api.pipl.com/search/?first_name=${myArray[0]}&last_name=${myArray[1]}&key=n6fggbf0hqfr896xrdq16qkc`
              )
              .then(function (response) {
                if (response) {
                  dispatch({ type: 'UPDATE_INPUT', data: response?.data.possible_persons, });
                  navigate("/example")
                }
              })
          }
        } else {
          if (location) {
            await axios
              .get(
                `https://api.pipl.com/search/?first_name=${myArray[0]}&middle_name=${myArray[1]}&last_name=${myArray[2]}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
              )
              .then(function (response) {
                if (response) {
                  dispatch({ type: 'UPDATE_INPUT', data: response?.data.possible_persons, });
                  navigate("/example")
                }
              })
          } else {
            await axios
              .get(
                `https://api.pipl.com/search/?first_name=${myArray[0]}&middle_name=${myArray[1]}&last_name=${myArray[2]}&key=n6fggbf0hqfr896xrdq16qkc`
              )
              .then(function (response) {
                if (response) {
                  dispatch({ type: 'UPDATE_INPUT', data: response?.data.possible_persons, });
                  navigate("/example")
                }
              })
            }
        }
      } else {
        if (location) {
          await axios
            .get(
              `https://api.pipl.com/search/?username=${myArray[0]}&location=${location}&key=n6fggbf0hqfr896xrdq16qkc`
            )
            .then(function (response) {
              if (response) {
                dispatch({ type: 'UPDATE_INPUT', data: response?.data.possible_persons, });
                navigate("/example")
              }
            })
        } else {
          await axios
            .get(
              `https://api.pipl.com/search/?username=${myArray[0]}&key=n6fggbf0hqfr896xrdq16qkc`
            )
            .then(function (response) {
              if (response) {
                dispatch({ type: 'UPDATE_INPUT', data: response?.data.possible_persons, });
                navigate("/example")
              }
            })
        }
      }
      
    }
    
  }
 
  return (
    <>
         <div className='home'>
          <div>
            <Image className='search_main_img' src={img1} />
          </div>
          <div className='search_main_input'>
            <input
              type='text'
              className='search_input_one'
              placeholder='Name, Email, Username or Phone'
              onChange={checkInput}
              name=''
              id=''
            />
            <span className='search_span'></span>
            <input
              type='text'
              className='search_input_two'
              placeholder='Location (optional)'
              onChange={checkLocation}
              name=''
              id=''
            />
            <button className='search_button' onClick={searchMe}>

              <i class='fa-solid fa-magnifying-glass search_icon'></i>
          </button>
          </div>
        </div> 
    </>
  )
}

export default Search

