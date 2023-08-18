import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-auto py-28 px-10 bg-gradient-to-b from-gray-500 to-black text-white justify-center'>

        <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center h-full pt-4'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-800'>About</p>
            </div>

        <p className='text-xl mt-20'>
        Hello, my name is Sandro Gataric, I live in Bosnia and Herzegovina.
                I deal with frontend, web programming.
                I study programming and software engineering
                 at Apeiron University in Banja Luka.
                He has one year left until graduation. 
        </p>
        <br></br>

        <p className='text-xl'>
        This website is just one example of my knowledge of React frontend programming.
The website is designed using React and tailwind css.
The website is flexible, i.e. adapted for mobile phones.
        </p>

        </div>

    </div>
  )
}

export default About