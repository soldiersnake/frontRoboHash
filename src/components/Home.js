import React from 'react'
import UserGrid from './UserGrid'

export const Home = () => {
  return (
    <>
    {/* Aqui solo llamamos al listado infinito de usuarios */}
    <div className="center">
      
        <UserGrid/>
        
      </div>
    </>
  )
}
