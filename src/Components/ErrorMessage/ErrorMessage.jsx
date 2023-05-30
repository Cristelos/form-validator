import React from 'react'

export const ErrorMessage = ({ error }) => {
  return (
    <div>
    {error && <>
        {error.type === "required" && <p className='form_error'>Campo obligatorio</p>}
        {error.type === "minLength" && <p className='form_error'>Número de letras insuficiente</p>}
        {error.type === "min" && <p className='form_error'>Edad no permitida</p>}
        {error.type === "pattern" && <p className='form_error'>Introduzca una dirección de email válido</p>}
    </>}
    </div>
  )
}
