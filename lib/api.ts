type FetcherOptions = RequestInit | undefined

export async function fetcher(url: string, options: FetcherOptions = {}) {
    let response
    response = await fetch(url)
    const data = await response.json()
    return data
}
