import React, { Children } from 'react'

interface IProps {
  handleClick : () => void;
  children :React.ReactNode;
}

const NormalButton = ({handleClick, children}:IProps) => {
  return (
    <button
    onClick={handleClick}
    className="text-white-100 bg-orange rounded-md py-2 hover:bg-orange/80 transition-colors font-light"
  >
{children}
  </button>
  )
}

export default NormalButton