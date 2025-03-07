import { createDirectus, rest} from "@directus/sdk";
import { CustomDirectusTypes } from "../types/schema";


export const directus = createDirectus<CustomDirectusTypes>(process.env.PUBLIC_API_URL as string).with(rest())