module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
        sm: "15px",
        base: ["16px", {
          lineHeight: '20px'
        }],
        lg: "19px",
        "lg-2": ["21px", {
          lineHeight: '24.15px'
        }],
        xl: ["24px", {
          lineHeight: '24px'
        }],
        "xl-2": ["38px", {
          lineHeight: '45px'
        }],
        "2xl": ["32px", {
          lineHeight: '32px'
        }],
        "2xl-2": ["28px", {
          lineHeight: '100%'
        }],
        "3xl": ["48px", {
          lineHeight: '48px',
        }],
        "3xl-2": ["42px", {
          lineHeight: '42px',
        }],
        "4xl": ["52px", {
          lineHeight: '52px',
        }],
        "4xl-2": ["56px", {
          lineHeight: '56px',
        }],
        "5xl": ["60px", {
          lineHeight: '60px',
        }],
        "6xl": ["77px", {
          lineHeight: '77px',
        }]
      },
      colors: { 
        black: "#000", 
        white: "#fff",
        green: '#054706',
        brightGreen: '#009E02',
        blue: '#0035E1',
        darkBlue: '#05299F',
        red: '#CE0924',
        yellow: '#FDBE2C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
