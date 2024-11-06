import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Quiz from '../components/Quiz'


function QuizPAge() {


  return (
    <div className="bg-gray-900">
      <Navbar/>
        <Quiz/>
      <Footer/>
    </div>
  )
}

export default QuizPAge
