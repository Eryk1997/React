import React, { Component } from 'react'
import Date from './date'

const InfoContext = React.createContext();

class InfoProvider extends Component {
    


    render() {
        return (
            <InfoContext.Provider value="Hello">            >
                {this.props.children}
            </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };