import Processor from 'windicss'
import { UtilityInfo } from '../../shared'
import { parseColor } from './colors'
import { dynamicUtilities, staticUtilities } from './categories'

export function parseUtility(name: string, processor: Processor): Partial<UtilityInfo> {
  const info: Partial<UtilityInfo> = {}

  const shortcuts = processor.config('shortcuts') as Record<string, any> || {}
  if (shortcuts[name]) {
    info.shortcut = shortcuts[name]
    info.category = 'shortcut'
  }

  if (name[0] === '!') {
    info.important = true
    name = name.slice(1)
  }
  if (name.includes(':')) {
    const variants = name.split(/:/g)
    info.prefixes = variants.slice(0, -1)
    name = variants.slice(-1)[0]
  }

  info.base = name

  const prefix = processor.config('prefix') as string | undefined
  const utilityName = prefix ? name.replace(prefix, '') : name
  const [type] = (utilityName.startsWith('-') ? utilityName.slice(1) : utilityName).split('-')

  if (!info.category) {
    if (utilityName.includes('$')) {
      info.category = 'variable'
    }
    else if (utilityName in staticUtilities) {
      info.category = staticUtilities[utilityName]
      info.type = type
    }
    else if (type in dynamicUtilities) {
      info.category = dynamicUtilities[type]
    }
  }
  info.category = info.category || 'unknown'
  info.type = info.type || type

  const color = parseColor(utilityName, processor.theme('colors'))
  if (color.name) {
    info.colorHex = color.color
    info.colorName = color.name
  }

  return info
}
