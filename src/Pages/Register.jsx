import { RegisterForm } from '../Custom_Components/RegisterForm'
import React from 'react'

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default Register