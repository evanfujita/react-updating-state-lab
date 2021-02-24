import React from 'react'

class YouTubeDebugger extends React.Component {

    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }




    render(){
        const handleBitrate = () => {
            this.setState({
                errors: this.state.errors,
                user: this.state.user,
                    settings: {
                        bitrate: 12,
                        video: {
                            resolution: this.state.settings.video.resolution
                    }
                }

            })
        }

        const handleResolution = () => {
            this.setState({
                errors: this.state.errors,
                user: this.state.user,
                    settings: {
                        bitrate: this.state.settings.bitrate,
                        video: {
                            resolution: '720p'
                    }
                }

            })
        }


        return(
            <div>
                <button className='bitrate' onClick={handleBitrate}>{this.state.settings.bitrate} bitrate</button>
                <button className='resolution' onClick={handleResolution}>{this.state.settings.video.resolution} resolution</button>
            </div>
        )

    }


}

export default YouTubeDebugger