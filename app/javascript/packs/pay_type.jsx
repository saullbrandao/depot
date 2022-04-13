import React from 'react'
import { createRoot } from 'react-dom/client'
import { PayTypeSelector } from 'PayTypeSelector'

document.addEventListener('turbolinks:load', () => {
  const element = document.getElementById('pay-type-component')
  const root = createRoot(element)

  root.render(<PayTypeSelector />)
})
