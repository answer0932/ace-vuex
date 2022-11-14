// {
//     user: {
//       getters: {
//         isLogin: (state: { loading: boolean }) => string;
//       }
//     },
//     wechat:...
//   }
//----目标----
// {
//     "user/isLogin":string,
//     "wechat/isTest":string
// }
import { modules } from './modules';
type GetGetter<Module> = Module extends { getters: infer G } ? G : unknown;
type GetGetters<Modules> = {
  [K in keyof Modules]: GetGetter<Modules[K]>;
};
type ModuleGettes = GetGetters<typeof modules>;
//拼具体的getters需求
type AddPrefix<Prefix, Keys> = `${Prefix & string}/${Keys & string}`;
//拆分具体某个getters模块
type GetSpliceKey<K, M> = AddPrefix<K, keyof M>;
//得到user层
type GetSpliceKeys<Modules> = {
  // K==user
  [K in keyof Modules]: GetSpliceKey<K, Modules[K]>;
}[keyof Modules];
type xx2 = GetSpliceKeys<ModuleGettes>;
// type XX<A,T> = A & keyof T
type GetFunc<T, A, B> = T[A & keyof T][B & keyof T[A & keyof T]];
type GetSpliceObj<T> = {
  [K in GetSpliceKeys<T>]: K extends `${infer A}/${infer B}`
    ? GetFunc<T, A, B>
    : unknown;
};
type MoudlesGetters = GetSpliceObj<ModuleGettes>;
type Getters = {
  [K in keyof MoudlesGetters]: ReturnType<MoudlesGetters[K]>;
};
export { Getters };
