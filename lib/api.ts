type FetcherOptions = RequestInit | undefined

type DataFromUrl = {
    [key: string]: {}
}

const STRAPI_PATH = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`

export const fetchUrls = async (urls: string[]) => {
    try {
        const fetchRequests = urls.map((url) => {
            return fetch(`${STRAPI_PATH}/${url}`).then((url) => {
                return url.json()
            })
        })
        const results = await Promise.all(fetchRequests)

        const urlReducer = (acc: any, url: string, index: number) => {
            return {
                ...acc,
                [url]: results[index],
            }
        }
        const data: DataFromUrl = urls.reduce(urlReducer, {} as DataFromUrl)

        console.log('Sexy Data Object :: ', data)

        return { data }
    } catch (errors) {
        console.log('No Data :: ', errors)
        return { errors }
    }
}

export const fetchPricingUrls = async (urls: string[]) => {
    const PRICING_PATH = `${STRAPI_PATH}/api/pricing`
    try {
        const fetchRequests = urls.map((url) => {
            return fetch(`${STRAPI_PATH}/${url}`).then((url) => {
                return url.json()
            })
        })
        const results = await Promise.all(fetchRequests)

        const urlReducer = (acc: any, url: string, index: number) => {
            return {
                ...acc,
                [url]: results[index],
            }
        }
        const data: DataFromUrl = urls.reduce(urlReducer, {} as DataFromUrl)

        console.log('Sexy Data Object :: ', data)

        return { data }
    } catch (errors) {
        console.log('No Data :: ', errors)
        return { errors }
    }
}
