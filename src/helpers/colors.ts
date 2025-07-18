import { random, TinyColor } from '@ctrl/tinycolor'
import { TorrentState } from '@/constants/vuetorrent'

function djb2Hash(str: string): number {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i)
  }
  return hash >>> 0 // ensure non-negative integer
}

export function getColorFromName(name: string, transform?: (color: TinyColor) => TinyColor) {
  const color = random({
    seed: djb2Hash(name),
  })

  if (transform) return transform(color).toHexString()
  else return color.toHexString()
}

export function getRatioColor(ratio: number) {
  if (ratio < 0.5) return 'text-ratio-bad'
  if (ratio < 1) return 'text-ratio-almost'
  if (ratio < 5) return 'text-ratio-good'
  return 'text-ratio-best'
}

export function getTorrentStateValue(state: TorrentState) {
  return TorrentState[state].toLowerCase()
}

export function getTorrentStateColor(state: TorrentState) {
  return `torrent-${getTorrentStateValue(state)}`
}
