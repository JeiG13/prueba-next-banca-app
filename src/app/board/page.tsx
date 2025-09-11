import SectionTitle from '@/shared/components/SectionTitle'
import React from 'react'

function page() {
  return (
    <div className="w-full px-4 py-2">
      <SectionTitle title="Mis tarjetas" />
      <SectionTitle title="Cuentas" />
      <SectionTitle title="Transacciones recientes" />
    </div>
  )
}

export default page