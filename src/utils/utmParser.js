export const getUtmParameters = () => {
    if (typeof window == "undefined") {
        return {}
    }

    const searchParams = new URLSearchParams (window.location.search)
    const utmParams = {}

    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]

    utmKeys.forEach(key => {
        const value = searchParams.get(key);
        if (value) {
            utmParams[key] = value.trim();
        }
    });

    if (Object.keys(utmParams).length > 0) {
        return utmParams
    }

    return {}
}