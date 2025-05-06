export const required = (msg: string) => (val: any) => (!val ? msg : null)
