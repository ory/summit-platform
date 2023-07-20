"use client"

import { init } from "@socialgouv/matomo-next"

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

if (MATOMO_URL && MATOMO_SITE_ID) {
  init({
    url: MATOMO_URL,
    siteId: MATOMO_SITE_ID,
    phpTrackerFile: "np.php",
    jsTrackerFile: "js/np.min.js",
  })
}
