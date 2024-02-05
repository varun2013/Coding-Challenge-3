import { validateInputs } from "./validation";

export const fieldValidator = (
  field: string,
  value: string,
  type: string,
  maxLength: number,
  minLength: number,
): { getError: boolean; errorMsg: string; setClassName: string } => {
  let getError = false,
    errorMsg = "";

  if (validateInputs(type, value) === false) {
    if (field === "password") {
      if (maxLength !== null && value.trim().length > maxLength) {
        errorMsg = `Maximum ${maxLength} ${type === "string" ||
          type === "required" ||
          type === "Alphanumeric" ||
          type === "password"
          ? "characters"
          : "digits"
          } are allowed.`;
        getError = true;
      }
      if (minLength !== null && value.trim().length < minLength) {
        errorMsg = `Minimum ${minLength} ${type === "string" ||
          type === "required" ||
          type === "Alphanumeric" ||
          type === "password"
          ? "characters"
          : "digits"
          } are required.`;
        getError = true;
      }
      if (
        value.trim().length >= (minLength || 0) &&
        value.trim().length <= (maxLength || 0)
      ) {
        if (/[a-z]/.test(value.trim()) === false) {
          errorMsg = `A lowercase ${type === "string" ||
            type === "required" ||
            type === "Alphanumeric" ||
            type === "password"
            ? "letter"
            : "digit"
            } is required.`;
          getError = true;
        } else if (/[A-Z]/.test(value.trim()) === false) {
          errorMsg = `A uppercase ${type === "string" ||
            type === "required" ||
            type === "Alphanumeric" ||
            type === "password"
            ? "letter"
            : "digit"
            } is required.`;
          getError = true;
        } else if (/[0-9]/.test(value.trim()) === false) {
          errorMsg = `A  ${type === "string" || type === "required" || type === "Alphanumeric"
            ? "characters"
            : "digit"
            } is required.`;
          getError = true;
        } else if (
          /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(
            value.trim()
          ) === false
        ) {
          errorMsg = `A special character is required.`;
          getError = true;
        } else if (/^\S*$/.test(value) === false) {
          errorMsg = `Password must not contain whitespaces.`;
          getError = true;
        }
      }
    } else {
      if (type === "email") {
        errorMsg = `Enter a valid email address.`;
      } else {
        errorMsg = `Enter valid ${type}.`;
      }
      getError = true;
    }
  } else if (validateInputs("consecsutivespace", value) === true) {
    if (field === "alertName") {
      errorMsg = `Not more than two spaces are allowed between characters.`;
      getError = true;
    }
  } else if (maxLength !== null && value.trim().length > maxLength) {
    errorMsg = `Enter less than ${maxLength} ${type === "string" ||
      type === "required" ||
      type === "Alphanumeric" ||
      type === "symbolWithOneAlphanumeric" || type === "symbolWithOneAlphabatics"
      ? "characters"
      : "digits"
      }.`;
    getError = true;
  } else if (minLength !== null && value.trim().length < minLength) {
    errorMsg = `Enter at least ${minLength} ${type === "string" || type === "required" || type === "Alphanumeric" || type === "symbolWithOneAlphanumeric" || type === "symbolWithOneAlphabatics"
      ? "characters"
      : "digits"
      }.`;
    getError = true;
  }

  return {
    getError,
    errorMsg,
    setClassName: getError ? "error" : "",
  };
};
