# keycloak

Download Standalone Keycloak zip instead of container image

![image](https://github.com/ashu-89/keycloak/assets/44347137/32a4f9b8-2078-4c8b-8e1b-dde06caab024)

From bin folder, execut the following command to start keycloak on a port other than default 8080.
\kc.bat start-dev --http-port=8180
Don't know why GitHub tries to be oversmart and display's above command incorrectly till we don't enter edit mode.
the command is:
"kc.bat start-dev --http-port=8180" .. no quotes obvio, but Github makes doube hyphens as single hyphen, lol.

FOR PKCE to work properly:

Backend:
appln.properties ->
spring.security.oauth2.resourceserver.jwt.jwk-set-uri=http://localhost:8180/realms/ashu1/protocol/openid-connect/certs

we can get these by going to our realm, realm settings in KeyCloak and opening "Endpoints" -> OpenID Endpoint Configuration

Frontend:
src>app>auth.config.ts
issuer: 'http://localhost:8180/realms/ashu1',
clientId: 'ashu-pkce',

And that's it.
Works like a charm :)

