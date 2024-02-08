
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customers
 * 
 */
export type Customers = $Result.DefaultSelection<Prisma.$CustomersPayload>
/**
 * Model consultants
 * 
 */
export type consultants = $Result.DefaultSelection<Prisma.$consultantsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **Customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.CustomersDelegate<ExtArgs>;

  /**
   * `prisma.consultants`: Exposes CRUD operations for the **consultants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultants
    * const consultants = await prisma.consultants.findMany()
    * ```
    */
  get consultants(): Prisma.consultantsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Customers: 'Customers',
    consultants: 'consultants'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'customers' | 'consultants'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customers: {
        payload: Prisma.$CustomersPayload<ExtArgs>
        fields: Prisma.CustomersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          findFirst: {
            args: Prisma.CustomersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          findMany: {
            args: Prisma.CustomersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>[]
          }
          create: {
            args: Prisma.CustomersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          createMany: {
            args: Prisma.CustomersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          update: {
            args: Prisma.CustomersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          deleteMany: {
            args: Prisma.CustomersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.CustomersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomersCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      consultants: {
        payload: Prisma.$consultantsPayload<ExtArgs>
        fields: Prisma.consultantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.consultantsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$consultantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.consultantsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$consultantsPayload>
          }
          findFirst: {
            args: Prisma.consultantsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$consultantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.consultantsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$consultantsPayload>
          }
          findMany: {
            args: Prisma.consultantsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$consultantsPayload>[]
          }
          create: {
            args: Prisma.consultantsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$consultantsPayload>
          }
          createMany: {
            args: Prisma.consultantsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.consultantsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$consultantsPayload>
          }
          update: {
            args: Prisma.consultantsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$consultantsPayload>
          }
          deleteMany: {
            args: Prisma.consultantsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.consultantsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.consultantsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$consultantsPayload>
          }
          aggregate: {
            args: Prisma.ConsultantsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConsultants>
          }
          groupBy: {
            args: Prisma.consultantsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConsultantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.consultantsCountArgs<ExtArgs>,
            result: $Utils.Optional<ConsultantsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    isAdmin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    isAdmin: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      isAdmin: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    id: number | null
    phone: number | null
  }

  export type CustomersSumAggregateOutputType = {
    id: number | null
    phone: number | null
  }

  export type CustomersMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    phone: number | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    phone: number | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    id?: true
    phone?: true
  }

  export type CustomersSumAggregateInputType = {
    id?: true
    phone?: true
  }

  export type CustomersMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to aggregate.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type CustomersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomersWhereInput
    orderBy?: CustomersOrderByWithAggregationInput | CustomersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: CustomersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: number
    fullname: string
    email: string | null
    phone: number
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends CustomersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type CustomersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customers"]>

  export type CustomersSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CustomersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string | null
      phone: number
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }


  type CustomersGetPayload<S extends boolean | null | undefined | CustomersDefaultArgs> = $Result.GetResult<Prisma.$CustomersPayload, S>

  type CustomersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface CustomersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customers'], meta: { name: 'Customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {CustomersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersFindFirstArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customers.
     * @param {CustomersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
    **/
    create<T extends CustomersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersCreateArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     *     @param {CustomersCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customers = await prisma.customers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customers.
     * @param {CustomersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
    **/
    delete<T extends CustomersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersDeleteArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customers.
     * @param {CustomersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersUpdateArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customers.
     * @param {CustomersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
    **/
    upsert<T extends CustomersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersUpsertArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomersCountArgs>(
      args?: Subset<T, CustomersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomersGroupByArgs['orderBy'] }
        : { orderBy?: CustomersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customers model
   */
  readonly fields: CustomersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Customers model
   */ 
  interface CustomersFieldRefs {
    readonly id: FieldRef<"Customers", 'Int'>
    readonly fullname: FieldRef<"Customers", 'String'>
    readonly email: FieldRef<"Customers", 'String'>
    readonly phone: FieldRef<"Customers", 'Int'>
    readonly address: FieldRef<"Customers", 'String'>
    readonly createdAt: FieldRef<"Customers", 'DateTime'>
    readonly updatedAt: FieldRef<"Customers", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Customers findUnique
   */
  export type CustomersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where: CustomersWhereUniqueInput
  }


  /**
   * Customers findUniqueOrThrow
   */
  export type CustomersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where: CustomersWhereUniqueInput
  }


  /**
   * Customers findFirst
   */
  export type CustomersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }


  /**
   * Customers findFirstOrThrow
   */
  export type CustomersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }


  /**
   * Customers findMany
   */
  export type CustomersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }


  /**
   * Customers create
   */
  export type CustomersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * The data needed to create a Customers.
     */
    data: XOR<CustomersCreateInput, CustomersUncheckedCreateInput>
  }


  /**
   * Customers createMany
   */
  export type CustomersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomersCreateManyInput | CustomersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Customers update
   */
  export type CustomersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * The data needed to update a Customers.
     */
    data: XOR<CustomersUpdateInput, CustomersUncheckedUpdateInput>
    /**
     * Choose, which Customers to update.
     */
    where: CustomersWhereUniqueInput
  }


  /**
   * Customers updateMany
   */
  export type CustomersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomersUpdateManyMutationInput, CustomersUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomersWhereInput
  }


  /**
   * Customers upsert
   */
  export type CustomersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * The filter to search for the Customers to update in case it exists.
     */
    where: CustomersWhereUniqueInput
    /**
     * In case the Customers found by the `where` argument doesn't exist, create a new Customers with this data.
     */
    create: XOR<CustomersCreateInput, CustomersUncheckedCreateInput>
    /**
     * In case the Customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomersUpdateInput, CustomersUncheckedUpdateInput>
  }


  /**
   * Customers delete
   */
  export type CustomersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Filter which Customers to delete.
     */
    where: CustomersWhereUniqueInput
  }


  /**
   * Customers deleteMany
   */
  export type CustomersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomersWhereInput
  }


  /**
   * Customers without action
   */
  export type CustomersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
  }



  /**
   * Model consultants
   */

  export type AggregateConsultants = {
    _count: ConsultantsCountAggregateOutputType | null
    _avg: ConsultantsAvgAggregateOutputType | null
    _sum: ConsultantsSumAggregateOutputType | null
    _min: ConsultantsMinAggregateOutputType | null
    _max: ConsultantsMaxAggregateOutputType | null
  }

  export type ConsultantsAvgAggregateOutputType = {
    id: number | null
    experience: number | null
    phone: number | null
  }

  export type ConsultantsSumAggregateOutputType = {
    id: number | null
    experience: number | null
    phone: number | null
  }

  export type ConsultantsMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    industry: string | null
    title: string | null
    experience: number | null
    workExperience: string | null
    phone: number | null
    address: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultantsMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    industry: string | null
    title: string | null
    experience: number | null
    workExperience: string | null
    phone: number | null
    address: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultantsCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    industry: number
    title: number
    experience: number
    workExperience: number
    phone: number
    address: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConsultantsAvgAggregateInputType = {
    id?: true
    experience?: true
    phone?: true
  }

  export type ConsultantsSumAggregateInputType = {
    id?: true
    experience?: true
    phone?: true
  }

  export type ConsultantsMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    industry?: true
    title?: true
    experience?: true
    workExperience?: true
    phone?: true
    address?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultantsMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    industry?: true
    title?: true
    experience?: true
    workExperience?: true
    phone?: true
    address?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultantsCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    industry?: true
    title?: true
    experience?: true
    workExperience?: true
    phone?: true
    address?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConsultantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which consultants to aggregate.
     */
    where?: consultantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consultants to fetch.
     */
    orderBy?: consultantsOrderByWithRelationInput | consultantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: consultantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consultants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consultants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned consultants
    **/
    _count?: true | ConsultantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultantsMaxAggregateInputType
  }

  export type GetConsultantsAggregateType<T extends ConsultantsAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultants[P]>
      : GetScalarType<T[P], AggregateConsultants[P]>
  }




  export type consultantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: consultantsWhereInput
    orderBy?: consultantsOrderByWithAggregationInput | consultantsOrderByWithAggregationInput[]
    by: ConsultantsScalarFieldEnum[] | ConsultantsScalarFieldEnum
    having?: consultantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultantsCountAggregateInputType | true
    _avg?: ConsultantsAvgAggregateInputType
    _sum?: ConsultantsSumAggregateInputType
    _min?: ConsultantsMinAggregateInputType
    _max?: ConsultantsMaxAggregateInputType
  }

  export type ConsultantsGroupByOutputType = {
    id: number
    fullname: string
    email: string
    industry: string
    title: string
    experience: number
    workExperience: string
    phone: number
    address: string
    image: string
    createdAt: Date
    updatedAt: Date
    _count: ConsultantsCountAggregateOutputType | null
    _avg: ConsultantsAvgAggregateOutputType | null
    _sum: ConsultantsSumAggregateOutputType | null
    _min: ConsultantsMinAggregateOutputType | null
    _max: ConsultantsMaxAggregateOutputType | null
  }

  type GetConsultantsGroupByPayload<T extends consultantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultantsGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultantsGroupByOutputType[P]>
        }
      >
    >


  export type consultantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    industry?: boolean
    title?: boolean
    experience?: boolean
    workExperience?: boolean
    phone?: boolean
    address?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["consultants"]>

  export type consultantsSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    industry?: boolean
    title?: boolean
    experience?: boolean
    workExperience?: boolean
    phone?: boolean
    address?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $consultantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "consultants"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      industry: string
      title: string
      experience: number
      workExperience: string
      phone: number
      address: string
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["consultants"]>
    composites: {}
  }


  type consultantsGetPayload<S extends boolean | null | undefined | consultantsDefaultArgs> = $Result.GetResult<Prisma.$consultantsPayload, S>

  type consultantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<consultantsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConsultantsCountAggregateInputType | true
    }

  export interface consultantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['consultants'], meta: { name: 'consultants' } }
    /**
     * Find zero or one Consultants that matches the filter.
     * @param {consultantsFindUniqueArgs} args - Arguments to find a Consultants
     * @example
     * // Get one Consultants
     * const consultants = await prisma.consultants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends consultantsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, consultantsFindUniqueArgs<ExtArgs>>
    ): Prisma__consultantsClient<$Result.GetResult<Prisma.$consultantsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Consultants that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {consultantsFindUniqueOrThrowArgs} args - Arguments to find a Consultants
     * @example
     * // Get one Consultants
     * const consultants = await prisma.consultants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends consultantsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, consultantsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__consultantsClient<$Result.GetResult<Prisma.$consultantsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Consultants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultantsFindFirstArgs} args - Arguments to find a Consultants
     * @example
     * // Get one Consultants
     * const consultants = await prisma.consultants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends consultantsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, consultantsFindFirstArgs<ExtArgs>>
    ): Prisma__consultantsClient<$Result.GetResult<Prisma.$consultantsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Consultants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultantsFindFirstOrThrowArgs} args - Arguments to find a Consultants
     * @example
     * // Get one Consultants
     * const consultants = await prisma.consultants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends consultantsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, consultantsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__consultantsClient<$Result.GetResult<Prisma.$consultantsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Consultants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultantsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultants
     * const consultants = await prisma.consultants.findMany()
     * 
     * // Get first 10 Consultants
     * const consultants = await prisma.consultants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultantsWithIdOnly = await prisma.consultants.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends consultantsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, consultantsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consultantsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Consultants.
     * @param {consultantsCreateArgs} args - Arguments to create a Consultants.
     * @example
     * // Create one Consultants
     * const Consultants = await prisma.consultants.create({
     *   data: {
     *     // ... data to create a Consultants
     *   }
     * })
     * 
    **/
    create<T extends consultantsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, consultantsCreateArgs<ExtArgs>>
    ): Prisma__consultantsClient<$Result.GetResult<Prisma.$consultantsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Consultants.
     *     @param {consultantsCreateManyArgs} args - Arguments to create many Consultants.
     *     @example
     *     // Create many Consultants
     *     const consultants = await prisma.consultants.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends consultantsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, consultantsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Consultants.
     * @param {consultantsDeleteArgs} args - Arguments to delete one Consultants.
     * @example
     * // Delete one Consultants
     * const Consultants = await prisma.consultants.delete({
     *   where: {
     *     // ... filter to delete one Consultants
     *   }
     * })
     * 
    **/
    delete<T extends consultantsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, consultantsDeleteArgs<ExtArgs>>
    ): Prisma__consultantsClient<$Result.GetResult<Prisma.$consultantsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Consultants.
     * @param {consultantsUpdateArgs} args - Arguments to update one Consultants.
     * @example
     * // Update one Consultants
     * const consultants = await prisma.consultants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends consultantsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, consultantsUpdateArgs<ExtArgs>>
    ): Prisma__consultantsClient<$Result.GetResult<Prisma.$consultantsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Consultants.
     * @param {consultantsDeleteManyArgs} args - Arguments to filter Consultants to delete.
     * @example
     * // Delete a few Consultants
     * const { count } = await prisma.consultants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends consultantsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, consultantsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultants
     * const consultants = await prisma.consultants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends consultantsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, consultantsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Consultants.
     * @param {consultantsUpsertArgs} args - Arguments to update or create a Consultants.
     * @example
     * // Update or create a Consultants
     * const consultants = await prisma.consultants.upsert({
     *   create: {
     *     // ... data to create a Consultants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultants we want to update
     *   }
     * })
    **/
    upsert<T extends consultantsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, consultantsUpsertArgs<ExtArgs>>
    ): Prisma__consultantsClient<$Result.GetResult<Prisma.$consultantsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Consultants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultantsCountArgs} args - Arguments to filter Consultants to count.
     * @example
     * // Count the number of Consultants
     * const count = await prisma.consultants.count({
     *   where: {
     *     // ... the filter for the Consultants we want to count
     *   }
     * })
    **/
    count<T extends consultantsCountArgs>(
      args?: Subset<T, consultantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultantsAggregateArgs>(args: Subset<T, ConsultantsAggregateArgs>): Prisma.PrismaPromise<GetConsultantsAggregateType<T>>

    /**
     * Group by Consultants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends consultantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: consultantsGroupByArgs['orderBy'] }
        : { orderBy?: consultantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, consultantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the consultants model
   */
  readonly fields: consultantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for consultants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__consultantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the consultants model
   */ 
  interface consultantsFieldRefs {
    readonly id: FieldRef<"consultants", 'Int'>
    readonly fullname: FieldRef<"consultants", 'String'>
    readonly email: FieldRef<"consultants", 'String'>
    readonly industry: FieldRef<"consultants", 'String'>
    readonly title: FieldRef<"consultants", 'String'>
    readonly experience: FieldRef<"consultants", 'Int'>
    readonly workExperience: FieldRef<"consultants", 'String'>
    readonly phone: FieldRef<"consultants", 'Int'>
    readonly address: FieldRef<"consultants", 'String'>
    readonly image: FieldRef<"consultants", 'String'>
    readonly createdAt: FieldRef<"consultants", 'DateTime'>
    readonly updatedAt: FieldRef<"consultants", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * consultants findUnique
   */
  export type consultantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultants
     */
    select?: consultantsSelect<ExtArgs> | null
    /**
     * Filter, which consultants to fetch.
     */
    where: consultantsWhereUniqueInput
  }


  /**
   * consultants findUniqueOrThrow
   */
  export type consultantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultants
     */
    select?: consultantsSelect<ExtArgs> | null
    /**
     * Filter, which consultants to fetch.
     */
    where: consultantsWhereUniqueInput
  }


  /**
   * consultants findFirst
   */
  export type consultantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultants
     */
    select?: consultantsSelect<ExtArgs> | null
    /**
     * Filter, which consultants to fetch.
     */
    where?: consultantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consultants to fetch.
     */
    orderBy?: consultantsOrderByWithRelationInput | consultantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for consultants.
     */
    cursor?: consultantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consultants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consultants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of consultants.
     */
    distinct?: ConsultantsScalarFieldEnum | ConsultantsScalarFieldEnum[]
  }


  /**
   * consultants findFirstOrThrow
   */
  export type consultantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultants
     */
    select?: consultantsSelect<ExtArgs> | null
    /**
     * Filter, which consultants to fetch.
     */
    where?: consultantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consultants to fetch.
     */
    orderBy?: consultantsOrderByWithRelationInput | consultantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for consultants.
     */
    cursor?: consultantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consultants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consultants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of consultants.
     */
    distinct?: ConsultantsScalarFieldEnum | ConsultantsScalarFieldEnum[]
  }


  /**
   * consultants findMany
   */
  export type consultantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultants
     */
    select?: consultantsSelect<ExtArgs> | null
    /**
     * Filter, which consultants to fetch.
     */
    where?: consultantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consultants to fetch.
     */
    orderBy?: consultantsOrderByWithRelationInput | consultantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing consultants.
     */
    cursor?: consultantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consultants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consultants.
     */
    skip?: number
    distinct?: ConsultantsScalarFieldEnum | ConsultantsScalarFieldEnum[]
  }


  /**
   * consultants create
   */
  export type consultantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultants
     */
    select?: consultantsSelect<ExtArgs> | null
    /**
     * The data needed to create a consultants.
     */
    data: XOR<consultantsCreateInput, consultantsUncheckedCreateInput>
  }


  /**
   * consultants createMany
   */
  export type consultantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many consultants.
     */
    data: consultantsCreateManyInput | consultantsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * consultants update
   */
  export type consultantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultants
     */
    select?: consultantsSelect<ExtArgs> | null
    /**
     * The data needed to update a consultants.
     */
    data: XOR<consultantsUpdateInput, consultantsUncheckedUpdateInput>
    /**
     * Choose, which consultants to update.
     */
    where: consultantsWhereUniqueInput
  }


  /**
   * consultants updateMany
   */
  export type consultantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update consultants.
     */
    data: XOR<consultantsUpdateManyMutationInput, consultantsUncheckedUpdateManyInput>
    /**
     * Filter which consultants to update
     */
    where?: consultantsWhereInput
  }


  /**
   * consultants upsert
   */
  export type consultantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultants
     */
    select?: consultantsSelect<ExtArgs> | null
    /**
     * The filter to search for the consultants to update in case it exists.
     */
    where: consultantsWhereUniqueInput
    /**
     * In case the consultants found by the `where` argument doesn't exist, create a new consultants with this data.
     */
    create: XOR<consultantsCreateInput, consultantsUncheckedCreateInput>
    /**
     * In case the consultants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<consultantsUpdateInput, consultantsUncheckedUpdateInput>
  }


  /**
   * consultants delete
   */
  export type consultantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultants
     */
    select?: consultantsSelect<ExtArgs> | null
    /**
     * Filter which consultants to delete.
     */
    where: consultantsWhereUniqueInput
  }


  /**
   * consultants deleteMany
   */
  export type consultantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which consultants to delete
     */
    where?: consultantsWhereInput
  }


  /**
   * consultants without action
   */
  export type consultantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultants
     */
    select?: consultantsSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const ConsultantsScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    industry: 'industry',
    title: 'title',
    experience: 'experience',
    workExperience: 'workExperience',
    phone: 'phone',
    address: 'address',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConsultantsScalarFieldEnum = (typeof ConsultantsScalarFieldEnum)[keyof typeof ConsultantsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CustomersWhereInput = {
    AND?: CustomersWhereInput | CustomersWhereInput[]
    OR?: CustomersWhereInput[]
    NOT?: CustomersWhereInput | CustomersWhereInput[]
    id?: IntFilter<"Customers"> | number
    fullname?: StringFilter<"Customers"> | string
    email?: StringNullableFilter<"Customers"> | string | null
    phone?: IntFilter<"Customers"> | number
    address?: StringNullableFilter<"Customers"> | string | null
    createdAt?: DateTimeFilter<"Customers"> | Date | string
    updatedAt?: DateTimeFilter<"Customers"> | Date | string
  }

  export type CustomersOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomersWhereInput | CustomersWhereInput[]
    OR?: CustomersWhereInput[]
    NOT?: CustomersWhereInput | CustomersWhereInput[]
    fullname?: StringFilter<"Customers"> | string
    email?: StringNullableFilter<"Customers"> | string | null
    phone?: IntFilter<"Customers"> | number
    address?: StringNullableFilter<"Customers"> | string | null
    createdAt?: DateTimeFilter<"Customers"> | Date | string
    updatedAt?: DateTimeFilter<"Customers"> | Date | string
  }, "id">

  export type CustomersOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomersCountOrderByAggregateInput
    _avg?: CustomersAvgOrderByAggregateInput
    _max?: CustomersMaxOrderByAggregateInput
    _min?: CustomersMinOrderByAggregateInput
    _sum?: CustomersSumOrderByAggregateInput
  }

  export type CustomersScalarWhereWithAggregatesInput = {
    AND?: CustomersScalarWhereWithAggregatesInput | CustomersScalarWhereWithAggregatesInput[]
    OR?: CustomersScalarWhereWithAggregatesInput[]
    NOT?: CustomersScalarWhereWithAggregatesInput | CustomersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customers"> | number
    fullname?: StringWithAggregatesFilter<"Customers"> | string
    email?: StringNullableWithAggregatesFilter<"Customers"> | string | null
    phone?: IntWithAggregatesFilter<"Customers"> | number
    address?: StringNullableWithAggregatesFilter<"Customers"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customers"> | Date | string
  }

  export type consultantsWhereInput = {
    AND?: consultantsWhereInput | consultantsWhereInput[]
    OR?: consultantsWhereInput[]
    NOT?: consultantsWhereInput | consultantsWhereInput[]
    id?: IntFilter<"consultants"> | number
    fullname?: StringFilter<"consultants"> | string
    email?: StringFilter<"consultants"> | string
    industry?: StringFilter<"consultants"> | string
    title?: StringFilter<"consultants"> | string
    experience?: IntFilter<"consultants"> | number
    workExperience?: StringFilter<"consultants"> | string
    phone?: IntFilter<"consultants"> | number
    address?: StringFilter<"consultants"> | string
    image?: StringFilter<"consultants"> | string
    createdAt?: DateTimeFilter<"consultants"> | Date | string
    updatedAt?: DateTimeFilter<"consultants"> | Date | string
  }

  export type consultantsOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    industry?: SortOrder
    title?: SortOrder
    experience?: SortOrder
    workExperience?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type consultantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fullname?: string
    email?: string
    AND?: consultantsWhereInput | consultantsWhereInput[]
    OR?: consultantsWhereInput[]
    NOT?: consultantsWhereInput | consultantsWhereInput[]
    industry?: StringFilter<"consultants"> | string
    title?: StringFilter<"consultants"> | string
    experience?: IntFilter<"consultants"> | number
    workExperience?: StringFilter<"consultants"> | string
    phone?: IntFilter<"consultants"> | number
    address?: StringFilter<"consultants"> | string
    image?: StringFilter<"consultants"> | string
    createdAt?: DateTimeFilter<"consultants"> | Date | string
    updatedAt?: DateTimeFilter<"consultants"> | Date | string
  }, "id" | "fullname" | "email">

  export type consultantsOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    industry?: SortOrder
    title?: SortOrder
    experience?: SortOrder
    workExperience?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: consultantsCountOrderByAggregateInput
    _avg?: consultantsAvgOrderByAggregateInput
    _max?: consultantsMaxOrderByAggregateInput
    _min?: consultantsMinOrderByAggregateInput
    _sum?: consultantsSumOrderByAggregateInput
  }

  export type consultantsScalarWhereWithAggregatesInput = {
    AND?: consultantsScalarWhereWithAggregatesInput | consultantsScalarWhereWithAggregatesInput[]
    OR?: consultantsScalarWhereWithAggregatesInput[]
    NOT?: consultantsScalarWhereWithAggregatesInput | consultantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"consultants"> | number
    fullname?: StringWithAggregatesFilter<"consultants"> | string
    email?: StringWithAggregatesFilter<"consultants"> | string
    industry?: StringWithAggregatesFilter<"consultants"> | string
    title?: StringWithAggregatesFilter<"consultants"> | string
    experience?: IntWithAggregatesFilter<"consultants"> | number
    workExperience?: StringWithAggregatesFilter<"consultants"> | string
    phone?: IntWithAggregatesFilter<"consultants"> | number
    address?: StringWithAggregatesFilter<"consultants"> | string
    image?: StringWithAggregatesFilter<"consultants"> | string
    createdAt?: DateTimeWithAggregatesFilter<"consultants"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"consultants"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersCreateInput = {
    fullname: string
    email?: string | null
    phone: number
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomersUncheckedCreateInput = {
    id?: number
    fullname: string
    email?: string | null
    phone: number
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomersUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersCreateManyInput = {
    id?: number
    fullname: string
    email?: string | null
    phone: number
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomersUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type consultantsCreateInput = {
    fullname: string
    email: string
    industry: string
    title: string
    experience: number
    workExperience: string
    phone: number
    address: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type consultantsUncheckedCreateInput = {
    id?: number
    fullname: string
    email: string
    industry: string
    title: string
    experience: number
    workExperience: string
    phone: number
    address: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type consultantsUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    workExperience?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type consultantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    workExperience?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type consultantsCreateManyInput = {
    id?: number
    fullname: string
    email: string
    industry: string
    title: string
    experience: number
    workExperience: string
    phone: number
    address: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type consultantsUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    workExperience?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type consultantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    workExperience?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomersCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomersAvgOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
  }

  export type CustomersMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomersMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomersSumOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type consultantsCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    industry?: SortOrder
    title?: SortOrder
    experience?: SortOrder
    workExperience?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type consultantsAvgOrderByAggregateInput = {
    id?: SortOrder
    experience?: SortOrder
    phone?: SortOrder
  }

  export type consultantsMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    industry?: SortOrder
    title?: SortOrder
    experience?: SortOrder
    workExperience?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type consultantsMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    industry?: SortOrder
    title?: SortOrder
    experience?: SortOrder
    workExperience?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type consultantsSumOrderByAggregateInput = {
    id?: SortOrder
    experience?: SortOrder
    phone?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomersDefaultArgs instead
     */
    export type CustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use consultantsDefaultArgs instead
     */
    export type consultantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = consultantsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}