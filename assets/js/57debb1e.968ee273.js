"use strict";(self.webpackChunkfishjam_docs=self.webpackChunkfishjam_docs||[]).push([[8752],{50255:e=>{e.exports=JSON.parse('{"url":"https://raw.githubusercontent.com/fishjam-dev/fishjam/main/openapi.yaml","themeId":"theme-redoc","isSpecFile":false,"spec":{"components":{"responses":{},"schemas":{"PeerStatus":{"description":"Informs about the peer status","enum":["connected","disconnected"],"example":"disconnected","title":"PeerStatus","type":"string","x-struct":"Elixir.FishjamWeb.ApiSpec.Peer.Status"},"HealthReportStatus":{"description":"Informs about the status of Fishjam or a specific service","enum":["UP","DOWN"],"example":"UP","title":"HealthReportStatus","type":"string","x-struct":"Elixir.FishjamWeb.ApiSpec.HealthReport.Status"},"RoomDetailsResponse":{"description":"Response containing room details","properties":{"data":{"$ref":"#/components/schemas/Room"}},"required":["data"],"title":"RoomDetailsResponse","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.RoomDetailsResponse"},"ComponentOptionsRTSP":{"description":"Options specific to the RTSP component","properties":{"keepAliveInterval":{"default":15000,"description":"Interval (in ms) in which keep-alive RTSP messages will be sent to the remote stream source","minimum":0,"type":"integer"},"pierceNat":{"default":true,"description":"Whether to attempt to create client-side NAT binding by sending an empty datagram from client to source, after the completion of RTSP setup","type":"boolean"},"reconnectDelay":{"default":15000,"description":"Delay (in ms) between successive reconnect attempts","minimum":0,"type":"integer"},"rtpPort":{"default":20000,"description":"Local port RTP stream will be received at","maximum":65535,"minimum":1,"type":"integer"},"sourceUri":{"description":"URI of RTSP source stream","example":"rtsp://localhost:554/stream","type":"string"}},"required":["sourceUri"],"title":"ComponentOptionsRTSP","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.RTSP.Options"},"ComponentOptionsSIP":{"description":"Options specific to the SIP component","properties":{"registrarCredentials":{"description":"Credentials used to authorize in SIP Provider service","properties":{"address":{"description":"SIP provider address. Can be in the form of FQDN (my-sip-registrar.net) or IPv4 (1.2.3.4). Port can be specified e.g: 5.6.7.8:9999. If not given, the default SIP port `5060` will be assumed","example":"example.org","type":"string"},"password":{"description":"Password in SIP service provider","type":"string"},"username":{"description":"Username in SIP service provider","type":"string"}},"required":["address","username","password"],"title":"SIPCredentials","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.SIP.SIPCredentials"}},"required":["registrarCredentials"],"title":"ComponentOptionsSIP","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.SIP.Options"},"ComponentPropertiesHLS":{"description":"Properties specific to the HLS component","properties":{"lowLatency":{"description":"Whether the component uses LL-HLS","type":"boolean"},"persistent":{"description":"Whether the video is stored after end of stream","type":"boolean"},"playable":{"description":"Whether the generated HLS playlist is playable","type":"boolean"},"subscribeMode":{"description":"Whether the HLS component should subscribe to tracks automatically or manually","enum":["auto","manual"],"type":"string"},"targetWindowDuration":{"description":"Duration of stream available for viewer","nullable":true,"type":"integer"}},"required":["playable","lowLatency","persistent","targetWindowDuration","subscribeMode"],"title":"ComponentPropertiesHLS","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.HLS.Properties"},"Room":{"description":"Description of the room state","properties":{"components":{"description":"List of all components","items":{"$ref":"#/components/schemas/Component"},"type":"array"},"config":{"$ref":"#/components/schemas/RoomConfig"},"id":{"description":"Room ID","example":"room-1","type":"string"},"peers":{"description":"List of all peers","items":{"$ref":"#/components/schemas/Peer"},"type":"array"}},"required":["id","config","components","peers"],"title":"Room","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Room"},"ComponentOptionsRecording":{"description":"Options specific to the Recording component","properties":{"credentials":{"description":"Credentials to AWS S3 bucket.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/S3Credentials"}],"type":"object"},"pathPrefix":{"description":"Path prefix under which all recording are stored","nullable":true,"type":"string"},"subscribeMode":{"default":"auto","description":"Whether the Recording component should subscribe to tracks automatically or manually.","enum":["auto","manual"],"type":"string"}},"title":"ComponentOptionsRecording","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.Recording.Options"},"Component":{"description":"Describes component","discriminator":{"mapping":{"file":"#/components/schemas/ComponentFile","hls":"#/components/schemas/ComponentHLS","recording":"#/components/schemas/ComponentRecording","rtsp":"#/components/schemas/ComponentRTSP","sip":"#/components/schemas/ComponentSIP"},"propertyName":"type"},"oneOf":[{"$ref":"#/components/schemas/ComponentHLS"},{"$ref":"#/components/schemas/ComponentRTSP"},{"$ref":"#/components/schemas/ComponentFile"},{"$ref":"#/components/schemas/ComponentSIP"},{"$ref":"#/components/schemas/ComponentRecording"}],"title":"Component","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component"},"PeerOptionsWebRTC":{"description":"Options specific to the WebRTC peer","properties":{"enableSimulcast":{"default":true,"description":"Enables the peer to use simulcast","type":"boolean"}},"title":"PeerOptionsWebRTC","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Peer.WebRTC"},"HealthcheckResponse":{"description":"Response containing health report of Fishjam","properties":{"data":{"$ref":"#/components/schemas/HealthReport"}},"required":["data"],"title":"HealthcheckResponse","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.HealthcheckResponse"},"ComponentSIP":{"description":"Describes the SIP component","properties":{"id":{"description":"Assigned component ID","example":"component-1","type":"string"},"properties":{"$ref":"#/components/schemas/ComponentPropertiesSIP"},"tracks":{"description":"List of all component\'s tracks","items":{"$ref":"#/components/schemas/Track"},"type":"array"},"type":{"description":"Component type","example":"sip","type":"string"}},"required":["id","type","properties","tracks"],"title":"ComponentSIP","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.SIP"},"ComponentHLS":{"description":"Describes the HLS component","properties":{"id":{"description":"Assigned component ID","example":"component-1","type":"string"},"properties":{"$ref":"#/components/schemas/ComponentPropertiesHLS"},"tracks":{"description":"List of all component\'s tracks","items":{"$ref":"#/components/schemas/Track"},"type":"array"},"type":{"description":"Component type","example":"hls","type":"string"}},"required":["id","type","properties","tracks"],"title":"ComponentHLS","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.HLS"},"HlsSkip":{"description":"Set to \\"YES\\" if delta manifest should be requested","example":"YES","nullable":true,"title":"HlsSkip","type":"string","x-struct":"Elixir.FishjamWeb.ApiSpec.HLS.Params.HlsSkip"},"PeerMetadata":{"description":"Custom metadata set by the peer","example":{"name":"FishjamUser"},"nullable":true,"title":"PeerMetadata","x-struct":"Elixir.FishjamWeb.ApiSpec.Peer.PeerMetadata"},"ComponentPropertiesFile":{"description":"Properties specific to the File component","properties":{"filePath":{"description":"Relative path to track file. Must be either OPUS encapsulated in Ogg or raw h264","type":"string"},"framerate":{"description":"Framerate of video in a file. It is only valid for video track","example":30,"nullable":true,"type":"integer"}},"required":["filePath","framerate"],"title":"ComponentPropertiesFile","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.File.Properties"},"ComponentFile":{"description":"Describes the File component","properties":{"id":{"description":"Assigned component ID","example":"component-1","type":"string"},"properties":{"$ref":"#/components/schemas/ComponentPropertiesFile"},"tracks":{"description":"List of all component\'s tracks","items":{"$ref":"#/components/schemas/Track"},"type":"array"},"type":{"description":"Component type","example":"file","type":"string"}},"required":["id","type","tracks"],"title":"ComponentFile","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.File"},"SubscriptionConfig":{"description":"Subscription config","properties":{"origins":{"description":"List of peers and components ids whose tracks the HLS endpoint will subscribe to","items":{"type":"string"},"type":"array"}},"title":"SubscriptionConfig","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Subscription.Origins"},"HlsMsn":{"description":"Segment sequence number","example":10,"minimum":0,"nullable":true,"title":"HlsMsn","type":"integer","x-struct":"Elixir.FishjamWeb.ApiSpec.HLS.Params.HlsMsn"},"ComponentPropertiesRecording":{"description":"Properties specific to the Recording component","properties":{"subscribeMode":{"description":"Whether the Recording component should subscribe to tracks automatically or manually","enum":["auto","manual"],"type":"string"}},"required":["subscribeMode"],"title":"ComponentPropertiesRecording","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.Recording.Properties"},"DialConfig":{"description":"Dial config","properties":{"phoneNumber":{"description":"Phone number on which SIP Component will call","type":"string"}},"title":"DialConfig","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Dial.PhoneNumber"},"ComponentRTSP":{"description":"Describes the RTSP component","properties":{"id":{"description":"Assigned component ID","example":"component-1","type":"string"},"properties":{"$ref":"#/components/schemas/ComponentPropertiesRTSP"},"tracks":{"description":"List of all component\'s tracks","items":{"$ref":"#/components/schemas/Track"},"type":"array"},"type":{"description":"Component type","example":"hls","type":"string"}},"required":["id","type","properties","tracks"],"title":"ComponentRTSP","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.RTSP"},"HlsPart":{"description":"Partial segment sequence number","example":10,"minimum":0,"nullable":true,"title":"HlsPart","type":"integer","x-struct":"Elixir.FishjamWeb.ApiSpec.HLS.Params.HlsPart"},"WebsocketURL":{"description":"Websocket URL to which peer has to connect","example":"www.fishjam.org/socket/peer","title":"WebsocketURL","type":"string","x-struct":"Elixir.FishjamWeb.ApiSpec.Peer.WebSocketUrl"},"ComponentDetailsResponse":{"description":"Response containing component details","properties":{"data":{"$ref":"#/components/schemas/Component"}},"required":["data"],"title":"ComponentDetailsResponse","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.ComponentDetailsResponse"},"ComponentOptionsHLS":{"description":"Options specific to the HLS component","properties":{"lowLatency":{"default":false,"description":"Whether the component should use LL-HLS","type":"boolean"},"persistent":{"default":false,"description":"Whether the video is stored after end of stream","type":"boolean"},"s3":{"description":"Credentials to AWS S3 bucket.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/S3Credentials"}],"type":"object"},"subscribeMode":{"default":"auto","description":"Whether the HLS component should subscribe to tracks automatically or manually.","enum":["auto","manual"],"type":"string"},"targetWindowDuration":{"description":"Duration of stream available for viewer","nullable":true,"type":"integer"}},"title":"ComponentOptionsHLS","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.HLS.Options"},"SIPCredentials":{"description":"Credentials used to authorize in SIP Provider service","properties":{"address":{"description":"SIP provider address. Can be in the form of FQDN (my-sip-registrar.net) or IPv4 (1.2.3.4). Port can be specified e.g: 5.6.7.8:9999. If not given, the default SIP port `5060` will be assumed","example":"example.org","type":"string"},"password":{"description":"Password in SIP service provider","type":"string"},"username":{"description":"Username in SIP service provider","type":"string"}},"required":["address","username","password"],"title":"SIPCredentials","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.SIP.SIPCredentials"},"S3Credentials":{"description":"An AWS S3 credential that will be used to send HLS stream. The stream will only be uploaded if credentials are provided","properties":{"accessKeyId":{"description":"An AWS access key identifier, linked to your AWS account.","type":"string"},"bucket":{"description":"The name of the S3 bucket where your data will be stored.","type":"string"},"region":{"description":"The AWS region where your bucket is located.","type":"string"},"secretAccessKey":{"description":"The secret key that is linked to the Access Key ID.","type":"string"}},"required":["accessKeyId","secretAccessKey","region","bucket"],"title":"S3Credentials","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.HLS.S3"},"RecordingListResponse":{"description":"Response containing list of all recording","properties":{"data":{"items":{"type":"string"},"type":"array"}},"required":["data"],"title":"RecordingListResponse","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.RecordingListResponse"},"ComponentOptions":{"description":"Component-specific options","oneOf":[{"$ref":"#/components/schemas/ComponentOptionsHLS"},{"$ref":"#/components/schemas/ComponentOptionsRTSP"},{"$ref":"#/components/schemas/ComponentOptionsFile"},{"$ref":"#/components/schemas/ComponentOptionsSIP"},{"$ref":"#/components/schemas/ComponentOptionsRecording"}],"title":"ComponentOptions","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.Options"},"Track":{"description":"Describes media track of a Peer or Component","properties":{"id":{"type":"string"},"metadata":{"nullable":true},"type":{"enum":["audio","video"],"type":"string"}},"title":"Track","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Track"},"HealthReportDistribution":{"description":"Informs about the status of Fishjam distribution","properties":{"enabled":{"description":"Whether distribution is enabled on this Fishjam","type":"boolean"},"nodeStatus":{"$ref":"#/components/schemas/HealthReportStatus"},"nodesInCluster":{"description":"Amount of nodes (including this Fishjam\'s node) in the distribution cluster","type":"integer"}},"required":["nodeStatus","nodesInCluster"],"title":"HealthReportDistribution","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.HealthReport.Distribution"},"ComponentPropertiesRTSP":{"description":"Properties specific to the RTSP component","properties":{"keepAliveInterval":{"description":"Interval (in ms) in which keep-alive RTSP messages will be sent to the remote stream source","type":"integer"},"pierceNat":{"description":"Whether to attempt to create client-side NAT binding by sending an empty datagram from client to source, after the completion of RTSP setup","type":"boolean"},"reconnectDelay":{"description":"Delay (in ms) between successive reconnect attempts","type":"integer"},"rtpPort":{"description":"Local port RTP stream will be received at","type":"integer"},"sourceUri":{"description":"URI of RTSP source stream","type":"string"}},"required":["sourceUri","rtpPort","reconnectDelay","keepAliveInterval","pierceNat"],"title":"ComponentPropertiesRTSP","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.RTSP.Properties"},"PeerOptions":{"description":"Peer-specific options","oneOf":[{"$ref":"#/components/schemas/PeerOptionsWebRTC"}],"title":"PeerOptions","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Peer.Options"},"HealthReport":{"description":"Describes overall Fishjam health","properties":{"distribution":{"$ref":"#/components/schemas/HealthReportDistribution"},"gitCommit":{"description":"Commit hash of the build","type":"string"},"status":{"$ref":"#/components/schemas/HealthReportStatus"},"uptime":{"description":"Uptime of Fishjam (in seconds)","type":"integer"},"version":{"description":"Version of Fishjam","type":"string"}},"required":["status","uptime","distribution","version","gitCommit"],"title":"HealthReport","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.HealthReport"},"Peer":{"description":"Describes peer status","properties":{"id":{"description":"Assigned peer id","example":"peer-1","type":"string"},"metadata":{"$ref":"#/components/schemas/PeerMetadata"},"status":{"$ref":"#/components/schemas/PeerStatus"},"tracks":{"description":"List of all peer\'s tracks","items":{"$ref":"#/components/schemas/Track"},"type":"array"},"type":{"$ref":"#/components/schemas/PeerType"}},"required":["id","type","status","tracks","metadata"],"title":"Peer","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Peer"},"ComponentType":{"description":"Component type","example":"hls","title":"ComponentType","type":"string","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.Type"},"AuthToken":{"description":"Token for authorizing websocket connection","example":"5cdac726-57a3-4ecb-b1d5-72a3d62ec242","title":"AuthToken","type":"string","x-struct":"Elixir.FishjamWeb.ApiSpec.Peer.Token"},"RoomsListingResponse":{"description":"Response containing list of all rooms","properties":{"data":{"items":{"$ref":"#/components/schemas/Room"},"type":"array"}},"required":["data"],"title":"RoomsListingResponse","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.RoomsListingResponse"},"ComponentPropertiesSIP":{"description":"Properties specific to the SIP component","properties":{"registrarCredentials":{"description":"Credentials used to authorize in SIP Provider service","properties":{"address":{"description":"SIP provider address. Can be in the form of FQDN (my-sip-registrar.net) or IPv4 (1.2.3.4). Port can be specified e.g: 5.6.7.8:9999. If not given, the default SIP port `5060` will be assumed","example":"example.org","type":"string"},"password":{"description":"Password in SIP service provider","type":"string"},"username":{"description":"Username in SIP service provider","type":"string"}},"required":["address","username","password"],"title":"SIPCredentials","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.SIP.SIPCredentials"}},"required":["registrarCredentials"],"title":"ComponentPropertiesSIP","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.SIP.Properties"},"PeerDetailsResponse":{"description":"Response containing peer details and their token","properties":{"data":{"properties":{"peer":{"$ref":"#/components/schemas/Peer"},"peer_websocket_url":{"$ref":"#/components/schemas/WebsocketURL"},"token":{"$ref":"#/components/schemas/AuthToken"}},"required":["peer","token"],"type":"object"}},"required":["data"],"title":"PeerDetailsResponse","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.PeerDetailsResponse"},"HlsResponse":{"description":"Requested file","title":"HlsResponse","type":"string","x-struct":"Elixir.FishjamWeb.ApiSpec.HLS.Response"},"ComponentRecording":{"description":"Describes the Recording component","properties":{"id":{"description":"Assigned component ID","example":"component-1","type":"string"},"properties":{"$ref":"#/components/schemas/ComponentPropertiesRecording"},"tracks":{"description":"List of all component\'s tracks","items":{"$ref":"#/components/schemas/Track"},"type":"array"},"type":{"description":"Component type","example":"recording","type":"string"}},"required":["id","type","properties","tracks"],"title":"ComponentRecording","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.Recording"},"PeerType":{"description":"Peer type","example":"webrtc","title":"PeerType","type":"string","x-struct":"Elixir.FishjamWeb.ApiSpec.Peer.Type"},"RoomCreateDetailsResponse":{"description":"Response containing room details","properties":{"data":{"properties":{"fishjam_address":{"description":"Fishjam instance address where the room was created. This might be different than the address of Fishjam where the request was sent only when running a cluster of Fishjams.","example":"fishjam1:5003","type":"string"},"room":{"$ref":"#/components/schemas/Room"}},"required":["room","fishjam_address"],"type":"object"}},"required":["data"],"title":"RoomCreateDetailsResponse","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.RoomCreateDetailsResponse"},"ComponentOptionsFile":{"description":"Options specific to the File component","properties":{"filePath":{"description":"Path to track file. Must be either OPUS encapsulated in Ogg or raw h264","example":"/root/video.h264","type":"string"},"framerate":{"description":"Framerate of video in a file. It is only valid for video track","example":30,"nullable":true,"type":"integer"}},"required":["filePath"],"title":"ComponentOptionsFile","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Component.File.Options"},"Error":{"description":"Error message","properties":{"errors":{"description":"Error details","example":"Token has expired","type":"string"}},"required":["errors"],"title":"Error","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Error"},"RoomConfig":{"description":"Room configuration","properties":{"maxPeers":{"description":"Maximum amount of peers allowed into the room","example":10,"minimum":1,"nullable":true,"type":"integer"},"peerDisconnectedTimeout":{"description":"Duration (in seconds) after which the peer will be removed if it is disconnected. If not provided, this feature is disabled.","example":60,"minimum":1,"nullable":true,"type":"integer"},"peerlessPurgeTimeout":{"description":"Duration (in seconds) after which the room will be removed if no peers are connected. If not provided, this feature is disabled.","example":60,"minimum":1,"nullable":true,"type":"integer"},"roomId":{"description":"Custom id used for identifying room within Fishjam. Must be unique across all rooms. If not provided, random UUID is generated.","nullable":true,"type":"string"},"videoCodec":{"description":"Enforces video codec for each peer in the room","enum":["h264","vp8"],"nullable":true,"type":"string"},"webhookUrl":{"description":"URL where Fishjam notifications will be sent","example":"https://backend.address.com/fishjam-notifications-endpoint","nullable":true,"type":"string"}},"title":"RoomConfig","type":"object","x-struct":"Elixir.FishjamWeb.ApiSpec.Room.Config"}},"securitySchemes":{"authorization":{"scheme":"bearer","type":"http"}}},"info":{"license":{"name":"Apache 2.0","url":"https://www.apache.org/licenses/LICENSE-2.0"},"title":"Fishjam Media Server","version":"0.6.1"},"openapi":"3.0.0","paths":{"/health":{"get":{"callbacks":{},"operationId":"healthcheck","parameters":[],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/HealthcheckResponse"}}},"description":"Healthy"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"}},"security":[{"authorization":[]}],"summary":"Describes the health of Fishjam","tags":["health"]}},"/hls/{room_id}/{filename}":{"get":{"callbacks":{},"operationId":"getHlsContent","parameters":[{"description":"Room id","in":"path","name":"room_id","required":true,"schema":{"type":"string"}},{"description":"Name of the file","in":"path","name":"filename","required":true,"schema":{"type":"string"}},{"description":"Byte range of partial segment","in":"header","name":"range","required":false,"schema":{"type":"string"}},{"description":"Segment sequence number","in":"query","name":"_HLS_msn","required":false,"schema":{"$ref":"#/components/schemas/HlsMsn"}},{"description":"Partial segment sequence number","in":"query","name":"_HLS_part","required":false,"schema":{"$ref":"#/components/schemas/HlsPart"}},{"description":"Is delta manifest requested","in":"query","name":"_HLS_skip","required":false,"schema":{"$ref":"#/components/schemas/HlsSkip"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/HlsResponse"}}},"description":"File was found"},"400":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Invalid filename"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"File not found"}},"summary":"Retrieve HLS Content","tags":["hls"]}},"/recording":{"get":{"callbacks":{},"operationId":"get_recordings","parameters":[],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RecordingListResponse"}}},"description":"Success"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unable to obtain recordings"}},"security":[{"authorization":[]}],"summary":"Lists all available recordings","tags":["recording"]}},"/recording/{recording_id}":{"delete":{"callbacks":{},"operationId":"delete_recording","parameters":[{"description":"Recording id","in":"path","name":"recording_id","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Successfully deleted recording"},"400":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Invalid recording"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Recording doesn\'t exist"}},"security":[{"authorization":[]}],"summary":"Deletes the recording","tags":["recording"]}},"/recording/{recording_id}/{filename}":{"get":{"callbacks":{},"operationId":"getRecordingContent","parameters":[{"description":"Recording id","in":"path","name":"recording_id","required":true,"schema":{"type":"string"}},{"description":"Name of the file","in":"path","name":"filename","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/HlsResponse"}}},"description":"File was found"},"400":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Invalid request"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"File not found"}},"summary":"Retrieve Recording (HLS) Content","tags":["recording"]}},"/room":{"get":{"callbacks":{},"operationId":"get_all_rooms","parameters":[],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RoomsListingResponse"}}},"description":"Success"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"}},"security":[{"authorization":[]}],"summary":"Show information about all rooms","tags":["room"]},"post":{"callbacks":{},"operationId":"create_room","parameters":[],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RoomConfig"}}},"description":"Room configuration","required":false},"responses":{"201":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RoomCreateDetailsResponse"}}},"description":"Room successfully created"},"400":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Invalid request structure"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"}},"security":[{"authorization":[]}],"summary":"Creates a room","tags":["room"]}},"/room/{room_id}":{"delete":{"callbacks":{},"operationId":"delete_room","parameters":[{"description":"Room id","in":"path","name":"room_id","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Successfully deleted room"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Room doesn\'t exist"}},"security":[{"authorization":[]}],"summary":"Delete the room","tags":["room"]},"get":{"callbacks":{},"operationId":"get_room","parameters":[{"description":"Room ID","in":"path","name":"room_id","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RoomDetailsResponse"}}},"description":"Success"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Room doesn\'t exist"}},"security":[{"authorization":[]}],"summary":"Shows information about the room","tags":["room"]}},"/room/{room_id}/component":{"post":{"callbacks":{},"operationId":"add_component","parameters":[{"description":"Room ID","in":"path","name":"room_id","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"properties":{"options":{"$ref":"#/components/schemas/ComponentOptions"},"type":{"$ref":"#/components/schemas/ComponentType"}},"required":["type"],"type":"object"}}},"description":"Component config","required":false},"responses":{"201":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ComponentDetailsResponse"}}},"description":"Successfully added component"},"400":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Invalid request"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Room doesn\'t exist"}},"security":[{"authorization":[]}],"summary":"Creates the component and adds it to the room","tags":["room"]}},"/room/{room_id}/component/{component_id}/subscribe":{"post":{"callbacks":{},"operationId":"subscribe_to","parameters":[{"description":"Room ID","in":"path","name":"room_id","required":true,"schema":{"type":"string"}},{"description":"Component ID","in":"path","name":"component_id","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SubscriptionConfig"}}},"description":"Subscribe configuration","required":false},"responses":{"201":{"description":"Tracks succesfully added."},"400":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Invalid request structure"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Room doesn\'t exist"}},"security":[{"authorization":[]}],"summary":"Subscribe component to the tracks of peers or components","tags":["room"]}},"/room/{room_id}/component/{id}":{"delete":{"callbacks":{},"operationId":"delete_component","parameters":[{"description":"Room ID","in":"path","name":"room_id","required":true,"schema":{"type":"string"}},{"description":"Component ID","in":"path","name":"id","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Successfully deleted"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Either component or the room doesn\'t exist"}},"security":[{"authorization":[]}],"summary":"Delete the component from the room","tags":["room"]}},"/room/{room_id}/peer":{"post":{"callbacks":{},"operationId":"add_peer","parameters":[{"description":"Room id","in":"path","name":"room_id","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"properties":{"options":{"$ref":"#/components/schemas/PeerOptions"},"type":{"$ref":"#/components/schemas/PeerType"}},"required":["type","options"],"type":"object"}}},"description":"Peer specification","required":false},"responses":{"201":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PeerDetailsResponse"}}},"description":"Peer successfully created"},"400":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Invalid request body structure"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Room doesn\'t exist"},"503":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Peer limit has been reached"}},"security":[{"authorization":[]}],"summary":"Create peer","tags":["room"]}},"/room/{room_id}/peer/{id}":{"delete":{"callbacks":{},"operationId":"delete_peer","parameters":[{"description":"Room ID","in":"path","name":"room_id","required":true,"schema":{"type":"string"}},{"description":"Peer id","in":"path","name":"id","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"Peer successfully deleted"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Room ID or Peer ID references a resource that doesn\'t exist"}},"security":[{"authorization":[]}],"summary":"Delete peer","tags":["room"]}},"/sip/{room_id}/{component_id}/call":{"delete":{"callbacks":{},"operationId":"end_call","parameters":[{"description":"Room ID","in":"path","name":"room_id","required":true,"schema":{"type":"string"}},{"description":"SIP Component ID","in":"path","name":"component_id","required":true,"schema":{"type":"string"}}],"responses":{"201":{"description":"Call ended"},"400":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Invalid request structure"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Room doesn\'t exist"}},"security":[{"authorization":[]}],"summary":"Finish call made by SIP component","tags":["sip"]},"post":{"callbacks":{},"operationId":"dial","parameters":[{"description":"Room ID","in":"path","name":"room_id","required":true,"schema":{"type":"string"}},{"description":"SIP Component ID","in":"path","name":"component_id","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DialConfig"}}},"description":"Phone Number configuration","required":false},"responses":{"201":{"description":"Call started"},"400":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Invalid request structure"},"401":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Unauthorized"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}},"description":"Room doesn\'t exist"}},"security":[{"authorization":[]}],"summary":"Make a call from the SIP component to the provided phone number","tags":["sip"]}}},"security":[],"servers":[],"tags":[]}}')}}]);