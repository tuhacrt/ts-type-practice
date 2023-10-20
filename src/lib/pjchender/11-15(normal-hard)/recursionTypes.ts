type SnakeToCamelCase<T extends string> = T extends `${infer Head}_${infer Tail}`
  ? `${Uncapitalize<Head>}${Capitalize<SnakeToCamelCase<Tail>>}` : T;

type T1 = SnakeToCamelCase<'this_is_snake_case'>; // "thisIsSnakeCase"
//   ^?
type T2 = SnakeToCamelCase<'This_Is_Strange_Case'>; // "thisIsStrangeCase"
//   ^?
type T3 = SnakeToCamelCase<'IDontKnowThis'>; // "IDontKnowThis"
//   ^?

type FixPathSquareBrackets<T extends string> = T extends `${infer Head}[${infer Middle}]${infer Tail}`
  ? `${Head}.${Middle}${FixPathSquareBrackets<Tail>}` : T;

type T4 = FixPathSquareBrackets<'foo[0][a].bar[b].foo'>;
//   ^?

export { T1, T2, T3, T4 };
