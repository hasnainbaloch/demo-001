import React from 'react';
import { Input, Checkbox } from 'antd';
import { Field } from 'formik';
import { EyeOff } from 'lucide-react';
import './FormField.scss';

export interface FormFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'password' | 'email' | 'checkbox';
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

// Define our own interface for Formik field render props
interface FieldRenderProps {
  field: {
    name: string;
    value: string | boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  meta: {
    value: string | boolean;
    error?: string;
    touched?: boolean;
    initialValue?: string | boolean;
    initialTouched?: boolean;
    initialError?: string;
  };
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type = 'text',
  placeholder,
  className = '',
  disabled = false
}) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldRenderProps) => {
        const hasError = meta.touched && !!meta.error;
        
        if (type === 'checkbox') {
          return (
            <div className={`form-field form-field--checkbox ${className}`}>
              <Checkbox
                name={field.name}
                checked={field.value as boolean}
                disabled={disabled}
                className="custom-checkbox"
                onChange={(e) => field.onChange({ target: { name: field.name, value: e.target.checked } } as unknown as React.ChangeEvent<HTMLInputElement>)}
              >
                <span className="form-field__checkbox-label">{label}</span>
              </Checkbox>
              {hasError && (
                <div className="form-field__error">{meta.error}</div>
              )}
            </div>
          );
        }
        
        return (
          <div className={`form-field ${className}`}>
            <label className="form-field__label" htmlFor={name}>
              {label}
            </label>
            <div className="form-field__input-wrapper">
              {type === 'password' ? (
                <Input.Password
                  name={field.name}
                  value={field.value as string}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  id={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  className={`form-field__input ${hasError ? 'form-field__input--error' : ''}`}
                  iconRender={() => (
                    <EyeOff size={16} className="password-icon" />
                  )}
                />
              ) : (
                <Input
                  name={field.name}
                  value={field.value as string}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  id={name}
                  type={type}
                  placeholder={placeholder}
                  disabled={disabled}
                  className={`form-field__input ${hasError ? 'form-field__input--error' : ''}`}
                />
              )}
            </div>
            {hasError && (
              <div className="form-field__error">{meta.error}</div>
            )}
          </div>
        );
      }}
    </Field>
  );
};
