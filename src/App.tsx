import React, { useEffect, useRef, useState } from 'react'
import ClassContextComponent from './ClassContextComponent'
import { slideData } from './data'
import FunctionContextComponent from './FunctionContextComponent'
import HorizontalSlide from './HorizontalSlide'
import InfiniteScrollLoop from './InfiniteScrollLoop'
const GERMAN_DIGITS = [
  'Null',
  'Ein',
  'Zwei',
  'Drei',
  'Vier',
  'Fünf',
  'Sechs',
  'Sieben',
  'Acht',
  'Neun',
]
export const ThemeContext = React.createContext<any>(null)

function App() {
  return (
    <>
      <HorizontalSlide slideData={slideData} />
      <InfiniteScrollLoop>
        {GERMAN_DIGITS.map((digit: any, index: any) => (
          <div>
            {index}.{' '}
            <span
              style={{
                color: `hsl(${
                  (index / GERMAN_DIGITS.length) * 360
                }deg 100% 50%)`,
              }}
            >
              {digit}.
            </span>
          </div>
        ))}
      </InfiniteScrollLoop>
    </>
  )
}

export default App
