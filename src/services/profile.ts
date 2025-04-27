import { http } from '@/utils/http.ts'
import type { ProfileDetail } from '@/types/member'

/**
 * 获取个人信息
 */
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}
