import request from "@/hooks/useRequest"

export const reqPostTest = (params, config = {}) => request.post('/index.php', params, config)

export const reqGetTest = (data) => request.get('/index.php', data)