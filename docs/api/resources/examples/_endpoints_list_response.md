<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-07-01T10:06:57Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2zGjgCbDIScw6Yyk8GZAYld7d59",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2zGjgCbDIScw6Yyk8GZAYld7d59"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2zGjgpUzgo1dJAK9yqm4xRgHl0V",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-07-01T10:06:57Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2zGjgpUzgo1dJAK9yqm4xRgHl0V",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-07-01T10:06:56Z",
      "hostport": "5193580746ed.ngrok.paid:443",
      "id": "ep_2zGjgkL0yPS6ziqBydHwTlyTa58",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2zGjeE8CJJTDJqSOhZhnH0xIQ1f",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://5193580746ed.ngrok.paid",
      "tunnel": {
        "id": "tn_2zGjgkL0yPS6ziqBydHwTlyTa58",
        "uri": "https://api.ngrok.com/tunnels/tn_2zGjgkL0yPS6ziqBydHwTlyTa58"
      },
      "tunnel_session": {
        "id": "ts_2zGjgWpWhURVbwLtdyJx4YR7U6V",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2zGjgWpWhURVbwLtdyJx4YR7U6V"
      },
      "type": "ephemeral",
      "updated_at": "2025-07-01T10:06:56Z",
      "upstream_url": "http://localhost:80",
      "url": "https://5193580746ed.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-07-01T10:06:53Z",
      "domain": {
        "id": "rd_2zGjgCbDIScw6Yyk8GZAYld7d59",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2zGjgCbDIScw6Yyk8GZAYld7d59"
      },
      "edge": {
        "id": "edgtls_2zGjg8Z13neb18abSFATRpQlqmS",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2zGjg8Z13neb18abSFATRpQlqmS"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2zGjg9Tcs9422mvlsAXTaGS1Ytr",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-07-01T10:06:53Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
