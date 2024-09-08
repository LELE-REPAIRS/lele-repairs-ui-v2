/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'row': '0px 4px 0px var(--tw-color-6)'
      },
      backgroundImage: {
        'icon-email': "url('/icon-email.svg')",
        'icon-password': "url('/icon-password.svg')",
        'icon-facebook': "url('/icon-facebook.svg')",
        'icon-instagram': "url('/icon-instagram.svg')",
        'icon-document': "url('/icon-document.svg')",
        'icon-card': "url('/icon-card.svg')",

      },
      boxShadow: {
        'button': '0px 4px 0px 0px var(--tw-color-6)'
      },
      colors: {
        color_1: '#FBFDFF',
        color_2: '#F4FAFE',
        color_3: '#E7F3FF',
        color_4: '#D7EDFF',
        color_5: '#C5E4FF',
        color_6: '#B0D7F9',
        color_7: '#95C6F2',
        color_8: '#6AAFEA',
        color_9: '#0095EB',
        color_10: '#0088D9',
        color_11: '#0077CA',
        color_12: '#04375A',
      }
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--tw-color-1': theme('colors.color_1'),
          '--tw-color-2': theme('colors.color_2'),
          '--tw-color-3': theme('colors.color_3'),
          '--tw-color-4': theme('colors.color_4'),
          '--tw-color-5': theme('colors.color_5'),
          '--tw-color-6': theme('colors.color_6'),
          '--tw-color-7': theme('colors.color_7'),
          '--tw-color-8': theme('colors.color_8'),
          '--tw-color-9': theme('colors.color_9'),
          '--tw-color-10': theme('colors.color_10'),
          '--tw-color-11': theme('colors.color_11'),
          '--tw-color-12': theme('colors.color_12'),
        },
        '*': {
          'margin': '0',
          'padding': '0',
          'text-decoration': 'none',
          'font-family': '"Inter", sans-serif',
          'font-style': 'normal',
        }
      });
    },
  ],
}

