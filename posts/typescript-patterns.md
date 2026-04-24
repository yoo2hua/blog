---
title: "TypeScript Patterns for Better APIs"
date: "2025-01-05"
description: "Practical patterns to make your TypeScript code more expressive and maintainable. Generic constraints, conditional types, and type inference tricks."
---

TypeScript's power lies in its ability to model intent. Good types do not just prevent bugs — they document your code and guide consumers toward correct usage.

## Generic Constraints

Use constraints to narrow generic types. This lets TypeScript infer more and catches misuse early.

```ts
function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}
```

## Conditional Types

Conditional types let you derive types from other types. They are the foundation of utilities like `Exclude`, `Extract`, and `ReturnType`.

```ts
type IsString<T> = T extends string ? true : false;
```

## Discriminated Unions

Use discriminated unions for state machines. They make impossible states unrepresentable.

```ts
type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: string }
  | { status: 'error'; error: Error };
```

## Conclusion

TypeScript is a design tool. Invest time in learning its advanced features, and your APIs will become self-documenting and self-correcting.
