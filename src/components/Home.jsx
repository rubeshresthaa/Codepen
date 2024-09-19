import { useEffect, useState } from "react"
import Editor from "./Editor";
import Result from "./Result";

const Home = () => {
  const [html,setHtml]=useState('');
  const [css,setCss]=useState('');
  const [js,setJs]=useState('');
  const [srcDoc,setSrcDoc]=useState();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);
  
    // Cleanup timeout on unmount or before the effect runs again
    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-1 gap-4 h-[50vh]">
        {/* {html} */}
        <Editor
        language='xml'
        displayName='HTML'
        value={html}
        onChange={setHtml}
         />
{/* {css} */}
         <Editor
         language='css'
         displayName='CSS'
         value={css}
         onChange={setCss}
         />
{/* {javascript} */}
         <Editor
         language='javascript'
         displayName='JavaScript'
         value={js}
         onChange={setJs}
         />

      </div>
      <Result srcDoc={srcDoc}/>
    </div>
  )
}
export default Home
