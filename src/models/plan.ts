import { BillingScheme, PlanSourceType, PlanType, TiersMode } from "./enums";
import { Recurring } from "./recurring";
import Tier from "./tier";

export interface Plan {
  /**
   * @description Indicates how the usage of this plan is billed
   */
  planType: PlanType;

  /**
   * @member {string} [stripePriceId]
   */
  stripePriceId?: string;

  /**
   * @member {number} [unitAmount]
   */
  unitAmount?: number;

  /**
   * @member {string} [currency]
   * @description lowercase 3 letter currency code as defined by ISO-4217
   * @example: eur
   */
  currency: string;

  /**
   * @member { Recurring } [recurring]
   */
  recurring: Recurring;

  /**
   * @member {BillingScheme} [billingScheme]
   */
  billingScheme: BillingScheme;

  /**
   * @member {Tier[]} [tiers]
   */
  tiers?: Tier[];

  /**
   * @member {TiersMode} [tiers]
   */
  tiersMode?: TiersMode;

  /**
   * @member {string} [termsAndConditions]
   */
  termsAndConditions?: string;

  /**
   * @member {string} [unitLabel]
   */
  unitLabel: string;

  /**
   * @description the source of billing for subscriptions
   * @member {string} [termsAndConditions]
   */
  sources?: {
    type: PlanSourceType;
    header?: string;
  }[];
}
