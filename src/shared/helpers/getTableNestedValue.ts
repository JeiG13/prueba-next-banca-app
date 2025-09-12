export function getNestedValue<
  TObject extends Record<string, unknown>,
  TDefault = undefined
>(
  obj: TObject,
  path: string,
  defaultValue?: TDefault
): unknown | TDefault {
  return path.split(".").reduce<unknown | TDefault>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return defaultValue as TDefault;
  }, obj);
}