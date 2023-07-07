type FetcherOptions = RequestInit | undefined

type DataFromUrl = {
    [key: string]: {}
}

const STRAPI_PATH = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`
const extractKeyFromUrl = (url: string) => {
  // Example: "https://example.com/api/pricing?populate[BasicTier][populate]=*"
  // Extract the substring between "[BasicTier]" and the previous "/"
  const match = url.match(/\[(.*?)\]/);
  const key = match ? match[1] : "";

  return key;
};

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
            const key = extractKeyFromUrl(url);
            return {
                ...acc,
                [key]: results[index],
            }
        }
        const data: DataFromUrl = pricingUrls.reduce(urlReducer, {} as DataFromUrl)

        return { data }
    } catch (errors) {
        console.log('No Data :: ', errors)
        return { errors }
    }
}
