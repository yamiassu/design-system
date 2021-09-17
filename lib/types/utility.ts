// Reference data
export type ColumnTypes = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12"
export type DirectionsTypes = "l" | "r" | "t" | "b" | "x" | "y"
export type DirectionsLength = "0" | "1" | "2" | "3" | "4" | "5"
export type ColorTypes = "primary" | "secondary" | "dark" | "light" | "warning" | "danger" | "success"

// Utility types
export type ColorMapping<Content = any> = Record<ColorTypes, Content>
export type PerDirectionType = Record<`${DirectionsTypes}-${DirectionsLength}` | DirectionsLength, Record<string, any>>
export type PerColumnType<Nullable extends boolean = false> = Record<(Nullable extends true ? "0":never) | ColumnTypes, Record<string, any>>