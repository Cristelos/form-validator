import React from 'react'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../Components/ErrorMessage/ErrorMessage';
import './Form.scss'

export const Form = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (dataF) => {
        console.log(dataF);
    }

  return (
    <>
        
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <h2 className='form_title'>
                Fromulario de contacto
            </h2>
            <p>Nombre:</p>
            <input type='text' {...register("name", {required: true})} placeholder='Ej: María'/>
            <ErrorMessage error={errors.name}/>

            <p>Apellidos:</p>
            <input type='text' {...register("surname", {required: true, minLength: 5})} placeholder='Ej: Del Monte'/>
            <ErrorMessage error={errors.surname}/>

            <p>Teléfono:</p>
            <input type='mobile' {...register("age", {required: true, minLength: 9})} placeholder='Ej: 555 555 555'/>
            <ErrorMessage error={errors.age}/>

            <p>Email:</p>
            <input type='email' {...register("email", {required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} placeholder='Ej: mariaDelMonte@mariaDelMonte.com'/>
            <ErrorMessage error={errors.email}/>

            <p>¿Quiéres saber algo más? Escríbenos:</p>
            <textarea {...register("coments", {required:true, minLength: 50})} rows="10" cols="50"/>
            <ErrorMessage error={errors.coments}/>

            <button>Enviar </button>
        </form>
    </>
  )
}
