// Link to a downloadable resume
// a list of the developer’s proficiencies

import React from "react";
import resume from '../assets/files/resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Resume = () => {
return(
  <div className='res'>
    <h2 className='heading'>Resume</h2>
      <Document
        file={resume}
        onLoadError={console.error}
        style={{width: '100vs', height: 'auto'}}>
          <Page pageIndex={0}/>
        </Document>
  </div>
)
}

export default Resume;
// function Resume() {
//   return (
//     <div className="columns">
//       <div className="column">
//         <p className="content is-medium">Résumé</p>
//         <hr />

//         <a
//           className="button is-primary"
//           href={process.env.PUBLIC_URL + "/resumegoeshere"}
//           target="_blank" rel="noreferrer"
//         >
//           <span className="icon">
//             <i className="fas fa-download"></i>
//           </span>
//           <span>Download My Resume</span>
//         </a>
//       </div>
//       <div className="column">
//         <p className="content is-medium">Skills</p>
//         <hr />
//         <ul>
//             <li>HTML, CSS, Javascript</li>
//             <li>OpenAPI, YAML, JSON</li>
//             <li>React, Next.js, Hugo</li>
//             <li>Markdown</li>
//             <li>Git</li>
//             <li>Github Repo Management</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Resume;