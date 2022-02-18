import { ByteArkPlayerContainer } from 'byteark-player-react'
import { SOURCE } from './source'

const Player = (props) => {
    const {onReady} = props

    const options = {
        fluid: true,
        autoplay: true,
        muted: true,
        aspectRatio: '16:9',
        poster: 'https://qoder.byteark.com/images/video-frames/1/GU/cg/1GUcgd3XwsmD-large.jpg',
        sources: SOURCE[0],
        onReady: (instance) => {
            onReady(instance)
        }
      }

    return <ByteArkPlayerContainer {...options} />
}

export default Player