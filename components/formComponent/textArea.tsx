import { FC } from "react"
import { IInput } from "./props/formComponentsInterface"

const TextArea: FC<IInput> = ({ register, errors }) => (
  <>
    <label htmlFor="message">Message</label>
    <textarea
      name="message"
      rows={3}
      ref={register({
        required: {
          value: true,
          message: "Campo obrigatorio"
        },
        minLength: {
          value: 20,
          message: "Mensagem deve ter no minimo de 20 caracteres"
        },
        maxLength: {
          value: 280,
          message: "Mensagem deve ter no maximo de 280 caracteres"
        }
      })}
    />
    {errors.message && (
      <div className="default-form-warn"> {errors.message.message} </div>
    )}
  </>
)

export default TextArea
