import { describe, expect, it } from 'vitest'

describe('ui layer app config', () => {
  it('provides ui color config', () => {
    const config = useAppConfig()

    expect(config.ui.colors.primary).toBe('emerald')
    expect(config.ui.colors.neutral).toBe('slate')
  })
})
