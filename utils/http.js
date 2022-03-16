import { getToken } from "./token";

export async function http(options) {
  let baseURL = "http://33y1h15106.qicp.vip/prescription"; // 线上地址

  try {
    let res = await uni.request({
      url: baseURL + options.url,
      data: options.data,
      method: options.method ? options.method : "GET",
      header: {
        token: getToken(),
        "content-type": options.header ? options.header : "application/json",
      },
    });
    return res[1].data;
  } catch (error) {}
}
