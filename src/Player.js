import { ByteArkPlayerContainer } from 'byteark-player-react'
import { SOURCE } from './source'

const Player = (props) => {
    const {onReady} = props

    const options = {
        fluid: true,
        autoplay: true,
        muted: true,
        controls: false,
        aspectRatio: '16:9',
        poster: SOURCE[0].poster,
        sources: SOURCE[0],
        onReady: (instance) => {
            onReady(instance)
        }
      }

    return <ByteArkPlayerContainer {...options} />
}

export default Player