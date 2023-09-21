module.exports = {
  '**/*.{ts,tsx}': () => 'tsc --noEmit',
  '**/*.{js,jsx,ts,tsx}': 'eslint --cache --fix',
};
