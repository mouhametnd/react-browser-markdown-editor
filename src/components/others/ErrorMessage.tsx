interface IErrorMessageProps {
  children: string
}

const ErrorMessage = ({children}:IErrorMessageProps) => {
  return (
    <span  className='text-orange text-sm font-bold'>{children}</span>
  )
}

export default ErrorMessage