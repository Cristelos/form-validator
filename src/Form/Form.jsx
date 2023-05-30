import React from 'react'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../Components/ErrorMessage/ErrorMessage';

export const Form = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (dataF) => {
        console.log(dataF);
    }

  return (
    <>
        <h2>
            Fromulario de contacto
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("name", {required: true})}/>
            <ErrorMessage error={errors.name}/>

            <input type='text' {...register("surname", {required: true, minLength: 5})}/>
            <ErrorMessage error={errors.surname}/>

            <input type='number' {...register("age", {required: true, min:18})}/>
            <ErrorMessage error={errors.age}/>

            <input type='email' {...register("email", {required:true})}/>
            <ErrorMessage error={errors.email}/>

            <button>Enviar </button>
        </form>
    </>
  )
}
