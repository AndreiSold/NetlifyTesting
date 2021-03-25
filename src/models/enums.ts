export enum PaymentMethodType {
  card = 'card',
  sepa_debit = 'sepa_debit',
}

export enum CollectionMethod {
  CHARGE_AUTOMATICALLY = 'charge_automatically',
  SEND_INVOICE = 'suspended',
}

export enum SubscriptionStatus {
  ACTIVE = 'active',
  CANCELED = 'canceled',
  TERMINATED = 'terminated',
  PENDING = 'pendingDate',
}

export enum SubscriptionApiKey {
  PRIMARY = 'primaryKey',
  SECONDARY = 'secondaryKey',
}

export enum ViewMode {
  GRID = 'grid',
  LIST = 'list',
}

export enum MemberStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  UPDATING = 'updating',
  NOT_FOUND = 'not_found',
}

export enum PlanSourceType {
  PER_REQUEST = 'per_request',
  RESPONSE_HEADER = 'response_header',
  PROVIDER_PUSH = 'provider_push',
}

export enum PlanType {
  FIXED = 'fixed',
  METERED = 'metered',
  HYBRID = 'hybrid',
  GRADUATED = 'graduated',
}

export enum BillingScheme {
  PER_UNIT = 'per_unit',
  TIERED = 'tiered',
}

export enum TiersMode {
  VOLUME = 'volume',
  GRADUATED = 'graduated',
}

export enum AuthMode {
  NONE = 'none',
  BASIC = 'basic',
  OAUTH = 'oauth',
}