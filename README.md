# Sprint 2 IT Academy | Shop

## Introduction

This project is a simple web application developed as part of the Sprint 2 assignment for IT Academy. The objective is to create a demo version of an e-commerce platform that allows users to manage a shopping cart and apply promotions to their purchases.

<br>

## Project Overview

As requested by the client, this initial demo version focuses on implementing the core functionalities of managing the shopping cart and applying promotions. The project utilizes hard-coded data within the application, avoiding the need for server-side API consumption at this stage. The logic for managing products, cart, and checkout process is implemented primarily in two JavaScript files: shop.js and checkout.js.

<br>

## Instructions

To set up and run this project locally, follow these steps:

1. Clone the project repository:

```bash
git clone https://github.com/sergi-moliner/Sprint-2.2/
```
2. Navigate to the project directory.

3. Open the project in your preferred code editor.

4. Start a local development server or open the index.html file in a web browser to view the application.
   
<br>

## Files and Directories

El proyecto se organiza de la siguiente manera:

- 📄 **index.html**: Página principal de compras donde los usuarios pueden navegar y agregar productos a su carrito.
  
- 📄 **checkout.html**: Página de pago donde los usuarios revisan su carrito y completan su compra.
  
- 📁 **css/**: Directorio que contiene hojas de estilo CSS para dar formato a las páginas HTML.
  
- 📁 **images/**: Directorio para imágenes utilizadas en el proyecto.
  
- 📁 **js/**: Directorio para archivos JavaScript.

    - 📄 **shop.js**: Contiene la lógica para administrar el carrito de compras y los productos, incluida la obtención de datos de productos del archivo products.json.
    
    - 📄 **checkout.js**: Implementa la lógica para el proceso de pago y la aplicación de promociones.
    
    - 📄 **products.json**: Archivo JSON que contiene datos de productos, incluidos nombre, precio y otra información relevante. Este archivo es utilizado por shop.js para poblar el catálogo de productos.


<br>

## Future Enhancements

Future iterations may include:

Migration to ES6 or higher JavaScript standards.
Integration of server-side APIs for dynamic data retrieval.
User authentication and account management features.
Enhanced user interface and experience.

<br>