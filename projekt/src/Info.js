import React, { Component } from 'react'
import { InfoConsumer } from './context'

class Info extends Component {
    render() {

        state = {
            email: this.props.item
        } 
        
        return (
            <InfoConsumer>
                {data => (
                    <div>
                        {email}
                    </div>
                )}
            </InfoConsumer>
        )
    }
}

export default Info;