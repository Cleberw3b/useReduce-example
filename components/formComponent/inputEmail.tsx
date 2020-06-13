import { FC } from "react"
import { IInput } from "./props/formComponentsInterface"
import { EMAIL_REGEX } from "utils/consts"

const InputEmail: FC<IInput> = ({ register, errors, placeholder }) => (
  <>
    <label htmlFor="email">Email</label>
    <input
      type="email"
      name="email"
      placeholder={placeholder}
      ref={register({
        required: { value: true, message: "Campo obrigatorio" },
        pattern: {
          value: EMAIL_REGEX,
          message: "E-mail invalido"
        }
      })}
    />
    {errors.email && (
      <div className="default-form-warn"> {errors.email.message}</div>
    )}
  </>
)

export default InputEmail
