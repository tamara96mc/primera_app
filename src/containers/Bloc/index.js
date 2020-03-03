import React, { Component } from 'react'
import './styles.css'
import Nota from '../../components/Nota'
import { Button } from 'antd'

import { connect } from 'react-redux'
import { setNotas } from '../../actions/status'

class Bloc extends Component {

    constructor(props){
        super(props)

        this.addNote = this.addNote.bind(this)
        this.gotoAjustes = this.gotoAjustes.bind(this)
    }

    addNote() {
        let newNota = { title: Math.random().toString(36), text: Math.random().toString(36) }
        let newNotas = Object.assign([], this.props.status.notas)
        newNotas.push(newNota)
        this.props.setNotas(newNotas)
    }

    gotoAjustes() {
        this.props.history.push('/ajustes')
    }

    render() {
        return(
            <div>
                <Button className="btn-azul" onClick={this.addNote}>Añadir nueva nota</Button>
                <Button style={{background: '#e66969'}} onClick={this.gotoAjustes}>Ir a ajustes</Button>
                { this.props.status.notas.map( nota => {
                    return <Nota data={nota} />
                }) }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    status: state.status
})

const mapDispatchToProps = (dispatch) => ({
    setNotas: (notas) => dispatch(setNotas(notas))
})

export default connect(mapStateToProps, mapDispatchToProps)(Bloc)