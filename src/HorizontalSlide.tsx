import React, { useEffect, useMemo, useRef, useState } from 'react'

const HorizontalSlide = ({
  slideData,
}: {
  slideData: { img: string; title: string }[]
}) => {
  const slideContainerRef = useRef<HTMLUListElement | null>(null)
  const firstActiveSlide = useMemo(() => {
    if (slideData.length % 2 === 0) {
      return slideData.length / 2
    } else {
      return (slideData.length - 1) / 2
    }
  }, [slideData])
  const [activeSlide, setActiveSlide] = useState(firstActiveSlide)

  const handleActiveScroll = (slideIndex: number) => {
    if (slideIndex !== activeSlide) {
      setActiveSlide(slideIndex)
      slideContainerRef.current?.children[slideIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })
    }
  }
  useEffect(() => {
    slideContainerRef.current?.children[firstActiveSlide].scrollIntoView({
      block: 'center',
      inline: 'center',
    })
  }, [firstActiveSlide])

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <ul
        ref={slideContainerRef}
        className='slides'
        style={{
          maxWidth: '900px',
        }}
      >
        {slideData.map((slide, index) => {
          return (
            <li
              key={index}
              className={activeSlide === index ? 'slide active' : 'slide'}
              onClick={() => handleActiveScroll(index)}
            >
              <img src={slide.img} alt={slide.title} />
              {index === activeSlide && <div>{slide.title}</div>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HorizontalSlide
