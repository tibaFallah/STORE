import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './Contexts/ProductContext.jsx'
import SidebarProvider from './Contexts/SidebarContext.jsx'
import CartProvider from './Contexts/CartContext.jsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <SidebarProvider>
  <CartProvider>
  <ProductProvider>
     <React.StrictMode>
        <App />
     </React.StrictMode>
  </ProductProvider>
  </CartProvider>
  </SidebarProvider>
  </ChakraProvider>
)
