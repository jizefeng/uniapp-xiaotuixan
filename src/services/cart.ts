import { http } from '@/utils/http.ts'

/**
 *  添加购物车
 * @param data
 */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}
