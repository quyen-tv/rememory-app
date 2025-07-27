import type { InputHTMLAttributes, ReactNode } from 'react'
import { Input } from './input'
import type { FieldError } from 'react-hook-form'

interface FormFieldProps {
  error?: FieldError
  children: ReactNode
}

export const FormField = ({ error, children }: FormFieldProps) => {
  return (
    <div className='space-y-2'>
      {children}
      {error && <p className='text-sm text-red-500 font-medium px-1'>{error.message}</p>}
    </div>
  )
}

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
  className?: string
  endAdornment?: ReactNode
}

export const FormInput = ({ error, className = '', endAdornment, ...props }: FormInputProps) => {
  const hasEndAdornment = !!endAdornment
  const paddingRightClass = hasEndAdornment ? 'pr-28' : ''

  return (
    <FormField error={error}>
      <div className='relative'>
        <Input
          className={`${className} ${error ? 'focus:border-1 border-red-500 focus:ring-red-500' : ''} ${paddingRightClass}`}
          {...props}
        />
        {hasEndAdornment && <div className='absolute right-4 top-1/2 -translate-y-1/2'>{endAdornment}</div>}
      </div>
    </FormField>
  )
}
