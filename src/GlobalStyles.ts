import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 /* Reset CSS */
 *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  /* Base font and colors */
  body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    color: #333;
    background-color: #f8f9fa;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Arial', sans-serif;
    margin-bottom: 1rem;
    color: #222;
  }

  p {
    margin-bottom: 1.5rem;
  }

  img {
    max-width: 100%;
    display: block;
  }

  /* Buttons */
  button {
    display: inline-block;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
  }

  /* Links */
  a {
    text-decoration: none;
    color: #007bff;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
  }

  .text-center {
    text-align: center;
  }
  
  /* Flexbox grid */
  .flex {
    display: flex;
  }

  .justify-center {
    justify-content: center;
  }

  .align-center {
    align-items: center;
  }

  .gap-20 {
    gap: 20px;
  }

  /* Global animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }
`;

export default GlobalStyles;