import { http } from '@/utils/http.ts'
import type { BannerItem } from '@/types/home'

export const getHomeBannerApi = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
