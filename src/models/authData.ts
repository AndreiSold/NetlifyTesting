import { AuthMode } from "./enums";

export interface AuthData {
  /**
   * @member {AuthMode} [authMode]
   */
  authMode: AuthMode;

  /**
   * @member {string} [username]
   */
  username?: string;

  /**
   * @member {string} [password]
   */
  password?: string;

  /**
   * @member {string} [clientId]
   */
  clientId?: string;

  /**
   * @member {string} [clientSecret]
   */
  clientSecret?: string;

  /**
   * @member {string} [authEndpoint]
   */
  authEndpoint?: string;

  /**
   * @member {string} [scope]
   */
  scope?: string;
}
