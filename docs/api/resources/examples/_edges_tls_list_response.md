<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-07-01T10:07:03Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2zGjhc7g9cque94l3mSUrpzUnPp",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2zGjhc7g9cque94l3mSUrpzUnPp"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2zGjgAl9WZUjWPUcq6tekYHj5Sx",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2zGjgAl9WZUjWPUcq6tekYHj5Sx"
        },
        "enabled": true
      },
      "created_at": "2025-07-01T10:06:52Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2zGjg8Z13neb18abSFATRpQlqmS",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2zGjg8Z13neb18abSFATRpQlqmS"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
