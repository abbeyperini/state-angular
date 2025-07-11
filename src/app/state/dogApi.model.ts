export interface ShibaData {
  shibas: ReadonlyArray<string>,
  pending: boolean,
  error: string | null,
}