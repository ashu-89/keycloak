# Spring Security OAuth2 Keycloak Demo

This repository contains source code to demonstrate OAuth2 features using Spring Security and KeyCloak Authorization Server

After you checked out the project, run the following command:

`mvn clean verify`

NOTE: This branch contains initial source code for the demo project, you can find the final source code in the main branch

This project contains examples for 3 OAuth2 Grant Types

- Authorization Code Flow (oauth2-authorization-code-demo)
- PKCE Authorization Code Flow (oauth2-pkce-demo)
- Client Credentials Flow (oauth2-client-credentials-demo)

###########################################################################

Creating a client in KeyCloak

Spring boot format - valid redirect URI

/login/oauth2/code/{registrationId}


clientId - ashu-1
Therefore, valid redirect URI
/login/oauth2/code/ashu-1

Full valid redirect URI - http://localhost:8080/login/oauth2/code/ashu-1
#####