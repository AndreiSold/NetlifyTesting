import { AuthData } from './authData';
import { Plan } from './plan';
import { ProductStatistics } from './productStatistics';

export interface Product {
  /**
   * @member {string} [id]
   */
  id: string;

  /**
   * @member {string} [stripeProductId]
   */
  stripeProductId?: string;

  /**
   * @member {string} [displayName]
   */
  displayName: string;

  /**
   * @member {string} [shortDescription]
   */
  shortDescription: string;

  /**
   * @member {string} [longDescription]
   */
  longDescription: string;

  /**
   * @member {string} [providerId]
   */
  providerId: string;

  /**
   * @member {string} [providerName]
   */
  providerName: string;

  /**
   * @member {string} [specificationFileName]
   */
  specificationFileName: string;

  /**
   * @member {string[]} [pictureUrls]
   */
  pictureUrls: string[];

  /**
   * @member {ProductAdvantage[]} [advantages]
   */
  advantages: ProductAdvantage[];

  /**
   * @member {Category[]} [categories]
   */
  categories: Category[];

  /**
   * @member {Plan[]} [plans]
   */
  plans: Plan[];

  /**
   * @member {ProductStatistics} [statistics]
   */
  statistics: ProductStatistics;

  /**
   * @member {​AuthData}​ [authData]
   */
  authData: AuthData;
}

export interface ProductAdvantage {
  /**
   * @member {string} [title]
   */
  title: string;

  /**
   * @member {string} [description]
   */
  description: string;
}

export enum SubscriptionType {
  PER_REQUEST,
  MONTHLY,
  YEARLY,
}

export enum Category {
  ALL_PRODUCTS = 'ALL_PRODUCTS',
  PRODUCTS = 'PRODUCTS',
  SALES_MANAGEMENT = 'SALES_MANAGEMENT',
  PROPOSAL = 'PROPOSAL',
  CONTRACT = 'CONTRACT',
  CLAIMS_BENEFITS = 'CLAIMS_BENEFITS',
  PAYMENT = 'PAYMENT',
  CAPITAL_INVESTMENT = 'CAPITAL_INVESTMENT',
  REINSURANCE = 'REINSURANCE',
  SALES_AND_CUSTOMER = 'SALES_AND_CUSTOMER',
  INFORMATION_AND_REPORTING = 'INFORMATION_AND_REPORTING',
  STRATEGY = 'STRATEGY',
  PLANNING_AND_CONTROLLING = 'PLANNING_AND_CONTROLLING',
  RISK_MANAGEMENT = 'RISK_MANAGEMENT',
  PROCESSES_AND_ORGANIZATION = 'PROCESSES_AND_ORGANIZATION',
  HUMAN_RESOURCES = 'HUMAN_RESOURCES',
  PROJECTS = 'PROJECTS',
  MARKETING_AND_COMMUNICATION = 'MARKETING_AND_COMMUNICATION',
  IT = 'IT',
  INPUT_OUTPUT = 'INPUT_OUTPUT',
  REWE = 'REWE',
  LEGAL_AND_COMPLIANCE = 'LEGAL_AND_COMPLIANCE',
  PROCUREMENT = 'PROCUREMENT',
  INTERNAL_SERVICES = 'INTERNAL_SERVICES',
  HEALTH = 'HEALTH',
}

export interface ProductCategory {
  id: Category;
}
