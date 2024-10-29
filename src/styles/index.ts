import { useLayoutEffect } from 'react'
import { use, tenoxui, applyStyles } from 'tenoxui'
import { property } from '@tenoxui/property'
import { globalStyles } from '../styles/global'

export function styler() {
  useLayoutEffect(() => {
    use({
      property: {
        ...property,
        anim: 'animation',
        'anim-name': 'animationName',
        'anim-time': 'animationDuration'
      }
    })
    applyStyles(globalStyles)
    tenoxui()
  }, [])
}
