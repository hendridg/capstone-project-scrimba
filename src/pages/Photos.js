import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {

    const {allPhotos} = useContext(Context)
    // Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />
    
    const photos = allPhotos.map((photo, i) => 
        <Image key={photo.id} img={photo} className={getClass(i)}/>
        )

    return (
        <main className="photos">
            {photos}
        </main>
    )
}

export default Photos