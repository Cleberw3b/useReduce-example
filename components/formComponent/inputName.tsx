import { FC } from "react"
import { IInput } from "./props/formComponentsInterface"

const InputName: FC<IInput> = ({ register, errors }) => (
  <>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      name="name"
      ref={register({
        required: { value: true, message: "Campo obrigatorio" },
        minLength: {
          value: 3,
          message: "Nome deve ter no minimo de 3 caracteres"
        },
        maxlength: {
          value: 50,
          message: "Nome deve ter no maximo de 50 caracteres"
        }
      })}
    />
    {errors.name && (
      <div className="default-form-warn"> {errors.name.message}</div>
    )}
  </>
)

export default InputName
