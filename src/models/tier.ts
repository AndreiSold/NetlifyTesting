export default interface Tier {
  flatAmount: number;
  unitAmount: number;
  upTo: number | 'inf';
}

export interface CustomTier {
  firstUnit: number;
  lastUnit: number | string;
  perUnit: number;
  fixed: number;
}
