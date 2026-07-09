import { describe, expect, it } from 'vitest'
import { getStoredWorkspaceId, LAST_WORKSPACE_KEY, resolveWorkspaceLoginRedirect, WORKSPACES } from './workspaces'

describe('workspace redirects', () => {
  it('points Dulcie users to the native Dulcie login screen', () => {
    expect(resolveWorkspaceLoginRedirect('dulcie')).toBe('https://dulciehomecare.dulciepay.com.au/login')
  })

  it('points Hazel & Coastal users to the native Hazel login screen', () => {
    expect(resolveWorkspaceLoginRedirect('hazel-coastal')).toBe('https://hazelhomecare.dulciepay.com.au/login')
  })

  it('does not resolve unknown workspaces', () => {
    expect(resolveWorkspaceLoginRedirect('unknown')).toBeNull()
  })

  it('stores only a workspace id hint, never credentials or tokens', () => {
    const storage = {
      getItem: (key: string) => (key === LAST_WORKSPACE_KEY ? 'dulcie' : null),
    }

    expect(getStoredWorkspaceId(storage)).toBe('dulcie')
    expect(WORKSPACES.every((workspace) => !('password' in workspace) && !('token' in workspace))).toBe(true)
  })
})
