/** 药品相关 */

import { http } from "../utils/http";

/**
 * 获取药品列表
 * @param {
 * name  药品名称
 * skuCode   货号
 * page  页码
 * limit  每页条数
 * } data
 * @returns
 */
export function getDrugList(data) {
  return http({
    url: "/app/drug/list",
    header: "application/x-www-form-urlencoded",
    method: "post",
    data,
  });
}

/**
 * 修改药品
 * @param {
 * id  药物id
 * instructions  用法
 * frequency    服用频次
 * dosage   用量
 * } data
 * @returns
 */
export function editDrug(data) {
  return http({
    url: "/app/drug/update",
    method: "post",
    data,
  });
}


/**
 * 查询单据列表
 * @param {*} data
 * @returns
 */
export function getDrugbyMenu(data) {
  return http({
    url: "/app/order/list",
    method: "post",
    data,
  });
}
