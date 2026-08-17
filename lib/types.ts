export type ApiResponse<T>={success:boolean;data?:T;message?:string;errorCode?:string;requestId?:string};
export type RpcRequest={action:string;args?:unknown[];requestId?:string;timestamp?:number};
