import { http } from "../utils/http";
let baseUrl = "http://33y1h15106.qicp.vip/prescription";

/**
 * 上传图片
 * @returns
 */
export function uploadImg(url) {
  return uni.uploadFile({
    url: baseUrl + "/app/picture/upload",
    filePath: url,
    name: "file",
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

/**
 * 新增处方
 * @param {*} data
 * @returns
 */
export function addPrescription(data) {
  return http({
    url: "/app/prescription/save",
    method: "post",
    data,
  });
}


/**
 * 修改处方
 * @param {*} data
 * @returns
 */
 export function updatePrescription(data) {
  return http({
    url: "/app/prescription/update",
    method: "post",
    data,
  });
}


/**
 * 提交处方
 * @param {*} id
 * @returns
 */
 export function commitPrescription(id) {
  return http({
    url: `/app/prescription/commit/${id}`,
  });
}

/**
 * 查询处方统计
 * @returns
 */
export function queryPrescriptionCount(data) {
  return http({
    url: "/app/prescription/queryCount",
    data,
  });
}

/**
 * 查询处方详情
 * @returns
 */
export function queryPrescriptionDetail(id) {
  return http({
    url: "/app/prescription/info/" + id,
  });
}

/**
 * 查询待提交处方列表
 * @returns
 */
export function queryPendingPrescription(params) {
  return http({
    url: "/app/prescription/queryPendingCommitList",
    data: params,
  });
}

/**
 * 查询已提交处方列表
 * @returns
 */
export function queryCommittedPrescription(params) {
  return http({
    url: "/app/prescription/queryCommittedList",
    data: params,
  });
}

/**
 * 查询待处理处方列表
 * @returns
 */
export function queryPendingDealPrescription(params) {
  return http({
    url: "/app/prescription/queryPendingDealList",
    data: params,
  });
}

/**
 * 查询已处理处方列表
 * @returns
 */
export function queryDealedPrescription(params) {
  return http({
    url: "/app/prescription/queryDealedList",
    data: params,
  });
}


