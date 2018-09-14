import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import './typography';

import registerServiceWorker from './registerServiceWorker';
injectGlobal`
${reset};
body{
    background-color:#0d062e;
    height: 100%;
}
html,
#root {
  height: 100%;
}`;

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();