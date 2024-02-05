export const validateInputs = (type: string, inputText: string | boolean | number | object): boolean | string => {
    switch (type) {
      case "email":
        if (typeof inputText === 'string') {
          const emailsRegex =
            /^(?:[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:|\\)*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:|\\)+)\])$/;
          return emailsRegex.test(inputText);
        }
        return "empty";
  
      case "password": {
        if (typeof inputText === 'string') {
          if (inputText.length > 50) {
            return false;
          } else {
            return (
              /(?=.{8,50})/.test(inputText) &&
              /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(inputText) &&
              /[a-z]/.test(inputText) &&
              /[0-9]/.test(inputText) &&
              /[A-Z]/.test(inputText) &&
              /^\S*$/.test(inputText)
            );
          }
        }
        return "empty";
      }
  
      case "required": {
        if (inputText && inputText.toString().length > 0) {
          return true;
        } else if (typeof inputText === "boolean") {
          return true;
        } else if (typeof inputText === "number") {
          return true;
        } else if (typeof inputText === "object") {
          return true;
        }
        return "empty";
      }
      case "consecsutivespace": {
        if (typeof inputText === 'string') {
          const spacesRegex = /\s{3,}/;
          if (inputText && inputText.match(spacesRegex)) {
            return true;
          } else {
            return false;
          }
        }
        return "empty";
      }
  
      default:
        return type;
    }
  };
  