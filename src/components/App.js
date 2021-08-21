import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/seti.css';
import { useDispatch, useSelector } from 'react-redux';
import getAlignedComponents from '../helpers/getAlignedComponents';
import { setIDEs } from '../actions';
import { Button } from 'react-bootstrap';

function App() {
  const IDEs = useSelector((state) => state.IDEs);

  const dispatch = useDispatch();

  return (
    <>
      {getAlignedComponents(
        IDEs.map((IDE) => (
          <>
            <CodeMirror
              key={IDE.i}
              mode='javascript'
              value={IDE.v}
              onChange={(newValue) =>
                dispatch(
                  setIDEs(
                    IDEs.map((deepIDE) =>
                      IDE.i === deepIDE.i ? { v: newValue, i: IDE.i } : deepIDE
                    )
                  )
                )
              }
            />
            <span
              className='bin-icon'
              onClick={() =>
                dispatch(
                  setIDEs(
                    IDEs.filter((deepIDE) =>
                      IDE.i === deepIDE.i ? false : true
                    )
                  )
                )
              }
            >
              🗑️
            </span>
          </>
        ))
      )}
      <Button
        variant='success'
        onClick={() =>
          dispatch(setIDEs([...IDEs, { v: '', i: Math.random() + Date.now() }]))
        }
      >
        Add
      </Button>
    </>
  );
}

export default App;
