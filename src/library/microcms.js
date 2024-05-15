
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// https://github.com/microcmsio/microcms-js-sdk
// レスポンスのサンプルはmicroCMSのAPIプレビューで確認可能
