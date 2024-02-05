import React, { ChangeEvent, FormEvent, useState } from 'react';
import { loginFields } from './utils/loginFields';
import Input from './components/Input';
import { LoginErrorState, LoginField, LoginState } from './types/loginInputType';
import Button from './components/Button';
import { fieldValidator } from './utils/custom';
import SuccessMessage from './utils/messages/SuccessMessage';
import ErrorMessage from './utils/messages/ErrorMessage';

const fields: LoginField[] = loginFields;
let fieldsState: LoginState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

function App() {

  const [loginState, setLoginState] = useState<LoginState>(fieldsState);
  const [loginErrorState, setLoginErrorState] = useState<LoginErrorState>(fieldsState);
  const [successMessage, setSuccessMessage] = useState<Boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>,
    type: string,
    maxLength: number,
    minLength: number
  ) => {

    let error = checkValidation(
      e.target.name,
      e.target.value,
      type,
      maxLength,
      minLength
    );
    setSuccessMessage(false)
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
    setLoginErrorState({
      ...loginErrorState,
      [e.target.id]: error.errorMsg,
    });
  };

  // Check Validation Function
  const checkValidation = (
    field: string,
    value: string,
    type: string,
    maxLength: number,
    minLength: number
  ): any => {
    return fieldValidator(
      field,
      value,
      type,
      maxLength,
      minLength,
    );
  };


  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const isFormValid = validateForm(loginState, setLoginErrorState);
    if (isFormValid) {
      setSuccessMessage(true)
      SuccessMessage("Sign In successfull.");
      setLoginState(fieldsState)
      setLoginErrorState(fieldsState)

    } else {
      ErrorMessage("Added proper details to sign in.");
      setSuccessMessage(false)
    }
  }

  const validateForm = (loginState: any, setLoginErrorState: any) => {
    const errors: { [key: string]: string } = {}; // Explicitly define the type

    for (const key in loginState) {
      if (loginState.hasOwnProperty(key)) {
        let type = "";
        let maxLength = 0;
        let minLength = 0;

        if (key === "email") {
          type = "email";
          maxLength = 255;
          minLength = 5;
        }
        if (key === "password") {
          type = "password";
          maxLength = 50;
          minLength = 8;
        }
        const error = checkValidation(
          key,
          loginState[key],
          type,
          maxLength,
          minLength
        );
        if (error.errorMsg) {
          errors[key] = error.errorMsg;
        }
      }
    }

    setLoginErrorState(errors);
    return Object.keys(errors).length === 0; // Form is valid if no errors are present
  };




  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white border shadow-lg p-10 rounded-lg w-full max-w-md">
        {Object.values(loginErrorState).some(value => value) ?
          ErrorMessage("Added proper details to sign in.") :
          ""
        }
        {successMessage ?
          SuccessMessage("Sign In successful.") :
          ""
        }
        <h1 className="text-3xl font-bold mb-6">Login Form</h1>
        <div className="space-y-4">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={(event) => handleChange(event, field.type, field.maxLength, field.minLength)}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
              maxLength={field.maxLength}
              minLength={field.minLength}
              error={loginErrorState[field.id]}
            />
          ))}
        </div>
        <div>
          <Button
            action="submit"
            onSubmit={handleSubmit}
            text="Sign In"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
