// 分页通用接口
export interface PaginationProps {
  pageSize: number
  pageNo: number
}

// 通用返回接口(分页)
export interface ResponseListType<D> {
  code: string
  message: string
  result: {
    pageNo: number
    pageSize: number
    totalCount: number
    totalPage: number
    list: Array<D>
  }
}

// 通用返回接口(分页了，但又没有分页)
export interface ResponseItemType<D> {
  code: string
  message: string
  result: {
    pageNo: number
    pageSize: number
    totalCount: number
    totalPage: number
    list: D
  }
}

// 通用返回接口
export interface ResponseType<D> {
  code: string
  message: string
  result: D
}

// 通用接口封装函数(分页) 建议用这个
export interface InterListFunction<D extends object, T> {
  // eslint-disable-next-line no-unused-vars
  (req: D & Partial<PaginationProps>): Promise<ResponseListType<T>>
}

// 通用接口封装函数(不分页) 建议用这个
export interface InterFunction<D extends object, T> {
  // eslint-disable-next-line no-unused-vars
  (req?: D): Promise<ResponseType<T>>
}

// 通用接口封装函数(分页了，但又没有分页) 建议用这个
export interface InterItemFunction<D extends object, T> {
  // eslint-disable-next-line no-unused-vars
  (req: D & Partial<PaginationProps>): Promise<ResponseItemType<T>>
}

// 返回类型封装
// eslint-disable-next-line no-unused-vars
export type InterDataType<T extends (...args: any) => any> = (
  ReturnType<T> extends Promise<infer U> ? U : never
) extends { result: infer V }
  ? V
  : never

// 返回列表类型封装
// eslint-disable-next-line no-unused-vars
export type InterListType<T extends (...args: any) => any> = (
  ReturnType<T> extends Promise<infer U> ? U : never
) extends { result: { list: infer V } }
  ? V
  : never

// 返回类型封装(分页了，但又没有分页)
// eslint-disable-next-line no-unused-vars
export type InterItemType<T extends (...args: any) => any> = (
  ReturnType<T> extends Promise<infer U> ? U : never
) extends { result: infer V }
  ? V
  : never

// 获取参数类型封装
// eslint-disable-next-line no-unused-vars
export type InterReqType<T extends (...args: any) => any> = Parameters<T>[0]

// 获取参数类型封装(分页)
// eslint-disable-next-line no-unused-vars
export type InterReqListType<T extends (...args: any) => any> = Omit<
  Parameters<T>[0],
  'pageSize' | 'pageNo'
>
