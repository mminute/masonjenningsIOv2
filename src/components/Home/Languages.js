import React from 'react';
import { Box } from 'gestalt';
import '../../styles/et-line-font.css';

const nodeText = 'Build server applications in JS too!';
const reactText = 'Building delightfully interactive user interfaces in JS.';
const pythonText = 'The popular kid of general-purpose coding languages.';
const reduxText = 'State management through unidirectional data flow.';
const sqlText = 'Data, data, data.  Storage and manipulation.  The basis of web apps.';
const htmlText = 'Build it clear.  Build it clean. Make it usable.  The crux of the matter.';
const ajaxText = 'Why wait?  Why refresh? Build it dynamically for in-browser magic.';
const jsText = 'The scripting language of the Web.  Let’s build intuitively interactive websites.';
const rubyText = 'RESTFUL back-end applications using the Ruby on Rails web framework. Speed through convention over configuration.';

function Language({ icon, title, text }) {
  const centerDiv = { display: 'flex', justifyContent: 'center' };

  return (
    <Box column={4} display="flex" direction="column" justifyContent="center" marginBottom={4}>
      <Box paddingY={7}>
        <div className={`icon-${icon} gray icon-large`} style={{ ...centerDiv }} />
      </Box>

      <div className="gray inconsolata" style={{ ...centerDiv, fontSize: '14px' }}>
        {title}
      </div>

      <Box marginTop={4}>
        <div className="verdana gray" style={{ ...centerDiv, textAlign: 'center', fontSize: '12px', width: '80%', margin: 'auto' }}>
          {text}
        </div>
      </Box>
    </Box>
  );
}

export default function Languages() {
  return (
    <section>
      <Box display="flex" justifyContent="center" column={6} margin="auto">
        <Box>
          <Box display="flex" justifyContent="center">
            <h1 className="montserrat" style={{ display: 'block', fontSize: '30px' }}>LANGUAGES/FRAMEWORKS</h1>
          </Box>
          <div className="inconsolata textSize-regular gray" style={{ textAlign: 'center' }}>
            1, 2, 3, 4, 5... IF PROGRAMMING LAUNGUAGES COUNT THEN I GUESS I'M A POLYGOT?
          </div>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" marginTop={6} wrap>
        <Language icon="genius" title="REACT" text={reactText} />
        <Language icon="strategy" title="REDUX" text={reduxText} />
        <Language icon="telescope" title="NODE" text={nodeText} />
        <Language icon="magnifying-glass" title="JAVASCRIPT" text={jsText} />
        <Language icon="tools-2" title="PYTHON" text={pythonText} />
        <Language icon="puzzle" title="RUBY/RAILS" text={rubyText} />
        <Language icon="gears" title="AJAX" text={ajaxText} />
        <Language icon="tools" title="HTML/CSS" text={htmlText} />
        <Language icon="presentation" title="SQL" text={sqlText} />
      </Box>
    </section>
  );
}
