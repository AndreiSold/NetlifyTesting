export interface Recurring {
  usageType: UsageType;
  interval: Interval;
  intervalCount: number;
  aggregateUsage?: AggregateUsage;
}

export enum UsageType {
  LICENSED = 'licensed',
  METERED = 'metered',
}

export enum Interval {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

export enum AggregateUsage {
  SUM = 'sum',
  LAST_EVER = 'last_ever',
  MAX = 'max',
}
