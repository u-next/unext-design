// export const LANGS = {
//   ja: '日本語',
//   en: 'English',
// };

export function useTranslations(lang) {
  return function t(multilingual) {
    return multilingual[lang];
  };
}
