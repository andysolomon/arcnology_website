type FetcherOptions = RequestInit | undefined

type DataFromUrl = {
    [key: string]: {}
}

const STRAPI_PATH = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`

export const fetchPricingUrls = async (urls: string[]) => {
    const PRICING_HEADER_PATH = `${STRAPI_PATH}/pricing?populate[Header][populate]=*`
    const PRICING_CUSTOM_MAIN_PATH = `${STRAPI_PATH}/pricing?populate[CustomMain][populate]=*`
    const PRICING_CUSTOM_SECONDARY_PATH = `${STRAPI_PATH}/pricing?populate[CustomSecondary][populate]=*`
    const PRICING_BASIC_TIER_PATH = `${STRAPI_PATH}/pricing?populate[BasicTier][populate]=*`
    const PRICING_PREMIUM_TIER_PATH = `${STRAPI_PATH}/pricing?populate[PremiumTier][populate]=*`

    const pricingUrls = [PRICING_HEADER_PATH, PRICING_CUSTOM_MAIN_PATH, PRICING_CUSTOM_SECONDARY_PATH, PRICING_BASIC_TIER_PATH, PRICING_PREMIUM_TIER_PATH]
    try {
        const fetchRequests = pricingUrls.map((url) => {
            return fetch(url).then((url) => {
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
        const data: DataFromUrl = pricingUrls.reduce(urlReducer, {} as DataFromUrl)

        const { data: sexyData } = data
        console.log('Sexy Data Object :: ', data[PRICING_HEADER_PATH].data.attributes.Header)

        return { data }
    } catch (errors) {
        console.log('No Data :: ', errors)
        return { errors }
    }
}
