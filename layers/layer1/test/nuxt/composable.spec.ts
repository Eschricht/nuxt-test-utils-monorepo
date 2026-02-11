import { describe, expect, it } from 'vitest'

describe('ui layer app config', () => {
  it('provides ui color config', () => {
    const config = useFoo()

    expect(config).toBe('hello-world')
  })
})
