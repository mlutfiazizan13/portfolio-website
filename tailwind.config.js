/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A1628',
        soft: '#33425A',
        muted: '#47566B',
        line: '#DDE3EA',
        mist: '#F5F7FA',
        get: '#0E7A4B',
        post: '#2456F5',
        panel: {
          DEFAULT: '#0B1220',
          text: '#DCE6F5',
          muted: '#9FB0C8',
          key: '#8FB8FF',
          string: '#F5C97A',
          number: '#5FE0A0',
        },
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"Fira Code"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [
  ],
}
