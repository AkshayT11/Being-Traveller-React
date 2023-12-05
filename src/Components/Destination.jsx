import React from 'react'
import DestinationCard from '../layouts/DestinationCard'

const Destination = () => {
  return (
    <div className='min-h-screen flex mt-10 flex-col justify-center md:mx-32 mx-5'>
        <h1 className='text-4xl font-semibold uppercase text-center '>Most popular Destinations</h1>

        <div className='flex flex-col lg:flex-row gap-5 mt-14'>
            <DestinationCard 
            img="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             title="France, Paris"
             para="Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine."/>
             <DestinationCard 
            img="https://cdn.kimkim.com/files/a/content_articles/featured_photos/d78a2299689841d6a20ac06b42525b327a25fc2a/medium-0bb280b6a8e55d33d3ce99d8ffd2af7c.jpg"
             title="Norway"
             para="The 13 most incredible experiences in Norway ... This 2102-sq-km national park is one of mainland Norway's most dramatic landforms. In the west it embraces ..."/>
             <DestinationCard 
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQtPlUBtyYT7gvsmnTF4U79wZszAHAMAhzw&usqp=CAU"
             title="India North East"
             para="Northeast India, officially known as the North Eastern Region is the easternmost region of India representing both a geographic and political administrative division of the country. It comprises eight states—Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram.."/>
        </div>
    </div>
  )
}

export default Destination