# OPA API

A server that acts as a proxy for the OPA server as CORS is not supported (https://github.com/open-policy-agent/opa/issues/2453)

## Server Setup

```shell
npm install
node index.js

OPA api server listening on port 8080
```

## Test Endpoints

```
curl http://localhost:8181/v1/policies | jq '.result[]' | jq '{id, raw}'

{
  "id": "policies/shared/util.rego",
  "raw": "package policies.shared.util\nimport future.keywords\n\nis_authenticated(roles) {\n  some input_role in input.roles\n  some role in roles\n  lower(input_role) == lower(role)\n}\n\nis_authorized(privileges) {\n  some privilege in privileges\n  lower(privilege.resource) == lower(input.resource)\n  lower(privilege.action) == lower(input.action)\n}"
}
```
