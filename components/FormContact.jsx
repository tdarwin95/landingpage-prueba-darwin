import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";

const propTypes = {
    alerta: PropTypes.string.isRequired,
    contact: PropTypes.object.isRequired,
	onRegisterContact: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}

function  FormContact ({alerta, contact, onRegisterContact, onChange}){

    const {register,resetField, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data, event) => {
        console.log(event)
        onRegisterContact(data);
        resetField("firstname");
        resetField("lastname");
        resetField("email");
        resetField("phone");
    }
    
    return (
        <div className="contenedor-contactanos">
            <div className={alerta}>Formulario Enviado con Exito</div>
            <div className="contactanos">
                
                <form onSubmit={handleSubmit(onSubmit)} className="formulario">

                    <div className="form-control">
                        <label for="">NOMBRE</label>
                        <input type="text" id="firstname" name="firstname" {...register('firstname', {required:true})} className={errors.firstname ? 'errorInput' : ''}/>

                        {errors.firstname && errors.firstname.type == "required" && <span className='error'>El nombre es requerido</span>}
                    </div>

                    <div className="form-control">
                        <label for="">APELLIDO</label>
                        <input type="text" name="lastname" {...register('lastname', {required:true})} className={errors.lastname ? 'errorInput' : ''}/>

                        {errors.lastname && errors.lastname.type == "required" && <span  className='error' >El apellido es requerido</span>}
                    </div>

                    <div className="form-control">
                        <label for="">MAIL</label>
                        <input type="text" name="email" {...register('email', {required:true, pattern: /^\S+@\S+$/i})} className={errors.email ? 'errorInput' : ''}/>

                        {errors.email && errors.email.type == "required" && <span  className='error'>El email es requerido</span>}

                        {errors.email && errors.email.type == "pattern" && <span  className='error' >El email debe contener un formato valido</span>}
                    </div>

                    <div className="form-control">
                        <label for="">TELEFONO</label>
                        <input type="text" name="phone" {...register('phone', {required:true, pattern:/^[0-9+-]+$/, minLength: 6, maxLength: 12})} className={errors.phone ? 'errorInput' : ''}/>

                        {errors.phone && errors.phone.type == "required" && <span className='error'>El telefono es requerido</span>}

                        {errors.phone && errors.phone.type == "minLength" && <span className='error'>Debe contener minimo 6 digitos</span>}

                        {errors.phone && errors.phone.type == "maxLength" && <span className='error'>Debe contener maximo 12 digitos</span>}
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