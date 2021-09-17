export type PerColumnType<Nullable extends boolean = false> = Record<(Nullable extends true ? "0":never) | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12", Record<string, any>>

export type DirectionsType = "l" | "r" | "t" | "b" | "x" | "y"
export type DirectionsLength = "0" | "1" | "2" | "3" | "4" | "5"

export type PerDirectionType = Record<`${DirectionsType}-${DirectionsLength}` | DirectionsLength, Record<string, any>>