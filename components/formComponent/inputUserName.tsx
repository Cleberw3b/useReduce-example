import { FC } from "react"
import { IInput } from "./props/formComponentsInterface"

const InputUserName: FC<IInput> = ({ register, errors }) => {

  return (
    <>
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        className={`${errors.username ? 'input-username input-error' : 'input-username'}`}
        name="username"
        ref={register({
          required: { value: true, message: "Campo obrigatorio" },
          minLength: {
            value: 3,
            message: "Nome deve ter no mínimo de 3 caracteres"
          },
          maxlength: {
            value: 18,
            message: "Nome deve ter no máximo de 18 caracteres"
          }
        })}
      />
      {errors.username && (
        <div className="default-form-warn"> {errors.username.message}</div>
      )}
    </>
  )
}

export default InputUserName
