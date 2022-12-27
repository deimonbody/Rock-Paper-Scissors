import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          login: "Login",
          register: "Register",
          enter: "Enter",
          loginTextPart1: "Haven`t the account yet? ",
          loginTextPart2: "Registare it.",
          registerText1: "Already have the account ? ",
          registerText2: "Login",
          logout: "Logout",
          welcome: "Welcome",
          createNewRoom: "Create New Room",
          join: "Join",
        },
      },
      uk: {
        translation: {
          login: "Логін",
          register: "Реєстрація",
          enter: "Увійти",
          loginTextPart1: "Досі не маєте акаунту ? ",
          loginTextPart2: "Зареєструйтесь",
          registerText1: "Вже маєте акаунт ? ",
          registerText2: "Увійти",
          logout: "Вийти",
          welcome: "Вітаємо",
          createNewRoom: "Створити Нову Кімнату",
          join: "Приєднатися",
        },
      },
      spa: {
        translation: {
          login: "Acceso",
          register: "Registro",
          enter: "Ingresar",
          loginTextPart1: "¿Todavía no tienes la cuenta?",
          loginTextPart2: "Registrarlo.",
          registerText1: "¿Ya tienes la cuenta? ",
          registerText2: "Acceso",
          logout: "Cerrar sesión",
          welcome: "Bienvenidas",
          createNewRoom: "Crear nueva habitación",
          join: "Unirse",
        },
      },
    },
  });
