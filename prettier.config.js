module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  tabWidth: 2,
  bracketSpacing: true,
  useTabs: false,
  printWidth: 80,
  endOfLine: 'lf',
  tailwindFunctions: ['cn', 'cva'],
  plugins: [require('prettier-plugin-tailwindcss')],
};
