import { http } from '@/utils/http.ts'
import type { CategoryTopItem } from '@/types/category'

/**
 * 分类列表-小程序
 */
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
