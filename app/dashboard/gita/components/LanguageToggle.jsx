const LanguageToggle = ({ setLanguage }) => {
    return (
      <div className="flex space-x-2">
        <button
          onClick={() => setLanguage("english")}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
        >
          English
        </button>
        <button
          onClick={() => setLanguage("hindi")}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
        >
          हिंदी
        </button>
        <button
          onClick={() => setLanguage("sanskrit")}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
        >
          संस्कृत
        </button>
      </div>
    );
  };
  
  export default LanguageToggle;
  