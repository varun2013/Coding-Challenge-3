import { ChangeEvent, FormEvent, ReactNode } from "react";

export interface LoginField {
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  isRequired: boolean;
  placeholder: string;
  maxLength : number;
  minLength : number;
}

export interface InputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>, type: string, maxLength: number | null, minLength: number | null) => void;
  value: string;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  isRequired?: boolean;
  placeholder: string;
  customClass?: string;
  maxLength: number;
  minLength: number;
  error :  string;
}


export interface LoginState {
  [key: string]: string;
}

export interface LoginErrorState {
  [key: string]: string;
}

export interface ButtonProps {
  action: "button" | "submit" | "reset";
  onSubmit?: (event: FormEvent<HTMLButtonElement>) => void;
  text: ReactNode;
}
