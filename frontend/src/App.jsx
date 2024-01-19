import React from 'react';

function App() {
  return (
    <div>
      <h1>PDF Viewer</h1>
      <div style={{ width: '100%', height: '500px' }}>
        <iframe
          title="PDF Viewer"
          src="https://drive.google.com/file/d/1xRRy1H9gWQwMnKkiIWDypDOWUfTHWnK2/preview"
          width="350px"
          height="240px"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
