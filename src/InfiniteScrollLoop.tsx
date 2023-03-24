import React, { useEffect, useRef, useState } from 'react'
import ClassContextComponent from './ClassContextComponent'
import { slideData } from './data'
import FunctionContextComponent from './FunctionContextComponent'
import HorizontalSlide from './HorizontalSlide'
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

const surroundingBackup = 1
function InfiniteScrollLoop({ children }: { children: React.ReactNode }) {
  const contentRef = React.useRef<HTMLDivElement | null>(null)
  const scrollRef = React.useRef<HTMLDivElement | any>(null)
  const [height, setHeight] = React.useState<number>(0)

  const backupHeight = height * surroundingBackup

  const handleScroll = React.useCallback(() => {
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollTop
      console.log('scroll', scroll) // =200
      console.log('backupHeight', backupHeight) //185
      console.log('height', height) //185 * 1

      if (scroll < backupHeight || scroll >= backupHeight + height) {
        scrollRef.current.scrollTop = backupHeight + (scroll % height)
      }
    }
  }, [backupHeight, height])
  console.log('backupHeigt', backupHeight)

  React.useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight)
      scrollRef.current.scrollTop = backupHeight
    }
  })

  return (
    <div className='infinite-scroll-loop outer'>
      <div
        className='infinite-scroll-loop inner'
        ref={scrollRef}
        style={{
          height,
        }}
        onScroll={handleScroll}
      >
        {Array(surroundingBackup)
          .fill(null)
          .map((_, index) => (
            <div key={index}>{children}</div>
          ))}
        <div ref={contentRef}>{children}</div>
        {Array(surroundingBackup)
          .fill(null)
          .map((_, index) => (
            <div key={index}>{children}</div>
          ))}
      </div>
    </div>
  )
}

export default InfiniteScrollLoop
