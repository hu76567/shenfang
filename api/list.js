/** 列表相关 */
import { http } from "../utils/http";

/**
 * 查询药师列表
 * @returns
 */
export function getPharmacistList() {
  return http({
    url: "/sys/user/prescriptionList",
  });
}

/**
 * 查询用法列表
 * @param {
 * instructions 用法
 * page  页码
 * limit 每页条数
 * } data
 * @returns
 */
export function getUsageList(data) {
  return http({
    url: "/app/usage/list",
    method: "post",
    data,
  });
}

/**
 * 查询疾病列表
 * @param {
 * name 疾病名称
 * page  页码
 * limit 每页条数
 * } data
 * @returns
 */
export function getDiseaseList(data) {
  return http({
    url: "/app/diseaseclassification/list",
    header: "application/x-www-form-urlencoded",
    method: "post",
    data,
  });
}

/**
 * 查询服用频次列表
 * @param {
 * frequency 服用频次
 * page
 * limit
 * } data
 * @returns
 */
export function getFrequencyList(data) {
  return http({
    url: "/app/frequency/list",
    method: "post",
    data,
  });
}

/**
 * 查询剂量列表
 * @param {
 * dosage  剂量
 * page
 * limit
 * } data
 * @returns
 */
export function getDoseList(data) {
  return http({
    url: "/app/dosage/list",
    method: "post",
    data,
  });
}
