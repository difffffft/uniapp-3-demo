//是否开启开发者环境(用于线上发布)
export const DEVELOPMENT_ENV = true

//请求地址
export const BASE_URL = DEVELOPMENT_ENV ? "http://www.dev.com" : "https://www.pro.com"