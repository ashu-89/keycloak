  import {AuthConfig} from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8180/realms/ashu1',
  redirectUri: window.location.origin,
  clientId: 'ashu-pkce',
  responseType: 'code',
  strictDiscoveryDocumentValidation: false,
  scope: 'openid profile email offline_access',
}
