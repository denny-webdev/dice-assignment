
import React from 'react'

class die extends React.Component {
    constructor(){
        super()

            this.state = {
                sides: 2,
                rolledNumber: 'null'
            }
        }

    render() {
        return(
            <div style={{border:'2px White solid', padding: '8px'}}>                   
                <label htmlFor="sides">Sides:</label>
                <input type="number" min="2" max="100" id="sides" value={this.state.sides} onChange={this.onInputChange}></input>
                <label htmlFor="roll">Rolled:</label>
                <span>
                    {this.state.rolledNumber}
                </span>
                    <button type="button" onClick={this.roll}>Roll</button>
            </div>
            ) 

        }

        roll = () => {
            const rolled = Math.random() * (this.state.sides - 1) + 1;
            this.setState({
                rolledNumber: Math.round(rolled)
            })

        }

        onInputChange = (event) => {
            this.setState({
                sides: event.target.value

            })
        }

}
export default die