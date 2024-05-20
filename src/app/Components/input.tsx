import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface InputProps {
    label: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    id: string;
    htmlFor: HTMLLabelElement["htmlFor"];
    name: string;
    value: string;
    onChange?: ChangeEventHandler;
    readOnly?: Boolean;
}

export default function Input({ label, type, placeholder, id, htmlFor, name, value, onChange, readOnly }: InputProps) {
    return (
        <div className="mb-6">
            <label className="block text-gray-700 font-bold" htmlFor={htmlFor}> {label} </label>
            <input type={type} name={name} placeholder={placeholder} id={id} value={value} onChange={onChange} readOnly={!!readOnly}  className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border-gray-100 focus:border-blue-500 focus:bg-white focus:border-blue-500" autoFocus required />
        </div>
    );
}