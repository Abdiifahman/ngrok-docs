<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2zGjeB8dFuNRmZlpvfb0Oz95wwh",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2zGjeB8dFuNRmZlpvfb0Oz95wwh"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.56dlhwaca9ffcshxk.local-ngrok-cname.com",
      "created_at": "2025-07-01T10:06:36Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2zGjeN9fjbrBNnR3ucUMsVIK6A1",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2zGjeN9fjbrBNnR3ucUMsVIK6A1"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": {
        "authority": "letsencrypt",
        "private_key_type": "ecdsa"
      },
      "certificate_management_status": {
        "provisioning_job": {
          "error_code": null,
          "msg": "Managed certificate provisioning in progress.",
          "retries_at": null,
          "started_at": "2025-07-01T10:06:37Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.56dlhwaca9ffcshxk.local-ngrok-cname.com",
      "created_at": "2025-07-01T10:06:37Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2zGjeFpekNQ8Ll94vUU2y7S73Vf",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2zGjeFpekNQ8Ll94vUU2y7S73Vf"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
