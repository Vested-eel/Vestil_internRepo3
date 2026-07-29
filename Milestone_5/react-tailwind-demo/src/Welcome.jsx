// ## Implementing Internationalization with i18next

import { useTranslation } from "react-i18next";

function Welcome() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="text-xl font-semibold">{t("welcome")}</p>

      <div className="space-x-2">
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          English
        </button>
        <button
          onClick={() => i18n.changeLanguage("es")}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Español
        </button>
      </div>
    </div>
  );
}

export default Welcome;
