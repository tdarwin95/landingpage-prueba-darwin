import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    alerta: PropTypes.string.isRequired,
    contact: PropTypes.object.isRequired,
	onRegisterContact: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}

function  FormContact ({alerta, contact, onRegisterContact, onChange}){
    return (
        <div className="contenedor-contactanos">
            <div className={alerta}>Formulario Enviado con Exito</div>
            <div className="contactanos">
                
                <form onSubmit={onRegisterContact} className="formulario">

                    <div className="form-control">
                        <label for="">NOMBRE</label>
                        <input type="text" name="name" id="" onChange={(ev)=>onChange(ev)}/>
                    </div>

                    <div className="form-control">
                        <label for="">APELLIDO</label>
                        <input type="text" name="lastname" id=""/>
                    </div>

                    <div className="form-control">
                        <label for="">MAIL</label>
                        <input type="text" name="mail" id=""/>
                    </div>

                    <div className="form-control">
                        <label for="">TELEFONO</label>
                        <input type="text" name="phone" id="" />
                    </div>

                    <div className="boton">
                        <button type='submit' >ENVIAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

FormContact.propTypes = propTypes

export default FormContact