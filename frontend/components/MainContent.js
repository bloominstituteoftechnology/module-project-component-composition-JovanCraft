import React, {useState, useEffect} from 'react'
import axios from 'axios'

const api_key = `DEMO_KEY`
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`


const MainContent = () => {

    const [photo, setPhoto] = useState([])


    useEffect(() => {
    function fetchPhoto(){
      axios
      .get(URL)
      .then(res => {
        setPhoto(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    //fetchPhoto()
    setPhoto({
        "date": "2023-08-17",
        "explanation": "Sprawling emission nebulae IC 1396 and Sh2-129 mix glowing interstellar gas and dark dust clouds in this nearly 12 degree wide field of view toward the northern constellation Cepheus the King. Energized by its central star IC 1396 (left), is hundreds of light-years across and some 3,000 light-years distant. The nebula's intriguing dark shapes include a winding dark cloud popularly known as the Elephant's Trunk below and right of center.It is tens of light-years long!",
        "hdurl": "https://apod.nasa.gov/apod/image/2308/ElephantTrunkBatSquidSeahorse.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "A Cosmic Zoo in Cepheus",
        "url": "https://apod.nasa.gov/apod/image/2308/ElephantTrunkBatSquidSeahorse1024.jpg"
      })
  }, [])
  if(!photo){
    return `Fetching Photo of the Day...`
  }

    return (
    <section>
      <div className='card'>
        <h2>{photo.title}</h2>
      </div>
    </section>
    )
}



export default MainContent;
