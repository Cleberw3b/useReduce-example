import { FC } from "react"
import { IInput } from "./props/formComponentsInterface"
import { SECURE_PASSWORD_REGEX } from "utils/consts"

const InputPassword: FC<IInput> = ({ register, errors }) => {

	return (
		<>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				className={`${errors.password ? 'input-password input-error' : 'input-password'}`}
				name="password"
				ref={register({
					required: {
						value: true,
						message: "Campo obrigatorio"
					},
					minLength: {
						value: 8,
						message: "Password inválido"
					},
					pattern: {
						value: SECURE_PASSWORD_REGEX,
						message: "Password inválido"
					}
				})}
			/>
			{errors.password && (
				<div className="default-form-warn"> {errors.password.message}</div>
			)}
		</>
	)
}

export default InputPassword
