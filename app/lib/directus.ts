import { authentication, createDirectus, realtime, rest} from "@directus/sdk";
import { CustomDirectusTypes } from "../types/schema";


export const directus = createDirectus<CustomDirectusTypes>(process.env.NEXT_PUBLIC_API_URL as string).with(rest())

export const subscription = createDirectus<CustomDirectusTypes>(process.env.NEXT_PUBLIC_API_URL as string).with(realtime())

export const getAssetUrl = (assetID : string) => {
    return `${process.env.NEXT_PUBLIC_API_URL}/assets/${assetID}`;
}

export const securedClient = createDirectus<CustomDirectusTypes>(process.env.NEXT_PUBLIC_API_URL as string).with(authentication('json', {credentials: "include", autoRefresh: true})).with(rest({credentials: "include"}))