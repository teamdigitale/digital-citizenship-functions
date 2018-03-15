// tslint:disable:object-literal-sort-keys

// DO NOT EDIT
// auto-generated by generated_model.ts from public_api_v1.yaml

export const specs = {
  swagger: "2.0",
  info: {
    version: "0.0.2",
    title: "Digital Citizenship API",
    description: "Digital Citizenship API."
  },
  basePath: "/api/v1",
  schemes: ["https"],
  security: [{ SubscriptionKey: [] }],
  paths: {
    "/services/{service_id}": {
      parameters: [
        {
          name: "service_id",
          in: "path",
          type: "string",
          required: true,
          description: "The ID of an existing Service."
        }
      ],
      get: {
        operationId: "getService",
        summary: "Get Service",
        description:
          "A previously created service with the provided service ID is returned.",
        responses: {
          "200": {
            description: "Service found.",
            schema: { $ref: "#/definitions/ServicePublic" },
            examples: {
              "application/json": {
                department_name: "dept",
                organization_name: "org",
                service_id: "2b3e728c1a5d1efa035c",
                service_name: "service",
                version: 1
              }
            }
          },
          "404": { description: "No service found for the provided ID." }
        },
        parameters: []
      }
    },
    "/messages/{fiscal_code}/{id}": {
      parameters: [
        { $ref: "#/parameters/FiscalCode" },
        {
          name: "id",
          in: "path",
          type: "string",
          required: true,
          description: "The ID of the message."
        }
      ],
      get: {
        operationId: "getMessage",
        summary: "Get Message",
        description:
          "The previously created message with the provided message ID is returned.",
        responses: {
          "200": {
            description: "Message found.",
            schema: { $ref: "#/definitions/MessageResponseWithContent" },
            examples: {
              "application/json": {
                message: {
                  id: "01BX9NSMKAAAS5PSP2FATZM6BQ",
                  fiscal_code: "QXJNTX9RCRVD6V4O",
                  time_to_live: 3600,
                  content: {
                    subject: "message subject, aliquip sint nulla in estinut",
                    markdown:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et mollis felis. Vivamus orci nisl, commodo ut sodales ut, eleifend a libero. Donec dapibus, turpis in mattis tempor, risus nunc malesuada ex, non aliquet metus nunc a lacus. Aenean in arcu vitae nisl porta fermentum nec non nibh. Phasellus tortor tellus, semper in metus eget, eleifend laoreet nibh. Aenean feugiat lectus ut nisl eleifend gravida."
                  },
                  sender_service_id: "01BX9NSMKVXXS5PSP2FATZM6QX"
                },
                notification: { email: "QUEUED" }
              }
            }
          },
          "404": {
            description: "No message found for the provided ID.",
            schema: { $ref: "#/definitions/ProblemJson" }
          }
        }
      }
    },
    "/messages/{fiscal_code}": {
      parameters: [{ $ref: "#/parameters/FiscalCode" }],
      get: {
        operationId: "getMessagesByUser",
        summary: "Get messages by user",
        description:
          'Returns the messages for the user identified by the provided fiscal code.\nMessages will be returned in inverse acceptance order (from last to first).\nThe "next" field, when present, contains an URL pointing to the next page of results.',
        responses: {
          "200": {
            description: "Found.",
            schema: {
              allOf: [
                {
                  type: "object",
                  properties: {
                    items: {
                      type: "array",
                      items: {
                        $ref: "#/definitions/CreatedMessageWithoutContent"
                      }
                    }
                  }
                },
                { $ref: "#/definitions/PaginationResponse" }
              ]
            },
            examples: {
              "application/json": {
                items: [
                  {
                    id: "01BX9NSMKVXXS5PSP2FATZMYYY",
                    fiscal_code: "PUPFHK4TD3MWL20W",
                    time_to_live: 3600,
                    content: {
                      subject: "amet sunt dolor nulla esseesseanim",
                      markdown:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et mollis felis. Vivamus orci nisl, commodo ut sodales ut, eleifend a libero. Donec dapibus, turpis in mattis tempor, risus nunc malesuada ex, non aliquet metus nunc a lacus. Aenean in arcu vitae nisl porta fermentum nec non nibh. Phasellus tortor tellus, semper in metus eget, eleifend laoreet nibh. Aenean feugiat lectus ut nisl eleifend gravida."
                    },
                    sender_service_id: "01BX9NSMKVXXS5PSP2FATZMZZZ"
                  },
                  {
                    id: "01BX9NSMKVXXS5PSP2FATZM123",
                    fiscal_code: "PKTINH4QDQUV696L",
                    time_to_live: 3600,
                    content: {
                      subject: "idUt quis tempor esseesseanim",
                      markdown:
                        "Nullam dapibus metus sed elementum efficitur. Curabitur facilisis sagittis risus nec sodales. Vestibulum in eros sapien. Donec ac odio sit amet dui semper ornare eget nec odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nibh ex, mattis sit amet felis id, sodales euismod velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    sender_service_id: "01BX9NSMKVXXS5PSP2FATZMWWW"
                  }
                ],
                page_size: 2,
                next: "https://example.com/next"
              }
            }
          },
          "404": {
            description: "No message found.",
            schema: { $ref: "#/definitions/ProblemJson" }
          }
        },
        parameters: [{ $ref: "#/parameters/PaginationRequest" }]
      },
      post: {
        operationId: "submitMessageforUser",
        summary: "Submit a message",
        description:
          "Submits a message to a user.\nOn error, the reason is returned in the response payload.",
        parameters: [
          {
            name: "message",
            in: "body",
            schema: { $ref: "#/definitions/NewMessage" },
            "x-examples": {
              "application/json": {
                time_to_live: 3600,
                content: {
                  subject: "ipsum labore deserunt fugiat",
                  markdown:
                    "Nullam dapibus metus sed elementum efficitur. Curabitur facilisis sagittis risus nec sodales. Vestibulum in eros sapien. Donec ac odio sit amet dui semper ornare eget nec odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nibh ex, mattis sit amet felis id, sodales euismod velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              }
            }
          }
        ],
        responses: {
          "201": {
            description: "Message created.",
            headers: {
              Location: {
                type: "string",
                description:
                  "Location (URL) of created message resource.\nA GET request to this URL returns the message status and details."
              }
            },
            examples: {
              "application/json": { id: "01BX9NSMKVXXS5PSP2FATZMYYY" }
            }
          },
          "400": {
            description: "Invalid payload.",
            schema: { $ref: "#/definitions/ProblemJson" },
            examples: {}
          },
          "500": {
            description: "The message cannot be delivered.",
            schema: { $ref: "#/definitions/ProblemJson" }
          }
        }
      }
    },
    "/profiles/{fiscal_code}": {
      get: {
        operationId: "getProfile",
        summary: "Get User's Preferences",
        description:
          "Returns the preferences for the user identified by the provided fiscal code.",
        responses: {
          "200": {
            description: "Found.",
            schema: {
              allOf: [
                { $ref: "#/definitions/LimitedProfile" },
                { $ref: "#/definitions/ExtendedProfile" }
              ]
            },
            examples: {
              "application/json": { email: "foobar@example.com", version: 1 }
            }
          },
          "404": {
            description: "No user found for the provided fiscal code.",
            schema: { $ref: "#/definitions/ProblemJson" }
          }
        }
      },
      parameters: [{ $ref: "#/parameters/FiscalCode" }],
      post: {
        responses: {
          "200": {
            description: "Profile updated.",
            schema: {
              allOf: [
                { $ref: "#/definitions/LimitedProfile" },
                { $ref: "#/definitions/ExtendedProfile" }
              ]
            },
            examples: {
              "application/json": { email: "foobar@example.com", version: 0 }
            }
          },
          "400": {
            description: "Invalid payload.",
            schema: { $ref: "#/definitions/ProblemJson" }
          },
          "500": {
            description: "Profile cannot be updated.",
            schema: { $ref: "#/definitions/ProblemJson" }
          }
        },
        description:
          "Create or update the preferences for the user identified by the provided fiscal code.",
        operationId: "upsertProfile",
        summary: "Set User's Preferences",
        parameters: [
          {
            in: "body",
            name: "body",
            schema: { $ref: "#/definitions/ExtendedProfile" },
            "x-examples": {
              "application/json": { email: "foobar@example.com" }
            }
          }
        ]
      }
    },
    "/info": {
      get: {
        operationId: "getInfo",
        responses: {
          "200": {
            description: "Returns success if the API-Key is right.",
            schema: { type: "object", properties: {} }
          },
          "401": {
            description:
              "Returns unauthorized when the API-key if empty or wrong."
          }
        },
        description:
          "An endpoint to test authenticated access to the API backend.",
        summary: "API test endpoint"
      }
    }
  },
  definitions: {
    ProblemJson: {
      type: "object",
      properties: {
        type: {
          type: "string",
          format: "uri",
          description:
            "An absolute URI that identifies the problem type. When dereferenced,\nit SHOULD provide human-readable documentation for the problem type\n(e.g., using HTML).\n",
          default: "about:blank",
          example: "https://example.com/problem/constraint-violation"
        },
        title: {
          type: "string",
          description:
            "A short, summary of the problem type. Written in english and readable\nfor engineers (usually not suited for non technical stakeholders and\nnot localized); example: Service Unavailable\n"
        },
        status: { $ref: "#/definitions/HttpStatusCode" },
        detail: {
          type: "string",
          description:
            "A human readable explanation specific to this occurrence of the\nproblem.\n",
          example: "There was an error processing the request"
        },
        instance: {
          type: "string",
          format: "uri",
          description:
            "An absolute URI that identifies the specific occurrence of the problem.\nIt may or may not yield further information if dereferenced."
        }
      }
    },
    NotificationChannel: {
      type: "string",
      "x-extensible-enum": ["EMAIL"],
      example: "EMAIL"
    },
    NotificationChannelStatusValue: {
      type: "string",
      "x-extensible-enum": ["QUEUED", "SENT_TO_CHANNEL", "EXPIRED", "FAILED"],
      example: "SENT_TO_CHANNEL"
    },
    NotificationChannelStatus: {
      type: "object",
      properties: {
        channel: { $ref: "#/definitions/NotificationChannel" },
        status: { $ref: "#/definitions/NotificationChannelStatusValue" },
        updateAt: { $ref: "#/definitions/Timestamp" }
      },
      required: ["channel", "status", "updateAt"]
    },
    MessageContent: {
      type: "object",
      properties: {
        subject: { $ref: "#/definitions/MessageSubject" },
        markdown: { $ref: "#/definitions/MessageBodyMarkdown" }
      },
      required: ["markdown"]
    },
    NewMessage: {
      type: "object",
      properties: {
        time_to_live: { $ref: "#/definitions/TimeToLiveSeconds" },
        content: { $ref: "#/definitions/MessageContent" },
        default_addresses: { $ref: "#/definitions/NewMessageDefaultAddresses" }
      },
      required: ["content"]
    },
    MessageStatusValue: {
      type: "string",
      "x-extensible-enum": ["PROCESSING", "ACCEPTED", "FAILED"],
      example: "ACCEPTED"
    },
    MessageStatus: {
      type: "object",
      properties: {
        status: { $ref: "#/definitions/MessageStatusValue" },
        updateAt: { $ref: "#/definitions/Timestamp" }
      }
    },
    CreatedMessageWithContent: {
      type: "object",
      properties: {
        id: { type: "string" },
        fiscal_code: { $ref: "#/definitions/FiscalCode" },
        time_to_live: { $ref: "#/definitions/TimeToLiveSeconds" },
        content: { $ref: "#/definitions/MessageContent" },
        sender_service_id: { type: "string" }
      },
      required: ["fiscal_code", "sender_service_id"]
    },
    CreatedMessageWithoutContent: {
      type: "object",
      properties: {
        id: { type: "string" },
        fiscal_code: { $ref: "#/definitions/FiscalCode" },
        time_to_live: { $ref: "#/definitions/TimeToLiveSeconds" },
        sender_service_id: { type: "string" }
      },
      required: ["fiscal_code", "sender_service_id"]
    },
    MessageResponseNotificationStatus: {
      type: "object",
      properties: {
        email: { $ref: "#/definitions/NotificationChannelStatusValue" }
      }
    },
    MessageResponseWithContent: {
      type: "object",
      properties: {
        message: { $ref: "#/definitions/CreatedMessageWithContent" },
        notification: {
          $ref: "#/definitions/MessageResponseNotificationStatus"
        }
      },
      required: ["message"]
    },
    MessageResponseWithoutContent: {
      type: "object",
      properties: {
        message: { $ref: "#/definitions/CreatedMessageWithoutContent" },
        notification: {
          $ref: "#/definitions/MessageResponseNotificationStatus"
        }
      },
      required: ["message"]
    },
    FiscalCode: {
      type: "string",
      description: "User's fiscal code.",
      pattern:
        "^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST][0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{3}[A-Z]$",
      example: "SPNDNL80R13C555X"
    },
    MessageSubject: {
      type: "string",
      description:
        "The (optional) subject of the message - note that only some notification\nchannels support the display of a subject. When a subject is not provided,\none gets generated from the client attributes.",
      minLength: 10,
      maxLength: 120,
      example: "Welcome new user !"
    },
    MessageBodyMarkdown: {
      type: "string",
      description:
        "The full version of the message, in plain text or Markdown format. The\ncontent of this field will be delivered to channels that don't have any\nlimit in terms of content size (e.g. email, etc...).",
      minLength: 80,
      maxLength: 10000,
      example:
        "# This is a markdown header\n\nto show how easily markdown can be converted to **HTML**\n\nRemember: this has to be a long text."
    },
    PaginationResponse: {
      type: "object",
      description: "Pagination response parameters.",
      properties: {
        page_size: {
          type: "integer",
          minimum: 1,
          description: "Number of items returned for each page.",
          example: 2
        },
        next: {
          type: "string",
          description:
            "Contains an URL to GET the next #<page_size> results in the retrieved collection of items.",
          format: "uri",
          example: "https://example.com/?p=0XXX2"
        }
      }
    },
    LimitedProfile: {
      description:
        "Describes the citizen's profile, mostly interesting for preferences attributes.",
      type: "object",
      properties: {
        preferred_languages: { $ref: "#/definitions/PreferredLanguages" }
      }
    },
    ExtendedProfile: {
      description:
        "Describes the citizen's profile, mostly interesting for preferences attributes.",
      type: "object",
      properties: {
        email: { $ref: "#/definitions/EmailAddress" },
        preferred_languages: { $ref: "#/definitions/PreferredLanguages" },
        is_inbox_enabled: { $ref: "#/definitions/IsInboxEnabled" },
        version: { type: "integer" }
      }
    },
    IsInboxEnabled: {
      type: "boolean",
      default: false,
      description:
        "True if the recipient of a message wants to store its content for later retrieval."
    },
    TimeToLiveSeconds: {
      type: "integer",
      default: 3600,
      minimum: 3600,
      maximum: 604800,
      description:
        "This parameter specifies for how long (in seconds) the system will try to deliver the message to the channels configured by the user.",
      example: 3600
    },
    HttpStatusCode: {
      type: "integer",
      format: "int32",
      description:
        "The HTTP status code generated by the origin server for this occurrence\nof the problem.\n",
      minimum: 100,
      maximum: 600,
      exclusiveMaximum: true,
      example: 200
    },
    NewMessageDefaultAddresses: {
      type: "object",
      description:
        "Default addresses for notifying the recipient of the message in case no address for the related channel is set in his profile.",
      properties: { email: { $ref: "#/definitions/EmailAddress" } }
    },
    EmailAddress: {
      type: "string",
      format: "email",
      example: "foobar@example.com"
    },
    PreferredLanguage: {
      type: "string",
      "x-extensible-enum": ["it_IT", "en_GB", "es_ES", "de_DE", "fr_FR"],
      example: "it_IT"
    },
    PreferredLanguages: {
      type: "array",
      items: { $ref: "#/definitions/PreferredLanguage" },
      description:
        "Indicates the User's preferred written or spoken languages in order of preference. Generally used for selecting a localized User interface. Valid values are concatenation of the ISO 639-1 two letter language code, an underscore, and the ISO 3166-1 2 letter country code; e.g., 'en_US' specifies the language English and country US."
    },
    Service: {
      description: "A Service tied to an user's subscription.",
      type: "object",
      properties: {
        service_id: { $ref: "#/definitions/ServiceId" },
        service_name: { $ref: "#/definitions/ServiceName" },
        organization_name: { $ref: "#/definitions/OrganizationName" },
        department_name: { $ref: "#/definitions/DepartmentName" },
        authorized_cidrs: {
          type: "array",
          items: { $ref: "#/definitions/CIDR" }
        },
        authorized_recipients: {
          type: "array",
          items: { $ref: "#/definitions/FiscalCode" }
        },
        version: { type: "integer" },
        id: { type: "string" }
      },
      required: [
        "service_id",
        "service_name",
        "organization_name",
        "department_name",
        "authorized_cidrs",
        "authorized_recipients"
      ]
    },
    ServicePublic: {
      title: "Service (public)",
      description: "A Service associated to an user's subscription.",
      type: "object",
      properties: {
        service_id: { $ref: "#/definitions/ServiceId" },
        service_name: { $ref: "#/definitions/ServiceName" },
        organization_name: { $ref: "#/definitions/OrganizationName" },
        department_name: { $ref: "#/definitions/DepartmentName" },
        version: { type: "integer" }
      },
      required: [
        "service_id",
        "service_name",
        "organization_name",
        "department_name"
      ]
    },
    ServiceId: {
      type: "string",
      description:
        "The ID of the Service. Equals the subscriptionId of a registered API user.",
      minLength: 1
    },
    ServiceName: {
      type: "string",
      description:
        "The name of the service. Will be added to the content of sent messages.",
      minLength: 1
    },
    OrganizationName: {
      type: "string",
      description:
        "The organizazione that runs the service. Will be added to the content of sent messages to identify the sender.",
      minLength: 1
    },
    DepartmentName: {
      type: "string",
      description:
        "The departmenet inside the organization that runs the service. Will be added to the content of sent messages.",
      minLength: 1
    },
    CIDR: {
      type: "string",
      description: "Describes a single IP or a range of IPs.",
      pattern: "([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?"
    },
    Timestamp: {
      type: "string",
      format: "date-time",
      description: "A date-time field in ISO-8601 format"
    }
  },
  responses: {},
  parameters: {
    PaginationRequest: {
      name: "cursor",
      in: "query",
      type: "string",
      minimum: 1,
      description:
        "An opaque identifier that points to the next item in the collection.",
      "x-example": "01BX9NSMKVXXS5PSP2FATZM123"
    },
    FiscalCode: {
      name: "fiscal_code",
      in: "path",
      type: "string",
      maxLength: 16,
      minLength: 16,
      required: true,
      description: "The fiscal code of the user, all upper case.",
      pattern:
        "[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST][0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{3}[A-Z]",
      "x-example": "SPNDNL80R13C555X"
    }
  },
  consumes: ["application/json"],
  produces: ["application/json"],
  securityDefinitions: {
    SubscriptionKey: {
      type: "apiKey",
      name: "Ocp-Apim-Subscription-Key",
      in: "header",
      description: "The API key obtained through the developer portal."
    }
  }
};
