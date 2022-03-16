import { http } from "../utils/http";

/**
 * 上传图片
 * @returns
 */
export function uploadImg(data) {
  return http({
    url: "/app/picture/upload",
    method: "post",
    data,
  });
}

/**
 * 新增成员
 * @param {
 * username
 * password
 * mobile
 * roleIdList   角色id
 * isPharmacist  是否药师(0:否;1:是)
 * licensedPharmacistCertUrl  执业药师证书图片
 * licensedPharmacistCertNo  执业药师证书编号
 * pharmacistType  药师类型
 * pharmacistLevel  药师等级
 * pharmacistSignUrl  药师签名
 * avatar  头像
 * } data
 * @returns
 */
export function addMembers(data) {
  return http({
    url: "/app/picture/upload",
    method: "post",
    data,
  });
}
