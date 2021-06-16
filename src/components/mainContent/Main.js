import React from "react"
import firstImage from "../../assets/1.jpeg";
import secondImage from "../../assets/2.jpeg"
import ThirdImage from "../../assets/3.jpeg"
import fourthImage from "../../assets/4.jpeg"
import "./Main.css"
import coffee from "../../assets/coffee.gif"
import anime from "../../assets/anime.gif"
import gojou from "../../assets/gojou.gif"
import photo from "../../assets/photo.gif"
const Main = () => {
  return (<>

    <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
      <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
        <h2 class="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">Things I am passionate about except coding</h2>
      </div>
      <div class="col-start-1 row-start-2 px-4 sm:pb-16">
        <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
          <div class="ml-1">
          </div>
        </div>


      </div>
      <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
        <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
          <div class="relative transition duration-500 ease-in-out  transform hover:-translate-y-5 hover:scale-20 col-span-3 row-span-2 md:col-span-2">
            <img src={fourthImage} alt="" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
          </div>
          <div class="relative transition duration-500 ease-in-out  transform hover:-translate-y-5 hover:scale-20 hidden md:block">
            <img src={ThirdImage} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
          </div>
          <div class="relative transition duration-500 ease-in-out  transform hover:-translate-y-5 hover:scale-20 hidden md:block">
            <img src={firstImage} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
    <div className="belowContainerMoreMain" style={{ width: '100%' }}>
      <div class="relative transition  duration-500 ease-in-out  transform hover:-translate-y-5 hover:scale-100" style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h4 style={{ fontSize: '18px', fontWeight: '600', padding: '5px' }}>Coffee</h4>
        <img style={{ height: '75%', width: '75%', objectFit: 'contain', border: '20px solid whitesmoke', borderRadius: '12px' }} src={coffee} alt="coffee" />
      </div>
      <div class="relative transition  duration-500 ease-in-out  transform hover:-translate-y-5 hover:scale-100" style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h4 style={{ fontSize: '18px', fontWeight: '600', padding: '5px' }}>Anime</h4>
        <img style={{ height: '75%', width: '75%', objectFit: 'contain', border: '20px solid whitesmoke', borderRadius: '12px' }} src={gojou} alt="coffee" />
      </div>
      <div class="relative transition  duration-500 ease-in-out  transform hover:-translate-y-5 hover:scale-100" style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h4 style={{ fontSize: '20px', fontWeight: '600', padding: '5px' }}>Photography</h4>
        <img style={{ height: '75%', width: '75%', objectFit: 'contain', border: '20px solid whitesmoke', borderRadius: '12px' }} src={photo} alt="coffee" />
      </div>
    </div>



  </>)
}

export default Main







// <div class="col-start-1 flex row-start-3 space-y-3 px-4">
//  <div >
//   <p class="flex ml-5 mb-3 items-center text-black text-sm font-semibold font-medium">
//   Coffee
//      </p>    
//      <img src={firstImage} alt="" class="h-60 w-80 inset-0 object-cover rounded-lg bg-gray-100" />
//   </div>


//   <div >
//   <p class="flex ml-5  items-center text-black text-sm font-semibold font-medium">
//   Coffee
//      </p>    
//      <img src={firstImage} alt="" class="h-60 w-80 inset-0 object-cover rounded-lg bg-gray-100" />
//   </div>   


//   </div>