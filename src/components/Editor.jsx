import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
// import { EditorView } from '@codemirror/view'; // Import necessary modules

const Editor = ({ onChange, displayName, value, language }) => {
  const handleChange = (value) => {
    onChange(value);
  };

  // the language extension based on the `language` prop
  const getLanguageExtension = () => {
    switch (language) {
      case 'javascript':
        return javascript();
      case 'css':
        return css();
      case 'html':
      case 'xml':
        return html();
      default:
        return javascript(); // Fallback to JavaScript
    }
  };

  return (
    <div>
      <div className="flex justify-between bg-customDark text-white p-2 rounded-t-lg mt-2">
        {displayName}
      </div>
      <CodeMirror
        value={value}
        
        height="320px"
  
        extensions={[getLanguageExtension()]} // Set the language mode
        onChange={(value) => handleChange(value)} // Update the editor value
        theme="dark" // Set the theme of the editor
        className="grow rounded-b-lg overflow-hidden"
      />
    </div>
  );
};

export default Editor;
