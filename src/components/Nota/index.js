import React, { Component } from 'react'

import { Card } from 'antd'

class Nota extends Component {

    componentDidMount(){
        console.log('Se ha generado una nota')
    }

    render() {
        return(
            <Card title={this.props.data.title}>
                <p>{this.props.data.text}</p>
            </Card>
        )
    }
}

export default Nota