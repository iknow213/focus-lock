export default [
  'button:enabled:not([readonly])',
  'select:enabled:not([readonly])',
  'textarea:enabled:not([readonly])',
  'input:enabled:not([readonly])',

  'a[href]',
  'area[href]',

  'iframe',
  'object',
  'embed',

  '[tabindex]',
  '[contenteditable]',
  '[autofocus]',
];
