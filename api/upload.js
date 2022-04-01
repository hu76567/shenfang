import { http } from "../utils/http";

/**
 * 上传签名
 * @param {*} data
 * @returns
 */
export function uploadSign(data) {
  return http({
    url: "/app/picture/uploadSign",
    method: "post",
    data,
    header: "application/x-www-form-urlencoded",
  });
}
