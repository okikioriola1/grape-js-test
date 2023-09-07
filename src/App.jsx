import { useState, useEffect } from "react";

// import './App.css'
import "./styles/main.scss";
import { grapesjs } from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsBlocksBasic from "grapesjs-blocks-basic";
// import gjsComponentCountdown from "grapesjs-component-countdown"
import gjsPluginExport from "grapesjs-plugin-export"
import gjsTabs from "grapesjs-tabs"
import gjsCustomCode from "grapesjs-custom-code"
import gjsTouch from "grapesjs-touch"
import gjsParserPostcss from "grapesjs-parser-postcss"
import gjsTooltip from "grapesjs-tooltip"
import gjsTuiImageEditor from "grapesjs-tui-image-editor"
import gjsTyped from "grapesjs-typed"
import gjsStyleBg from "grapesjs-style-bg"

function App() {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPresetWebpage, 
        gjsBlocksBasic,
        // gjscomponent-countdown,
        gjsPluginExport,
        gjsTabs,
        gjsCustomCode,
        gjsTouch,
        gjsParserPostcss,
        gjsTooltip,
        gjsTuiImageEditor,
        gjsTyped,
        gjsStyleBg,
       
      ],
      pluginsOpts: {
        gjsPresetWebpage: {},
      },
    });
    setEditor(editor);
  }, []);

  return (
    <>
      <div id="editor"></div>
         </>
  );
}

export default App;
