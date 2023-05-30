import React from 'react'

export const ErrorMessage = ({ error }) => {
  return (
    <div>
    {error && <>
        {error.type === "required" && <p>Campo requerido</p>}
        {error.type === "minLength" && <p>Número de letras insuficiente</p>}
        {error.type === "min" && <p>Edad no permitida</p>}
        {error.type === "pattern" && <p>Introduzca una dirección de email válido</p>}
    </>}
    </div>
  )
}
