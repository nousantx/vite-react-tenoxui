import { styler } from '../styles'

export const Line = () => {
  styler()

  const lines = [
    { pos: 'r-1rem', isVertical: true, reverse: false },
    { pos: 'l-1rem', isVertical: true, reverse: true },
    { pos: 't-4rem', isVertical: false, reverse: false },
    { pos: 'b-4rem', isVertical: false, reverse: true }
  ]

  return (
    <>
      {lines.map((line, i) => (
        <div
          key={i}
          className={`
            bg-#b6bdc630 pn-absolute 
            ${line.isVertical ? 'w-1px h-100%' : 'h-1px w-100%'} 
            ${line.pos}
          `}
        >
          <div className="box-100% pn-relative d-flex jc-center">
            <div
              className={`
                bg-$primary pn-absolute br-0 
                ${line.isVertical ? 'h-$line-size w-1px' : 'w-$line-size h-1px'}
                ${
                  line.isVertical
                    ? `anim-[line-y_infinite_20s_linear] ${
                        line.reverse ? 'anim-name-[line-y-2]' : ''
                      }`
                    : `anim-[line-x_infinite_30s_linear] ${
                        line.reverse ? 'anim-name-[line-x-2]' : ''
                      }`
                }
              `}
            />
          </div>
        </div>
      ))}
    </>
  )
}
