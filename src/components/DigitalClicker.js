import React from 'react'

class DigitalClicker extends React.Component {

    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }

    }


    render(){

        const addClick = () => {
            const plusClick = this.state.timesClicked + 1
            this.setState({
                timesClicked: plusClick
            })
        }

        return(
            <div>
                <button onClick={addClick} >{this.state.timesClicked}</button>
            </div>

        )

    }

}

export default DigitalClicker
