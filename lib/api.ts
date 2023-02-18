type FetcherOptions = RequestInit | undefined

export async function fetcher(url: string, options: FetcherOptions = {}) {
    try {
        let response
        response = await fetch(url)
        const data = await response.json()
        return data
    } catch (err: any) {
        throw new Error('Bad data :: ', err)
    }
}
