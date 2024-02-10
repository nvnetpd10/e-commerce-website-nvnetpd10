import { GRAPHQL_API_URL } from './shared'
import { SETTINGS_QUERY, HEADER_QUERY, FOOTER_QUERY } from '../_graphql/globals'

export async function fetchSettings(): Promise<Settings> {
  if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found')

  const response = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: SETTINGS_QUERY,
    }),
  })

  if (!response.ok) {
    throw new Error('Error fetching doc')
  }

  const result = await response.json()

  if (result.errors) {
    throw new Error(result.errors[0]?.message || 'Error fetching settings')
  }

  return result.data?.Settings
}

// Similar changes for fetchHeader and fetchFooter

export async function fetchHeader(): Promise<Header> {
  if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found')

  const response = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: HEADER_QUERY,
    }),
  })

  if (!response.ok) {
    throw new Error('Error fetching doc')
  }

  const result = await response.json()

  if (result.errors) {
    throw new Error(result.errors[0]?.message || 'Error fetching header')
  }

  return result.data?.Header
}

export async function fetchFooter(): Promise<Footer> {
  if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found')

  const response = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: FOOTER_QUERY,
    }),
  })

  if (!response.ok) {
    throw new Error('Error fetching doc')
  }

  const result = await response.json()

  if (result.errors) {
    throw new Error(result.errors[0]?.message || 'Error fetching footer')
  }

  return result.data?.Footer
}
