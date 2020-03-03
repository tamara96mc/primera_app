import React, { Component } from 'react'

import { Button } from 'antd'

class Ajustes extends Component {

    render() {
        return(
            <div>
                <Button onClick={() => this.props.history.goBack()}>Volver a inicio</Button>
                <p>Página de Ajustes</p>
            </div>
        )
    }
}

export default Ajustes