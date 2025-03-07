import { createDirectus, rest} from "@directus/sdk";
import { CustomDirectusTypes } from "../types/schema";


export const directus = createDirectus<CustomDirectusTypes>(process.env.PUBLIC_API_URL as string).with(rest())

export const getAssetUrl = (assetID : string) => {
    return `${process.env.PUBLIC_API_URL}/assets/${assetID}`;
}