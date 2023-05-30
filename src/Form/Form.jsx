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
            <h2 className='title'> Fromulario de contacto</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <label className='name'>Nombre:<br/>
            <input type='text' {...register("name", {required: true})} placeholder='Ej: María'/>
            <ErrorMessage error={errors.name}/></label>

            <label  className='surname'>Apellidos:<br/>
            <input type='text' {...register("surname", {required: true, minLength: 5})} placeholder='Ej: Del Monte'/>
            <ErrorMessage error={errors.surname}/></label>

            <label  className='phone'>Teléfono:<br/>
            <input type='phone' {...register("age", {required: true, minLength: 9})} placeholder='Ej: 555 555 555'/>
            <ErrorMessage error={errors.age}/></label>

            <label  className='email'>Email:<br/>
            <input type='email' {...register("email", {required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} placeholder='Ej: mariaDelMonte@mariaDelMonte.com'/>
            <ErrorMessage error={errors.email}/></label>

            <label className='textarea'>¿Quiéres saber algo más?<br/> Escríbenos:<br/>
            <textarea {...register("coments", {required:true, minLength: 50})} className='textarea_input' placeholder='Escribe algo...'/>
            <ErrorMessage error={errors.coments}/></label>

            <button>Enviar </button>
        </form>
    </>
  )
}
