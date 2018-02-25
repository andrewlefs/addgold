
/** access_token indexes **/
db.getCollection("access_token").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** accounts indexes **/
db.getCollection("accounts").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** accounts indexes **/
db.getCollection("accounts").ensureIndex({
  "account_id": NumberInt(1)
},{
  "unique": true
});

/** accounts indexes **/
db.getCollection("accounts").ensureIndex({
  "account": NumberInt(1)
},{
  "unique": true
});

/** accounts indexes **/
db.getCollection("accounts").ensureIndex({
  "email": NumberInt(1)
},{
  "unique": true
});

/** activity indexes **/
db.getCollection("activity").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** app indexes **/
db.getCollection("app").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** msi_service_10000 indexes **/
db.getCollection("msi_service_10000").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** msi_service_10001 indexes **/
db.getCollection("msi_service_10001").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** msi_service_10003 indexes **/
db.getCollection("msi_service_10003").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** msi_service_10004 indexes **/
db.getCollection("msi_service_10004").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** quick_account indexes **/
db.getCollection("quick_account").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** quick_account indexes **/
db.getCollection("quick_account").ensureIndex({
  "account_id": NumberInt(1)
},{
  "unique": true
});

/** quick_account indexes **/
db.getCollection("quick_account").ensureIndex({
  "device_id": NumberInt(1)
},{
  "unique": true
});

/** social_facebook indexes **/
db.getCollection("social_facebook").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** social_facebook indexes **/
db.getCollection("social_facebook").ensureIndex({
  "facebook_token": NumberInt(1)
},{
  "unique": true
});

/** social_google indexes **/
db.getCollection("social_google").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** social_google indexes **/
db.getCollection("social_google").ensureIndex({
  "account_id": NumberInt(1)
},{
  "unique": true
});

/** social_google indexes **/
db.getCollection("social_google").ensureIndex({
  "google_id": NumberInt(1)
},{
  "unique": true
});

/** tmp_col indexes **/
db.getCollection("tmp_col").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** web indexes **/
db.getCollection("web").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** access_token records **/
db.getCollection("access_token").insert({
  "_id": ObjectId("585cd7b6686b2e5b24e7f8e3"),
  "msi_id": "100001482479542564863",
  "account_id": NumberInt(709404877),
  "access_token": "eyJoYXNoIjoiN2IwNjliNmMzOTJiNzFiNDM0Mzc2ZTQ0M2M2MzRhNDUiLCJtc2lfaWQiOiIxMDAwMDE0ODI0Nzk1NDI1NjQ4NjMiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgyNDc5NTQyNTY0ODYzIiwiaWQiOjcwOTQwNDg3N30=",
  "hash": "6ee652f40a4ec4b776e3c272d745c335",
  "device_id": "74500322465a218afeab622e7793f0515bd80a82",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2016-12-23T07:52:22.492Z"),
  "updatedAt": ISODate("2016-12-23T07:52:22.492Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("585cef58686b2e5b24e7f8e7"),
  "msi_id": "100001482479542564863",
  "account_id": NumberInt(709404877),
  "access_token": "eyJoYXNoIjoiZDQ4YTYwM2JlYjQ3YjIxNzMzZjYwYjM5YzI5MzYzYmYiLCJtc2lfaWQiOiIxMDAwMDE0ODI0Nzk1NDI1NjQ4NjMiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgyNDc5NTQyNTY0ODYzIiwiaWQiOjcwOTQwNDg3N30=",
  "hash": "f44bb3949a0838f990f6d092071fdce7",
  "device_id": "74500322465a218afeab622e7793f0515bd80a82",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2016-12-23T09:33:12.43Z"),
  "updatedAt": ISODate("2016-12-23T09:33:12.43Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("585cf025686b2e5b24e7f8e8"),
  "msi_id": "100001482479542564863",
  "account_id": NumberInt(709404877),
  "access_token": "eyJoYXNoIjoiZTk3YzM2OTA0MmRkYTc4MGIzNjM0ZWVhZWM3NjU2ODgiLCJtc2lfaWQiOiIxMDAwMDE0ODI0Nzk1NDI1NjQ4NjMiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgyNDc5NTQyNTY0ODYzIiwiaWQiOjcwOTQwNDg3N30=",
  "hash": "b43558942d1574c273d682e78b4e6c85",
  "device_id": "74500322465a218afeab622e7793f0515bd80a82",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2016-12-23T09:36:37.158Z"),
  "updatedAt": ISODate("2016-12-23T09:36:37.158Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("585cfc45686b2e5b24e7f8e9"),
  "msi_id": "100001482406824524643",
  "account_id": NumberInt(469086595),
  "access_token": "eyJoYXNoIjoiMTRlMTQ0YTJiOGJlNGZlYzhhNTk0ZTlkZTYxODg3ZjUiLCJtc2lfaWQiOiIxMDAwMDE0ODI0MDY4MjQ1MjQ2NDMiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgyNDA2ODI0NTI0NjQzIiwiaWQiOjQ2OTA4NjU5NX0=",
  "hash": "b218792d67db1e7565164c7959609a12",
  "device_id": "fccf5ba067af9f7903a8f151ee3b3a7a33119e1e",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Android SDK built for x86_64 Build/LMY48X)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2016-12-23T10:28:21.653Z"),
  "updatedAt": ISODate("2016-12-23T10:28:21.653Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58609c22686b2e5b24e7f913"),
  "msi_id": "100001482726435662633",
  "account_id": NumberInt(533469009),
  "access_token": "eyJoYXNoIjoiZTU1Yjg3YjdmZTk2OGY2ZGMwYjE3NjZkYzUxZTlmOTMiLCJtc2lfaWQiOiIxMDAwMDE0ODI3MjY0MzU2NjI2MzMiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgyNzI2NDM1NjYyNjMzIiwiaWQiOjUzMzQ2OTAwOX0=",
  "hash": "ac86a7c0afde67730cb923cbd6308950",
  "device_id": "5a2f785d84a047d5ec089c608163841f80506f09",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; Android SDK built for x86 Build/NYC)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2016-12-26T04:27:14.788Z"),
  "updatedAt": ISODate("2016-12-26T04:27:14.788Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("5860c2c6686b2e5b24e7f91a"),
  "msi_id": "100001482736326113793",
  "account_id": NumberInt(171415393),
  "access_token": "eyJoYXNoIjoiZTc3MTBjYjQ5MjUzOWRmNTI3MTE0OTZmYWYzN2FjOWQiLCJtc2lfaWQiOiIxMDAwMDE0ODI3MzYzMjYxMTM3OTMiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgyNzM2MzI2MTEzNzkzIiwiaWQiOjE3MTQxNTM5M30=",
  "hash": "3cc4283defdb7be3398f761ed117161e",
  "device_id": "b909ace5869b35ef4acbb6fde24e1025f1bbe775",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_1 like Mac OS X) AppleWebKit/602.2.14 (KHTML, like Gecko) Mobile/14B72",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2016-12-26T07:12:06.80Z"),
  "updatedAt": ISODate("2016-12-26T07:12:06.80Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("586f64c07a5d056409d02a54"),
  "msi_id": "100001483695296870983",
  "account_id": NumberInt(674529448),
  "access_token": "eyJoYXNoIjoiM2FkZmE1YWJiNzc2NzQzMTI0MjExMjIyODJjODNkZWYiLCJtc2lfaWQiOiIxMDAwMDE0ODM2OTUyOTY4NzA5ODMiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgzNjk1Mjk2ODcwOTgzIiwiaWQiOjY3NDUyOTQ0OH0=",
  "hash": "a57429a861bfb6b3cf6b7b23ad6dae10",
  "device_id": "332fd4a5a6bc3c3cf6fe3b192e0bf3b922a3f48a",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; vivo Xplay5A Build/LMY47V)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-06T09:34:56.468Z"),
  "updatedAt": ISODate("2017-01-06T09:34:56.468Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58749ff27a5d056409d02a9c"),
  "msi_id": "100001484038055744948",
  "account_id": NumberInt(754777018),
  "access_token": "eyJoYXNoIjoiMWJjZTYxMTdmYjAzMzNjYThmMWYwZGVmNWIwN2UzYTQiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzgwNTU3NDQ5NDgiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDM4MDU1NzQ0OTQ4IiwiaWQiOjc1NDc3NzAxOH0=",
  "hash": "d411144bfd0d1dd15b635505d7b28418",
  "device_id": "02382457af4c4ff0211b34ca4ddd2ad830572026",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-10T08:48:50.35Z"),
  "updatedAt": ISODate("2017-01-10T08:48:50.35Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("5874b9e07a5d056409d02ab3"),
  "msi_id": "100001484044768276214",
  "account_id": NumberInt(881773336),
  "access_token": "eyJoYXNoIjoiNmQ3NmQ1MjkzM2ZhZDkzNWNmMjNhNmMzOTIzYjA3NTkiLCJtc2lfaWQiOiIxMDAwMDE0ODQwNDQ3NjgyNzYyMTQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDQ0NzY4Mjc2MjE0IiwiaWQiOjg4MTc3MzMzNn0=",
  "hash": "1854e07df905f7bc8a1456fa071e7ce9",
  "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-10T10:39:28.432Z"),
  "updatedAt": ISODate("2017-01-10T10:39:28.432Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58759d6b7a5d056409d02ad4"),
  "msi_id": "100001484044768276214",
  "account_id": NumberInt(881773336),
  "access_token": "eyJoYXNoIjoiNTI3YzgzZjU0MjAyZTFjNGEwMTFjNGRkYjM3MjYwMTYiLCJtc2lfaWQiOiIxMDAwMDE0ODQwNDQ3NjgyNzYyMTQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDQ0NzY4Mjc2MjE0IiwiaWQiOjg4MTc3MzMzNn0=",
  "hash": "2db57b4fbe27f1696f8fd546dffe4c2d",
  "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-11T02:50:19.407Z"),
  "updatedAt": ISODate("2017-01-11T02:50:19.407Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("5875b8a87a5d056409d02afc"),
  "msi_id": "100001484044768276214",
  "account_id": NumberInt(881773336),
  "access_token": "eyJoYXNoIjoiMGE0YWQwYWJhYzJiMThhZWYzNTI1Zjg5MjAwMjZmNmYiLCJtc2lfaWQiOiIxMDAwMDE0ODQwNDQ3NjgyNzYyMTQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDQ0NzY4Mjc2MjE0IiwiaWQiOjg4MTc3MzMzNn0=",
  "hash": "0b6c5e054f724f7f52936b8a2bdea612",
  "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-11T04:46:32.467Z"),
  "updatedAt": ISODate("2017-01-11T04:46:32.467Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("5875c2897a5d056409d02b00"),
  "msi_id": "100001484044768276214",
  "account_id": NumberInt(881773336),
  "access_token": "eyJoYXNoIjoiOWZiODU0YmZiZTczZDE4ZDU5NmFkODY4NGM1ZWI0YjciLCJtc2lfaWQiOiIxMDAwMDE0ODQwNDQ3NjgyNzYyMTQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDQ0NzY4Mjc2MjE0IiwiaWQiOjg4MTc3MzMzNn0=",
  "hash": "ca00a319c41876af2c9e23459047eb77",
  "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-11T05:28:41.807Z"),
  "updatedAt": ISODate("2017-01-11T05:28:41.807Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("5875c89f7a5d056409d02b02"),
  "msi_id": "100001484044768276214",
  "account_id": NumberInt(881773336),
  "access_token": "eyJoYXNoIjoiODVlY2EyMmQyODE4NWUyMjc0MGYxMjFjMTI1MzE5ZjciLCJtc2lfaWQiOiIxMDAwMDE0ODQwNDQ3NjgyNzYyMTQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDQ0NzY4Mjc2MjE0IiwiaWQiOjg4MTc3MzMzNn0=",
  "hash": "497573ed414a477d164f00d578e53a9b",
  "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-11T05:54:39.738Z"),
  "updatedAt": ISODate("2017-01-11T05:54:39.738Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("5875ca7b7a5d056409d02b07"),
  "msi_id": "100001484114556460373",
  "account_id": NumberInt(358206907),
  "access_token": "eyJoYXNoIjoiN2NkYWRlOGU2ZWM5Y2QwMTNhOWJhZGQwNTQxZWI2MjUiLCJtc2lfaWQiOiIxMDAwMDE0ODQxMTQ1NTY0NjAzNzMiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MTE0NTU2NDYwMzczIiwiaWQiOjM1ODIwNjkwN30=",
  "hash": "2f458687f18bebb231fc7c4c47b49b8d",
  "device_id": "6a94b6479f4e678f3f0749e7ab269f1f4e38a726",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-11T06:02:35.937Z"),
  "updatedAt": ISODate("2017-01-11T06:02:35.937Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("5875cae67a5d056409d02b0a"),
  "msi_id": "100001484044768276214",
  "account_id": NumberInt(881773336),
  "access_token": "eyJoYXNoIjoiMTc0N2Y3YjVkMWEzZDQ5ZTIxZWQzYzQ4ZTJhMDM4NTIiLCJtc2lfaWQiOiIxMDAwMDE0ODQwNDQ3NjgyNzYyMTQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDQ0NzY4Mjc2MjE0IiwiaWQiOjg4MTc3MzMzNn0=",
  "hash": "be1057881b4d37c3188e707ecba121ba",
  "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-11T06:04:22.438Z"),
  "updatedAt": ISODate("2017-01-11T06:04:22.438Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("5875e2cf7a5d056409d02b22"),
  "msi_id": "100001484120783605775",
  "account_id": NumberInt(382786256),
  "access_token": "eyJoYXNoIjoiMDk1MDJkYmFlNDI1YjdmN2JjM2U0YjY4YTVlYTBhYTkiLCJtc2lfaWQiOiIxMDAwMDE0ODQxMjA3ODM2MDU3NzUiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MTIwNzgzNjA1Nzc1IiwiaWQiOjM4Mjc4NjI1Nn0=",
  "hash": "f3c3b50463e223a7cfed6db606b86ec7",
  "device_id": "f3d0b09c4cfe33fc5d9657274c93b9d4efb08856",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-11T07:46:23.418Z"),
  "updatedAt": ISODate("2017-01-11T07:46:23.418Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("5875f10a7a5d056409d02b38"),
  "msi_id": "100001484124427831923",
  "account_id": NumberInt(426077797),
  "access_token": "eyJoYXNoIjoiYmUyNjFlYTU1ZGNlZGMwNTI3NTdiNjAyNTFhNGMzNTUiLCJtc2lfaWQiOiIxMDAwMDE0ODQxMjQ0Mjc4MzE5MjMiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MTI0NDI3ODMxOTIzIiwiaWQiOjQyNjA3Nzc5N30=",
  "hash": "e1e43ecbc3daf44df8b54495f9fe84d6",
  "device_id": "d255ff902c494eb8674c75c5a232c584aca5ddc8",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; SAMSUNG-SM-N900A Build/tt)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-11T08:47:06.661Z"),
  "updatedAt": ISODate("2017-01-11T08:47:06.661Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("587610317a5d056409d02b3a"),
  "msi_id": "100001484124427831923",
  "account_id": NumberInt(426077797),
  "access_token": "eyJoYXNoIjoiM2RjOWE0YWUyNjYzN2RhZDhmYWRmYzY2YzY0NzIwNzUiLCJtc2lfaWQiOiIxMDAwMDE0ODQxMjQ0Mjc4MzE5MjMiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MTI0NDI3ODMxOTIzIiwiaWQiOjQyNjA3Nzc5N30=",
  "hash": "465de6529a8b7080e99445b232d45e3a",
  "device_id": "d255ff902c494eb8674c75c5a232c584aca5ddc8",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; SAMSUNG-SM-N900A Build/tt)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-11T11:00:01.557Z"),
  "updatedAt": ISODate("2017-01-11T11:00:01.557Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("587759ff7a5d056409d02b63"),
  "msi_id": "100001484044768276214",
  "account_id": NumberInt(881773336),
  "access_token": "eyJoYXNoIjoiZmE3NGY4MmJkZjc1M2VhNDYzN2VjOTVjY2Y2OWQwZTQiLCJtc2lfaWQiOiIxMDAwMDE0ODQwNDQ3NjgyNzYyMTQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDQ0NzY4Mjc2MjE0IiwiaWQiOjg4MTc3MzMzNn0=",
  "hash": "616313e8d622b04d411b2784c48e1e00",
  "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-12T10:27:11.564Z"),
  "updatedAt": ISODate("2017-01-12T10:27:11.564Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58775ddb7a5d056409d02b65"),
  "msi_id": "100001484044768276214",
  "account_id": NumberInt(881773336),
  "access_token": "eyJoYXNoIjoiYmYwYWVhMzIyZTQ3Mjc4Y2ZmNDkzOTk3NjY2YjkxMWUiLCJtc2lfaWQiOiIxMDAwMDE0ODQwNDQ3NjgyNzYyMTQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDQ0NzY4Mjc2MjE0IiwiaWQiOjg4MTc3MzMzNn0=",
  "hash": "76e45958e229451d1487be8105c5edcc",
  "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-12T10:43:39.735Z"),
  "updatedAt": ISODate("2017-01-12T10:43:39.735Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("587833767a5d056409d02b67"),
  "msi_id": "100001484044768276214",
  "account_id": NumberInt(881773336),
  "access_token": "eyJoYXNoIjoiNmM1NWY2ZGIwYzVhZGY2NDRmNzNkYzc2MWNjMDU0MTYiLCJtc2lfaWQiOiIxMDAwMDE0ODQwNDQ3NjgyNzYyMTQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDQ0NzY4Mjc2MjE0IiwiaWQiOjg4MTc3MzMzNn0=",
  "hash": "8cf5ab0ed66ff73b9dcf50cf7f763ee0",
  "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-13T01:55:02.460Z"),
  "updatedAt": ISODate("2017-01-13T01:55:02.460Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("587f3b53974ff98d26afa018"),
  "msi_id": "100001484722435387315",
  "account_id": NumberInt(142785846),
  "access_token": "eyJoYXNoIjoiYzdkNDcwYzBiM2FkODU0MGIxZTY0ZmU3ZmRmMzg4MWEiLCJtc2lfaWQiOiIxMDAwMDE0ODQ3MjI0MzUzODczMTUiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0NzIyNDM1Mzg3MzE1IiwiaWQiOjE0Mjc4NTg0Nn0=",
  "hash": "3a2e5d7c1b21277f10eb61f1d6e72d78",
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-18T09:54:27.31Z"),
  "updatedAt": ISODate("2017-01-18T09:54:27.31Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("5887cc15974ff98d26afa05f"),
  "msi_id": "100001485294614192381",
  "account_id": NumberInt(842115965),
  "access_token": "eyJoYXNoIjoiN2YyZTE5YmNiMTM3MmQwZTVjY2ExOTlmYzlkNjk2NmIiLCJtc2lfaWQiOiIxMDAwMDE0ODUyOTQ2MTQxOTIzODEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg1Mjk0NjE0MTkyMzgxIiwiaWQiOjg0MjExNTk2NX0=",
  "hash": "03167cefec6adc48b3bdae5c0c31268c",
  "device_id": "a6d21d21875daa6b779cb88694c332e3ec9a29d0",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_1_1 like Mac OS X) AppleWebKit/602.2.14 (KHTML, like Gecko) Mobile/14B100",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-01-24T21:50:13.911Z"),
  "updatedAt": ISODate("2017-01-24T21:50:13.911Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("5897e747974ff98d26afa06d"),
  "msi_id": "100001486350151228021",
  "account_id": NumberInt(855783386),
  "access_token": "eyJoYXNoIjoiYjZiOTQ2MDhhM2EyMWIzZjllYTA0ZGUxNzlmNWM0N2IiLCJtc2lfaWQiOiIxMDAwMDE0ODYzNTAxNTEyMjgwMjEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg2MzUwMTUxMjI4MDIxIiwiaWQiOjg1NTc4MzM4Nn0=",
  "hash": "bc086097709fa9d00e96c4920abcef98",
  "device_id": "a9432a64b77559509f6b3834fad1f7cfb9924be5",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-06T03:02:31.364Z"),
  "updatedAt": ISODate("2017-02-06T03:02:31.364Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("589c41c5974ff98d26afa09d"),
  "msi_id": "100001484722641528321",
  "account_id": NumberInt(645009632),
  "access_token": "eyJoYXNoIjoiYTM3NGZmMTI3MTE2NmI3OWE4M2YwM2NjYTY4OTg2OGQiLCJtc2lfaWQiOiIxMDAwMDE0ODQ3MjI2NDE1MjgzMjEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0NzIyNjQxNTI4MzIxIiwiaWQiOjY0NTAwOTYzMn0=",
  "hash": "6ea0ff8a283aa98cc00854f6dac1d195",
  "device_id": "72bf09d8d4dce14dedba8056743a4c7dd9daf117",
  "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-09T10:17:41.572Z"),
  "updatedAt": ISODate("2017-02-09T10:17:41.572Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("589d6136974ff98d26afa0ac"),
  "msi_id": "100011486697924513177",
  "account_id": NumberInt(520269142),
  "access_token": "eyJoYXNoIjoiM2FkNDFlN2JmMDVkZTk5MDEzNWI3MjMwYzc2YTM4ZDkiLCJtc2lfaWQiOiIxMDAwMTE0ODY2OTc5MjQ1MTMxNzciLCJhY2NvdW50X2lkIjoiMTAwMDExNDg2Njk3OTI0NTEzMTc3IiwiaWQiOjUyMDI2OTE0Mn0=",
  "hash": "3e77b24355f52c787d9c93b745d78adf",
  "device_id": "a9432a64b77559509f6b3834fad1f7cfb9924be5",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-02-10T06:44:06.874Z"),
  "updatedAt": ISODate("2017-02-10T06:44:06.874Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58a973676bfb4fd74dd20a09"),
  "msi_id": "100011487500135119227",
  "account_id": NumberInt(139638350),
  "access_token": "eyJoYXNoIjoiODEyODY2OWM4YWUzYTkxZDMwMDlhOTQ5YmQ1ZDJjZTQiLCJtc2lfaWQiOiIxMDAwMTE0ODc1MDAxMzUxMTkyMjciLCJhY2NvdW50X2lkIjoiMTAwMDExNDg3NTAwMTM1MTE5MjI3IiwiaWQiOjEzOTYzODM1MH0=",
  "hash": "577d038e3c1614838df2dc8d6d418219",
  "device_id": "4487e5dd52b3e5721878b4f3a05221e715b484a9",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SM-G3812 Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-02-19T10:28:55.407Z"),
  "updatedAt": ISODate("2017-02-19T10:28:55.407Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58aa9d3f568a2f86524fb160"),
  "msi_id": "100041487576384181902",
  "account_id": NumberInt(380454574),
  "access_token": "eyJoYXNoIjoiZWE1NTUwY2NiMTUxNGJkMjRhNjg4MTM1ZGQxNThlMDMiLCJtc2lfaWQiOiIxMDAwNDE0ODc1NzYzODQxODE5MDIiLCJhY2NvdW50X2lkIjoiMTAwMDQxNDg3NTc2Mzg0MTgxOTAyIiwiaWQiOjM4MDQ1NDU3NH0=",
  "hash": "06e62e0cf906f39ed2c58cd00376ac80",
  "device_id": "AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=",
  "user_agent": "12345",
  "platform": "wp",
  "channel": "",
  "service_id": "10004",
  "createdAt": ISODate("2017-02-20T07:39:43.987Z"),
  "updatedAt": ISODate("2017-02-20T07:39:43.987Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58abe817568a2f86524fb188"),
  "msi_id": "100001487661079891904",
  "account_id": NumberInt(850291276),
  "access_token": "eyJoYXNoIjoiZDc3MDU5NWY3MGVkMjdkN2M1ZGRhMjdkZTEyNGRhZDYiLCJtc2lfaWQiOiIxMDAwMDE0ODc2NjEwNzk4OTE5MDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NjYxMDc5ODkxOTA0IiwiaWQiOjg1MDI5MTI3Nn0=",
  "hash": "4ee88076dc38dc45e2369dda1e7e1e03",
  "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-21T07:11:19.459Z"),
  "updatedAt": ISODate("2017-02-21T07:11:19.459Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58abea4f568a2f86524fb190"),
  "msi_id": "100001487661648172292",
  "account_id": NumberInt(995530891),
  "access_token": "eyJoYXNoIjoiMzI5MWY1ODNhMjE0Y2I2NTQwOTJmOTA5NzM0YTYxYTgiLCJtc2lfaWQiOiIxMDAwMDE0ODc2NjE2NDgxNzIyOTIiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NjYxNjQ4MTcyMjkyIiwiaWQiOjk5NTUzMDg5MX0=",
  "hash": "f241e7c54a6e1f9b50ddc03259b26165",
  "device_id": "a7497e685217510a4cad648adc9f66de17b53735",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-21T07:20:47.826Z"),
  "updatedAt": ISODate("2017-02-21T07:20:47.826Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58abf83c568a2f86524fb1a6"),
  "msi_id": "100001487661648172292",
  "account_id": NumberInt(995530891),
  "access_token": "eyJoYXNoIjoiMTA1MTI1MjBmMWU3YjM1MDg2NzkyY2E1MWM5YTgyM2IiLCJtc2lfaWQiOiIxMDAwMDE0ODc2NjE2NDgxNzIyOTIiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NjYxNjQ4MTcyMjkyIiwiaWQiOjk5NTUzMDg5MX0=",
  "hash": "3e676c66e1a74b81e834fcf830b30b20",
  "device_id": "a7497e685217510a4cad648adc9f66de17b53735",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-21T08:20:12.762Z"),
  "updatedAt": ISODate("2017-02-21T08:20:12.762Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58abfb0b568a2f86524fb1ac"),
  "msi_id": "100001487665932481022",
  "account_id": NumberInt(896801707),
  "access_token": "eyJoYXNoIjoiZWE3MzUzNDIwMWRjN2IwMzcwNTM0NjQ2MjhiZmM1YWYiLCJtc2lfaWQiOiIxMDAwMDE0ODc2NjU5MzI0ODEwMjIiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NjY1OTMyNDgxMDIyIiwiaWQiOjg5NjgwMTcwN30=",
  "hash": "b9c33c4988082fb7f99577cfef2e51df",
  "device_id": "36b84752f7dee3c9aaae3f94856d648a755ac757",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-21T08:32:11.763Z"),
  "updatedAt": ISODate("2017-02-21T08:32:11.763Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58abfc9a568a2f86524fb1ae"),
  "msi_id": "100001487665932481022",
  "account_id": NumberInt(896801707),
  "access_token": "eyJoYXNoIjoiM2QxYjRhYjhlMjM4NGE0ZGU1MWQwNjRjNzdjMjIwZTgiLCJtc2lfaWQiOiIxMDAwMDE0ODc2NjU5MzI0ODEwMjIiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NjY1OTMyNDgxMDIyIiwiaWQiOjg5NjgwMTcwN30=",
  "hash": "8cded5f700beaf5a22ff81438a7935ac",
  "device_id": "36b84752f7dee3c9aaae3f94856d648a755ac757",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-21T08:38:50.154Z"),
  "updatedAt": ISODate("2017-02-21T08:38:50.154Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58ad086e568a2f86524fb1b6"),
  "msi_id": "100001487661079891904",
  "account_id": NumberInt(850291276),
  "access_token": "eyJoYXNoIjoiZTNiNmY1OWViYzE2ZTBhNDI0Y2I1NWIzMzA1OWU3MDAiLCJtc2lfaWQiOiIxMDAwMDE0ODc2NjEwNzk4OTE5MDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NjYxMDc5ODkxOTA0IiwiaWQiOjg1MDI5MTI3Nn0=",
  "hash": "a59cfaff300b93582b2a34806dd998f2",
  "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-22T03:41:34.72Z"),
  "updatedAt": ISODate("2017-02-22T03:41:34.72Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58ad10e6568a2f86524fb1bb"),
  "msi_id": "100001487737062640802",
  "account_id": NumberInt(260409820),
  "access_token": "eyJoYXNoIjoiNzkwZjRjODQ1YzlhMjRiYmMwNTRiNTk0Yjg1NWNkMTYiLCJtc2lfaWQiOiIxMDAwMDE0ODc3MzcwNjI2NDA4MDIiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NzM3MDYyNjQwODAyIiwiaWQiOjI2MDQwOTgyMH0=",
  "hash": "52e1995d6fcaf39faf1ef862168f37c5",
  "device_id": "a72e065124f462cf3ef675a27aee0e1f90633aa7",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-22T04:17:42.309Z"),
  "updatedAt": ISODate("2017-02-22T04:17:42.309Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58afa0f2568a2f86524fb1f5"),
  "msi_id": "100001487905011121951",
  "account_id": NumberInt(935931406),
  "access_token": "eyJoYXNoIjoiMDljODQwMDk5ZTNmNWM1YmE0MTczNGU5YjQ5ZmI4Y2MiLCJtc2lfaWQiOiIxMDAwMDE0ODc5MDUwMTExMjE5NTEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3OTA1MDExMTIxOTUxIiwiaWQiOjkzNTkzMTQwNn0=",
  "hash": "d0fdab7e761659c738488f7d8919bcfa",
  "device_id": "b542730716d64a7bea662cd47c8e3cac7bf7095e",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-24T02:56:50.991Z"),
  "updatedAt": ISODate("2017-02-24T02:56:50.991Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58afa13a568a2f86524fb1f7"),
  "msi_id": "100001487905011121951",
  "account_id": NumberInt(935931406),
  "access_token": "eyJoYXNoIjoiYTMxZjk3NzdmMTY1MTNhNTE1ZWUwMTZhNTg3ZGNhYjYiLCJtc2lfaWQiOiIxMDAwMDE0ODc5MDUwMTExMjE5NTEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3OTA1MDExMTIxOTUxIiwiaWQiOjkzNTkzMTQwNn0=",
  "hash": "8515390caf194379100c250053b2db4b",
  "device_id": "b542730716d64a7bea662cd47c8e3cac7bf7095e",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-24T02:58:02.395Z"),
  "updatedAt": ISODate("2017-02-24T02:58:02.395Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58afaa40568a2f86524fb20b"),
  "msi_id": "100001484109347136725",
  "account_id": NumberInt(365513464),
  "access_token": "eyJoYXNoIjoiMzdjZmYwN2M2OWM1ODg4NjlhNWQ1YThkYWIxOGFlMTUiLCJtc2lfaWQiOiIxMDAwMDE0ODQxMDkzNDcxMzY3MjUiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MTA5MzQ3MTM2NzI1IiwiaWQiOjM2NTUxMzQ2NH0=",
  "hash": "1a87fb7da8e9bc91515bd42a2a9abb26",
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-24T03:36:32.966Z"),
  "updatedAt": ISODate("2017-02-24T03:36:32.966Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58afdf08568a2f86524fb21a"),
  "msi_id": "100001487661079891904",
  "account_id": NumberInt(850291276),
  "access_token": "eyJoYXNoIjoiMDEzYTFiOGNmNTYwN2Q1MjMxNzUxYWI3NWIwYzcyZTYiLCJtc2lfaWQiOiIxMDAwMDE0ODc2NjEwNzk4OTE5MDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NjYxMDc5ODkxOTA0IiwiaWQiOjg1MDI5MTI3Nn0=",
  "hash": "42992b0c2eb59fd938799416aedb95ac",
  "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-24T07:21:44.79Z"),
  "updatedAt": ISODate("2017-02-24T07:21:44.79Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58afe4de568a2f86524fb220"),
  "msi_id": "100001487922399864225",
  "account_id": NumberInt(560708617),
  "access_token": "eyJoYXNoIjoiMTAxNDFjYWM2MTUwYjgwMjYyY2Y0ZjhjOThjYzJkZTYiLCJtc2lfaWQiOiIxMDAwMDE0ODc5MjIzOTk4NjQyMjUiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3OTIyMzk5ODY0MjI1IiwiaWQiOjU2MDcwODYxN30=",
  "hash": "8b443fb98ccea7b06a6d910b9d250b21",
  "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-24T07:46:38.535Z"),
  "updatedAt": ISODate("2017-02-24T07:46:38.535Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b3c227568a2f86524fb264"),
  "msi_id": "100001487662516873339",
  "account_id": NumberInt(734425202),
  "access_token": "eyJoYXNoIjoiNWI4MzM5MTNhMGRlYzg3N2E0Y2JkYWZhZmRlYWJkM2MiLCJtc2lfaWQiOiIxMDAwMDE0ODc2NjI1MTY4NzMzMzkiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NjYyNTE2ODczMzM5IiwiaWQiOjczNDQyNTIwMn0=",
  "hash": "9e0840fba00b4bbe787c007df8d1e796",
  "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-27T06:07:35.397Z"),
  "updatedAt": ISODate("2017-02-27T06:07:35.397Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b3cae3568a2f86524fb275"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiNjU2NWZkMTZmMGNkODg0Y2NkNmQxYWM4ZjhhODZiNWIiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "9a2a90be3e3751683127c67c1aa66cf4",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-27T06:44:51.691Z"),
  "updatedAt": ISODate("2017-02-27T06:44:51.691Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b3cbd1568a2f86524fb277"),
  "msi_id": "100001487662516873339",
  "account_id": NumberInt(734425202),
  "access_token": "eyJoYXNoIjoiMjNhNDA4NzhhZGRjNWZkZjM2YjkxMTBlMzVmNWM0NWYiLCJtc2lfaWQiOiIxMDAwMDE0ODc2NjI1MTY4NzMzMzkiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NjYyNTE2ODczMzM5IiwiaWQiOjczNDQyNTIwMn0=",
  "hash": "fce9d0ebde757e3dcb4d2981ef487b96",
  "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-27T06:48:49.37Z"),
  "updatedAt": ISODate("2017-02-27T06:48:49.37Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b3df45568a2f86524fb287"),
  "msi_id": "100001488183110339121",
  "account_id": NumberInt(971282243),
  "access_token": "eyJoYXNoIjoiNzcyYWM1NWFjNzA5ZmIyNWU1ZTk4NTFkMGVlODc0ZDciLCJtc2lfaWQiOiIxMDAwMDE0ODgxODMxMTAzMzkxMjEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg4MTgzMTEwMzM5MTIxIiwiaWQiOjk3MTI4MjI0M30=",
  "hash": "46a5614c6e64a7254952e59f11fb633b",
  "device_id": "689788233555f2f17b0688e294313bf056e4bb5e",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-27T08:11:49.743Z"),
  "updatedAt": ISODate("2017-02-27T08:11:49.743Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b3e7f2568a2f86524fb291"),
  "msi_id": "100001487922399864225",
  "account_id": NumberInt(560708617),
  "access_token": "eyJoYXNoIjoiZTEzNDUxNGUwYTk4YTVhOTI3NDczMmFiODk2ZmRhYjciLCJtc2lfaWQiOiIxMDAwMDE0ODc5MjIzOTk4NjQyMjUiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3OTIyMzk5ODY0MjI1IiwiaWQiOjU2MDcwODYxN30=",
  "hash": "c3133d1fe67e411eb799039e9e4cdc23",
  "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-27T08:48:50.756Z"),
  "updatedAt": ISODate("2017-02-27T08:48:50.756Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b3faee568a2f86524fb29e"),
  "msi_id": "100001487751243196868",
  "account_id": NumberInt(497615639),
  "access_token": "eyJoYXNoIjoiMTg4ZGE5YzU4NjEwNDg3YWM3YTYyMGI5MzQ5ZmI4NTciLCJtc2lfaWQiOiIxMDAwMDE0ODc3NTEyNDMxOTY4NjgiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NzUxMjQzMTk2ODY4IiwiaWQiOjQ5NzYxNTYzOX0=",
  "hash": "fbc2c78a7c8443d0254aad0e8737b9d3",
  "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
  "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-27T10:09:50.473Z"),
  "updatedAt": ISODate("2017-02-27T10:09:50.473Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b4d453568a2f86524fb2a4"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiODZkOWJjZmE5NzYwYmNkODVmMTMxODBjNjA2NDdkMjMiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "90cc320e42c6b8b888d62bb0fa13a3e1",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-28T01:37:23.506Z"),
  "updatedAt": ISODate("2017-02-28T01:37:23.506Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b4da84568a2f86524fb2a8"),
  "msi_id": "100011488247429306198",
  "account_id": NumberInt(935931406),
  "access_token": "eyJoYXNoIjoiNjkyMDEzZjBhZDFlMTI5Yjg2YTM1OTMxZTM0ZTUzYzEiLCJtc2lfaWQiOiIxMDAwMTE0ODgyNDc0MjkzMDYxOTgiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg4MjQ3NDI5MzA2MTk4IiwiaWQiOjkzNTkzMTQwNn0=",
  "hash": "5158314e82ef935a4d2ad020093ce5b3",
  "device_id": "b542730716d64a7bea662cd47c8e3cac7bf7095e",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-02-28T02:03:48.722Z"),
  "updatedAt": ISODate("2017-02-28T02:03:48.722Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b523d7568a2f86524fb2e0"),
  "msi_id": "100011488266199184084",
  "account_id": NumberInt(560931514),
  "access_token": "eyJoYXNoIjoiMzdiNzVjNDk0NzUyMGM4ZmQ1ODZiYzYyMzI0ODE4MmQiLCJtc2lfaWQiOiIxMDAwMTE0ODgyNjYxOTkxODQwODQiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg4MjY2MTk5MTg0MDg0IiwiaWQiOjU2MDkzMTUxNH0=",
  "hash": "0b7300b02b4153728a7586f3452c4778",
  "device_id": "d0b3f948daabe4c63b90c91463f41a2557076633",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/V8.2.1.0.LXKCNDL)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-02-28T07:16:39.81Z"),
  "updatedAt": ISODate("2017-02-28T07:16:39.81Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b52c82568a2f86524fb2e4"),
  "msi_id": "100001487662516873339",
  "account_id": NumberInt(734425202),
  "access_token": "eyJoYXNoIjoiMTA0NzEwN2FjZTNiMzFkNDc2ODUwODJiZGNhNDBmMjEiLCJtc2lfaWQiOiIxMDAwMDE0ODc2NjI1MTY4NzMzMzkiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NjYyNTE2ODczMzM5IiwiaWQiOjczNDQyNTIwMn0=",
  "hash": "6de62e1675b9b4fa9d7b843e2aa9cb4f",
  "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-28T07:53:38.589Z"),
  "updatedAt": ISODate("2017-02-28T07:53:38.589Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b5402b568a2f86524fb2f1"),
  "msi_id": "100001488183110339121",
  "account_id": NumberInt(971282243),
  "access_token": "eyJoYXNoIjoiNDVhNmU0ZTQ1ODk0ZThmZTBmZTQxMmNiN2JkZWJmYTQiLCJtc2lfaWQiOiIxMDAwMDE0ODgxODMxMTAzMzkxMjEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg4MTgzMTEwMzM5MTIxIiwiaWQiOjk3MTI4MjI0M30=",
  "hash": "e766dc56d7b8d0ba2a626ee21f1db0e8",
  "device_id": "689788233555f2f17b0688e294313bf056e4bb5e",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-28T09:17:31.239Z"),
  "updatedAt": ISODate("2017-02-28T09:17:31.239Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b54758568a2f86524fb2f7"),
  "msi_id": "100001487737062640802",
  "account_id": NumberInt(260409820),
  "access_token": "eyJoYXNoIjoiM2U1MzczNTE4NzVkNWM1ZTE0NDVmNDQwMmY0YWMzZGQiLCJtc2lfaWQiOiIxMDAwMDE0ODc3MzcwNjI2NDA4MDIiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NzM3MDYyNjQwODAyIiwiaWQiOjI2MDQwOTgyMH0=",
  "hash": "0b7c13738482dbc2cee266d52c64b6dd",
  "device_id": "a72e065124f462cf3ef675a27aee0e1f90633aa7",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-02-28T09:48:08.637Z"),
  "updatedAt": ISODate("2017-02-28T09:48:08.637Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b62e0f568a2f86524fb313"),
  "msi_id": "100001483949777558244",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiNDM4YTFmOTliYzVjMDhjYzQzNzhjNzNjNTIwMWY1MGMiLCJtc2lfaWQiOiIxMDAwMDE0ODM5NDk3Nzc1NTgyNDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgzOTQ5Nzc3NTU4MjQ0IiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "22b4be8b39a1ee40f73ac05bdc8aa6fb",
  "device_id": "38242663ffc0483506992374bb799f94dbdb3fac",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; VPhone Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-01T02:12:31.668Z"),
  "updatedAt": ISODate("2017-03-01T02:12:31.668Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b6325d568a2f86524fb315"),
  "msi_id": "100001487751243196868",
  "account_id": NumberInt(497615639),
  "access_token": "eyJoYXNoIjoiNDMwZTRjMjA2ODZjN2EzMDA2M2RjZjU2MDZhNTM0MTIiLCJtc2lfaWQiOiIxMDAwMDE0ODc3NTEyNDMxOTY4NjgiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NzUxMjQzMTk2ODY4IiwiaWQiOjQ5NzYxNTYzOX0=",
  "hash": "1eb3bb3a5aeee098a22235d0da384e91",
  "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
  "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-01T02:30:53.839Z"),
  "updatedAt": ISODate("2017-03-01T02:30:53.839Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b6aa93568a2f86524fb330"),
  "msi_id": "100001487905011121951",
  "account_id": NumberInt(935931406),
  "access_token": "eyJoYXNoIjoiZTdhMGU4MDE2ZTg3MDY5NWZmNjIyNTg2ZTU1MDQyZTgiLCJtc2lfaWQiOiIxMDAwMDE0ODc5MDUwMTExMjE5NTEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3OTA1MDExMTIxOTUxIiwiaWQiOjkzNTkzMTQwNn0=",
  "hash": "82ef0e43815a8288c6c1440edbbc8332",
  "device_id": "b542730716d64a7bea662cd47c8e3cac7bf7095e",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-01T11:03:47.990Z"),
  "updatedAt": ISODate("2017-03-01T11:03:47.990Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b7bee7568a2f86524fb358"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiMjNlZTEzNTk4M2IxYTZhMzJlZDFmZTNjOTgzOTQyM2QiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "2bca5d40242167a124b685ad53c86e29",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-02T06:42:47.172Z"),
  "updatedAt": ISODate("2017-03-02T06:42:47.172Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b7c621568a2f86524fb365"),
  "msi_id": "100031488438818359707",
  "account_id": NumberInt(833537914),
  "access_token": "eyJoYXNoIjoiNTExODI2ZTcxYmE0NWVjZDM5NTdkZjk2ZjgzMTg0MWIiLCJtc2lfaWQiOiIxMDAwMzE0ODg0Mzg4MTgzNTk3MDciLCJhY2NvdW50X2lkIjoiMTAwMDMxNDg4NDM4ODE4MzU5NzA3IiwiaWQiOjgzMzUzNzkxNH0=",
  "hash": "f5d26d04d1dd69777527c05e45420648",
  "device_id": "ce10ccaf273f9a88023c5c3e257eaeb04ac321ca",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10003",
  "createdAt": ISODate("2017-03-02T07:13:37.886Z"),
  "updatedAt": ISODate("2017-03-02T07:13:37.886Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b7c735568a2f86524fb367"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiNzY1MWY0MjYzNWM0OGMyNTEyM2VhMjBkNWQwZjZjYzQiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "e6bdd32b593770cb2d1a1eb430b00fd6",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-02T07:18:13.630Z"),
  "updatedAt": ISODate("2017-03-02T07:18:13.630Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b92c03568a2f86524fb382"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiNmIxZGI1ZmE1MTUxMjRjM2Q3MjI0YjQxMGM3OTQzMTAiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "9a7a4de833cfa5460912df62b28fdbba",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T08:40:35.193Z"),
  "updatedAt": ISODate("2017-03-03T08:40:35.193Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b92cf6568a2f86524fb383"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiZTZiMTdhNTFkMDU5MTViN2VlNTBkMTU2YjAxYjI3NjgiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "ecfdd19aa5b8d48b3aeacb61d0516b9b",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T08:44:38.994Z"),
  "updatedAt": ISODate("2017-03-03T08:44:38.994Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b92d35568a2f86524fb384"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiM2IzYTNlODQ4OTNlNzVlNzRjYjE2Y2U3M2ZiZDI5MzAiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "df1d9de9bebb773ee3e525d6fe2adf38",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T08:45:41.998Z"),
  "updatedAt": ISODate("2017-03-03T08:45:41.998Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b92d8d568a2f86524fb385"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiNGZhYzQwYmZhMmRiMmVmY2Y1ZTlmOWRlZjk5MjRmNDQiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "a343f89fed08acc160a8ecc49803837e",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T08:47:09.60Z"),
  "updatedAt": ISODate("2017-03-03T08:47:09.60Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b92eea568a2f86524fb386"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiNWY0ZmM1N2M1MGQ2NTc4MWMwNGEwNGFhMmQ5NzNlYWQiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "9ba448700ab14def405ff24c1427c774",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T08:52:58.507Z"),
  "updatedAt": ISODate("2017-03-03T08:52:58.507Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b93111568a2f86524fb387"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiZGIzYmYwMWM4N2VjYjk2M2E2NmUzMzE2NjEzMGY3MTYiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "81c6a59a48ef48faa8013d70326a4e26",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T09:02:09.355Z"),
  "updatedAt": ISODate("2017-03-03T09:02:09.355Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b93348568a2f86524fb388"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiZGVjODFkNTRjNGQ1Yzg1ZDE0OGU5Yjc2YWQzMDk1OTUiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "ae2b50a23da96518e14baeed42680092",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T09:11:36.815Z"),
  "updatedAt": ISODate("2017-03-03T09:11:36.815Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b93426568a2f86524fb38a"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiYTUwZGZmMzQ4MjA2NDE4YTE4Zjc3Y2YyNTRlYjEwMTUiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "b8a96c483022a902a6f383ee828b17b4",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T09:15:18.124Z"),
  "updatedAt": ISODate("2017-03-03T09:15:18.124Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b934cb568a2f86524fb38e"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiNTg5N2Y4NjQ5YjhjNTI3N2Y2ZjUwZDM1MmFkNmEyM2YiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "a950506c6cb71cfc8a67d0296aab56e4",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T09:18:03.919Z"),
  "updatedAt": ISODate("2017-03-03T09:18:03.919Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b93526568a2f86524fb391"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiMGU1Mzk3YjQ2MGRjYjczZjlhNDRkZDZjM2E4MjU2MWEiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "4b4432476db86f96fb9847098aad8b57",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T09:19:34.463Z"),
  "updatedAt": ISODate("2017-03-03T09:19:34.463Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b9386d568a2f86524fb397"),
  "msi_id": "100011488533614530327",
  "account_id": NumberInt(257035834),
  "access_token": "eyJoYXNoIjoiZjQ1ZTY1YWQ0MGVlNjNiNjY3MTYzOGM2MzI5MjI3YWEiLCJtc2lfaWQiOiIxMDAwMTE0ODg1MzM2MTQ1MzAzMjciLCJhY2NvdW50X2lkIjoiMTAwMDExNDg4NTMzNjE0NTMwMzI3IiwiaWQiOjI1NzAzNTgzNH0=",
  "hash": "acffe414b217517ca581c7d76acb15d8",
  "device_id": "54fedfca0e647d172ebed5d363402ec13c94b37b",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-03T09:33:33.930Z"),
  "updatedAt": ISODate("2017-03-03T09:33:33.930Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b93dd5568a2f86524fb39b"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiM2E2MDYwYmNkZjA5NDFlZmQ4MTUxYTAwMWM0NWZmZmIiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "a09340a669e819551690ef21e1731d3f",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T09:56:37.402Z"),
  "updatedAt": ISODate("2017-03-03T09:56:37.402Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b93fcf568a2f86524fb39c"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiYWNlZmJjNDc4NTgzZmE2ZmMwMjE4NWQ3OGI3NDM0MjAiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "ad05d586364d0610ec51af91f996ad36",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T10:05:03.508Z"),
  "updatedAt": ISODate("2017-03-03T10:05:03.508Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58b946de568a2f86524fb39d"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiYzQyNDU4MDg1OWQwYTI2YTU0NWY0Y2RjOWM4MjVjNTYiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "94b5ee128c6a67a08fa881b50dd5542c",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-03T10:35:10.281Z"),
  "updatedAt": ISODate("2017-03-03T10:35:10.281Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58be239d568a2f86524fb3fa"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiZjc1NTdkZDRkOTg0NTQ1NzNjMTFhYmZjODU1NGY1YzciLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "ca8273a5e562b2dd351de4d716578f6a",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-07T03:06:05.96Z"),
  "updatedAt": ISODate("2017-03-07T03:06:05.96Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58be3dd0568a2f86524fb3fe"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiYmI2MTJlNDI2YWJjZDg5NzYwM2FjNzk4YzQ0OTUxNGYiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "610fc3910105d47fd5ef6c58f112e040",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-07T04:57:52.902Z"),
  "updatedAt": ISODate("2017-03-07T04:57:52.902Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58bf6dae568a2f86524fb41a"),
  "msi_id": "100001484109347136725",
  "account_id": NumberInt(365513464),
  "access_token": "eyJoYXNoIjoiYjQ4ZWM5NGFhZGJiNGMzZTgxZjVhNDMxYmI3NWRhN2YiLCJtc2lfaWQiOiIxMDAwMDE0ODQxMDkzNDcxMzY3MjUiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MTA5MzQ3MTM2NzI1IiwiaWQiOjM2NTUxMzQ2NH0=",
  "hash": "56637c5267207a1933ebf7896c3d5a73",
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-08T02:34:22.642Z"),
  "updatedAt": ISODate("2017-03-08T02:34:22.642Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58bfac1f568a2f86524fb424"),
  "msi_id": "100001484109347136725",
  "account_id": NumberInt(365513464),
  "access_token": "eyJoYXNoIjoiYmUyYTcxNDFmNjMyNmI2NTA4NGYyOWEzM2RmNDM0ZmEiLCJtc2lfaWQiOiIxMDAwMDE0ODQxMDkzNDcxMzY3MjUiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MTA5MzQ3MTM2NzI1IiwiaWQiOjM2NTUxMzQ2NH0=",
  "hash": "0f0e95e0ed3ac7eecd24666387b084eb",
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-08T07:00:47.967Z"),
  "updatedAt": ISODate("2017-03-08T07:00:47.967Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c0cf18568a2f86524fb429"),
  "msi_id": "100001488183110339121",
  "account_id": NumberInt(971282243),
  "access_token": "eyJoYXNoIjoiNTRlNjUyNzU2OWVmZDY0MWQ0ZDI1ZjE5ZmEwNmVlMmUiLCJtc2lfaWQiOiIxMDAwMDE0ODgxODMxMTAzMzkxMjEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg4MTgzMTEwMzM5MTIxIiwiaWQiOjk3MTI4MjI0M30=",
  "hash": "0a7751e9c5570a58ef0922514fc79cce",
  "device_id": "23d7828a7aa4b753856be6cd2042753a81f39230",
  "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-09T03:42:16.130Z"),
  "updatedAt": ISODate("2017-03-09T03:42:16.130Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c227bc568a2f86524fb43f"),
  "msi_id": "100001483949777558244",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiMTA5YzVjODI2ZTE1ZWEyYzQ0MWFhODI3M2U3ZGJhMjQiLCJtc2lfaWQiOiIxMDAwMDE0ODM5NDk3Nzc1NTgyNDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgzOTQ5Nzc3NTU4MjQ0IiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "66342eb7623f1c98d90d7fe97522bc22",
  "device_id": null,
  "user_agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
  "platform": null,
  "channel": null,
  "service_id": "10000",
  "createdAt": ISODate("2017-03-10T04:12:44.590Z"),
  "updatedAt": ISODate("2017-03-10T04:12:44.590Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c26318568a2f86524fb452"),
  "msi_id": "100001482489018600938",
  "account_id": NumberInt(271593315),
  "access_token": "eyJoYXNoIjoiYzA0MmQxYjUxMmQ1Mzk1OTI4OTY3M2EwNjI2NmMxY2YiLCJtc2lfaWQiOiIxMDAwMDE0ODI0ODkwMTg2MDA5MzgiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgyNDg5MDE4NjAwOTM4IiwiaWQiOjI3MTU5MzMxNX0=",
  "hash": "4ce24476b2f1d25debc133887b0c053f",
  "device_id": "a84d02ac06b284e56a8e714c2f10e95829235c2b",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-C7000 Build/MMB29M)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-10T08:26:00.620Z"),
  "updatedAt": ISODate("2017-03-10T08:26:00.620Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c26bc6568a2f86524fb457"),
  "msi_id": "100001482489018600938",
  "account_id": NumberInt(271593315),
  "access_token": "eyJoYXNoIjoiODI3YTVjNDljZWM2NGFhOTNlMjNiOTg4ZGRhYjdiMDIiLCJtc2lfaWQiOiIxMDAwMDE0ODI0ODkwMTg2MDA5MzgiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgyNDg5MDE4NjAwOTM4IiwiaWQiOjI3MTU5MzMxNX0=",
  "hash": "49e36d642b21511320d5f9a040cc0186",
  "device_id": "1e46cb4954ed84728f0cd53baf2093cefe20cca8",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; MI 5 MIUI/V8.2.1.0.NAACNEB)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-10T09:03:02.29Z"),
  "updatedAt": ISODate("2017-03-10T09:03:02.29Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c27c53568a2f86524fb458"),
  "msi_id": "100001482489018600938",
  "account_id": NumberInt(271593315),
  "access_token": "eyJoYXNoIjoiNDg3ZDg5MTU3OGQyYmMzMDk3NjUwNzUyNGZlNTE3OTgiLCJtc2lfaWQiOiIxMDAwMDE0ODI0ODkwMTg2MDA5MzgiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgyNDg5MDE4NjAwOTM4IiwiaWQiOjI3MTU5MzMxNX0=",
  "hash": "6969e034248739a6ea8e3869bf616dc7",
  "device_id": "1e46cb4954ed84728f0cd53baf2093cefe20cca8",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; MI 5 MIUI/V8.2.1.0.NAACNEB)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-10T10:13:39.695Z"),
  "updatedAt": ISODate("2017-03-10T10:13:39.695Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c27e65568a2f86524fb459"),
  "msi_id": "100001482489018600938",
  "account_id": NumberInt(271593315),
  "access_token": "eyJoYXNoIjoiMzQ4YzM0ZDhmYWVjYWRmZjc1ZTE1NmJhYjQ0Yzc4NjkiLCJtc2lfaWQiOiIxMDAwMDE0ODI0ODkwMTg2MDA5MzgiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgyNDg5MDE4NjAwOTM4IiwiaWQiOjI3MTU5MzMxNX0=",
  "hash": "785c823fa879667ca51f7011da295a17",
  "device_id": "a84d02ac06b284e56a8e714c2f10e95829235c2b",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-C7000 Build/MMB29M)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-10T10:22:29.761Z"),
  "updatedAt": ISODate("2017-03-10T10:22:29.761Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c27f33568a2f86524fb45a"),
  "msi_id": "100001488181400338498",
  "account_id": NumberInt(913429778),
  "access_token": "eyJoYXNoIjoiYTYzMmM0MTE4MTllZTY4ZTVjYWM4NjhjNmRkNGJmOTIiLCJtc2lfaWQiOiIxMDAwMDE0ODgxODE0MDAzMzg0OTgiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg4MTgxNDAwMzM4NDk4IiwiaWQiOjkxMzQyOTc3OH0=",
  "hash": "fdf001b937ff22848b03b00779206574",
  "device_id": "b1be02765dbe891473949fe35789a0b29366b326",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-10T10:25:55.189Z"),
  "updatedAt": ISODate("2017-03-10T10:25:55.189Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c6190d568a2f86524fb46d"),
  "msi_id": "100011484647792701793",
  "account_id": NumberInt(900669215),
  "access_token": "eyJoYXNoIjoiNGIzZDlmYzhjNjcyMTY2OTBmYjExYzViNWRlNjA1ZTAiLCJtc2lfaWQiOiIxMDAwMTE0ODQ2NDc3OTI3MDE3OTMiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg0NjQ3NzkyNzAxNzkzIiwiaWQiOjkwMDY2OTIxNX0=",
  "hash": "baf406eaee824fa33e8edef343dc3683",
  "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-13T03:59:09.109Z"),
  "updatedAt": ISODate("2017-03-13T03:59:09.109Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c64d53568a2f86524fb478"),
  "msi_id": "100011484799607878692",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiZTc3ZGFkZGFiNDgwNzYxZGI5NzJjMTgyZjA1ZWQxOWEiLCJtc2lfaWQiOiIxMDAwMTE0ODQ3OTk2MDc4Nzg2OTIiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg0Nzk5NjA3ODc4NjkyIiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "663d940fdf962056a8db9480ff1dbb84",
  "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-13T07:42:11.103Z"),
  "updatedAt": ISODate("2017-03-13T07:42:11.103Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c65073568a2f86524fb479"),
  "msi_id": "100001483949777558244",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiZjljZDlmNDZlYWY1MWE3YmQxYWQyZTIzNDhiMzQzY2UiLCJtc2lfaWQiOiIxMDAwMDE0ODM5NDk3Nzc1NTgyNDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgzOTQ5Nzc3NTU4MjQ0IiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "8471ef796974b038aa4be0f51b7d0eff",
  "device_id": null,
  "user_agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
  "platform": null,
  "channel": null,
  "service_id": "10000",
  "createdAt": ISODate("2017-03-13T07:55:31.462Z"),
  "updatedAt": ISODate("2017-03-13T07:55:31.462Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c650eb568a2f86524fb47a"),
  "msi_id": "100031488438818359707",
  "account_id": NumberInt(833537914),
  "access_token": "eyJoYXNoIjoiZDY4MGM2YjNhM2VkNWUxNzE0MzgxMmI2OTcyZDE0MWYiLCJtc2lfaWQiOiIxMDAwMzE0ODg0Mzg4MTgzNTk3MDciLCJhY2NvdW50X2lkIjoiMTAwMDMxNDg4NDM4ODE4MzU5NzA3IiwiaWQiOjgzMzUzNzkxNH0=",
  "hash": "447311c89d497d31ee3445d9c4f16db2",
  "device_id": "ce10ccaf273f9a88023c5c3e257eaeb04ac321ca",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10003",
  "createdAt": ISODate("2017-03-13T07:57:31.896Z"),
  "updatedAt": ISODate("2017-03-13T07:57:31.896Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c65114568a2f86524fb47c"),
  "msi_id": "100001488852833834620",
  "account_id": NumberInt(932883173),
  "access_token": "eyJoYXNoIjoiOTNjMGQwMGUyNGI1OTYyMGViODU4NGFlMDljYTE0YTUiLCJtc2lfaWQiOiIxMDAwMDE0ODg4NTI4MzM4MzQ2MjAiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg4ODUyODMzODM0NjIwIiwiaWQiOjkzMjg4MzE3M30=",
  "hash": "0ef8c71c91e39b32130254508bfd6e9b",
  "device_id": "cc2ca95c9b143c2986a17e0b5cb6a88a66d530cc",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
  "platform": "ios",
  "channel": "",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-13T07:58:12.769Z"),
  "updatedAt": ISODate("2017-03-13T07:58:12.769Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c7b873568a2f86524fb499"),
  "msi_id": "100031489483891398281",
  "account_id": NumberInt(560708617),
  "access_token": "eyJoYXNoIjoiZjdmODUzYTQ5MjZmYjkzZDIyMDBjZWYwNGM0ZjU3MTIiLCJtc2lfaWQiOiIxMDAwMzE0ODk0ODM4OTEzOTgyODEiLCJhY2NvdW50X2lkIjoiMTAwMDMxNDg5NDgzODkxMzk4MjgxIiwiaWQiOjU2MDcwODYxN30=",
  "hash": "c2dcccd9b319571998ca88b3037fc9d9",
  "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10003",
  "createdAt": ISODate("2017-03-14T09:31:31.15Z"),
  "updatedAt": ISODate("2017-03-14T09:31:31.15Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c8a056568a2f86524fb49f"),
  "msi_id": "100031488771477427155",
  "account_id": NumberInt(106523393),
  "access_token": "eyJoYXNoIjoiMzQxNTU2YzYyNDRmYWZlMzA1N2IxNWY5NDU0YTQ2ZmUiLCJtc2lfaWQiOiIxMDAwMzE0ODg3NzE0Nzc0MjcxNTUiLCJhY2NvdW50X2lkIjoiMTAwMDMxNDg4NzcxNDc3NDI3MTU1IiwiaWQiOjEwNjUyMzM5M30=",
  "hash": "f486e837c3bcd0fa690831b93f50fffe",
  "device_id": "3b96c6e82456c6fb8a33fa513aaffea5a9f3ba95",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-T705 Build/MMB29K)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10003",
  "createdAt": ISODate("2017-03-15T02:00:54.888Z"),
  "updatedAt": ISODate("2017-03-15T02:00:54.888Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c8a16f568a2f86524fb4a0"),
  "msi_id": "100031489543108457440",
  "account_id": NumberInt(351717188),
  "access_token": "eyJoYXNoIjoiMzg2ZTQ0MTZmOGU2NTg5ZGMwYWRlNjRkY2JiNjVmZGIiLCJtc2lfaWQiOiIxMDAwMzE0ODk1NDMxMDg0NTc0NDAiLCJhY2NvdW50X2lkIjoiMTAwMDMxNDg5NTQzMTA4NDU3NDQwIiwiaWQiOjM1MTcxNzE4OH0=",
  "hash": "bf229d41152413acb5b27bad9037136e",
  "device_id": "dec6e2bfd653615598cdbe295c1488d62186ca14",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J7109 Build/MMB29M)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10003",
  "createdAt": ISODate("2017-03-15T02:05:35.635Z"),
  "updatedAt": ISODate("2017-03-15T02:05:35.635Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c8b544568a2f86524fb4a1"),
  "msi_id": "100001488183110339121",
  "account_id": NumberInt(971282243),
  "access_token": "eyJoYXNoIjoiMDkxMzllZmEyODZiZWQ5ODlhZTQ4ZmNiYTc1MGNiMmQiLCJtc2lfaWQiOiIxMDAwMDE0ODgxODMxMTAzMzkxMjEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg4MTgzMTEwMzM5MTIxIiwiaWQiOjk3MTI4MjI0M30=",
  "hash": "b28eda4e4e9ba020c6d0e1ce7d34f32a",
  "device_id": null,
  "user_agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
  "platform": null,
  "channel": null,
  "service_id": "10000",
  "createdAt": ISODate("2017-03-15T03:30:12.806Z"),
  "updatedAt": ISODate("2017-03-15T03:30:12.806Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c8b997568a2f86524fb4a2"),
  "msi_id": "100001483949777558244",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiYjViYTY3N2ZlMDljOTM3N2UzZDg3MTU0Mjg4NWY1NDciLCJtc2lfaWQiOiIxMDAwMDE0ODM5NDk3Nzc1NTgyNDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgzOTQ5Nzc3NTU4MjQ0IiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "ee9945de19b1557930e77600dc3674b9",
  "device_id": null,
  "user_agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
  "platform": null,
  "channel": null,
  "service_id": "10000",
  "createdAt": ISODate("2017-03-15T03:48:39.932Z"),
  "updatedAt": ISODate("2017-03-15T03:48:39.932Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58c9ee4a568a2f86524fb4b7"),
  "msi_id": "100001487922399864225",
  "account_id": NumberInt(560708617),
  "access_token": "eyJoYXNoIjoiMDI5OWI3MDczNjBmM2FkODAwNmZhYjdjYzE0YTRmY2QiLCJtc2lfaWQiOiIxMDAwMDE0ODc5MjIzOTk4NjQyMjUiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3OTIyMzk5ODY0MjI1IiwiaWQiOjU2MDcwODYxN30=",
  "hash": "f8b43e88ec4f465d1313e6628eb4578b",
  "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-16T01:45:46.821Z"),
  "updatedAt": ISODate("2017-03-16T01:45:46.821Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58ca2957568a2f86524fb4cb"),
  "msi_id": "100001489643863988587",
  "account_id": NumberInt(351717188),
  "access_token": "eyJoYXNoIjoiOGEzZTYyYjlkNzI1Mjk1OWIzOTdiZWQ3MDJmNzQ5MDgiLCJtc2lfaWQiOiIxMDAwMDE0ODk2NDM4NjM5ODg1ODciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg5NjQzODYzOTg4NTg3IiwiaWQiOjM1MTcxNzE4OH0=",
  "hash": "e929ad7a5223693cee7b1b300e9014df",
  "device_id": "960ff71a907b340b64adb0fab17098064aedf3e2",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; vivo Y20T Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-16T05:57:43.147Z"),
  "updatedAt": ISODate("2017-03-16T05:57:43.147Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58ca333d568a2f86524fb4da"),
  "msi_id": "100011489646398410841",
  "account_id": NumberInt(535239602),
  "access_token": "eyJoYXNoIjoiZGIyOTVlZjRhZDgyNzI2NzI2M2IzMWQ2MGEzNGQ2ZDgiLCJtc2lfaWQiOiIxMDAwMTE0ODk2NDYzOTg0MTA4NDEiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg5NjQ2Mzk4NDEwODQxIiwiaWQiOjUzNTIzOTYwMn0=",
  "hash": "760c1e408bc1afebf208b0abc95c5460",
  "device_id": "62b5a12864f0d67447dadc359990a53f5f3b6964",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-16T06:39:57.903Z"),
  "updatedAt": ISODate("2017-03-16T06:39:57.903Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58ca40d3568a2f86524fb4e1"),
  "msi_id": "100001484107858481695",
  "account_id": NumberInt(826337153),
  "access_token": "eyJoYXNoIjoiOWI5NDNlZjI4ZmIyNDYwZDliOTEyZjVkNWZlYjA5NTUiLCJtc2lfaWQiOiIxMDAwMDE0ODQxMDc4NTg0ODE2OTUiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MTA3ODU4NDgxNjk1IiwiaWQiOjgyNjMzNzE1M30=",
  "hash": "263c1650bc92e3f84e7bc6634f8e5410",
  "device_id": null,
  "user_agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
  "platform": null,
  "channel": null,
  "service_id": "10000",
  "createdAt": ISODate("2017-03-16T07:37:55.707Z"),
  "updatedAt": ISODate("2017-03-16T07:37:55.707Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58ca41bc568a2f86524fb4e3"),
  "msi_id": "100001487922399864225",
  "account_id": NumberInt(560708617),
  "access_token": "eyJoYXNoIjoiZGQxMDAzOGMwNjc0YmVkYzY2NjA1NjEwNzMwYmEzZjkiLCJtc2lfaWQiOiIxMDAwMDE0ODc5MjIzOTk4NjQyMjUiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3OTIyMzk5ODY0MjI1IiwiaWQiOjU2MDcwODYxN30=",
  "hash": "8c3875948cabbea06693cee7f4a01071",
  "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-16T07:41:48.739Z"),
  "updatedAt": ISODate("2017-03-16T07:41:48.739Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58ca4f9a568a2f86524fb4e6"),
  "msi_id": "100001484107858481695",
  "account_id": NumberInt(826337153),
  "access_token": "eyJoYXNoIjoiMTYxOTZhYjdjNGFlMGU2ZmYyYzBmOTM4MGQzODFkZmUiLCJtc2lfaWQiOiIxMDAwMDE0ODQxMDc4NTg0ODE2OTUiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MTA3ODU4NDgxNjk1IiwiaWQiOjgyNjMzNzE1M30=",
  "hash": "58651c98139dfc0e8cc00928812f9d69",
  "device_id": null,
  "user_agent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
  "platform": null,
  "channel": null,
  "service_id": "10000",
  "createdAt": ISODate("2017-03-16T08:40:58.194Z"),
  "updatedAt": ISODate("2017-03-16T08:40:58.194Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58ca9f03568a2f86524fb4f5"),
  "msi_id": "100011489117811577386",
  "account_id": NumberInt(187893547),
  "access_token": "eyJoYXNoIjoiOGE2NWE5MTg2ZjEzMmRjZDAzMjkzNmUwNjlhYTUyZDQiLCJtc2lfaWQiOiIxMDAwMTE0ODkxMTc4MTE1NzczODYiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg5MTE3ODExNTc3Mzg2IiwiaWQiOjE4Nzg5MzU0N30=",
  "hash": "992faa560fa6b6120ea61f6caef53ac5",
  "device_id": "dec6e2bfd653615598cdbe295c1488d62186ca14",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J7109 Build/MMB29M)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-16T14:19:47.31Z"),
  "updatedAt": ISODate("2017-03-16T14:19:47.31Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58cb3f50568a2f86524fb4fb"),
  "msi_id": "100001489644721504717",
  "account_id": NumberInt(424810432),
  "access_token": "eyJoYXNoIjoiNDJmYTc3NTMyYzdmMTg5NmE4NDZmMWE5NzU5OGMzOGEiLCJtc2lfaWQiOiIxMDAwMDE0ODk2NDQ3MjE1MDQ3MTciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg5NjQ0NzIxNTA0NzE3IiwiaWQiOjQyNDgxMDQzMn0=",
  "hash": "d75e89196f33ddf66a842daaa515e17d",
  "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-17T01:43:44.424Z"),
  "updatedAt": ISODate("2017-03-17T01:43:44.424Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58cb4126568a2f86524fb4fc"),
  "msi_id": "100001489644721504717",
  "account_id": NumberInt(424810432),
  "access_token": "eyJoYXNoIjoiZGZkMGU1MzQzOGVjMTQyOTEzNTEwYTBiMDZhZDI3NjQiLCJtc2lfaWQiOiIxMDAwMDE0ODk2NDQ3MjE1MDQ3MTciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg5NjQ0NzIxNTA0NzE3IiwiaWQiOjQyNDgxMDQzMn0=",
  "hash": "343df1d7660630aff34491cc6401ba6d",
  "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-17T01:51:34.613Z"),
  "updatedAt": ISODate("2017-03-17T01:51:34.613Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58cf3753568a2f86524fb50c"),
  "msi_id": "100001483949777558244",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiNWE2ZDg2MTk4MDFlZDFiNDJmYzNmMDY2MWRiNzI3OWUiLCJtc2lfaWQiOiIxMDAwMDE0ODM5NDk3Nzc1NTgyNDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgzOTQ5Nzc3NTU4MjQ0IiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "eaf8b8152ed06ca3c7952cf662f24636",
  "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-20T01:58:43.211Z"),
  "updatedAt": ISODate("2017-03-20T01:58:43.211Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58cf3f7c568a2f86524fb512"),
  "msi_id": "100011489977212286065",
  "account_id": NumberInt(496791534),
  "access_token": "eyJoYXNoIjoiN2U0MTljZmE3ZWExZGFlMzM0NDMxNmMyNzQ5ZWY5NDQiLCJtc2lfaWQiOiIxMDAwMTE0ODk5NzcyMTIyODYwNjUiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg5OTc3MjEyMjg2MDY1IiwiaWQiOjQ5Njc5MTUzNH0=",
  "hash": "a1dcf9cbe3ca4494da7b237b6bc1a18c",
  "device_id": "66c1e3d4582377cca556b310f6b7e189e005e045",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-20T02:33:32.400Z"),
  "updatedAt": ISODate("2017-03-20T02:33:32.400Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58cf4000568a2f86524fb515"),
  "msi_id": "100011489977344427578",
  "account_id": NumberInt(365513464),
  "access_token": "eyJoYXNoIjoiYzA3NzIwZWI4ZjNiNmY0OWNiMzYyZmZiMDJiNWEwY2YiLCJtc2lfaWQiOiIxMDAwMTE0ODk5NzczNDQ0Mjc1NzgiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg5OTc3MzQ0NDI3NTc4IiwiaWQiOjM2NTUxMzQ2NH0=",
  "hash": "2a05c54e4365d9c6de188f0f88bae5b4",
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-20T02:35:44.412Z"),
  "updatedAt": ISODate("2017-03-20T02:35:44.412Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58cf44ef568a2f86524fb517"),
  "msi_id": "100011484799607878692",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiODIyYzlmOTk0OThkOWFiMjI5MWRkNjBiMDRkNTJlY2IiLCJtc2lfaWQiOiIxMDAwMTE0ODQ3OTk2MDc4Nzg2OTIiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg0Nzk5NjA3ODc4NjkyIiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "90d5caf5341ae559cc78b44c41581744",
  "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-20T02:56:47.624Z"),
  "updatedAt": ISODate("2017-03-20T02:56:47.624Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58cf8494568a2f86524fb53c"),
  "msi_id": "100001484033032496707",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiNDAwNGUwNGQyY2Q5MGExODNkMTliZDg2MTA5MDNiY2QiLCJtc2lfaWQiOiIxMDAwMDE0ODQwMzMwMzI0OTY3MDciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg0MDMzMDMyNDk2NzA3IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "1366cef02fad36af3a73855653ab508d",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-20T07:28:20.907Z"),
  "updatedAt": ISODate("2017-03-20T07:28:20.907Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58cf8d27568a2f86524fb53d"),
  "msi_id": "100011489981003402879",
  "account_id": NumberInt(723675476),
  "access_token": "eyJoYXNoIjoiYWNkYWU5NWYzMzZkNjE1MThlOGE3ZTdjNDE1YTI0Y2YiLCJtc2lfaWQiOiIxMDAwMTE0ODk5ODEwMDM0MDI4NzkiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg5OTgxMDAzNDAyODc5IiwiaWQiOjcyMzY3NTQ3Nn0=",
  "hash": "12d39964a17a9cebfb147b73fe1a1a8b",
  "device_id": "23094ddbb07ab715df0d4430fdb079164f5acb50",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-20T08:04:55.453Z"),
  "updatedAt": ISODate("2017-03-20T08:04:55.453Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58cf9b11568a2f86524fb53e"),
  "msi_id": "100001483949777558244",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiZDhmNDdiZDI3ZWRjZjkyZjU1MWY3MmZlYWVmYjcwYjQiLCJtc2lfaWQiOiIxMDAwMDE0ODM5NDk3Nzc1NTgyNDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgzOTQ5Nzc3NTU4MjQ0IiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "770668299c349b6892f04c9152f8ca3e",
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-20T09:04:17.824Z"),
  "updatedAt": ISODate("2017-03-20T09:04:17.824Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58cf9c82568a2f86524fb53f"),
  "msi_id": "100011484799607878692",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiODM2ZmM2NTk1ZDQwNmQyYWQxZTRkNzUyYjgyNzg5ZTIiLCJtc2lfaWQiOiIxMDAwMTE0ODQ3OTk2MDc4Nzg2OTIiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg0Nzk5NjA3ODc4NjkyIiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "60b6441e62ed96d3cb8c7443c8e2db46",
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-20T09:10:26.644Z"),
  "updatedAt": ISODate("2017-03-20T09:10:26.644Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58cf9db4568a2f86524fb540"),
  "msi_id": "100001483950178194044",
  "account_id": NumberInt(623603900),
  "access_token": "eyJoYXNoIjoiOGU1NzRkZmQ4MzJiZjZkNmUwZTVhMjg2ODJkMGU5NTQiLCJtc2lfaWQiOiIxMDAwMDE0ODM5NTAxNzgxOTQwNDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgzOTUwMTc4MTk0MDQ0IiwiaWQiOjYyMzYwMzkwMH0=",
  "hash": "a1d2bccfb6073913a4141bb1eb763240",
  "device_id": "51631e0373dd95b04be111c1a308e26909e1f294",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; VPhone Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-20T09:15:32.357Z"),
  "updatedAt": ISODate("2017-03-20T09:15:32.357Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d08679568a2f86524fb545"),
  "msi_id": "100001482726020485641",
  "account_id": NumberInt(134435319),
  "access_token": "eyJoYXNoIjoiNzdmMWM0ZDAyYWQzNzdjNTMzNDliOTI3MTIxMmQwMTQiLCJtc2lfaWQiOiIxMDAwMDE0ODI3MjYwMjA0ODU2NDEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgyNzI2MDIwNDg1NjQxIiwiaWQiOjEzNDQzNTMxOX0=",
  "hash": "8503cb120c5c97b56e59edc85b082d9c",
  "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-21T01:48:41.277Z"),
  "updatedAt": ISODate("2017-03-21T01:48:41.277Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d091f7568a2f86524fb548"),
  "msi_id": "100001488183110339121",
  "account_id": NumberInt(971282243),
  "access_token": "eyJoYXNoIjoiM2VkYzhjYjRjYzA5M2QwYzFjODRmMTY5OWJkMzI2YzAiLCJtc2lfaWQiOiIxMDAwMDE0ODgxODMxMTAzMzkxMjEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg4MTgzMTEwMzM5MTIxIiwiaWQiOjk3MTI4MjI0M30=",
  "hash": "64219e9f07b3dfce93d9d1b1947274dd",
  "device_id": null,
  "user_agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
  "platform": null,
  "channel": null,
  "service_id": "10000",
  "createdAt": ISODate("2017-03-21T02:37:43.61Z"),
  "updatedAt": ISODate("2017-03-21T02:37:43.61Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d093de568a2f86524fb549"),
  "msi_id": "100001489804885343585",
  "account_id": NumberInt(299389352),
  "access_token": "eyJoYXNoIjoiMmRmMTZkYTcwMjcwNDE0MThkMGFkMzM2OWRhOWJiNTciLCJtc2lfaWQiOiIxMDAwMDE0ODk4MDQ4ODUzNDM1ODUiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg5ODA0ODg1MzQzNTg1IiwiaWQiOjI5OTM4OTM1Mn0=",
  "hash": "541ede821790d1f849ff99785281ce3c",
  "device_id": "14caeff4f25ef9718bcc68f79443cb2edd6e699f",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-21T02:45:50.557Z"),
  "updatedAt": ISODate("2017-03-21T02:45:50.557Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d09ddc568a2f86524fb54b"),
  "msi_id": "100001488183110339121",
  "account_id": NumberInt(971282243),
  "access_token": "eyJoYXNoIjoiOWI0OTRkZmZjYzhmMTczZmE4YmY0YjhhMDMxZGM2MGMiLCJtc2lfaWQiOiIxMDAwMDE0ODgxODMxMTAzMzkxMjEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg4MTgzMTEwMzM5MTIxIiwiaWQiOjk3MTI4MjI0M30=",
  "hash": "6efc74fa339f8e74da23a999cadc8778",
  "device_id": null,
  "user_agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
  "platform": null,
  "channel": null,
  "service_id": "10000",
  "createdAt": ISODate("2017-03-21T03:28:28.689Z"),
  "updatedAt": ISODate("2017-03-21T03:28:28.689Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d09f98568a2f86524fb54c"),
  "msi_id": "100011484799607878692",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiZjFjMzIyN2M2MjI2MjNkM2Y4Mjk0YmRhYjc4MWY3M2MiLCJtc2lfaWQiOiIxMDAwMTE0ODQ3OTk2MDc4Nzg2OTIiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg0Nzk5NjA3ODc4NjkyIiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "e543628353cd3883e23a42d1c83b3092",
  "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-21T03:35:52.856Z"),
  "updatedAt": ISODate("2017-03-21T03:35:52.856Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0a0e2568a2f86524fb54d"),
  "msi_id": "100011484799607878692",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiMGQwNjQzZjJjOWJjZmY3Nzk5NzI0ZThhODk3MWRkOGMiLCJtc2lfaWQiOiIxMDAwMTE0ODQ3OTk2MDc4Nzg2OTIiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg0Nzk5NjA3ODc4NjkyIiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "34b78b619f04f77eed3ea31944410d0c",
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-21T03:41:22.137Z"),
  "updatedAt": ISODate("2017-03-21T03:41:22.137Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0a148568a2f86524fb54e"),
  "msi_id": "100001488183110339121",
  "account_id": NumberInt(971282243),
  "access_token": "eyJoYXNoIjoiMjc4M2I5MmNkN2UzZTI3NGE2ZWY3MGQ0ZWI1ODNkYTUiLCJtc2lfaWQiOiIxMDAwMDE0ODgxODMxMTAzMzkxMjEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg4MTgzMTEwMzM5MTIxIiwiaWQiOjk3MTI4MjI0M30=",
  "hash": "4c29e28117603340516f555f57363161",
  "device_id": null,
  "user_agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
  "platform": null,
  "channel": null,
  "service_id": "10000",
  "createdAt": ISODate("2017-03-21T03:43:04.353Z"),
  "updatedAt": ISODate("2017-03-21T03:43:04.353Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0a224568a2f86524fb552"),
  "msi_id": "100011490068004723650",
  "account_id": NumberInt(861346265),
  "access_token": "eyJoYXNoIjoiYzZmNmIyOTUwYjFmNzdjYmRkMWVmMTU3ZTVkYzlhNGIiLCJtc2lfaWQiOiIxMDAwMTE0OTAwNjgwMDQ3MjM2NTAiLCJhY2NvdW50X2lkIjoiMTAwMDExNDkwMDY4MDA0NzIzNjUwIiwiaWQiOjg2MTM0NjI2NX0=",
  "hash": "70fda7d5f47167ce08217445c3e84f1d",
  "device_id": "65251d5b93c829e03961b2804f4e2ad05312cb20",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-21T03:46:44.93Z"),
  "updatedAt": ISODate("2017-03-21T03:46:44.93Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0a2ad568a2f86524fb554"),
  "msi_id": "100001488183110339121",
  "account_id": NumberInt(971282243),
  "access_token": "eyJoYXNoIjoiMGUzY2NiNzU4N2Y2MTM5YzI4ZDkyNmVhYjg0YTU4ZDUiLCJtc2lfaWQiOiIxMDAwMDE0ODgxODMxMTAzMzkxMjEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg4MTgzMTEwMzM5MTIxIiwiaWQiOjk3MTI4MjI0M30=",
  "hash": "eb0b35369edbc4418c79d43e5060f1b0",
  "device_id": null,
  "user_agent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
  "platform": null,
  "channel": null,
  "service_id": "10000",
  "createdAt": ISODate("2017-03-21T03:49:01.277Z"),
  "updatedAt": ISODate("2017-03-21T03:49:01.277Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0ac28568a2f86524fb555"),
  "msi_id": "100001483949777558244",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiYTNkNWI2YzIxYWRiODY3ZTg2N2JjOTZlMjlkZGMyZjAiLCJtc2lfaWQiOiIxMDAwMDE0ODM5NDk3Nzc1NTgyNDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgzOTQ5Nzc3NTU4MjQ0IiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "be3ffa4e1b80ec114ac6e2b73f11b479",
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-21T04:29:28.799Z"),
  "updatedAt": ISODate("2017-03-21T04:29:28.799Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0ca3a568a2f86524fb556"),
  "msi_id": "100001482726020485641",
  "account_id": NumberInt(134435319),
  "access_token": "eyJoYXNoIjoiMWJkZmFlZGQwYTZmNTk4NTBiYjk5NWFkMTNhOTljYTIiLCJtc2lfaWQiOiIxMDAwMDE0ODI3MjYwMjA0ODU2NDEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgyNzI2MDIwNDg1NjQxIiwiaWQiOjEzNDQzNTMxOX0=",
  "hash": "a67f6eb8301ca960745c5e1c9bac09dc",
  "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-21T06:37:46.694Z"),
  "updatedAt": ISODate("2017-03-21T06:37:46.694Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0d1e9568a2f86524fb55b"),
  "msi_id": "100011490080234984552",
  "account_id": NumberInt(299389352),
  "access_token": "eyJoYXNoIjoiZDYyOWFkZGY0MTIyNmFmYWViZGJmYTliNzBjYWUyMDUiLCJtc2lfaWQiOiIxMDAwMTE0OTAwODAyMzQ5ODQ1NTIiLCJhY2NvdW50X2lkIjoiMTAwMDExNDkwMDgwMjM0OTg0NTUyIiwiaWQiOjI5OTM4OTM1Mn0=",
  "hash": "56acc0de028e126d85bbf930b409c54e",
  "device_id": "14caeff4f25ef9718bcc68f79443cb2edd6e699f",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-21T07:10:33.711Z"),
  "updatedAt": ISODate("2017-03-21T07:10:33.711Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0d50e568a2f86524fb560"),
  "msi_id": "100001488784266120301",
  "account_id": NumberInt(440605678),
  "access_token": "eyJoYXNoIjoiZjZlNDU3MzgzMGNlNGMyNjhhMjk4MjZkNmZiMjE1NGEiLCJtc2lfaWQiOiIxMDAwMDE0ODg3ODQyNjYxMjAzMDEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg4Nzg0MjY2MTIwMzAxIiwiaWQiOjQ0MDYwNTY3OH0=",
  "hash": "d1aa5f0f802b6dec8498d256d4bd69ab",
  "device_id": "3b96c6e82456c6fb8a33fa513aaffea5a9f3ba95",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-T705 Build/MMB29K)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-21T07:23:58.671Z"),
  "updatedAt": ISODate("2017-03-21T07:23:58.671Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0da09568a2f86524fb563"),
  "msi_id": "100001490082314984417",
  "account_id": NumberInt(187893547),
  "access_token": "eyJoYXNoIjoiOGQ3MWEwYzUwOTc0NWVmNDI5ZTU3OGM2MWU2ZjljNWQiLCJtc2lfaWQiOiIxMDAwMDE0OTAwODIzMTQ5ODQ0MTciLCJhY2NvdW50X2lkIjoiMTAwMDAxNDkwMDgyMzE0OTg0NDE3IiwiaWQiOjE4Nzg5MzU0N30=",
  "hash": "33625c69d2c475d48d0feed5d3dbed19",
  "device_id": "dec6e2bfd653615598cdbe295c1488d62186ca14",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J7109 Build/MMB29M)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-21T07:45:13.823Z"),
  "updatedAt": ISODate("2017-03-21T07:45:13.823Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0e00a568a2f86524fb566"),
  "msi_id": "100011490083851607376",
  "account_id": NumberInt(623603900),
  "access_token": "eyJoYXNoIjoiZGQ0NTJlYTMxMzc3OTFhZDE5YTg1MjhiNzBjNGZlMDEiLCJtc2lfaWQiOiIxMDAwMTE0OTAwODM4NTE2MDczNzYiLCJhY2NvdW50X2lkIjoiMTAwMDExNDkwMDgzODUxNjA3Mzc2IiwiaWQiOjYyMzYwMzkwMH0=",
  "hash": "31bd38fd40f01d30490b289771b4e171",
  "device_id": "51631e0373dd95b04be111c1a308e26909e1f294",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; VPhone Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-21T08:10:50.783Z"),
  "updatedAt": ISODate("2017-03-21T08:10:50.783Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0f5ac568a2f86524fb56e"),
  "msi_id": "100011487042057183247",
  "account_id": NumberInt(801893030),
  "access_token": "eyJoYXNoIjoiYjU0M2YwYjY5NGM2YmZjMzVhNTkwODY2ZjY3NTgwZWUiLCJtc2lfaWQiOiIxMDAwMTE0ODcwNDIwNTcxODMyNDciLCJhY2NvdW50X2lkIjoiMTAwMDExNDg3MDQyMDU3MTgzMjQ3IiwiaWQiOjgwMTg5MzAzMH0=",
  "hash": "61bf3e921771834bc144dbd4d6eb609f",
  "device_id": "eb9278e0a627deac963c10d13bae587916663674",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "platform": "ios",
  "channel": "",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-21T09:43:08.958Z"),
  "updatedAt": ISODate("2017-03-21T09:43:08.958Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0f690568a2f86524fb56f"),
  "msi_id": "100011482721615287221",
  "account_id": NumberInt(271593315),
  "access_token": "eyJoYXNoIjoiM2Y5MDRhMTM5YzExYTNiMDllNWYzNTUxMmVlZTEwYmEiLCJtc2lfaWQiOiIxMDAwMTE0ODI3MjE2MTUyODcyMjEiLCJhY2NvdW50X2lkIjoiMTAwMDExNDgyNzIxNjE1Mjg3MjIxIiwiaWQiOjI3MTU5MzMxNX0=",
  "hash": "4a3103e30f9c71e31e7d0a835fcd0892",
  "device_id": "1e46cb4954ed84728f0cd53baf2093cefe20cca8",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; MI 5 MIUI/V8.2.1.0.NAACNEB)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-21T09:46:56.175Z"),
  "updatedAt": ISODate("2017-03-21T09:46:56.175Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d0f87d568a2f86524fb570"),
  "msi_id": "100011487042057183247",
  "account_id": NumberInt(801893030),
  "access_token": "eyJoYXNoIjoiZTRkN2Q1YTk5OTFkOTI5NjNlYWUyODg4ZDIzZTYwZTAiLCJtc2lfaWQiOiIxMDAwMTE0ODcwNDIwNTcxODMyNDciLCJhY2NvdW50X2lkIjoiMTAwMDExNDg3MDQyMDU3MTgzMjQ3IiwiaWQiOjgwMTg5MzAzMH0=",
  "hash": "851f6f3e137a1346d599f0bfb6650d54",
  "device_id": "eb9278e0a627deac963c10d13bae587916663674",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "platform": "ios",
  "channel": "",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-21T09:55:09.482Z"),
  "updatedAt": ISODate("2017-03-21T09:55:09.482Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d1e587568a2f86524fb585"),
  "msi_id": "100011487042057183247",
  "account_id": NumberInt(801893030),
  "access_token": "eyJoYXNoIjoiN2MxZTFjYzllMTU0MGQ3MDdmNTgyNDdlZDNhMTE2ZWUiLCJtc2lfaWQiOiIxMDAwMTE0ODcwNDIwNTcxODMyNDciLCJhY2NvdW50X2lkIjoiMTAwMDExNDg3MDQyMDU3MTgzMjQ3IiwiaWQiOjgwMTg5MzAzMH0=",
  "hash": "b439d94b24839c304a4b056c1083fdb4",
  "device_id": "eb9278e0a627deac963c10d13bae587916663674",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "platform": "ios",
  "channel": "",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-22T02:46:31.32Z"),
  "updatedAt": ISODate("2017-03-22T02:46:31.32Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d1ea79568a2f86524fb586"),
  "msi_id": "100001483949777558244",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiZjgyODY1NGFjMWIyMjY3MWNhMDMxM2EzNWQ1YzRjYWQiLCJtc2lfaWQiOiIxMDAwMDE0ODM5NDk3Nzc1NTgyNDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgzOTQ5Nzc3NTU4MjQ0IiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "d5d7058a756f24b66cb4c8d924393916",
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-22T03:07:37.538Z"),
  "updatedAt": ISODate("2017-03-22T03:07:37.538Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d1eaf4568a2f86524fb588"),
  "msi_id": "100011490152180312445",
  "account_id": NumberInt(622299893),
  "access_token": "eyJoYXNoIjoiN2M3ZDI1ODFhYTk1ZDI2ZGMyZTljNzQ4NTZiMGRlYWEiLCJtc2lfaWQiOiIxMDAwMTE0OTAxNTIxODAzMTI0NDUiLCJhY2NvdW50X2lkIjoiMTAwMDExNDkwMTUyMTgwMzEyNDQ1IiwiaWQiOjYyMjI5OTg5M30=",
  "hash": "6681d9d1dec5218b507b5d5b4ecc193c",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-22T03:09:40.467Z"),
  "updatedAt": ISODate("2017-03-22T03:09:40.467Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d1f0a2568a2f86524fb589"),
  "msi_id": "100011484799607878692",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiZTgwYmFkNGYzZmQ5Y2YzZDA1ODM5MDIxODk2MGQ5NWIiLCJtc2lfaWQiOiIxMDAwMTE0ODQ3OTk2MDc4Nzg2OTIiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg0Nzk5NjA3ODc4NjkyIiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "96c3f1f04d2a7ab4b01a6605f0bfd78d",
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-22T03:33:54.803Z"),
  "updatedAt": ISODate("2017-03-22T03:33:54.803Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d1f676568a2f86524fb58a"),
  "msi_id": "100001483949777558244",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiODg3NWVhN2FhZGY3MzIzOThlNTA1NmExMDMwMmJmMDQiLCJtc2lfaWQiOiIxMDAwMDE0ODM5NDk3Nzc1NTgyNDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgzOTQ5Nzc3NTU4MjQ0IiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "fb6924bb020d396f0f4de63170f3c65a",
  "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-22T03:58:46.108Z"),
  "updatedAt": ISODate("2017-03-22T03:58:46.108Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d1f73a568a2f86524fb58b"),
  "msi_id": "100011484799607878692",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiNTE4YjgzOTczM2QzZDhkNGU4MTE5NDZjY2ZhMmFhNjkiLCJtc2lfaWQiOiIxMDAwMTE0ODQ3OTk2MDc4Nzg2OTIiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg0Nzk5NjA3ODc4NjkyIiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "70a2a87430b2070dda4626e8ec878321",
  "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-22T04:02:02.249Z"),
  "updatedAt": ISODate("2017-03-22T04:02:02.249Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d1f86b568a2f86524fb58c"),
  "msi_id": "100011484799607878692",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiNzNmNjgxYzI5M2QyZWNlNmRmY2U5YzQxZTA2M2YwMzEiLCJtc2lfaWQiOiIxMDAwMTE0ODQ3OTk2MDc4Nzg2OTIiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg0Nzk5NjA3ODc4NjkyIiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "d92f8828bf981f5667726fc31cbcd4a4",
  "device_id": "1f54f3ab6533af34c86b15d194fd5a9f774327fe",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92",
  "platform": "ios",
  "channel": "",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-22T04:07:07.957Z"),
  "updatedAt": ISODate("2017-03-22T04:07:07.957Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d1fbcb568a2f86524fb58d"),
  "msi_id": "100011484799607878692",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiNDljZDAwNTBhODEzYmQ4ZTYyMWIxMGY0NGUzYzdmMTgiLCJtc2lfaWQiOiIxMDAwMTE0ODQ3OTk2MDc4Nzg2OTIiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg0Nzk5NjA3ODc4NjkyIiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "551a7cf1dabe43d2a31c5d086704234c",
  "device_id": "1f54f3ab6533af34c86b15d194fd5a9f774327fe",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92",
  "platform": "ios",
  "channel": "",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-22T04:21:31.490Z"),
  "updatedAt": ISODate("2017-03-22T04:21:31.490Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d3467b568a2f86524fb597"),
  "msi_id": "100011484799607878692",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiZjYyYzMzNzcwMTgyYTc1YjhkZjYyYjQwNTY2MTU3YTIiLCJtc2lfaWQiOiIxMDAwMTE0ODQ3OTk2MDc4Nzg2OTIiLCJhY2NvdW50X2lkIjoiMTAwMDExNDg0Nzk5NjA3ODc4NjkyIiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "83639c7e199ae160cfdee0fb4b6c541e",
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-23T03:52:27.629Z"),
  "updatedAt": ISODate("2017-03-23T03:52:27.629Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d34956568a2f86524fb599"),
  "msi_id": "100011490241879186011",
  "account_id": NumberInt(850291276),
  "access_token": "eyJoYXNoIjoiMjVlMjY1MTA1YTFmNjg4ZGY2NWU4NTlmYWY0MTg3NzAiLCJtc2lfaWQiOiIxMDAwMTE0OTAyNDE4NzkxODYwMTEiLCJhY2NvdW50X2lkIjoiMTAwMDExNDkwMjQxODc5MTg2MDExIiwiaWQiOjg1MDI5MTI3Nn0=",
  "hash": "107adfdf7c997aecc0bcc75f7e961c72",
  "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-23T04:04:38.963Z"),
  "updatedAt": ISODate("2017-03-23T04:04:38.963Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d34d4a568a2f86524fb59b"),
  "msi_id": "100001483949777558244",
  "account_id": NumberInt(664494000),
  "access_token": "eyJoYXNoIjoiZWJmZjY5MzFhOGU1ODAxYTE4ZjY1OGFmM2UyZGYzMTciLCJtc2lfaWQiOiIxMDAwMDE0ODM5NDk3Nzc1NTgyNDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDgzOTQ5Nzc3NTU4MjQ0IiwiaWQiOjY2NDQ5NDAwMH0=",
  "hash": "32116349b28f3e67dfd8f9e452c99ede",
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-23T04:21:30.901Z"),
  "updatedAt": ISODate("2017-03-23T04:21:30.901Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d34dbc568a2f86524fb59c"),
  "msi_id": "100001487661079891904",
  "account_id": NumberInt(850291276),
  "access_token": "eyJoYXNoIjoiNGZhMmUzN2U3ZGE5YjNlZDU3YTYwNzhmNTYzNmRmODQiLCJtc2lfaWQiOiIxMDAwMDE0ODc2NjEwNzk4OTE5MDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NjYxMDc5ODkxOTA0IiwiaWQiOjg1MDI5MTI3Nn0=",
  "hash": "26d61cbf9d553a96bbece7a19e730c5f",
  "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-23T04:23:24.26Z"),
  "updatedAt": ISODate("2017-03-23T04:23:24.26Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d38852568a2f86524fb59f"),
  "msi_id": "100001487661079891904",
  "account_id": NumberInt(850291276),
  "access_token": "eyJoYXNoIjoiZTk2YTUwNGIyZjM2MjZiMzk5OGZjZjA3YzhlZGU2NzkiLCJtc2lfaWQiOiIxMDAwMDE0ODc2NjEwNzk4OTE5MDQiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg3NjYxMDc5ODkxOTA0IiwiaWQiOjg1MDI5MTI3Nn0=",
  "hash": "d7a0ee5d438733715313e7964f792d4f",
  "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-23T08:33:22.472Z"),
  "updatedAt": ISODate("2017-03-23T08:33:22.472Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d4c5bf568a2f86524fb5a3"),
  "msi_id": "100001489141594185309",
  "account_id": NumberInt(533403062),
  "access_token": "eyJoYXNoIjoiZjAwMjI1YTYyNDYwNzgxODQ1ZjgwMjczYjZkMzdkMmUiLCJtc2lfaWQiOiIxMDAwMDE0ODkxNDE1OTQxODUzMDkiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDg5MTQxNTk0MTg1MzA5IiwiaWQiOjUzMzQwMzA2Mn0=",
  "hash": "8cd87e4b0aae7eb35faa31633aed6f1b",
  "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-24T07:07:43.255Z"),
  "updatedAt": ISODate("2017-03-24T07:07:43.255Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d4c8c0568a2f86524fb5a7"),
  "msi_id": "100001490340033286271",
  "account_id": NumberInt(209775808),
  "access_token": "eyJoYXNoIjoiNmQ5OGY5OTk1OTM4OWI0MjIwMWIyYmFiMTE2MGYyOGYiLCJtc2lfaWQiOiIxMDAwMDE0OTAzNDAwMzMyODYyNzEiLCJhY2NvdW50X2lkIjoiMTAwMDAxNDkwMzQwMDMzMjg2MjcxIiwiaWQiOjIwOTc3NTgwOH0=",
  "hash": "1e301ba28769a324b446b44f7b7976a4",
  "device_id": "f9b349c1867d707127f96d2eb7221b9fefeb2c36",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10000",
  "createdAt": ISODate("2017-03-24T07:20:32.978Z"),
  "updatedAt": ISODate("2017-03-24T07:20:32.978Z")
});
db.getCollection("access_token").insert({
  "_id": ObjectId("58d4d044568a2f86524fb5a9"),
  "msi_id": "100011487233801304787",
  "account_id": NumberInt(477637806),
  "access_token": "eyJoYXNoIjoiMzM2MzM0OWU4Mjc4NmJmOTQ2MzgzZWQ3ZDBkYTlmODUiLCJtc2lfaWQiOiIxMDAwMTE0ODcyMzM4MDEzMDQ3ODciLCJhY2NvdW50X2lkIjoiMTAwMDExNDg3MjMzODAxMzA0Nzg3IiwiaWQiOjQ3NzYzNzgwNn0=",
  "hash": "77607aa92f94589824be3fb05e2add26",
  "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
  "platform": "android",
  "channel": "empty",
  "service_id": "10001",
  "createdAt": ISODate("2017-03-24T07:52:36.835Z"),
  "updatedAt": ISODate("2017-03-24T07:52:36.835Z")
});

/** accounts records **/
db.getCollection("accounts").insert({
  "_id": ObjectId("585bbba80003bd3f1452e77c"),
  "sd": {
    "aCD": [
      "hDtO5YyIqr43YmtFJ1DFwpPBmrqu6MVcAbrEnjtpzt4="
    ],
    "aD": "AKl79pWG0I5bqolRNHcEo55KNMiuRqWm7OTdegXfaKc=",
    "cDb": true,
    "cR": true,
    "cS": "D7A1F6C37ACBED8CE5ACA63E41D0CC9ED0284E72",
    "e": true,
    "vI": false
  },
  "device_id": "fccf5ba067af9f7903a8f151ee3b3a7a33119e1e",
  "telco": "Android",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Android SDK built for x86_64 Build/LMY48X)",
  "type": "device",
  "google_aid": "0",
  "ip": {
    "user": "fe80::5054:ff:fe12:3456%eth0",
    "public": "115.78.161.88"
  },
  "status": "normal",
  "account_id": NumberInt(469086595),
  "createdAt": ISODate("2016-12-22T11:40:24.4Z"),
  "updatedAt": ISODate("2016-12-23T10:28:22.493Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482406824524643",
      "createdAt": ISODate("2016-12-22T11:40:24.22Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("585bdc8c0003bd3f1452e781"),
  "sd": {
    "aCD": [
      "QqPVSVmfR/abMog8f/J4/aOi/8plX/enRqao2QYurBA="
    ],
    "aD": "+/d+yRijo8rrSKfDx7xLbzHIb8kPYMV+l54xQ4l/wOk=",
    "cDb": true,
    "cR": true,
    "cS": "806175985D09B121230ABD08776B9201BD5C4071",
    "e": false,
    "vI": false
  },
  "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
  "telco": "empty",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
  "type": "default",
  "google_aid": "9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC",
  "ip": {
    "user": "192.168.1.89",
    "public": "42.119.222.102"
  },
  "status": "normal",
  "account_id": NumberInt(825614777),
  "createdAt": ISODate("2016-12-22T14:00:44.247Z"),
  "updatedAt": ISODate("2017-03-16T01:53:22.572Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482415244549336",
      "createdAt": ISODate("2016-12-22T14:00:44.262Z")
    },
    {
      "app": "10001",
      "msi_id": "100011484648123475895",
      "createdAt": ISODate("2017-01-17T10:15:23.351Z")
    }
  ],
  "account": "vochitaidt",
  "email": "vochitaidt@gmail.com",
  "password": "550e1bafe077ff0b0b67f4e32f29d751"
});
db.getCollection("accounts").insert({
  "_id": ObjectId("585cad97bbe8dcfc215dced4"),
  "sd": {
    "aCD": [
      "QqPVSVmfR/abMog8f/J4/aOi/8plX/enRqao2QYurBA="
    ],
    "aD": "vYhtApvUpR/QaDATQFW1RRWb2U5SHsMnRa2tB66T+UU=",
    "cDb": true,
    "cR": false,
    "cS": "806175985D09B121230ABD08776B9201BD5C4071",
    "e": false,
    "vI": false
  },
  "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
  "telco": "empty",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
  "type": "default",
  "google_aid": "9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC",
  "ip": {
    "user": "10.7.1.252",
    "public": "118.69.76.212"
  },
  "status": "normal",
  "account_id": NumberInt(527736287),
  "createdAt": ISODate("2016-12-23T04:52:39.835Z"),
  "updatedAt": ISODate("2016-12-26T02:43:02.996Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482468760283217",
      "createdAt": ISODate("2016-12-23T04:52:39.853Z")
    }
  ],
  "account": "vctai1991",
  "email": "vctai1991@gmail.com",
  "password": "550e1bafe077ff0b0b67f4e32f29d751"
});
db.getCollection("accounts").insert({
  "_id": ObjectId("585cd166bbe8dcfc215dced9"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
  "platform": "ios",
  "device_id": "74500322465a218afeab622e7793f0515bd80a82",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "10.8.17.158",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(310711758),
  "createdAt": ISODate("2016-12-23T07:25:26.310Z"),
  "updatedAt": ISODate("2016-12-23T07:25:26.321Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482477926982599",
      "createdAt": ISODate("2016-12-23T07:25:26.318Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("585cd5b83d1d271524771b60"),
  "account": "taivc1991",
  "email": "taivc1991@gmail.com",
  "password": "550e1bafe077ff0b0b67f4e32f29d751",
  "sd": {
    "aCD": [
      "QqPVSVmfR/abMog8f/J4/aOi/8plX/enRqao2QYurBA="
    ],
    "aD": "P8A4FiKZeU7tmVbdJBM9OqFRNCjYLwFFdP7NhtDFhkk=",
    "cDb": true,
    "cR": false,
    "cS": "806175985D09B121230ABD08776B9201BD5C4071",
    "e": false,
    "vI": false
  },
  "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
  "telco": "empty",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
  "google_aid": "9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC",
  "ip": {
    "user": "10.7.1.252",
    "public": "118.69.76.212"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(304211009),
  "createdAt": ISODate("2016-12-23T07:43:52.253Z"),
  "updatedAt": ISODate("2016-12-23T07:43:58.184Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482479032106492",
      "createdAt": ISODate("2016-12-23T07:43:52.265Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("585cd7b6686b2e5b24e7f8e1"),
  "account": "hhhhhhhh",
  "email": "hhhhh@gmail.com",
  "password": "0b95abf1621c091ac1b463880a404f3e",
  "channel": "",
  "telco": "empty",
  "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
  "platform": "ios",
  "device_id": "74500322465a218afeab622e7793f0515bd80a82",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
  "google_aid": "",
  "ip": {
    "user": "10.8.17.158",
    "public": "115.78.161.134"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(709404877),
  "createdAt": ISODate("2016-12-23T07:52:22.473Z"),
  "updatedAt": ISODate("2016-12-23T07:52:22.487Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482479542564863",
      "createdAt": ISODate("2016-12-23T07:52:22.484Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("585cfcb9686b2e5b24e7f8eb"),
  "account": "thienhaole",
  "email": "hhh@gmail.com",
  "password": "4457f439babe91c745f1f1776146013c",
  "channel": "",
  "telco": "empty",
  "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
  "platform": "ios",
  "device_id": "755b7ffa8747df4e6dfd483d423e4990f100fb4f",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
  "google_aid": "",
  "ip": {
    "user": "10.8.17.158",
    "public": "115.78.161.134"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(271593315),
  "createdAt": ISODate("2016-12-23T10:30:17.825Z"),
  "updatedAt": ISODate("2017-03-23T09:39:06.419Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482489018600938",
      "createdAt": ISODate("2016-12-23T10:30:17.831Z")
    },
    {
      "app": "10001",
      "msi_id": "100011482721615287221",
      "createdAt": ISODate("2016-12-26T03:06:54.882Z")
    },
    {
      "app": "10003",
      "msi_id": "100031487576087653404",
      "createdAt": ISODate("2017-02-20T07:34:46.914Z")
    },
    {
      "app": "10004",
      "msi_id": "100041487576136598528",
      "createdAt": ISODate("2017-02-20T07:35:35.855Z")
    }
  ],
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "A/tk1+qdBJqzyS1S5bcaO9dux4iBHmNVCYplvDjC+4c=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  }
});
db.getCollection("accounts").insert({
  "_id": ObjectId("585d0401686b2e5b24e7f8ef"),
  "account": "chuyennm",
  "email": "chuyennmth@gmail.com",
  "password": "550e1bafe077ff0b0b67f4e32f29d751",
  "sd": {
    "aCD": [
      "hDtO5YyIqr43YmtFJ1DFwpPBmrqu6MVcAbrEnjtpzt4="
    ],
    "aD": "lfvA0UD9YKi5+8yGWMBjYUaviWJ+74DAuvjaBBfVdk4=",
    "cDb": true,
    "cR": true,
    "cS": "D7A1F6C37ACBED8CE5ACA63E41D0CC9ED0284E72",
    "e": true,
    "vI": false
  },
  "device_id": "fccf5ba067af9f7903a8f151ee3b3a7a33119e1e",
  "telco": "Android",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Android SDK built for x86_64 Build/LMY48X)",
  "google_aid": "0",
  "ip": {
    "user": "fe80::5054:ff:fe12:3456%eth0",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(914178751),
  "createdAt": ISODate("2016-12-23T11:01:21.335Z"),
  "updatedAt": ISODate("2017-03-10T07:54:03.418Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482490881279996",
      "createdAt": ISODate("2016-12-23T11:01:21.337Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5860867b686b2e5b24e7f8f4"),
  "sd": {
    "aCD": [
      "QqPVSVmfR/abMog8f/J4/aOi/8plX/enRqao2QYurBA="
    ],
    "aD": "FaTmPxCzsOqtYQSvC0+OezNvuymhqyFMWHzdlXG3K0E=",
    "cDb": true,
    "cR": false,
    "cS": "806175985D09B121230ABD08776B9201BD5C4071",
    "e": false,
    "vI": false
  },
  "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
  "telco": "Mobifone",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
  "type": "device",
  "google_aid": "9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC",
  "ip": {
    "user": "10.8.20.209",
    "public": "115.78.161.88"
  },
  "status": "normal",
  "account_id": NumberInt(641467627),
  "createdAt": ISODate("2016-12-26T02:54:51.308Z"),
  "updatedAt": ISODate("2017-01-04T09:08:05.834Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482720891278113",
      "createdAt": ISODate("2016-12-26T02:54:51.315Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58609a83686b2e5b24e7f906"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "AkzvIkkt+SwXx1y30ZZfWfzB9K5+mXBJZWRbCrEI3YY=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
  "telco": "T-Mobile",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Coolpad 9190L Build/KOT49H)",
  "channel": "empty",
  "type": "device",
  "google_aid": "9322E220-AFAA-40A2-AE77-E81444DEB8C2",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(134435319),
  "createdAt": ISODate("2016-12-26T04:20:19.614Z"),
  "updatedAt": ISODate("2017-03-21T06:37:49.866Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482726020485641",
      "createdAt": ISODate("2016-12-26T04:20:19.622Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58609b2a686b2e5b24e7f90b"),
  "sd": {
    "aCD": [
      "QqPVSVmfR/abMog8f/J4/aOi/8plX/enRqao2QYurBA="
    ],
    "aD": "oUjvG8s0jn8/gafYHcMoT+Ne8Uvr0rloSVBpZmLXjn8=",
    "cDb": true,
    "cR": true,
    "cS": "806175985D09B121230ABD08776B9201BD5C4071",
    "e": true,
    "vI": false
  },
  "device_id": "6a222e7bf8a7f2e25e0405833c84d3f4e761590c",
  "telco": "Android",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; Android SDK built for x86 Build/NYC)",
  "type": "device",
  "google_aid": "83B039FA-9E38-4DA4-80E7-34B75858072C",
  "ip": {
    "user": "10.0.2.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(574023869),
  "createdAt": ISODate("2016-12-26T04:23:06.437Z"),
  "updatedAt": ISODate("2017-03-10T02:15:35.359Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482726186184730",
      "createdAt": ISODate("2016-12-26T04:23:06.443Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58609c22686b2e5b24e7f910"),
  "sd": {
    "aCD": [
      "QqPVSVmfR/abMog8f/J4/aOi/8plX/enRqao2QYurBA="
    ],
    "aD": "s/XV7SRUoPs42eDon6zPY/2GC6njIUG89M06JNNQTEs=",
    "cDb": true,
    "cR": true,
    "cS": "806175985D09B121230ABD08776B9201BD5C4071",
    "e": true,
    "vI": false
  },
  "device_id": "5a2f785d84a047d5ec089c608163841f80506f09",
  "telco": "Android",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; Android SDK built for x86 Build/NYC)",
  "type": "device",
  "google_aid": "F793F94D-5E35-45B2-877A-6A2505305902",
  "ip": {
    "user": "10.0.2.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(533469009),
  "createdAt": ISODate("2016-12-26T04:27:14.775Z"),
  "updatedAt": ISODate("2016-12-26T04:27:16.637Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482726435662633",
      "createdAt": ISODate("2016-12-26T04:27:14.782Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5860c2c6686b2e5b24e7f917"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
  "platform": "ios",
  "device_id": "b909ace5869b35ef4acbb6fde24e1025f1bbe775",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_1 like Mac OS X) AppleWebKit/602.2.14 (KHTML, like Gecko) Mobile/14B72",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "10.8.17.148",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(171415393),
  "createdAt": ISODate("2016-12-26T07:12:06.65Z"),
  "updatedAt": ISODate("2016-12-26T07:12:06.75Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482736326113793",
      "createdAt": ISODate("2016-12-26T07:12:06.73Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5860ce50686b2e5b24e7f925"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
  "platform": "ios",
  "device_id": "cef8a581484c406707ad2ea58ca1b717c5640ced",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "10.8.17.158",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(714068092),
  "createdAt": ISODate("2016-12-26T08:01:20.397Z"),
  "updatedAt": ISODate("2016-12-26T08:01:20.405Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001482739280862441",
      "createdAt": ISODate("2016-12-26T08:01:20.404Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("586dd58a7a5d056409d02a26"),
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "EubZBKVObMaWE0BsvnHRx+S5GCAJb3Y+3G0fgPn3O1c=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "telco": "empty",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "type": "device",
  "google_aid": "93065B31-26AB-4CE2-91E5-D0F8DF379341",
  "ip": {
    "user": "192.168.2.109",
    "public": "119.129.114.15"
  },
  "status": "normal",
  "account_id": NumberInt(629935977),
  "createdAt": ISODate("2017-01-05T05:11:38.583Z"),
  "updatedAt": ISODate("2017-02-28T08:48:56.124Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001483593099876734",
      "createdAt": ISODate("2017-01-05T05:11:38.593Z")
    },
    {
      "app": "10001",
      "msi_id": "100011488259133191524",
      "createdAt": ISODate("2017-02-28T05:18:53.200Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("586f64c07a5d056409d02a51"),
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "TL4qDH3JLgNXXs73kybe4LsdNDKwdgOoGgFjuDx7rIY=",
    "cDb": false,
    "cR": false,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "332fd4a5a6bc3c3cf6fe3b192e0bf3b922a3f48a",
  "telco": "CMCC",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; vivo Xplay5A Build/LMY47V)",
  "type": "device",
  "google_aid": "0",
  "ip": {
    "user": "192.168.2.109",
    "public": "119.129.119.146"
  },
  "status": "normal",
  "account_id": NumberInt(674529448),
  "createdAt": ISODate("2017-01-06T09:34:56.455Z"),
  "updatedAt": ISODate("2017-01-31T12:42:25.38Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001483695296870983",
      "createdAt": ISODate("2017-01-06T09:34:56.462Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("586f84ac7a5d056409d02a57"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "xxvCmvjKJVZp1iy5PWbOhrDt/9nBVrvqvV63c6dExkc=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
  "telco": "CMCC",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "channel": "empty",
  "type": "device",
  "google_aid": "0",
  "ip": {
    "user": "10.0.3.15",
    "public": "119.129.119.146"
  },
  "status": "normal",
  "account_id": NumberInt(900669215),
  "createdAt": ISODate("2017-01-06T11:51:08.536Z"),
  "updatedAt": ISODate("2017-03-23T09:31:17.149Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001483703469749504",
      "createdAt": ISODate("2017-01-06T11:51:08.546Z")
    },
    {
      "app": "10001",
      "msi_id": "100011484647792701793",
      "createdAt": ISODate("2017-01-17T10:09:51.816Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587346d17a5d056409d02a6c"),
  "account": "ngoctugobe",
  "email": "unomdk@gmail.com",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "channel": "",
  "telco": "45202",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
  "google_aid": "",
  "ip": {
    "user": "10.8.20.53",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(664494000),
  "createdAt": ISODate("2017-01-09T08:16:17.444Z"),
  "updatedAt": ISODate("2017-03-23T04:30:31.907Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001483949777558244",
      "createdAt": ISODate("2017-01-09T08:16:17.452Z")
    },
    {
      "app": "10001",
      "msi_id": "100011484799607878692",
      "createdAt": ISODate("2017-01-19T04:20:07.134Z")
    }
  ],
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "dLHoQkp2L5PLgQs+LmXe+OPGBLUq8o0jQ43VjvI+4S4=",
    "cDb": false,
    "cR": true,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": false,
    "vI": false
  }
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587348627a5d056409d02a70"),
  "account": "vinacafe",
  "email": "nghia@gmail.com",
  "password": "550e1bafe077ff0b0b67f4e32f29d751",
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "159ed6d2808811ac4212035be56c2e94013fe5cb",
  "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92",
  "google_aid": "",
  "ip": {
    "user": "10.7.1.141",
    "public": "118.69.76.212"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(623603900),
  "createdAt": ISODate("2017-01-09T08:22:58.477Z"),
  "updatedAt": ISODate("2017-03-23T10:30:34.988Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001483950178194044",
      "createdAt": ISODate("2017-01-09T08:22:58.481Z")
    },
    {
      "app": "10001",
      "msi_id": "100011490083851607376",
      "createdAt": ISODate("2017-03-21T08:10:50.774Z")
    }
  ],
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "RDOclHyLhRTVqDb1PJcy3hHhD8wFzkFTNXD73Ia/kQs=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  }
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58748b487a5d056409d02a8a"),
  "channel": "",
  "telco": "45202",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
  "type": "google",
  "google_aid": "",
  "status": "normal",
  "account_id": NumberInt(801893030),
  "createdAt": ISODate("2017-01-10T07:20:40.31Z"),
  "updatedAt": ISODate("2017-02-24T02:54:12.224Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484032840385030",
      "createdAt": ISODate("2017-01-10T07:20:40.38Z")
    },
    {
      "app": "10001",
      "msi_id": "100011487042057183247",
      "createdAt": ISODate("2017-02-14T03:14:16.872Z")
    }
  ],
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "bSRMWzE6QjOxyQNe/Y1J+dTjvkVs1+Sf+/xg/jvjSnA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  }
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58748c087a5d056409d02a91"),
  "account": "ngoctugobe2",
  "email": "unomdk1@gmail.com",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "channel": "",
  "telco": "45202",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
  "google_aid": "",
  "ip": {
    "user": "10.7.3.167",
    "public": "118.69.76.212"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(622299893),
  "createdAt": ISODate("2017-01-10T07:23:52.228Z"),
  "updatedAt": ISODate("2017-03-22T03:40:56.601Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484033032496707",
      "createdAt": ISODate("2017-01-10T07:23:52.233Z")
    },
    {
      "app": "10001",
      "msi_id": "100011490152180312445",
      "createdAt": ISODate("2017-03-22T03:09:40.459Z")
    }
  ],
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "diYOKlAt4JjqyfO7/UozYgGdh9UwJVP6DEORWTlMwk8=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  }
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58749fa67a5d056409d02a98"),
  "channel": "",
  "telco": "45202",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "02382457af4c4ff0211b34ca4ddd2ad830572026",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92",
  "type": "facebook",
  "google_aid": "",
  "status": "normal",
  "account_id": NumberInt(754777018),
  "createdAt": ISODate("2017-01-10T08:47:34.901Z"),
  "updatedAt": ISODate("2017-01-10T08:47:34.913Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484038055744948",
      "createdAt": ISODate("2017-01-10T08:47:34.910Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5874b54c7a5d056409d02aa3"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "Rwm5RuDFw67rnIisa58fbAJsUIm4Y0+RP9r0vozGzzo=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "empty",
  "email": "unomdk2@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
  "account": "ngoctugobe3",
  "channel": "empty",
  "google_aid": "5D30A2CC-032B-4A5D-8631-904C90E2DECE",
  "ip": {
    "user": "10.7.3.209",
    "public": "118.69.76.212"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(603473627),
  "createdAt": ISODate("2017-01-10T10:19:56.883Z"),
  "updatedAt": ISODate("2017-02-09T09:39:47.945Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484043597420787",
      "createdAt": ISODate("2017-01-10T10:19:56.889Z")
    },
    {
      "app": "10001",
      "msi_id": "100011486633184739017",
      "createdAt": ISODate("2017-02-09T09:39:44.265Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5874b7117a5d056409d02aa8"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "1XoJhiQkdKsWJ+MtNZbb+KvpELqJmzjh0efS69FL1uw=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "d255ff902c494eb8674c75c5a232c584aca5ddc8",
  "password": "1b80757ead5df4ab8396bb46f0568a7b",
  "telco": "Android",
  "email": "34909433@qq.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; SAMSUNG-SM-N900A Build/tt)",
  "account": "18124532600",
  "channel": "empty",
  "google_aid": "08C62398-443F-4FCC-8D49-BBF649B50988",
  "ip": {
    "user": "10.0.3.15",
    "public": "119.129.118.239"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(325069536),
  "createdAt": ISODate("2017-01-10T10:27:29.201Z"),
  "updatedAt": ISODate("2017-02-07T07:47:25.541Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484044049683481",
      "createdAt": ISODate("2017-01-10T10:27:29.204Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5874b9e07a5d056409d02ab0"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "xXbghXz/x0xrf4VzMRvZaRA2VLlsIbht4CJyrE1ZkHM=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
  "telco": "CMCC",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "channel": "empty",
  "type": "device",
  "google_aid": "0",
  "ip": {
    "user": "10.0.3.15",
    "public": "113.119.8.114"
  },
  "status": "normal",
  "account_id": NumberInt(881773336),
  "createdAt": ISODate("2017-01-10T10:39:28.419Z"),
  "updatedAt": ISODate("2017-02-10T08:32:47.886Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484044768276214",
      "createdAt": ISODate("2017-01-10T10:39:28.425Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587590c67a5d056409d02abe"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
  "type": "facebook",
  "google_aid": "",
  "status": "normal",
  "account_id": NumberInt(333807226),
  "createdAt": ISODate("2017-01-11T01:56:22.894Z"),
  "updatedAt": ISODate("2017-02-27T04:31:23.241Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484099783363475",
      "createdAt": ISODate("2017-01-11T01:56:22.902Z")
    },
    {
      "app": "10001",
      "msi_id": "100011487041264379810",
      "createdAt": ISODate("2017-02-14T03:01:04.308Z")
    }
  ],
  "sd": {
    "aCD": [
      "QqPVSVmfR/abMog8f/J4/aOi/8plX/enRqao2QYurBA="
    ],
    "aD": "vqS0wIC4XPF9otw83U7vyJqkW2ULhxeuKZ2lqUIyWc4=",
    "cDb": true,
    "cR": true,
    "cS": "806175985D09B121230ABD08776B9201BD5C4071",
    "e": false,
    "vI": false
  }
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587591577a5d056409d02ac2"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
  "type": "default",
  "google_aid": "",
  "ip": {
    "user": "10.7.3.167",
    "public": "118.69.76.212"
  },
  "status": "normal",
  "account_id": NumberInt(845597805),
  "createdAt": ISODate("2017-01-11T01:58:47.30Z"),
  "updatedAt": ISODate("2017-01-11T02:00:15.692Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484099927578611",
      "createdAt": ISODate("2017-01-11T01:58:47.37Z")
    }
  ],
  "account": "ngoctugobe4",
  "email": "unomdk3@gmail.com",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675"
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587591cf7a5d056409d02ac9"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "10.7.3.167",
    "public": "118.69.76.212"
  },
  "status": "normal",
  "account_id": NumberInt(938824509),
  "createdAt": ISODate("2017-01-11T02:00:47.762Z"),
  "updatedAt": ISODate("2017-01-11T02:00:47.769Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484100048751979",
      "createdAt": ISODate("2017-01-11T02:00:47.767Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5875a7e37a5d056409d02ad9"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "0x1+T4E8oHhG5qSAO9kjbXEA6WDyXX1qsTjTOs7WOL8=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "383eec310f7c23010e0bf811e689151e686b1396",
  "password": "550e1bafe077ff0b0b67f4e32f29d751",
  "telco": "T-Mobile",
  "email": "df@fjdk.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "01627717257",
  "channel": "empty",
  "google_aid": "FC658945-454A-4FC7-8318-1E816B11C51E",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(413867888),
  "createdAt": ISODate("2017-01-11T03:34:59.3Z"),
  "updatedAt": ISODate("2017-02-15T10:24:21.506Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484105699963969",
      "createdAt": ISODate("2017-01-11T03:34:59.7Z")
    },
    {
      "app": "10001",
      "msi_id": "100011487154255758852",
      "createdAt": ISODate("2017-02-15T10:24:15.244Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5875aa147a5d056409d02ae1"),
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "zXWsLHQskdjGWB4z3l/bSP6tQeQz3cYhyOM8Dx7TncU=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  },
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "telco": "VIETTEL",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "type": "default",
  "google_aid": "D78AA261-6BEB-4FE2-B62E-4E271C3F27F5",
  "ip": {
    "user": "10.8.8.120",
    "public": "115.78.161.88"
  },
  "status": "normal",
  "account_id": NumberInt(236921287),
  "createdAt": ISODate("2017-01-11T03:44:20.634Z"),
  "updatedAt": ISODate("2017-01-11T04:35:39.687Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484106261366146",
      "createdAt": ISODate("2017-01-11T03:44:20.640Z")
    }
  ],
  "account": "ngoctugobe6",
  "email": "hdhd@jd.con",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675"
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5875b0517a5d056409d02ae9"),
  "account": "saunghia",
  "email": "saukt3@gmail.com",
  "password": "a069e945015a6705f23ee33fe23f5522",
  "sd": {
    "aCD": [
      "l5JKbmikkzcZ2zsSVxVM2cK2WNynvrQXLs7FUxHtTpQ="
    ],
    "aD": "h2wXMYzX4E+Bs2wwWKvq4bJmWOhcS1vNx7qaYIA4aZY=",
    "cDb": true,
    "cR": true,
    "cS": "1D8E50523D5D59A086BB69141C8618C3CCD4F021",
    "e": true,
    "vI": false
  },
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "telco": "VIETTEL",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "google_aid": "D78AA261-6BEB-4FE2-B62E-4E271C3F27F5",
  "ip": {
    "user": "10.8.8.120",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(826337153),
  "createdAt": ISODate("2017-01-11T04:10:57.599Z"),
  "updatedAt": ISODate("2017-03-13T08:18:44.828Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484107858481695",
      "createdAt": ISODate("2017-01-11T04:10:57.604Z")
    },
    {
      "app": "10003",
      "msi_id": "100031488181376746945",
      "createdAt": ISODate("2017-02-27T07:42:55.660Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5875b5bd7a5d056409d02aee"),
  "account": "ngoctugobe5",
  "email": "hdhd@hdh.com",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  },
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "telco": "VIETTEL",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "google_aid": "D78AA261-6BEB-4FE2-B62E-4E271C3F27F5",
  "ip": {
    "user": "10.8.8.120",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(541278944),
  "createdAt": ISODate("2017-01-11T04:34:05.837Z"),
  "updatedAt": ISODate("2017-01-12T03:56:01.414Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484109246995657",
      "createdAt": ISODate("2017-01-11T04:34:05.841Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5875b6227a5d056409d02af4"),
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "pEo6/C/XptY3AdnyYQH0pqqGWfFrj9qdlxNE9UqTcnw=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "telco": "VIETTEL",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "type": "device",
  "google_aid": "D78AA261-6BEB-4FE2-B62E-4E271C3F27F5",
  "ip": {
    "user": "10.8.8.120",
    "public": "115.78.161.88"
  },
  "status": "normal",
  "account_id": NumberInt(365513464),
  "createdAt": ISODate("2017-01-11T04:35:46.783Z"),
  "updatedAt": ISODate("2017-03-20T03:36:52.527Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484109347136725",
      "createdAt": ISODate("2017-01-11T04:35:46.790Z")
    },
    {
      "app": "10001",
      "msi_id": "100011489977344427578",
      "createdAt": ISODate("2017-03-20T02:35:44.406Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5875ca7b7a5d056409d02b04"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "6a94b6479f4e678f3f0749e7ab269f1f4e38a726",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "192.168.253.8",
    "public": "219.135.226.39"
  },
  "status": "normal",
  "account_id": NumberInt(358206907),
  "createdAt": ISODate("2017-01-11T06:02:35.919Z"),
  "updatedAt": ISODate("2017-01-11T06:02:35.931Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484114556460373",
      "createdAt": ISODate("2017-01-11T06:02:35.927Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5875e2cf7a5d056409d02b1f"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "f3d0b09c4cfe33fc5d9657274c93b9d4efb08856",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "192.168.2.100",
    "public": "113.119.8.114"
  },
  "status": "normal",
  "account_id": NumberInt(382786256),
  "createdAt": ISODate("2017-01-11T07:46:23.393Z"),
  "updatedAt": ISODate("2017-01-11T07:46:23.411Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484120783605775",
      "createdAt": ISODate("2017-01-11T07:46:23.409Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5875f10a7a5d056409d02b35"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "xXbghXz/x0xrf4VzMRvZaRA2VLlsIbht4CJyrE1ZkHM=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "d255ff902c494eb8674c75c5a232c584aca5ddc8",
  "telco": "Android",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; SAMSUNG-SM-N900A Build/tt)",
  "channel": "empty",
  "type": "device",
  "google_aid": "08C62398-443F-4FCC-8D49-BBF649B50988",
  "ip": {
    "user": "10.0.3.15",
    "public": "119.129.116.8"
  },
  "status": "normal",
  "account_id": NumberInt(426077797),
  "createdAt": ISODate("2017-01-11T08:47:06.642Z"),
  "updatedAt": ISODate("2017-01-20T06:19:23.522Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484124427831923",
      "createdAt": ISODate("2017-01-11T08:47:06.655Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58770afb7a5d056409d02b53"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "QqPVSVmfR/abMog8f/J4/aOi/8plX/enRqao2QYurBA="
    ],
    "aD": "vqS0wIC4XPF9otw83U7vyJqkW2ULhxeuKZ2lqUIyWc4=",
    "cDb": true,
    "cR": true,
    "cS": "806175985D09B121230ABD08776B9201BD5C4071",
    "e": false,
    "vI": false
  },
  "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
  "telco": "T-Mobile",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; vivo X5S L Build/KOT49H)",
  "channel": "empty",
  "type": "facebook",
  "google_aid": "48909B49-B42F-48F9-A2FF-441E271F35FF",
  "status": "normal",
  "account_id": NumberInt(928328432),
  "createdAt": ISODate("2017-01-12T04:50:03.22Z"),
  "updatedAt": ISODate("2017-02-27T04:41:28.764Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484196603267085",
      "createdAt": ISODate("2017-01-12T04:50:03.31Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58784cf07a5d056409d02b74"),
  "platform": "android",
  "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "hkghDf4TawBezBr4ImJ/yqOxvZKqqhs7DahlTcYum98=",
    "cDb": false,
    "cR": false,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": false,
    "vI": false
  },
  "device_id": "d2ab26bdea002a6355f879eb5b5178be3d76aea2",
  "password": "70873e8580c9900986939611618d7b1e",
  "telco": "CHINA MOBILE",
  "email": "ducpn@mecorp.vn",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "account": "ducpn216",
  "channel": "empty",
  "google_aid": "DEF99822-D620-4C49-A149-2D528BB8328E",
  "ip": {
    "user": "10.0.3.15",
    "public": "118.69.76.212"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(209492665),
  "createdAt": ISODate("2017-01-13T03:43:44.997Z"),
  "updatedAt": ISODate("2017-03-16T07:36:26.390Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484279025404911",
      "createdAt": ISODate("2017-01-13T03:43:45.2Z")
    },
    {
      "app": "10001",
      "msi_id": "100011489648966943794",
      "createdAt": ISODate("2017-03-16T07:22:46.486Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587dce2e7a5d056409d02bd0"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "zS7kPQvrv7AUSuBvUqmiJ+2klGK43Ikb9PDidUnpnFo=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  },
  "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
  "password": "550e1bafe077ff0b0b67f4e32f29d751",
  "telco": "empty",
  "email": "aaaa@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
  "account": "vinacafe88",
  "channel": "empty",
  "google_aid": "5D30A2CC-032B-4A5D-8631-904C90E2DECE",
  "ip": {
    "user": "10.7.3.209",
    "public": "113.161.78.101"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(473360909),
  "createdAt": ISODate("2017-01-17T07:56:30.992Z"),
  "updatedAt": ISODate("2017-02-14T02:58:05.38Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484639791904491",
      "createdAt": ISODate("2017-01-17T07:56:30.997Z")
    },
    {
      "app": "10001",
      "msi_id": "100011487040750426328",
      "createdAt": ISODate("2017-02-14T02:52:30.491Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587ee91a7a5d056409d02bfe"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "f87106d46b64c9b5ca5bcd390878c5269dddb064",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "gsm.operator.alpha",
  "email": "mail01@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
  "account": "acctestpp1",
  "channel": "empty",
  "google_aid": "EEC68DA3-BD61-41DF-9CAE-BA29D70DDAE3",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(833957994),
  "createdAt": ISODate("2017-01-18T04:03:38.81Z"),
  "updatedAt": ISODate("2017-01-19T02:21:25.99Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484712218792342",
      "createdAt": ISODate("2017-01-18T04:03:38.86Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587ee9387a5d056409d02c02"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail25@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp26",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(794532413),
  "createdAt": ISODate("2017-01-18T04:04:08.659Z"),
  "updatedAt": ISODate("2017-01-18T09:42:55.239Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484712249733003",
      "createdAt": ISODate("2017-01-18T04:04:08.661Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587eeb777a5d056409d02c07"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "e3620a38c04ff5006d6dd413deaf7824acc7d08e",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail27@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp27",
  "channel": "empty",
  "google_aid": "2383205A-EDBF-46F6-A0D4-C37FE9FCAF7A",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(837071868),
  "createdAt": ISODate("2017-01-18T04:13:43.655Z"),
  "updatedAt": ISODate("2017-01-18T09:45:06.129Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484712824887651",
      "createdAt": ISODate("2017-01-18T04:13:43.658Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587eed797a5d056409d02c0b"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "9c43233e987321961b6d4d6570346c3bdf5275ff",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail28@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp28",
  "channel": "empty",
  "google_aid": "6B342D88-A31F-4F3A-8200-59675861FB77",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(557100311),
  "createdAt": ISODate("2017-01-18T04:22:17.738Z"),
  "updatedAt": ISODate("2017-01-18T09:47:37.910Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484713338662823",
      "createdAt": ISODate("2017-01-18T04:22:17.740Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587eee017a5d056409d02c10"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "fa8877104f33cb53c31561dc914c017a501fcc55",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail02@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; NoxW Build/KOT49H)",
  "account": "acctestpp2",
  "channel": "empty",
  "google_aid": "840F7895-73CC-4F94-B835-B8AC787F922E",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(317092231),
  "createdAt": ISODate("2017-01-18T04:24:33.515Z"),
  "updatedAt": ISODate("2017-01-19T02:24:52.43Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484713474805783",
      "createdAt": ISODate("2017-01-18T04:24:33.520Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587eee287a5d056409d02c14"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "ba499a7a0d8e99226787bea95950a32a1bd5952d",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail29@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus Build/KOT49H)",
  "account": "acctestpp29",
  "channel": "empty",
  "google_aid": "E5B2BDCB-790A-4B81-86A8-7948F9182A50",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(176676877),
  "createdAt": ISODate("2017-01-18T04:25:12.895Z"),
  "updatedAt": ISODate("2017-01-18T09:49:12.23Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484713513952295",
      "createdAt": ISODate("2017-01-18T04:25:12.902Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587eef9a7a5d056409d02c18"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "cda1536591c4fa1bc6e3a7b7ab57420941c31118",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail03@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp3",
  "channel": "empty",
  "google_aid": "B14705D7-4BCF-464D-BCFC-75298808B1C2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(993151346),
  "createdAt": ISODate("2017-01-18T04:31:22.390Z"),
  "updatedAt": ISODate("2017-01-19T02:27:54.851Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484713882804314",
      "createdAt": ISODate("2017-01-18T04:31:22.395Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587eefa47a5d056409d02c1c"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "4700479dd165d0c396ba673fd7cc1b4498cfde67",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail30@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus Build/KOT49H)",
  "account": "acctestpp30",
  "channel": "empty",
  "google_aid": "7A2BE7D6-DEF5-408C-8476-6C1196B6A3F4",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(215908852),
  "createdAt": ISODate("2017-01-18T04:31:32.294Z"),
  "updatedAt": ISODate("2017-01-18T09:50:03.456Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484713892543004",
      "createdAt": ISODate("2017-01-18T04:31:32.298Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587ef0d87a5d056409d02c20"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "cda1536591c4fa1bc6e3a7b7ab57420941c31118",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail04@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp4",
  "channel": "empty",
  "google_aid": "B14705D7-4BCF-464D-BCFC-75298808B1C2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(765008541),
  "createdAt": ISODate("2017-01-18T04:36:40.752Z"),
  "updatedAt": ISODate("2017-01-19T02:29:01.999Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484714201414127",
      "createdAt": ISODate("2017-01-18T04:36:40.755Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587ef1097a5d056409d02c25"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "52deaf2add5cff22910d82283574ee1ba1ec9c9c",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail31@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus Build/KOT49H)",
  "account": "acctestpp31",
  "channel": "empty",
  "google_aid": "80CFDF07-3DC4-44AF-A810-065F33919195",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(242226525),
  "createdAt": ISODate("2017-01-18T04:37:29.134Z"),
  "updatedAt": ISODate("2017-01-18T09:51:29.336Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484714249423636",
      "createdAt": ISODate("2017-01-18T04:37:29.140Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587ef76d7a5d056409d02c2a"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "cda1536591c4fa1bc6e3a7b7ab57420941c31118",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail05@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp5",
  "channel": "empty",
  "google_aid": "B14705D7-4BCF-464D-BCFC-75298808B1C2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(987685642),
  "createdAt": ISODate("2017-01-18T05:04:45.521Z"),
  "updatedAt": ISODate("2017-01-19T02:29:42.513Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484715886131124",
      "createdAt": ISODate("2017-01-18T05:04:45.524Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f0caa7a5d056409d02c2e"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail06@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp6",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(954597658),
  "createdAt": ISODate("2017-01-18T06:35:22.899Z"),
  "updatedAt": ISODate("2017-01-19T02:31:16.206Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484721323622781",
      "createdAt": ISODate("2017-01-18T06:35:22.906Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f102fa35c87f925326a43"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail07@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp7",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(513144128),
  "createdAt": ISODate("2017-01-18T06:50:23.651Z"),
  "updatedAt": ISODate("2017-01-19T02:32:04.876Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722224584924",
      "createdAt": ISODate("2017-01-18T06:50:23.665Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f10bb9c2a972926275873"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail32@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp32",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(608747097),
  "createdAt": ISODate("2017-01-18T06:52:43.237Z"),
  "updatedAt": ISODate("2017-01-18T09:52:35.255Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722363164848",
      "createdAt": ISODate("2017-01-18T06:52:43.257Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f10e39c2a972926275877"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail33@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp33",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(338175191),
  "createdAt": ISODate("2017-01-18T06:53:23.854Z"),
  "updatedAt": ISODate("2017-01-18T09:53:35.447Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722404582462",
      "createdAt": ISODate("2017-01-18T06:53:23.863Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f11029c2a97292627587b"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail34@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp34",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(142785846),
  "createdAt": ISODate("2017-01-18T06:53:54.922Z"),
  "updatedAt": ISODate("2017-01-18T07:10:37.471Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722435387315",
      "createdAt": ISODate("2017-01-18T06:53:54.924Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f11339c2a97292627587f"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail35@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp35",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(899870940),
  "createdAt": ISODate("2017-01-18T06:54:43.211Z"),
  "updatedAt": ISODate("2017-01-18T09:55:25.946Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722483379661",
      "createdAt": ISODate("2017-01-18T06:54:43.214Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f114f9c2a972926275883"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail36@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp36",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(368168539),
  "createdAt": ISODate("2017-01-18T06:55:11.669Z"),
  "updatedAt": ISODate("2017-01-18T09:56:36.537Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722512647814",
      "createdAt": ISODate("2017-01-18T06:55:11.674Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f11a09c2a972926275887"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail37@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp37",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(904408219),
  "createdAt": ISODate("2017-01-18T06:56:32.726Z"),
  "updatedAt": ISODate("2017-01-18T09:57:20.551Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722593217808",
      "createdAt": ISODate("2017-01-18T06:56:32.728Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f11be9c2a97292627588b"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail08@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp8",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(194641934),
  "createdAt": ISODate("2017-01-18T06:57:02.87Z"),
  "updatedAt": ISODate("2017-01-19T02:33:20.707Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722622860708",
      "createdAt": ISODate("2017-01-18T06:57:02.91Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f11d09c2a97292627588f"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail38@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp38",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(645009632),
  "createdAt": ISODate("2017-01-18T06:57:20.762Z"),
  "updatedAt": ISODate("2017-01-18T09:58:35.515Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722641528321",
      "createdAt": ISODate("2017-01-18T06:57:20.765Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f11fd9c2a972926275893"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail39@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp39",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(226593441),
  "createdAt": ISODate("2017-01-18T06:58:05.896Z"),
  "updatedAt": ISODate("2017-01-18T09:59:08.161Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722686679704",
      "createdAt": ISODate("2017-01-18T06:58:05.898Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f12189c2a972926275897"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail40@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp40",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(960555095),
  "createdAt": ISODate("2017-01-18T06:58:32.410Z"),
  "updatedAt": ISODate("2017-01-18T10:11:19.753Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722712133919",
      "createdAt": ISODate("2017-01-18T06:58:32.415Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f12309c2a97292627589b"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail41@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp41",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(355402171),
  "createdAt": ISODate("2017-01-18T06:58:56.796Z"),
  "updatedAt": ISODate("2017-01-18T10:01:40.960Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722737273806",
      "createdAt": ISODate("2017-01-18T06:58:56.798Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f125f9c2a97292627589f"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail42@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp42",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(971379233),
  "createdAt": ISODate("2017-01-18T06:59:43.197Z"),
  "updatedAt": ISODate("2017-01-18T10:02:55.151Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722783491454",
      "createdAt": ISODate("2017-01-18T06:59:43.202Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f12939c2a9729262758a3"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail43@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp43",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(703165330),
  "createdAt": ISODate("2017-01-18T07:00:35.558Z"),
  "updatedAt": ISODate("2017-01-18T10:03:55.735Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722836683116",
      "createdAt": ISODate("2017-01-18T07:00:35.562Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f12bc9c2a9729262758a7"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail44@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp44",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(496717410),
  "createdAt": ISODate("2017-01-18T07:01:16.570Z"),
  "updatedAt": ISODate("2017-01-18T10:04:44.360Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722877435777",
      "createdAt": ISODate("2017-01-18T07:01:16.574Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f130c9c2a9729262758ab"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail45@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp45",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(209713169),
  "createdAt": ISODate("2017-01-18T07:02:36.264Z"),
  "updatedAt": ISODate("2017-01-18T10:05:41.437Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484722956115781",
      "createdAt": ISODate("2017-01-18T07:02:36.270Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f13399c2a9729262758af"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail46@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp46",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(990336139),
  "createdAt": ISODate("2017-01-18T07:03:21.711Z"),
  "updatedAt": ISODate("2017-01-18T10:06:25.327Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723002874488",
      "createdAt": ISODate("2017-01-18T07:03:21.714Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f136d9c2a9729262758b3"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail47@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp47",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(726760790),
  "createdAt": ISODate("2017-01-18T07:04:13.931Z"),
  "updatedAt": ISODate("2017-01-18T10:07:10.504Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723054748443",
      "createdAt": ISODate("2017-01-18T07:04:13.935Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f13759c2a9729262758b7"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail09@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp9",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(854928309),
  "createdAt": ISODate("2017-01-18T07:04:21.379Z"),
  "updatedAt": ISODate("2017-01-19T02:36:39.229Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723061605982",
      "createdAt": ISODate("2017-01-18T07:04:21.382Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f13939c2a9729262758bb"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail48@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp48",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(987907901),
  "createdAt": ISODate("2017-01-18T07:04:51.537Z"),
  "updatedAt": ISODate("2017-01-18T10:07:58.682Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723092840900",
      "createdAt": ISODate("2017-01-18T07:04:51.539Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f13a19c2a9729262758bf"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail10@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp10",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(178480333),
  "createdAt": ISODate("2017-01-18T07:05:05.309Z"),
  "updatedAt": ISODate("2017-01-19T02:37:23.52Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723105728898",
      "createdAt": ISODate("2017-01-18T07:05:05.312Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f13ba9c2a9729262758c3"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail49@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp49",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(109534067),
  "createdAt": ISODate("2017-01-18T07:05:30.654Z"),
  "updatedAt": ISODate("2017-01-18T07:15:25.102Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723131845149",
      "createdAt": ISODate("2017-01-18T07:05:30.658Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f13d19c2a9729262758c7"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail11@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp11",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(812106407),
  "createdAt": ISODate("2017-01-18T07:05:53.267Z"),
  "updatedAt": ISODate("2017-01-19T02:38:02.657Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723153271006",
      "createdAt": ISODate("2017-01-18T07:05:53.271Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f13d79c2a9729262758cb"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": true,
    "vI": false
  },
  "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "T-Mobile",
  "email": "mail50@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "acctestpp50",
  "channel": "empty",
  "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(264307438),
  "createdAt": ISODate("2017-01-18T07:05:59.162Z"),
  "updatedAt": ISODate("2017-01-18T10:10:32.497Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723159327099",
      "createdAt": ISODate("2017-01-18T07:05:59.165Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f14369c2a9729262758d0"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "hXXbYUG6p+14b8oNXyJm+jDAVo/dY4Q6DNxnLj+y9rA=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail12@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp12",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(889796512),
  "createdAt": ISODate("2017-01-18T07:07:34.923Z"),
  "updatedAt": ISODate("2017-02-08T02:30:05.830Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723255169809",
      "createdAt": ISODate("2017-01-18T07:07:34.925Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f144f9c2a9729262758d5"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail13@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp13",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(604542294),
  "createdAt": ISODate("2017-01-18T07:07:59.433Z"),
  "updatedAt": ISODate("2017-01-19T02:40:34.962Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723279511514",
      "createdAt": ISODate("2017-01-18T07:07:59.436Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f146b9c2a9729262758da"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail14@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp14",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(509366294),
  "createdAt": ISODate("2017-01-18T07:08:27.410Z"),
  "updatedAt": ISODate("2017-01-19T02:41:04.355Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723307132343",
      "createdAt": ISODate("2017-01-18T07:08:27.412Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f14889c2a9729262758e0"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail15@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp15",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(922482929),
  "createdAt": ISODate("2017-01-18T07:08:56.233Z"),
  "updatedAt": ISODate("2017-01-19T02:41:52.800Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723336916439",
      "createdAt": ISODate("2017-01-18T07:08:56.236Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f14a69c2a9729262758e4"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail16@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp16",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(722777634),
  "createdAt": ISODate("2017-01-18T07:09:26.68Z"),
  "updatedAt": ISODate("2017-01-19T02:44:55.369Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723366983184",
      "createdAt": ISODate("2017-01-18T07:09:26.71Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f14c09c2a9729262758ea"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail17@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp17",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(294777283),
  "createdAt": ISODate("2017-01-18T07:09:52.494Z"),
  "updatedAt": ISODate("2017-01-19T02:47:34.640Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723392620180",
      "createdAt": ISODate("2017-01-18T07:09:52.496Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f14d99c2a9729262758ee"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail18@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp18",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(765291945),
  "createdAt": ISODate("2017-01-18T07:10:17.464Z"),
  "updatedAt": ISODate("2017-01-19T02:48:14.476Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723417114405",
      "createdAt": ISODate("2017-01-18T07:10:17.468Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f14f39c2a9729262758f4"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail19@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp19",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(713921890),
  "createdAt": ISODate("2017-01-18T07:10:43.377Z"),
  "updatedAt": ISODate("2017-01-19T02:48:52.830Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723443723878",
      "createdAt": ISODate("2017-01-18T07:10:43.381Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f150a9c2a9729262758f9"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail20@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp20",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(483596016),
  "createdAt": ISODate("2017-01-18T07:11:06.946Z"),
  "updatedAt": ISODate("2017-01-19T02:55:30.245Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723467795954",
      "createdAt": ISODate("2017-01-18T07:11:06.949Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f15239c2a9729262758fe"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail21@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp21",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(647519020),
  "createdAt": ISODate("2017-01-18T07:11:31.782Z"),
  "updatedAt": ISODate("2017-01-19T02:56:37.787Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723492910791",
      "createdAt": ISODate("2017-01-18T07:11:31.786Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f15499c2a972926275904"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail22@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp22",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(571640584),
  "createdAt": ISODate("2017-01-18T07:12:09.611Z"),
  "updatedAt": ISODate("2017-01-19T03:01:43.325Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723530486863",
      "createdAt": ISODate("2017-01-18T07:12:09.613Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f157e9c2a97292627590a"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail23@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp23",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(958032415),
  "createdAt": ISODate("2017-01-18T07:13:02.679Z"),
  "updatedAt": ISODate("2017-01-19T03:02:28.335Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723583186445",
      "createdAt": ISODate("2017-01-18T07:13:02.682Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f159d9c2a97292627590f"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "MQP3t30qGIthUfQLLSIVwAvP9T2KOEZx+V/ZkrtdZpA=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail24@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp24",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(964683672),
  "createdAt": ISODate("2017-01-18T07:13:33.421Z"),
  "updatedAt": ISODate("2017-01-19T03:02:56.656Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723613982283",
      "createdAt": ISODate("2017-01-18T07:13:33.423Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("587f15cd9c2a972926275916"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "Rwm5RuDFw67rnIisa58fbAJsUIm4Y0+RP9r0vozGzzo=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "CMCC",
  "email": "mail26@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
  "account": "acctestpp25",
  "channel": "empty",
  "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(304640751),
  "createdAt": ISODate("2017-01-18T07:14:21.155Z"),
  "updatedAt": ISODate("2017-02-09T09:16:58.867Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001484723661922912",
      "createdAt": ISODate("2017-01-18T07:14:21.158Z")
    },
    {
      "app": "10001",
      "msi_id": "100011486631812698984",
      "createdAt": ISODate("2017-02-09T09:16:51.570Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5887cc15974ff98d26afa05c"),
  "channel": "",
  "telco": "45201",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "a6d21d21875daa6b779cb88694c332e3ec9a29d0",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_1_1 like Mac OS X) AppleWebKit/602.2.14 (KHTML, like Gecko) Mobile/14B100",
  "type": "facebook",
  "google_aid": "",
  "status": "normal",
  "account_id": NumberInt(842115965),
  "createdAt": ISODate("2017-01-24T21:50:13.879Z"),
  "updatedAt": ISODate("2017-01-24T21:50:13.902Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001485294614192381",
      "createdAt": ISODate("2017-01-24T21:50:13.899Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5897e747974ff98d26afa06a"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": "empty",
  "device_id": "a9432a64b77559509f6b3834fad1f7cfb9924be5",
  "telco": "gsm.operator.alpha",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
  "channel": "empty",
  "type": "device",
  "google_aid": "118450E7-4BC3-4880-B21F-332972A9912B",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(855783386),
  "createdAt": ISODate("2017-02-06T03:02:31.346Z"),
  "updatedAt": ISODate("2017-02-06T03:02:31.360Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001486350151228021",
      "createdAt": ISODate("2017-02-06T03:02:31.357Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("5897e7db974ff98d26afa06f"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "zS7kPQvrv7AUSuBvUqmiJ+2klGK43Ikb9PDidUnpnFo=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  },
  "device_id": "a9432a64b77559509f6b3834fad1f7cfb9924be5",
  "password": "550e1bafe077ff0b0b67f4e32f29d751",
  "telco": "gsm.operator.alpha",
  "email": "trongdh1@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
  "account": "trongdh113",
  "channel": "empty",
  "google_aid": "118450E7-4BC3-4880-B21F-332972A9912B",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.134"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(703732667),
  "createdAt": ISODate("2017-02-06T03:04:59.183Z"),
  "updatedAt": ISODate("2017-02-10T03:38:05.392Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001486350299195463",
      "createdAt": ISODate("2017-02-06T03:04:59.188Z")
    },
    {
      "app": "10001",
      "msi_id": "100011486697878756918",
      "createdAt": ISODate("2017-02-10T03:37:58.382Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("589bdb49974ff98d26afa08c"),
  "account": "trongdh1",
  "email": "trongdh1@mailnesia.com",
  "password": "550e1bafe077ff0b0b67f4e32f29d751",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "zS7kPQvrv7AUSuBvUqmiJ+2klGK43Ikb9PDidUnpnFo=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  },
  "device_id": "23094ddbb07ab715df0d4430fdb079164f5acb50",
  "telco": "empty",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
  "google_aid": "9592072E-F895-4166-B1ED-0FF306EFC3DB",
  "ip": {
    "user": "10.7.1.119",
    "public": "113.161.78.101"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(520269142),
  "createdAt": ISODate("2017-02-09T03:00:25.829Z"),
  "updatedAt": ISODate("2017-02-10T06:44:11.591Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001486609226321322",
      "createdAt": ISODate("2017-02-09T03:00:25.835Z")
    },
    {
      "app": "10001",
      "msi_id": "100011486697924513177",
      "createdAt": ISODate("2017-02-10T03:38:43.627Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("589c3408974ff98d26afa096"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "pt1hxTM+VcE+D8f5X1nBsTDfcrzn7MR7V9/jKIqrzWE=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  },
  "device_id": "f87106d46b64c9b5ca5bcd390878c5269dddb064",
  "password": "550e1bafe077ff0b0b67f4e32f29d751",
  "telco": "gsm.operator.alpha",
  "email": "huynhquochuy01@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
  "account": "0935133433",
  "channel": "empty",
  "google_aid": "EEC68DA3-BD61-41DF-9CAE-BA29D70DDAE3",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(701747494),
  "createdAt": ISODate("2017-02-09T09:19:04.531Z"),
  "updatedAt": ISODate("2017-02-27T07:58:19.714Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011486631945791816",
      "createdAt": ISODate("2017-02-09T09:19:04.534Z")
    },
    {
      "app": "10000",
      "msi_id": "100001487746942560621",
      "createdAt": ISODate("2017-02-22T07:02:21.510Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("589d3bcb974ff98d26afa0a8"),
  "platform": "android",
  "channel_cfg": "3|pp|1.0|GP|psv_2_store",
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "+GGxRh1VpgMWOz7RKc0YmiKfdSLh+imouaMZQqNwR6c=",
    "cDb": false,
    "cR": false,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": false,
    "vI": false
  },
  "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
  "password": "239ddc80138563ca22f78a099f9c53a8",
  "telco": "CHINA MOBILE",
  "email": "trangiainguyen@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "account": "0947736530",
  "channel": "empty",
  "google_aid": "69FE38AC-F603-4219-A251-02C4F1354E6F",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.134"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(311919192),
  "createdAt": ISODate("2017-02-10T04:04:27.889Z"),
  "updatedAt": ISODate("2017-03-20T03:20:52.466Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011486699468627057",
      "createdAt": ISODate("2017-02-10T04:04:27.894Z")
    },
    {
      "app": "10000",
      "msi_id": "100001487663027426379",
      "createdAt": ISODate("2017-02-21T07:43:46.561Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58a27372974ff98d26afa0bb"),
  "platform": "android",
  "channel_cfg": "3|pp|1.0|GP|psv_2_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "zS7kPQvrv7AUSuBvUqmiJ+2klGK43Ikb9PDidUnpnFo=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  },
  "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "telco": "empty",
  "email": "ujdj@js.con",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
  "account": "jfjdjdjsns",
  "channel": "empty",
  "google_aid": "5D30A2CC-032B-4A5D-8631-904C90E2DECE",
  "ip": {
    "user": "10.7.3.209",
    "public": "113.161.78.101"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(229098311),
  "createdAt": ISODate("2017-02-14T03:03:14.734Z"),
  "updatedAt": ISODate("2017-02-14T03:03:20.667Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011487041395998586",
      "createdAt": ISODate("2017-02-14T03:03:14.739Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58a275b2974ff98d26afa0bf"),
  "platform": "wp",
  "channel": "",
  "channel_cfg": "4|global|1.0.0|WPStore|gsv_2_store",
  "device_id": "AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=",
  "telco": "",
  "user_agent": "12345",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(362515620),
  "createdAt": ISODate("2017-02-14T03:12:50.763Z"),
  "updatedAt": ISODate("2017-02-14T03:12:50.772Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487041971644426",
      "createdAt": ISODate("2017-02-14T03:12:50.771Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58a276e5974ff98d26afa0c8"),
  "platform": "wp",
  "channel": "",
  "channel_cfg": "4|global|1.0.0|WPStore|gsv_2_store",
  "device_id": "AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=",
  "telco": "",
  "user_agent": "12345",
  "account": "khoa1234",
  "password": "9ef188f58e0aa2e1ecc9d6f5a583d675",
  "email": "khoant@mecorp.vn",
  "google_aid": "",
  "ip": {
    "user": "",
    "public": "115.78.161.134"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(380454574),
  "createdAt": ISODate("2017-02-14T03:17:57.616Z"),
  "updatedAt": ISODate("2017-02-20T07:39:43.981Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487042278881314",
      "createdAt": ISODate("2017-02-14T03:17:57.619Z")
    },
    {
      "app": "10004",
      "msi_id": "100041487576384181902",
      "createdAt": ISODate("2017-02-20T07:39:43.978Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58a402f5974ff98d26afa0cf"),
  "platform": "android",
  "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "hkghDf4TawBezBr4ImJ/yqOxvZKqqhs7DahlTcYum98=",
    "cDb": false,
    "cR": true,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": true,
    "vI": false
  },
  "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
  "telco": "CHINA MOBILE",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "channel": "empty",
  "type": "device",
  "google_aid": "69FE38AC-F603-4219-A251-02C4F1354E6F",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(766445263),
  "createdAt": ISODate("2017-02-15T07:27:49.744Z"),
  "updatedAt": ISODate("2017-03-15T10:07:26.356Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011487143670193648",
      "createdAt": ISODate("2017-02-15T07:27:49.757Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58a40fe7974ff98d26afa0e2"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "pt1hxTM+VcE+D8f5X1nBsTDfcrzn7MR7V9/jKIqrzWE=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  },
  "device_id": "f87106d46b64c9b5ca5bcd390878c5269dddb064",
  "password": "550e1bafe077ff0b0b67f4e32f29d751",
  "telco": "gsm.operator.alpha",
  "email": "huynhquochuy01@mailnesia.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
  "account": "0983833520",
  "channel": "empty",
  "google_aid": "EEC68DA3-BD61-41DF-9CAE-BA29D70DDAE3",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(683868448),
  "createdAt": ISODate("2017-02-15T08:23:03.204Z"),
  "updatedAt": ISODate("2017-02-27T08:18:18.798Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011487146983495277",
      "createdAt": ISODate("2017-02-15T08:23:03.209Z")
    },
    {
      "app": "10000",
      "msi_id": "100001488183491683396",
      "createdAt": ISODate("2017-02-27T08:18:10.967Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58a56309974ff98d26afa0ed"),
  "platform": "android",
  "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "oWs3iLVcSjJm6MfSzTqO8cE4Q+fKSTQ3tW4jXocRglQ=",
    "cDb": false,
    "cR": false,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": false,
    "vI": false
  },
  "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
  "password": "239ddc80138563ca22f78a099f9c53a8",
  "telco": "CHINA MOBILE",
  "email": "nguyentg001@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "account": "1030003701",
  "channel": "empty",
  "google_aid": "69FE38AC-F603-4219-A251-02C4F1354E6F",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.134"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(477637806),
  "createdAt": ISODate("2017-02-16T08:30:01.233Z"),
  "updatedAt": ISODate("2017-03-24T07:52:42.939Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011487233801304787",
      "createdAt": ISODate("2017-02-16T08:30:01.237Z")
    },
    {
      "app": "10000",
      "msi_id": "100001487928694906212",
      "createdAt": ISODate("2017-02-24T09:31:33.763Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58a973676bfb4fd74dd20a06"),
  "platform": "android",
  "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "CDbvwaE9W4DFLXwMmI5ATvIoTfP64H3TBYnmSBCOjO0=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  },
  "device_id": "4487e5dd52b3e5721878b4f3a05221e715b484a9",
  "telco": "T-Mobile",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SM-G3812 Build/KOT49H)",
  "channel": "empty",
  "type": "device",
  "google_aid": "172EA3A5-F05C-4C89-84D3-DECD44CFB80B",
  "ip": {
    "user": "172.16.152.15",
    "public": "42.117.126.128"
  },
  "status": "normal",
  "account_id": NumberInt(139638350),
  "createdAt": ISODate("2017-02-19T10:28:55.384Z"),
  "updatedAt": ISODate("2017-02-19T10:29:07.683Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011487500135119227",
      "createdAt": ISODate("2017-02-19T10:28:55.399Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58abe817568a2f86524fb185"),
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "OjJpocFtTVH6mUzgOor3eIRghoo3CbJsabN7jjuGdvU=",
    "cDb": false,
    "cR": true,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": false,
    "vI": false
  },
  "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
  "telco": "VN MOBIFONE",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
  "type": "device",
  "google_aid": "605BC9E9-2175-4B68-A5A8-D213CD879EE6",
  "ip": {
    "user": "10.7.2.147",
    "public": "113.161.78.101"
  },
  "status": "normal",
  "account_id": NumberInt(850291276),
  "createdAt": ISODate("2017-02-21T07:11:19.445Z"),
  "updatedAt": ISODate("2017-03-24T03:52:02.997Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487661079891904",
      "createdAt": ISODate("2017-02-21T07:11:19.453Z")
    },
    {
      "app": "10001",
      "msi_id": "100011490241879186011",
      "createdAt": ISODate("2017-03-23T04:04:38.956Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58abea4f568a2f86524fb18d"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "EYQXfABSJleZoV1F+1Va/gRzj8sGtMobu4pMkSPGiaY=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "a7497e685217510a4cad648adc9f66de17b53735",
  "telco": "empty",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
  "channel": "empty",
  "type": "device",
  "google_aid": "0",
  "ip": {
    "user": "10.0.3.15",
    "public": "119.129.115.160"
  },
  "status": "normal",
  "account_id": NumberInt(995530891),
  "createdAt": ISODate("2017-02-21T07:20:47.813Z"),
  "updatedAt": ISODate("2017-02-21T08:47:04.647Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487661648172292",
      "createdAt": ISODate("2017-02-21T07:20:47.819Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58abeac6568a2f86524fb192"),
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "TKSLM0U/Lme7QlzxyFPusn7ubHa7mCFxx+wd+E6T/jc=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  },
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "telco": "VIETTEL",
  "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
  "type": "facebook",
  "google_aid": "D78AA261-6BEB-4FE2-B62E-4E271C3F27F5",
  "status": "normal",
  "account_id": NumberInt(865298498),
  "createdAt": ISODate("2017-02-21T07:22:46.499Z"),
  "updatedAt": ISODate("2017-02-21T07:26:17.276Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487661767224178",
      "createdAt": ISODate("2017-02-21T07:22:46.508Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58abedb3568a2f86524fb199"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "192.168.253.8",
    "public": "119.129.115.160"
  },
  "status": "normal",
  "account_id": NumberInt(734425202),
  "createdAt": ISODate("2017-02-21T07:35:15.624Z"),
  "updatedAt": ISODate("2017-02-21T07:35:15.633Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487662516873339",
      "createdAt": ISODate("2017-02-21T07:35:15.630Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58abef61568a2f86524fb19e"),
  "platform": "android",
  "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
  "sd": {
    "aCD": [
      "l5JKbmikkzcZ2zsSVxVM2cK2WNynvrQXLs7FUxHtTpQ="
    ],
    "aD": "h2wXMYzX4E+Bs2wwWKvq4bJmWOhcS1vNx7qaYIA4aZY=",
    "cDb": true,
    "cR": true,
    "cS": "1D8E50523D5D59A086BB69141C8618C3CCD4F021",
    "e": true,
    "vI": false
  },
  "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
  "password": "4a0eed7f771748a2b0d309fc55a3f8ae",
  "telco": "Vodafone.de",
  "email": "khanhtk82apk@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
  "account": "khanhtk82",
  "channel": "empty",
  "google_aid": "35CBFB72-96C2-4FE4-8E24-0653E87DA7C9",
  "ip": {
    "user": "10.0.2.15",
    "public": "115.78.161.134"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(580604812),
  "createdAt": ISODate("2017-02-21T07:42:25.365Z"),
  "updatedAt": ISODate("2017-03-06T03:22:53.221Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487662945844213",
      "createdAt": ISODate("2017-02-21T07:42:25.371Z")
    },
    {
      "app": "10003",
      "msi_id": "100031488770546924030",
      "createdAt": ISODate("2017-03-06T03:22:26.488Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58abfb0b568a2f86524fb1a9"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "3CZz6VzVQa2Sl64Bzk9aaRaWEXBRxz5zmYOYIth7HUw=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "36b84752f7dee3c9aaae3f94856d648a755ac757",
  "telco": "empty",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
  "channel": "empty",
  "type": "device",
  "google_aid": "0",
  "ip": {
    "user": "10.0.3.15",
    "public": "119.129.115.160"
  },
  "status": "normal",
  "account_id": NumberInt(896801707),
  "createdAt": ISODate("2017-02-21T08:32:11.735Z"),
  "updatedAt": ISODate("2017-03-02T02:18:11.911Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487665932481022",
      "createdAt": ISODate("2017-02-21T08:32:11.753Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58ad10e6568a2f86524fb1b9"),
  "account": "testgame01",
  "email": "kevzhaoyun@gmail.com",
  "password": "550e1bafe077ff0b0b67f4e32f29d751",
  "channel": "",
  "telco": "45201",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "a72e065124f462cf3ef675a27aee0e1f90633aa7",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69",
  "google_aid": "",
  "ip": {
    "user": "10.8.8.99",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(260409820),
  "createdAt": ISODate("2017-02-22T04:17:42.302Z"),
  "updatedAt": ISODate("2017-02-22T04:17:42.306Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487737062640802",
      "createdAt": ISODate("2017-02-22T04:17:42.305Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58ad3f6f568a2f86524fb1c6"),
  "platform": "android",
  "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "y1utwwF9c0JJ0yN77sogBH2Obb+MalQNkoxIvSzBToo=",
    "cDb": false,
    "cR": true,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": false,
    "vI": false
  },
  "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
  "password": "239ddc80138563ca22f78a099f9c53a8",
  "telco": "T-Mobile",
  "email": "nguyentg05@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
  "account": "1030003705",
  "channel": "empty",
  "google_aid": "45813BE4-5B06-49D3-9ADC-EC92A9098393",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.134"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(180840543),
  "createdAt": ISODate("2017-02-22T07:36:15.285Z"),
  "updatedAt": ISODate("2017-03-18T02:45:02.162Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011487748975368073",
      "createdAt": ISODate("2017-02-22T07:36:15.289Z")
    },
    {
      "app": "10000",
      "msi_id": "100001488437612700913",
      "createdAt": ISODate("2017-03-02T06:53:32.348Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58ad484a568a2f86524fb1cf"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
  "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "10.7.3.123",
    "public": "113.161.78.101"
  },
  "status": "normal",
  "account_id": NumberInt(497615639),
  "createdAt": ISODate("2017-02-22T08:14:02.677Z"),
  "updatedAt": ISODate("2017-02-22T08:14:02.684Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487751243196868",
      "createdAt": ISODate("2017-02-22T08:14:02.682Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58ad652d568a2f86524fb1d7"),
  "channel": "",
  "telco": "45201",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "689788233555f2f17b0688e294313bf056e4bb5e",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
  "type": "facebook",
  "google_aid": "",
  "status": "normal",
  "account_id": NumberInt(757576939),
  "createdAt": ISODate("2017-02-22T10:17:17.149Z"),
  "updatedAt": ISODate("2017-02-22T10:17:17.156Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487758637635303",
      "createdAt": ISODate("2017-02-22T10:17:17.155Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58afa0f2568a2f86524fb1f2"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "dGmDeaqyTnGijH1K3TQrYPMIKw75qKljpsNUexjLy68=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "b542730716d64a7bea662cd47c8e3cac7bf7095e",
  "telco": "T-Mobile",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
  "channel": "empty",
  "type": "device",
  "google_aid": "442FEC18-A5AE-4F2E-8787-37DF858AB90C",
  "ip": {
    "user": "10.0.2.15",
    "public": "119.129.116.190"
  },
  "status": "normal",
  "account_id": NumberInt(935931406),
  "createdAt": ISODate("2017-02-24T02:56:50.980Z"),
  "updatedAt": ISODate("2017-03-21T03:45:35.75Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487905011121951",
      "createdAt": ISODate("2017-02-24T02:56:50.985Z")
    },
    {
      "app": "10001",
      "msi_id": "100011488247429306198",
      "createdAt": ISODate("2017-02-28T02:03:48.716Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58afa26b568a2f86524fb1f9"),
  "platform": "android",
  "channel_cfg": "3|pp|1.0|GP|psv_2_store",
  "sd": {
    "aCD": [
      "QqPVSVmfR/abMog8f/J4/aOi/8plX/enRqao2QYurBA="
    ],
    "aD": "vqS0wIC4XPF9otw83U7vyJqkW2ULhxeuKZ2lqUIyWc4=",
    "cDb": true,
    "cR": true,
    "cS": "806175985D09B121230ABD08776B9201BD5C4071",
    "e": false,
    "vI": false
  },
  "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
  "telco": "empty",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
  "channel": "empty",
  "type": "device",
  "google_aid": "5D30A2CC-032B-4A5D-8631-904C90E2DECE",
  "ip": {
    "user": "10.7.3.209",
    "public": "113.161.78.101"
  },
  "status": "normal",
  "account_id": NumberInt(751859388),
  "createdAt": ISODate("2017-02-24T03:03:07.909Z"),
  "updatedAt": ISODate("2017-02-27T04:37:23.94Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011487905388604291",
      "createdAt": ISODate("2017-02-24T03:03:07.915Z")
    },
    {
      "app": "10000",
      "msi_id": "100001487920626307058",
      "createdAt": ISODate("2017-02-24T07:17:05.984Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58afb548568a2f86524fb210"),
  "platform": "android",
  "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "RDOclHyLhRTVqDb1PJcy3hHhD8wFzkFTNXD73Ia/kQs=",
    "cDb": false,
    "cR": false,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
  "password": "239ddc80138563ca22f78a099f9c53a8",
  "telco": "T-Mobile",
  "email": "nguyentg02@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
  "account": "1030003702",
  "channel": "empty",
  "google_aid": "45813BE4-5B06-49D3-9ADC-EC92A9098393",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.134"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(978394739),
  "createdAt": ISODate("2017-02-24T04:23:36.190Z"),
  "updatedAt": ISODate("2017-03-22T01:47:18.345Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011487910216192519",
      "createdAt": ISODate("2017-02-24T04:23:36.194Z")
    },
    {
      "app": "10000",
      "msi_id": "100001487928735710337",
      "createdAt": ISODate("2017-02-24T09:32:15.494Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58afe4de568a2f86524fb21d"),
  "platform": "android",
  "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "zfo/pvCNZ3dOGEGxCUe9FsvEB8Mu6h0k/R8lEgmfUuw=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
  "telco": "Vodafone.de",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
  "channel": "empty",
  "type": "device",
  "google_aid": "35CBFB72-96C2-4FE4-8E24-0653E87DA7C9",
  "ip": {
    "user": "10.0.2.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(560708617),
  "createdAt": ISODate("2017-02-24T07:46:38.523Z"),
  "updatedAt": ISODate("2017-03-21T07:04:26.787Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001487922399864225",
      "createdAt": ISODate("2017-02-24T07:46:38.530Z")
    },
    {
      "app": "10003",
      "msi_id": "100031489483891398281",
      "createdAt": ISODate("2017-03-14T09:31:31.8Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b3a2c3568a2f86524fb23d"),
  "platform": "android",
  "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "zfo/pvCNZ3dOGEGxCUe9FsvEB8Mu6h0k/R8lEgmfUuw=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
  "telco": "T-Mobile",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
  "channel": "empty",
  "type": "device",
  "google_aid": "0",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(768894069),
  "createdAt": ISODate("2017-02-27T03:53:39.407Z"),
  "updatedAt": ISODate("2017-03-17T01:42:37.147Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011488167619269830",
      "createdAt": ISODate("2017-02-27T03:53:39.413Z")
    },
    {
      "app": "10000",
      "msi_id": "100001488172183353270",
      "createdAt": ISODate("2017-02-27T05:09:42.541Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b3ac31568a2f86524fb245"),
  "channel": "",
  "telco": "45204",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "540833bb60df1140531e4f6bc29ff96f0d6078d3",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "10.7.3.167",
    "public": "113.161.78.101"
  },
  "status": "normal",
  "account_id": NumberInt(168012970),
  "createdAt": ISODate("2017-02-27T04:33:53.244Z"),
  "updatedAt": ISODate("2017-02-27T04:33:53.253Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001488170033793609",
      "createdAt": ISODate("2017-02-27T04:33:53.250Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b3ca2f568a2f86524fb26d"),
  "account": "18665443311",
  "email": "3334968@qq.com",
  "password": "ff29ec81411391022fae2c4a95923e35",
  "sd": "empty",
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "telco": "empty",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
  "google_aid": "93065B31-26AB-4CE2-91E5-D0F8DF379341",
  "ip": {
    "user": "192.168.2.105",
    "public": "119.129.117.255"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(863300248),
  "createdAt": ISODate("2017-02-27T06:41:51.164Z"),
  "updatedAt": ISODate("2017-02-27T06:41:51.170Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001488177711923060",
      "createdAt": ISODate("2017-02-27T06:41:51.168Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b3d897568a2f86524fb27d"),
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "jPegKlOap8OvzzOrD5YqFtEgdzBfnu0RFpV+0tgab2Q=",
    "cDb": false,
    "cR": false,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "b1be02765dbe891473949fe35789a0b29366b326",
  "telco": "empty",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
  "type": "device",
  "google_aid": "B4A3DFAD-6090-437D-B33C-22AE907F9C50",
  "ip": {
    "user": "10.7.1.96",
    "public": "113.161.78.101"
  },
  "status": "normal",
  "account_id": NumberInt(913429778),
  "createdAt": ISODate("2017-02-27T07:43:19.522Z"),
  "updatedAt": ISODate("2017-03-10T10:26:09.489Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001488181400338498",
      "createdAt": ISODate("2017-02-27T07:43:19.527Z")
    },
    {
      "app": "10003",
      "msi_id": "100031488770382988667",
      "createdAt": ISODate("2017-03-06T03:19:41.844Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b3df45568a2f86524fb285"),
  "account": "longpn01",
  "email": "longpn01@yahoo.com",
  "password": "b3c08fdcc267167a90f573d8451ab7df",
  "channel": "",
  "telco": "45201",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "689788233555f2f17b0688e294313bf056e4bb5e",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
  "google_aid": "",
  "ip": {
    "user": "10.7.1.221",
    "public": "113.161.78.101"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(971282243),
  "createdAt": ISODate("2017-02-27T08:11:49.734Z"),
  "updatedAt": ISODate("2017-02-27T08:11:49.739Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001488183110339121",
      "createdAt": ISODate("2017-02-27T08:11:49.738Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b4eaad568a2f86524fb2b0"),
  "platform": "android",
  "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "rPiDk/eTodV6VWzdlA9o9Ej12N8ysJKWdtGlG2TpWRo=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "2120bcc1464791f44ecd94df56a4c3ace117f887",
  "telco": "CHINA MOBILE",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "channel": "empty",
  "type": "device",
  "google_aid": "0",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(533574639),
  "createdAt": ISODate("2017-02-28T03:12:45.939Z"),
  "updatedAt": ISODate("2017-03-03T09:31:13.915Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011488251566770608",
      "createdAt": ISODate("2017-02-28T03:12:45.947Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b5022e568a2f86524fb2b8"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "l5JKbmikkzcZ2zsSVxVM2cK2WNynvrQXLs7FUxHtTpQ="
    ],
    "aD": "h2wXMYzX4E+Bs2wwWKvq4bJmWOhcS1vNx7qaYIA4aZY=",
    "cDb": true,
    "cR": true,
    "cS": "1D8E50523D5D59A086BB69141C8618C3CCD4F021",
    "e": true,
    "vI": false
  },
  "device_id": "23059b32e0b7d240b9abbbeff8d68c4233b2d67c",
  "telco": "CHINA MOBILE",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "channel": "empty",
  "type": "device",
  "google_aid": "A3AAF597-BA15-46B5-8B11-99617FB2B047",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(183213904),
  "createdAt": ISODate("2017-02-28T04:53:02.915Z"),
  "updatedAt": ISODate("2017-02-28T04:53:07.740Z"),
  "list_service": [
    {
      "app": "10003",
      "msi_id": "100031488257583494472",
      "createdAt": ISODate("2017-02-28T04:53:02.923Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b52272568a2f86524fb2d4"),
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "MiylgyhI87xc7rKVxG85m87+Pg0T1rxoNlHXBL6BBsM=",
    "cDb": false,
    "cR": false,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": false,
    "vI": false
  },
  "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
  "telco": "VN VINAPHONE",
  "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
  "type": "device",
  "google_aid": "70DBDEA7-D290-49BB-A798-EE00FCB4D782",
  "ip": {
    "user": "10.7.3.184",
    "public": "113.161.78.101"
  },
  "status": "normal",
  "account_id": NumberInt(533403062),
  "createdAt": ISODate("2017-02-28T07:10:42.49Z"),
  "updatedAt": ISODate("2017-03-25T13:36:39.916Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011488265842563449",
      "createdAt": ISODate("2017-02-28T07:10:42.57Z")
    },
    {
      "app": "10000",
      "msi_id": "100001489141594185309",
      "createdAt": ISODate("2017-03-10T10:26:34.39Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b523d7568a2f86524fb2dd"),
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "xxvCmvjKJVZp1iy5PWbOhrDt/9nBVrvqvV63c6dExkc=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "d0b3f948daabe4c63b90c91463f41a2557076633",
  "telco": "中国联通",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/V8.2.1.0.LXKCNDL)",
  "type": "device",
  "google_aid": "0",
  "ip": {
    "user": "192.168.253.6",
    "public": "119.129.118.100"
  },
  "status": "normal",
  "account_id": NumberInt(560931514),
  "createdAt": ISODate("2017-02-28T07:16:39.72Z"),
  "updatedAt": ISODate("2017-02-28T07:16:45.635Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011488266199184084",
      "createdAt": ISODate("2017-02-28T07:16:39.76Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b69f55568a2f86524fb32a"),
  "account": "1030003703",
  "email": "nguyentg03@gmail.com",
  "password": "239ddc80138563ca22f78a099f9c53a8",
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
  "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "google_aid": "",
  "ip": {
    "user": "10.7.3.123",
    "public": "113.161.78.101"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(459123006),
  "createdAt": ISODate("2017-03-01T10:15:49.932Z"),
  "updatedAt": ISODate("2017-03-16T06:14:08.17Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011488363350363515",
      "createdAt": ISODate("2017-03-01T10:15:49.937Z")
    },
    {
      "app": "10000",
      "msi_id": "100001488514091308162",
      "createdAt": ISODate("2017-03-03T04:08:11.42Z")
    }
  ],
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "jPegKlOap8OvzzOrD5YqFtEgdzBfnu0RFpV+0tgab2Q=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  }
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b7a19b568a2f86524fb34c"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "061788f5f3596f821af0dc767727615e2a7bea16",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "192.168.2.100",
    "public": "119.129.119.174"
  },
  "status": "normal",
  "account_id": NumberInt(999754777),
  "createdAt": ISODate("2017-03-02T04:37:47.450Z"),
  "updatedAt": ISODate("2017-03-02T04:37:47.457Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001488429467724414",
      "createdAt": ISODate("2017-03-02T04:37:47.455Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b7c621568a2f86524fb363"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "l5JKbmikkzcZ2zsSVxVM2cK2WNynvrQXLs7FUxHtTpQ="
    ],
    "aD": "h2wXMYzX4E+Bs2wwWKvq4bJmWOhcS1vNx7qaYIA4aZY=",
    "cDb": true,
    "cR": true,
    "cS": "1D8E50523D5D59A086BB69141C8618C3CCD4F021",
    "e": true,
    "vI": false
  },
  "device_id": "ce10ccaf273f9a88023c5c3e257eaeb04ac321ca",
  "password": "a168ec8b29409f28ae20a9ad0ba533c0",
  "telco": "CHINA MOBILE",
  "email": "nhattuan.duong@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "account": "tuanduong",
  "channel": "empty",
  "google_aid": "A0241AA1-CA73-4954-911F-ABE49E70187B",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.134"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(833537914),
  "createdAt": ISODate("2017-03-02T07:13:37.873Z"),
  "updatedAt": ISODate("2017-03-15T04:58:47.777Z"),
  "list_service": [
    {
      "app": "10003",
      "msi_id": "100031488438818359707",
      "createdAt": ISODate("2017-03-02T07:13:37.877Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b91735568a2f86524fb37d"),
  "account": "1030003704",
  "email": "nguyentg04@gmail.com",
  "password": "239ddc80138563ca22f78a099f9c53a8",
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
  "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "google_aid": "",
  "ip": {
    "user": "10.7.3.123",
    "public": "118.69.76.212"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(996958753),
  "createdAt": ISODate("2017-03-03T07:11:49.109Z"),
  "updatedAt": ISODate("2017-03-16T06:15:11.756Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011488525109918199",
      "createdAt": ISODate("2017-03-03T07:11:49.113Z")
    },
    {
      "app": "10000",
      "msi_id": "100001488787082219856",
      "createdAt": ISODate("2017-03-06T07:58:01.648Z")
    }
  ],
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "jPegKlOap8OvzzOrD5YqFtEgdzBfnu0RFpV+0tgab2Q=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  }
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58b9386d568a2f86524fb394"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "rPiDk/eTodV6VWzdlA9o9Ej12N8ysJKWdtGlG2TpWRo=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "54fedfca0e647d172ebed5d363402ec13c94b37b",
  "telco": "CHINA MOBILE",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "channel": "empty",
  "type": "device",
  "google_aid": "0",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(257035834),
  "createdAt": ISODate("2017-03-03T09:33:33.920Z"),
  "updatedAt": ISODate("2017-03-03T10:55:21.682Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011488533614530327",
      "createdAt": ISODate("2017-03-03T09:33:33.926Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58ba19ac568a2f86524fb3a4"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "rPiDk/eTodV6VWzdlA9o9Ej12N8ysJKWdtGlG2TpWRo=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "68e1e024cf1a5cd9f5cf9677dc7a0648148b5b6e",
  "telco": "CHINA MOBILE",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "channel": "empty",
  "type": "device",
  "google_aid": "0",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(741965519),
  "createdAt": ISODate("2017-03-04T01:34:36.753Z"),
  "updatedAt": ISODate("2017-03-04T01:34:39.244Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011488591277875635",
      "createdAt": ISODate("2017-03-04T01:34:36.759Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58bcc66a568a2f86524fb3b2"),
  "account": "khanhtk82apk",
  "email": "khanhtk82@mecorp.vn",
  "password": "4a0eed7f771748a2b0d309fc55a3f8ae",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "jPegKlOap8OvzzOrD5YqFtEgdzBfnu0RFpV+0tgab2Q=",
    "cDb": false,
    "cR": false,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "b1be02765dbe891473949fe35789a0b29366b326",
  "telco": "empty",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
  "google_aid": "B4A3DFAD-6090-437D-B33C-22AE907F9C50",
  "ip": {
    "user": "10.7.1.96",
    "public": "118.69.76.212"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(440605678),
  "createdAt": ISODate("2017-03-06T02:16:10.114Z"),
  "updatedAt": ISODate("2017-03-21T07:24:02.580Z"),
  "list_service": [
    {
      "app": "10003",
      "msi_id": "100031488766570741252",
      "createdAt": ISODate("2017-03-06T02:16:10.131Z")
    },
    {
      "app": "10000",
      "msi_id": "100001488784266120301",
      "createdAt": ISODate("2017-03-06T07:11:06.188Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58bcd496568a2f86524fb3b6"),
  "sd": {
    "aCD": [
      "l5JKbmikkzcZ2zsSVxVM2cK2WNynvrQXLs7FUxHtTpQ="
    ],
    "aD": "h2wXMYzX4E+Bs2wwWKvq4bJmWOhcS1vNx7qaYIA4aZY=",
    "cDb": true,
    "cR": false,
    "cS": "1D8E50523D5D59A086BB69141C8618C3CCD4F021",
    "e": false,
    "vI": false
  },
  "device_id": "b1be02765dbe891473949fe35789a0b29366b326",
  "telco": "empty",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
  "type": "facebook",
  "google_aid": "B4A3DFAD-6090-437D-B33C-22AE907F9C50",
  "status": "normal",
  "account_id": NumberInt(578610976),
  "createdAt": ISODate("2017-03-06T03:16:38.587Z"),
  "updatedAt": ISODate("2017-03-06T03:16:46.55Z"),
  "list_service": [
    {
      "app": "10003",
      "msi_id": "100031488770199573303",
      "createdAt": ISODate("2017-03-06T03:16:38.593Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58bcd994568a2f86524fb3c1"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "l5JKbmikkzcZ2zsSVxVM2cK2WNynvrQXLs7FUxHtTpQ="
    ],
    "aD": "N5CZ4hSlK+GWBlRBVyf1AIIGM3bosxMG5tgAY0dSjJ0=",
    "cDb": true,
    "cR": false,
    "cS": "1D8E50523D5D59A086BB69141C8618C3CCD4F021",
    "e": false,
    "vI": false
  },
  "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
  "password": "4a0eed7f771748a2b0d309fc55a3f8ae",
  "telco": "Vodafone.de",
  "email": "khanhtk@mecorp.vn",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
  "account": "khanhtk82ios",
  "channel": "empty",
  "google_aid": "35CBFB72-96C2-4FE4-8E24-0653E87DA7C9",
  "ip": {
    "user": "10.0.2.15",
    "public": "115.78.161.134"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(106523393),
  "createdAt": ISODate("2017-03-06T03:37:56.553Z"),
  "updatedAt": ISODate("2017-03-15T05:00:14.127Z"),
  "list_service": [
    {
      "app": "10003",
      "msi_id": "100031488771477427155",
      "createdAt": ISODate("2017-03-06T03:37:56.557Z")
    },
    {
      "app": "10000",
      "msi_id": "100001488941998105352",
      "createdAt": ISODate("2017-03-08T02:59:57.899Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58bcebab568a2f86524fb3d0"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
  "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "10.7.3.123",
    "public": "118.69.76.212"
  },
  "status": "normal",
  "account_id": NumberInt(266425902),
  "createdAt": ISODate("2017-03-06T04:55:07.25Z"),
  "updatedAt": ISODate("2017-03-06T04:55:07.33Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001488776107505894",
      "createdAt": ISODate("2017-03-06T04:55:07.31Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58be1760568a2f86524fb3ec"),
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "cc2ca95c9b143c2986a17e0b5cb6a88a66d530cc",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
  "type": "device",
  "google_aid": "",
  "ip": {
    "user": "192.168.2.100",
    "public": "119.129.116.155"
  },
  "status": "normal",
  "account_id": NumberInt(932883173),
  "createdAt": ISODate("2017-03-07T02:13:52.633Z"),
  "updatedAt": ISODate("2017-03-07T02:13:52.640Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001488852833834620",
      "createdAt": ISODate("2017-03-07T02:13:52.639Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58be17f3568a2f86524fb3f2"),
  "account": "18254322345",
  "email": "33567896@qq.com",
  "password": "1b80757ead5df4ab8396bb46f0568a7b",
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "cc2ca95c9b143c2986a17e0b5cb6a88a66d530cc",
  "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
  "google_aid": "",
  "ip": {
    "user": "192.168.2.100",
    "public": "119.129.116.155"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(175493606),
  "createdAt": ISODate("2017-03-07T02:16:19.93Z"),
  "updatedAt": ISODate("2017-03-07T02:16:19.97Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001488852979408702",
      "createdAt": ISODate("2017-03-07T02:16:19.96Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58be837e568a2f86524fb404"),
  "account": "1030003707",
  "email": "nguyentg07@gmail.com",
  "password": "239ddc80138563ca22f78a099f9c53a8",
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
  "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "google_aid": "",
  "ip": {
    "user": "10.7.3.123",
    "public": "118.69.76.212"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(161195357),
  "createdAt": ISODate("2017-03-07T09:55:10.575Z"),
  "updatedAt": ISODate("2017-03-10T08:52:31.195Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011488880511658297",
      "createdAt": ISODate("2017-03-07T09:55:10.579Z")
    },
    {
      "app": "10000",
      "msi_id": "100001489135951625409",
      "createdAt": ISODate("2017-03-10T08:52:31.186Z")
    }
  ],
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "KYFE0BKdDinnEs68hDfDD2XjXDIWnau6HpoFp5DxSWM=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  }
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58c22273568a2f86524fb436"),
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "jPegKlOap8OvzzOrD5YqFtEgdzBfnu0RFpV+0tgab2Q=",
    "cDb": false,
    "cR": false,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "dec6e2bfd653615598cdbe295c1488d62186ca14",
  "telco": "VN Mobifone",
  "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J7109 Build/MMB29M)",
  "type": "device",
  "google_aid": "3C8B8D69-7697-4FBB-8396-24E1A29596C7",
  "ip": {
    "user": "10.7.1.60",
    "public": "118.69.76.212"
  },
  "status": "normal",
  "account_id": NumberInt(187893547),
  "createdAt": ISODate("2017-03-10T03:50:11.197Z"),
  "updatedAt": ISODate("2017-03-21T07:45:20.676Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011489117811577386",
      "createdAt": ISODate("2017-03-10T03:50:11.204Z")
    },
    {
      "app": "10000",
      "msi_id": "100001490082314984417",
      "createdAt": ISODate("2017-03-21T07:45:13.812Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58c222a3568a2f86524fb43b"),
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "jPegKlOap8OvzzOrD5YqFtEgdzBfnu0RFpV+0tgab2Q=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "dec6e2bfd653615598cdbe295c1488d62186ca14",
  "telco": "VN Mobifone",
  "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J7109 Build/MMB29M)",
  "type": "facebook",
  "google_aid": "3C8B8D69-7697-4FBB-8396-24E1A29596C7",
  "status": "normal",
  "account_id": NumberInt(351717188),
  "createdAt": ISODate("2017-03-10T03:50:59.527Z"),
  "updatedAt": ISODate("2017-03-16T11:05:37.722Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011489117860312496",
      "createdAt": ISODate("2017-03-10T03:50:59.535Z")
    },
    {
      "app": "10003",
      "msi_id": "100031489543108457440",
      "createdAt": ISODate("2017-03-15T01:58:27.763Z")
    },
    {
      "app": "10000",
      "msi_id": "100001489643863988587",
      "createdAt": ISODate("2017-03-16T05:57:43.141Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58c64b5c568a2f86524fb473"),
  "account": "khanhtk82ppp",
  "email": "khanhtk@gmail.com",
  "password": "4a0eed7f771748a2b0d309fc55a3f8ae",
  "channel": "",
  "telco": "empty",
  "channel_cfg": "2|me|1.0.0|Appstore|psv_1_store",
  "platform": "ios",
  "device_id": "2e2ed8a9966570b679f3241b44481d7a26cc1f18",
  "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "google_aid": "",
  "ip": {
    "user": "10.7.1.141",
    "public": "118.69.76.212"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(360894272),
  "createdAt": ISODate("2017-03-13T07:33:48.908Z"),
  "updatedAt": ISODate("2017-03-14T08:30:38.164Z"),
  "list_service": [
    {
      "app": "10003",
      "msi_id": "100031489390429425098",
      "createdAt": ISODate("2017-03-13T07:33:48.913Z")
    }
  ],
  "sd": {
    "aCD": [
      "l5JKbmikkzcZ2zsSVxVM2cK2WNynvrQXLs7FUxHtTpQ="
    ],
    "aD": "N5CZ4hSlK+GWBlRBVyf1AIIGM3bosxMG5tgAY0dSjJ0=",
    "cDb": true,
    "cR": false,
    "cS": "1D8E50523D5D59A086BB69141C8618C3CCD4F021",
    "e": false,
    "vI": false
  }
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58c66f1f568a2f86524fb481"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "l5JKbmikkzcZ2zsSVxVM2cK2WNynvrQXLs7FUxHtTpQ="
    ],
    "aD": "BMPZaULgOvAKFXXoWQ6OGiM/SyliAYjLUlmOJqWO9Bw=",
    "cDb": true,
    "cR": true,
    "cS": "1D8E50523D5D59A086BB69141C8618C3CCD4F021",
    "e": true,
    "vI": false
  },
  "device_id": "9057dd30b71b30a08e745995375f5eb38bfde930",
  "password": "0369d98a00ba1ca13f51239278d7c2ce",
  "telco": "CHINA MOBILE",
  "email": "ht.swen@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "account": "thinhtrh",
  "channel": "empty",
  "google_aid": "462FAE79-FD93-46AA-A5EE-538461F1AF0F",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(354465044),
  "createdAt": ISODate("2017-03-13T10:06:23.694Z"),
  "updatedAt": ISODate("2017-03-14T04:35:08.956Z"),
  "list_service": [
    {
      "app": "10003",
      "msi_id": "100031489399584273629",
      "createdAt": ISODate("2017-03-13T10:06:23.707Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58c764c2568a2f86524fb488"),
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "jPegKlOap8OvzzOrD5YqFtEgdzBfnu0RFpV+0tgab2Q=",
    "cDb": false,
    "cR": false,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "3b96c6e82456c6fb8a33fa513aaffea5a9f3ba95",
  "telco": "empty",
  "channel_cfg": "empty",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-T705 Build/MMB29K)",
  "type": "device",
  "google_aid": "EE025A2D-3FBE-4A67-8541-15AA48933201",
  "ip": {
    "user": "10.7.2.56",
    "public": "118.69.76.212"
  },
  "status": "normal",
  "account_id": NumberInt(405632381),
  "createdAt": ISODate("2017-03-14T03:34:26.223Z"),
  "updatedAt": ISODate("2017-03-21T07:23:38.288Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001489462466639444",
      "createdAt": ISODate("2017-03-14T03:34:26.228Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58c8ff4e568a2f86524fb4a4"),
  "account": "1030003708",
  "email": "nguyentg08@gmail.com",
  "password": "239ddc80138563ca22f78a099f9c53a8",
  "channel": "",
  "telco": "empty",
  "channel_cfg": "",
  "platform": "ios",
  "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
  "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
  "google_aid": "",
  "ip": {
    "user": "10.7.3.123",
    "public": "118.69.76.212"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(424810432),
  "createdAt": ISODate("2017-03-15T08:46:06.364Z"),
  "updatedAt": ISODate("2017-03-17T01:51:40.808Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011489567566352625",
      "createdAt": ISODate("2017-03-15T08:46:06.369Z")
    },
    {
      "app": "10000",
      "msi_id": "100001489644721504717",
      "createdAt": ISODate("2017-03-16T06:12:00.962Z")
    }
  ],
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "zfo/pvCNZ3dOGEGxCUe9FsvEB8Mu6h0k/R8lEgmfUuw=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  }
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58ca1357568a2f86524fb4c6"),
  "sd": "empty",
  "device_id": "65697f5e946623a8bae8e2451ac05c0bd6c6f32d",
  "telco": "VN MobiFone",
  "channel_cfg": "3|pp|1.0|GP|psv_4_store",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; SM-G935F Build/NRD90M)",
  "type": "google",
  "google_aid": "CD690367-D8FB-4409-95F8-C2589EE67B85",
  "status": "normal",
  "account_id": NumberInt(903316983),
  "createdAt": ISODate("2017-03-16T04:23:51.942Z"),
  "updatedAt": ISODate("2017-03-16T04:23:51.951Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011489638232230250",
      "createdAt": ISODate("2017-03-16T04:23:51.949Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58ca333d568a2f86524fb4d7"),
  "platform": "android",
  "channel_cfg": "3|pp|1.0|GP|psv_4_store",
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "hkghDf4TawBezBr4ImJ/yqOxvZKqqhs7DahlTcYum98=",
    "cDb": false,
    "cR": true,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": true,
    "vI": false
  },
  "device_id": "62b5a12864f0d67447dadc359990a53f5f3b6964",
  "telco": "CHINA MOBILE",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "channel": "empty",
  "type": "device",
  "google_aid": "0",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(535239602),
  "createdAt": ISODate("2017-03-16T06:39:57.885Z"),
  "updatedAt": ISODate("2017-03-16T07:29:32.165Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011489646398410841",
      "createdAt": ISODate("2017-03-16T06:39:57.894Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58ca7fc4568a2f86524fb4f1"),
  "platform": "android",
  "channel_cfg": "3|pp|1.0|GP|psv_4_store",
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "+GGxRh1VpgMWOz7RKc0YmiKfdSLh+imouaMZQqNwR6c=",
    "cDb": false,
    "cR": false,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": false,
    "vI": false
  },
  "device_id": "4487e5dd52b3e5721878b4f3a05221e715b484a9",
  "password": "239ddc80138563ca22f78a099f9c53a8",
  "telco": "T-Mobile",
  "email": "nguyentg10@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SM-G3812 Build/KOT49H)",
  "account": "1030003710",
  "channel": "empty",
  "google_aid": "172EA3A5-F05C-4C89-84D3-DECD44CFB80B",
  "ip": {
    "user": "172.16.152.15",
    "public": "58.186.246.224"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(662143003),
  "createdAt": ISODate("2017-03-16T12:06:28.892Z"),
  "updatedAt": ISODate("2017-03-20T05:12:04.713Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011489665989625217",
      "createdAt": ISODate("2017-03-16T12:06:28.899Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58cc9e54568a2f86524fb500"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
  "sd": {
    "aCD": [
      "PYsZKutEs52/ADhGOxJt4z47nZf4r1TlZ8Io077zUHU="
    ],
    "aD": "KYFE0BKdDinnEs68hDfDD2XjXDIWnau6HpoFp5DxSWM=",
    "cDb": false,
    "cR": true,
    "cS": "85BC27F80C985EA2FEEE77777BA4617EA7637736",
    "e": false,
    "vI": false
  },
  "device_id": "14caeff4f25ef9718bcc68f79443cb2edd6e699f",
  "telco": "T-Mobile",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
  "channel": "empty",
  "type": "device",
  "google_aid": "45813BE4-5B06-49D3-9ADC-EC92A9098393",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(299389352),
  "createdAt": ISODate("2017-03-18T02:41:24.660Z"),
  "updatedAt": ISODate("2017-03-21T07:10:38.474Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001489804885343585",
      "createdAt": ISODate("2017-03-18T02:41:24.676Z")
    },
    {
      "app": "10001",
      "msi_id": "100011490080234984552",
      "createdAt": ISODate("2017-03-21T07:10:33.703Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58cf3f7c568a2f86524fb50f"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "pEo6/C/XptY3AdnyYQH0pqqGWfFrj9qdlxNE9UqTcnw=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": true,
    "vI": false
  },
  "device_id": "66c1e3d4582377cca556b310f6b7e189e005e045",
  "telco": "CHINA MOBILE",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
  "channel": "empty",
  "type": "device",
  "google_aid": "064757D8-297E-4152-916E-97BE650E7B67",
  "ip": {
    "user": "10.0.3.15",
    "public": "115.78.161.88"
  },
  "status": "normal",
  "account_id": NumberInt(496791534),
  "createdAt": ISODate("2017-03-20T02:33:32.383Z"),
  "updatedAt": ISODate("2017-03-20T02:33:37.824Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011489977212286065",
      "createdAt": ISODate("2017-03-20T02:33:32.394Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58cf4b53568a2f86524fb51b"),
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "y1utwwF9c0JJ0yN77sogBH2Obb+MalQNkoxIvSzBToo=",
    "cDb": false,
    "cR": true,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": false,
    "vI": false
  },
  "device_id": "23094ddbb07ab715df0d4430fdb079164f5acb50",
  "telco": "empty",
  "channel_cfg": "3|pp|1.0|GP|psv_4_store",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
  "type": "device",
  "google_aid": "9592072E-F895-4166-B1ED-0FF306EFC3DB",
  "ip": {
    "user": "10.7.1.119",
    "public": "118.69.76.212"
  },
  "status": "normal",
  "account_id": NumberInt(180190237),
  "createdAt": ISODate("2017-03-20T03:24:03.585Z"),
  "updatedAt": ISODate("2017-03-20T04:04:45.909Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011489980244935357",
      "createdAt": ISODate("2017-03-20T03:24:03.592Z")
    },
    {
      "app": "10000",
      "msi_id": "100001489982489143046",
      "createdAt": ISODate("2017-03-20T04:01:28.894Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58cf4d75568a2f86524fb522"),
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "y1utwwF9c0JJ0yN77sogBH2Obb+MalQNkoxIvSzBToo=",
    "cDb": false,
    "cR": true,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": false,
    "vI": false
  },
  "device_id": "23094ddbb07ab715df0d4430fdb079164f5acb50",
  "telco": "VN MobiFone",
  "channel_cfg": "3|pp|1.0|GP|psv_4_store",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
  "type": "facebook",
  "google_aid": "9592072E-F895-4166-B1ED-0FF306EFC3DB",
  "status": "normal",
  "account_id": NumberInt(683846975),
  "createdAt": ISODate("2017-03-20T03:33:09.507Z"),
  "updatedAt": ISODate("2017-03-20T04:06:04.25Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011489980790750317",
      "createdAt": ISODate("2017-03-20T03:33:09.513Z")
    },
    {
      "app": "10000",
      "msi_id": "100001489982759150283",
      "createdAt": ISODate("2017-03-20T04:05:58.932Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58cf4e4b568a2f86524fb526"),
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "y1utwwF9c0JJ0yN77sogBH2Obb+MalQNkoxIvSzBToo=",
    "cDb": false,
    "cR": true,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": false,
    "vI": false
  },
  "device_id": "23094ddbb07ab715df0d4430fdb079164f5acb50",
  "telco": "VN MobiFone",
  "channel_cfg": "3|pp|1.0|GP|psv_4_store",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
  "type": "google",
  "google_aid": "9592072E-F895-4166-B1ED-0FF306EFC3DB",
  "status": "normal",
  "account_id": NumberInt(723675476),
  "createdAt": ISODate("2017-03-20T03:36:43.279Z"),
  "updatedAt": ISODate("2017-03-20T04:10:44.658Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011489981003402879",
      "createdAt": ISODate("2017-03-20T03:36:43.287Z")
    },
    {
      "app": "10000",
      "msi_id": "100001489982824370488",
      "createdAt": ISODate("2017-03-20T04:07:04.311Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58cf64e1568a2f86524fb538"),
  "account": "1030003711",
  "email": "nguyentg11@gmail.com",
  "password": "239ddc80138563ca22f78a099f9c53a8",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "RDOclHyLhRTVqDb1PJcy3hHhD8wFzkFTNXD73Ia/kQs=",
    "cDb": false,
    "cR": false,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
  "telco": "VN VINAPHONE",
  "channel_cfg": "3|pp|1.0|GP|psv_4_store",
  "channel": "empty",
  "platform": "android",
  "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
  "google_aid": "70DBDEA7-D290-49BB-A798-EE00FCB4D782",
  "ip": {
    "user": "fe80::c875:60ff:fea9:6c68%dummy0",
    "public": "113.185.26.253"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(284138741),
  "createdAt": ISODate("2017-03-20T05:13:05.944Z"),
  "updatedAt": ISODate("2017-03-22T01:56:24.280Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011489986786166485",
      "createdAt": ISODate("2017-03-20T05:13:05.951Z")
    },
    {
      "app": "10000",
      "msi_id": "100001490147784754880",
      "createdAt": ISODate("2017-03-22T01:56:24.278Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58d0a224568a2f86524fb54f"),
  "platform": "android",
  "channel_cfg": "empty",
  "sd": {
    "aCD": [
      "1xQf5yYYKBvzwLn3SMaPdSS29qyWb1kfUizu6Wqc4hA="
    ],
    "aD": "RDOclHyLhRTVqDb1PJcy3hHhD8wFzkFTNXD73Ia/kQs=",
    "cDb": false,
    "cR": true,
    "cS": "66BC02394461E60B0CC81013AB5DD119986DAA95",
    "e": false,
    "vI": false
  },
  "device_id": "65251d5b93c829e03961b2804f4e2ad05312cb20",
  "telco": "T-Mobile",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
  "channel": "empty",
  "type": "device",
  "google_aid": "48909B49-B42F-48F9-A2FF-441E271F35FF",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.134"
  },
  "status": "normal",
  "account_id": NumberInt(861346265),
  "createdAt": ISODate("2017-03-21T03:46:44.78Z"),
  "updatedAt": ISODate("2017-03-21T06:37:12.269Z"),
  "list_service": [
    {
      "app": "10001",
      "msi_id": "100011490068004723650",
      "createdAt": ISODate("2017-03-21T03:46:44.87Z")
    }
  ]
});
db.getCollection("accounts").insert({
  "_id": ObjectId("58d4c8c0568a2f86524fb5a5"),
  "platform": "android",
  "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
  "sd": {
    "aCD": [
      "bLNs7BEO8aDQv7pF8o/0k/1j8K+wiLmJqoIsJomFnzs="
    ],
    "aD": "dLHoQkp2L5PLgQs+LmXe+OPGBLUq8o0jQ43VjvI+4S4=",
    "cDb": false,
    "cR": true,
    "cS": "37697743DE4AA461D45CFE56781D4356D8C7D45B",
    "e": false,
    "vI": false
  },
  "device_id": "f9b349c1867d707127f96d2eb7221b9fefeb2c36",
  "password": "550e1bafe077ff0b0b67f4e32f29d751",
  "telco": "Viettel Telecom",
  "email": "dnreddevil@gmail.com",
  "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
  "account": "test0001",
  "channel": "empty",
  "google_aid": "9C3E1500-09D1-4C20-A190-3BA52F52CF12",
  "ip": {
    "user": "172.16.152.15",
    "public": "115.78.161.124"
  },
  "type": "default",
  "status": "normal",
  "account_id": NumberInt(209775808),
  "createdAt": ISODate("2017-03-24T07:20:32.964Z"),
  "updatedAt": ISODate("2017-03-24T07:23:06.597Z"),
  "list_service": [
    {
      "app": "10000",
      "msi_id": "100001490340033286271",
      "createdAt": ISODate("2017-03-24T07:20:32.970Z")
    }
  ]
});

/** activity records **/
db.getCollection("activity").insert({
  "_id": ObjectId("585bbba80003bd3f1452e780"),
  "account_id": NumberInt(469086595),
  "params": {
    "manufacturer": "unknown",
    "package_name": "bai888.doden.portal",
    "sdk_version": "1.1.1.0.20160824",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "fccf5ba067af9f7903a8f151ee3b3a7a33119e1e",
    "brand": "Android",
    "model": "Android SDK built for x86_64",
    "telco": "Android",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Android SDK built for x86_64 Build/LMY48X)",
    "ip_user": "fe80::5054:ff:fe12:3456%eth0",
    "type": "device",
    "google_aid": "0",
    "ip": {
      "user": "fe80::5054:ff:fe12:3456%eth0",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "743284",
    "app": "10000",
    "token": "bcf842eb63c20b55af092464616c4314",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Android SDK built for x86_64 Build/LMY48X)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-22T11:40:24.69Z"),
  "updatedAt": ISODate("2016-12-22T11:40:24.69Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("585bdc8c0003bd3f1452e785"),
  "account_id": NumberInt(825614777),
  "params": {
    "manufacturer": "samsung",
    "package_name": "bai888.doden.portal",
    "sdk_version": "1.1.1.0.20160824",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "192.168.1.89",
    "type": "device",
    "google_aid": "9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC",
    "ip": {
      "user": "192.168.1.89",
      "public": "42.119.222.102"
    },
    "ip_public": "42.119.222.102"
  },
  "header": {
    "x-forwarded-for": "42.119.222.102",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "623787",
    "app": "10000",
    "token": "bfea5fd17a07cf28d188542543fff1d9",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-22T14:00:44.290Z"),
  "updatedAt": ISODate("2016-12-22T14:00:44.290Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("585c867a0003bd3f1452e787"),
  "account_id": NumberInt(825614777),
  "params": {
    "manufacturer": "samsung",
    "package_name": "bai888.doden.portal",
    "sdk_version": "1.1.1.0.20160824",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "880278",
    "app": "10000",
    "token": "a49389688b027eccb0eff4fa1a6b2c89",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-23T02:05:46.546Z"),
  "updatedAt": ISODate("2016-12-23T02:05:46.546Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("585cad97bbe8dcfc215dced8"),
  "account_id": NumberInt(527736287),
  "params": {
    "manufacturer": "samsung",
    "package_name": "bai888.doden.portal",
    "sdk_version": "1.1.1.0.20160824",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "type": "device",
    "google_aid": "9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC",
    "ip": {
      "user": "10.7.1.252",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "586061",
    "app": "10000",
    "token": "a548eb04b221440872fe2756e921019e",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-23T04:52:39.874Z"),
  "updatedAt": ISODate("2016-12-23T04:52:39.874Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("585cd166bbe8dcfc215dcedd"),
  "account_id": NumberInt(310711758),
  "params": {
    "version": "1.0",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.8.17.158",
    "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
    "platform": "ios",
    "app": "10000",
    "package_name": "bai888.doden.giaitri.cothuong",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"053E42EE-24BE-4F1C-88DF-D815902DBA9C\",\n    \"device_id\" : \"74500322465a218afeab622e7793f0515bd80a82\"\n  },\n  \"appsflyer_id\" : \"1482493817000-6583853\",\n  \"ios_ifa\" : \"7EDECD77-2658-4122-9ED4-C0FBF75DA844\",\n  \"ios_ifv\" : \"053E42EE-24BE-4F1C-88DF-D815902DBA9C\"\n}",
    "lang": "vi",
    "device_id": "74500322465a218afeab622e7793f0515bd80a82",
    "info": "{\"server_name\":\"Diamond_19124\",\"server_id\":\"1\",\"character_name\":\"saunghia6\",\"character_id\":\"132\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
    "model": "x86_64",
    "cR": false,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "10.8.17.158",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "857555",
    "app": "10000",
    "cookie": "sails.sid=s%3A2WA6L03Odu1dN_RDgiGWM6W7xxJp6CQt.gm6aecXRX30P8nwtZhSvNlqvj1yC32LlRZCWi4prvMQ",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89 | Global SDK 0.0.1 | RAM-8192MB + OSVersion-10.2 + Model-x86_64 + GameVersion-1.0",
    "token": "b530a8fa8dc3b1879b4ee513ad0436d6",
    "accept-language": "en-us",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-23T07:25:26.340Z"),
  "updatedAt": ISODate("2016-12-23T07:25:26.340Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("585cd16cbbe8dcfc215dcedf"),
  "account_id": NumberInt(310711758),
  "params": {
    "version": "1.0",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.8.17.158",
    "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
    "platform": "ios",
    "app": "10000",
    "package_name": "bai888.doden.giaitri.cothuong",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"053E42EE-24BE-4F1C-88DF-D815902DBA9C\",\n    \"device_id\" : \"74500322465a218afeab622e7793f0515bd80a82\"\n  },\n  \"appsflyer_id\" : \"1482493817000-6583853\",\n  \"ios_ifa\" : \"7EDECD77-2658-4122-9ED4-C0FBF75DA844\",\n  \"ios_ifv\" : \"053E42EE-24BE-4F1C-88DF-D815902DBA9C\"\n}",
    "lang": "vi",
    "device_id": "74500322465a218afeab622e7793f0515bd80a82",
    "info": "{\"server_name\":\"Diamond_19124\",\"server_id\":\"1\",\"character_name\":\"saunghia6\",\"character_id\":\"132\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
    "model": "x86_64",
    "cR": false,
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "023390",
    "app": "10000",
    "cookie": "sails.sid=s%3A2WA6L03Odu1dN_RDgiGWM6W7xxJp6CQt.gm6aecXRX30P8nwtZhSvNlqvj1yC32LlRZCWi4prvMQ",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89 | Global SDK 0.0.1 | RAM-8192MB + OSVersion-10.2 + Model-x86_64 + GameVersion-1.0",
    "token": "a75047dd9000725e3fe8da15dbede839",
    "accept-language": "en-us",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-23T07:25:32.837Z"),
  "updatedAt": ISODate("2016-12-23T07:25:32.837Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("585cd500df121bca2301155c"),
  "account_id": NumberInt(310711758),
  "params": {
    "version": "1.0",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.8.17.158",
    "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
    "platform": "ios",
    "app": "10000",
    "package_name": "bai888.doden.giaitri.cothuong",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"053E42EE-24BE-4F1C-88DF-D815902DBA9C\",\n    \"device_id\" : \"74500322465a218afeab622e7793f0515bd80a82\"\n  },\n  \"appsflyer_id\" : \"1482493817000-6583853\",\n  \"ios_ifa\" : \"7EDECD77-2658-4122-9ED4-C0FBF75DA844\",\n  \"ios_ifv\" : \"053E42EE-24BE-4F1C-88DF-D815902DBA9C\"\n}",
    "lang": "vi",
    "device_id": "74500322465a218afeab622e7793f0515bd80a82",
    "info": "{\"server_name\":\"Diamond_19124\",\"server_id\":\"1\",\"character_name\":\"saunghia6\",\"character_id\":\"132\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
    "model": "x86_64",
    "cR": false,
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "369122",
    "app": "10000",
    "cookie": "sails.sid=s%3AMuRvYB4mGyaG-VjYlBfE0bM7qx0zFiEY.iBeFk9cznpZShphd5kteh6XblPsTzwMZdjJetOmhzSU",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89 | Global SDK 0.0.1 | RAM-8192MB + OSVersion-10.2 + Model-x86_64 + GameVersion-1.0",
    "token": "53a3475568304fd4418bb29da5bc9728",
    "accept-language": "en-us",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-23T07:40:48.646Z"),
  "updatedAt": ISODate("2016-12-23T07:40:48.646Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("585cd5b83d1d271524771b63"),
  "account_id": NumberInt(304211009),
  "params": {
    "account": "taivc1991",
    "email": "taivc1991@gmail.com",
    "password": "25d55ad283aa400af464c76d713c07ad",
    "manufacturer": "samsung",
    "package_name": "bai888.doden.portal",
    "sdk_version": "1.1.1.0.20160824",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "google_aid": "9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC",
    "ip": {
      "user": "10.7.1.252",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "889210",
    "app": "10000",
    "token": "996604bec60d5546ed425e5b6307a8ca",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-23T07:43:52.281Z"),
  "updatedAt": ISODate("2016-12-23T07:43:52.281Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("585cd7b6686b2e5b24e7f8e4"),
  "account_id": NumberInt(709404877),
  "params": {
    "account": "hhhhhhhh",
    "email": "hhhhh@gmail.com",
    "password": "c9513bc3b27236b9578c00b5a19dbda4",
    "version": "1.0",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.8.17.158",
    "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
    "platform": "ios",
    "app": "10000",
    "package_name": "bai888.doden.giaitri.cothuong",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"053E42EE-24BE-4F1C-88DF-D815902DBA9C\",\n    \"device_id\" : \"74500322465a218afeab622e7793f0515bd80a82\"\n  },\n  \"appsflyer_id\" : \"1482493817000-6583853\",\n  \"ios_ifa\" : \"7EDECD77-2658-4122-9ED4-C0FBF75DA844\",\n  \"ios_ifv\" : \"053E42EE-24BE-4F1C-88DF-D815902DBA9C\"\n}",
    "lang": "vi",
    "device_id": "74500322465a218afeab622e7793f0515bd80a82",
    "info": "{\"server_name\":\"Diamond_19124\",\"server_id\":\"1\",\"character_name\":\"saunghia6\",\"character_id\":\"132\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
    "model": "x86_64",
    "cR": false,
    "google_aid": "",
    "ip": {
      "user": "10.8.17.158",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "912352",
    "app": "10000",
    "cookie": "sails.sid=s%3Ac2eNxLHdz6JhQ1muvEMO7WCRP-_uUS9-.r7yPyfB6rvSqRbwchqzONDIfn532guB61lxI%2Fbm3714",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89 | Global SDK 0.0.1 | RAM-8192MB + OSVersion-10.2 + Model-x86_64 + GameVersion-1.0",
    "token": "843fe6144caa5c80376d726ab8015b20",
    "accept-language": "en-us",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-23T07:52:22.495Z"),
  "updatedAt": ISODate("2016-12-23T07:52:22.495Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("585cd7c2686b2e5b24e7f8e6"),
  "account_id": NumberInt(527736287),
  "params": {
    "manufacturer": "samsung",
    "package_name": "bai888.doden.portal",
    "sdk_version": "1.1.1.0.20160824",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DURVhwRc/PYIJAg7zxDTJhHGc2dogTyZ5JazOYiJpPsbvdQU4maKRuU41CiYhvzqDL8V11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "empty",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "394150",
    "app": "10000",
    "token": "838c6e7e05679baeabfc394ec53aa685",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-23T07:52:34.113Z"),
  "updatedAt": ISODate("2016-12-23T07:52:34.113Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("585cfc45686b2e5b24e7f8ea"),
  "account_id": NumberInt(469086595),
  "params": {
    "manufacturer": "unknown",
    "package_name": "net.playone.app",
    "sdk_version": "1.0.0.0.20161224",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "fccf5ba067af9f7903a8f151ee3b3a7a33119e1e",
    "brand": "Android",
    "model": "Android SDK built for x86_64",
    "telco": "Android",
    "channel_cfg": "empty",
    "version": "1.0.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Android SDK built for x86_64 Build/LMY48X)",
    "ip_user": "fe80::5054:ff:fe12:3456%eth0",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "581033",
    "app": "10000",
    "token": "482ad5795b12399cb7a692726fb528f3",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Android SDK built for x86_64 Build/LMY48X)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-23T10:28:21.659Z"),
  "updatedAt": ISODate("2016-12-23T10:28:21.659Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("585cfcb9686b2e5b24e7f8ee"),
  "account_id": NumberInt(271593315),
  "params": {
    "account": "thienhaole",
    "email": "hhh@gmail.com",
    "password": "b7e6923f6de66497d51789db0ef3571d",
    "version": "1.0",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.8.17.158",
    "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
    "platform": "ios",
    "app": "10000",
    "package_name": "bai888.doden.giaitri.cothuong",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"409EB3FF-5A49-4BC0-96E0-D242B965B05B\",\n    \"device_id\" : \"755b7ffa8747df4e6dfd483d423e4990f100fb4f\"\n  },\n  \"appsflyer_id\" : \"1482514171000-9245710\",\n  \"ios_ifa\" : \"7EDECD77-2658-4122-9ED4-C0FBF75DA844\",\n  \"ios_ifv\" : \"409EB3FF-5A49-4BC0-96E0-D242B965B05B\"\n}",
    "lang": "vi",
    "device_id": "755b7ffa8747df4e6dfd483d423e4990f100fb4f",
    "info": "{\"server_name\":\"Diamond_19124\",\"server_id\":\"1\",\"character_name\":\"saunghia6\",\"character_id\":\"132\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
    "model": "x86_64",
    "cR": false,
    "google_aid": "",
    "ip": {
      "user": "10.8.17.158",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "630972",
    "app": "10000",
    "cookie": "sails.sid=s%3AA97tRCLtNnuQucK4tgtO57tI58SKATUX.pAKTbYqFY%2FiMVRTa50zmCbKwnpu6N90j00ShLOqr%2BA8",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89 | Global SDK 0.0.1 | RAM-8192MB + OSVersion-10.2 + Model-x86_64 + GameVersion-1.0",
    "token": "0b8ee098230ec181511ee70d359a1717",
    "accept-language": "en-us",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-23T10:30:17.839Z"),
  "updatedAt": ISODate("2016-12-23T10:30:17.839Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("585d0401686b2e5b24e7f8f2"),
  "account_id": NumberInt(914178751),
  "params": {
    "account": "chuyennm",
    "email": "chuyennmth@gmail.com",
    "password": "25d55ad283aa400af464c76d713c07ad",
    "manufacturer": "unknown",
    "package_name": "net.playone.app",
    "sdk_version": "1.0.0.0.20161224",
    "sd": "DC3NcWGjy2ISgSHCK/pNkHo9/yOSF2ZMiDuTevckI3L5f5zIPl1jeHnNCLfGcFkj9b6V03pT58Tyijlsa56DUd4a/hT2AvOuL0TtDzWI0lwmJezsOa4q2NnD7eKw/He8IO+D918VNkwcd185OzsXzsV11AdFvnrk5RsmvyxjUuni9aQ7QneoaGG6bjae7yHtVMMkAZr6p04QE0aRqGPFWden0MIYTBmzd2GLAlkysqupOe3/Dey7Vtjo8s3qxLUkduymLiYyqA5Wi3ZFsGKGmQ==",
    "app": "10000",
    "info": "{\"character_id\":\"750000169\",\"character_name\":\"Android\",\"server_id\":\"0\",\"type_card\":\"1\"}",
    "lang": "vi",
    "device_id": "fccf5ba067af9f7903a8f151ee3b3a7a33119e1e",
    "brand": "Android",
    "model": "Android SDK built for x86_64",
    "telco": "Android",
    "channel_cfg": "empty",
    "version": "1.0.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Android SDK built for x86_64 Build/LMY48X)",
    "ip_user": "fe80::5054:ff:fe12:3456%eth0",
    "google_aid": "0",
    "ip": {
      "user": "fe80::5054:ff:fe12:3456%eth0",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "313093",
    "app": "10000",
    "token": "1830d2a8ba3bde4ab16e558267772e83",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Android SDK built for x86_64 Build/LMY48X)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-23T11:01:21.346Z"),
  "updatedAt": ISODate("2016-12-23T11:01:21.346Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5860867b686b2e5b24e7f8f8"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "bai888.doden.portal",
    "sdk_version": "1.1.1.0.20160824",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUXwPxvhrQcUNRL1huf/87BCSq0Z7dj/AhL7pKvOUp7XEMeSoDknn9cqMz+2q3nn188V11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "empty",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.8.20.209",
    "type": "device",
    "google_aid": "9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC",
    "ip": {
      "user": "10.8.20.209",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "522768",
    "app": "10000",
    "token": "329c1c161d836ce6291109a8c5eb2a2a",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T02:54:51.327Z"),
  "updatedAt": ISODate("2016-12-26T02:54:51.327Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586087d0686b2e5b24e7f8fa"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "bai888.doden.portal",
    "sdk_version": "1.1.1.0.20160824",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.8.20.209",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "119448",
    "app": "10000",
    "token": "43820d0d06da6c239113a30b756b8ae0",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T03:00:32.300Z"),
  "updatedAt": ISODate("2016-12-26T03:00:32.300Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5860986f686b2e5b24e7f901"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.0.20161224",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.8.20.209",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "320800",
    "app": "10000",
    "token": "e1e4d5d921c8fd716ca5c9fb71047b1f",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T04:11:27.564Z"),
  "updatedAt": ISODate("2016-12-26T04:11:27.564Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586098e2686b2e5b24e7f903"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.0.20161224",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUQ/BHwi8uS8o4q0wGgpyHirzZalzCPEZZWw2/sV9raTiqtWws7CT4kGjG7l2HWWSfMV11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.8.20.209",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "013606",
    "app": "10000",
    "token": "3179d24f1dd4d104b2a2f9586ee818fc",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T04:13:22.166Z"),
  "updatedAt": ISODate("2016-12-26T04:13:22.166Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58609923686b2e5b24e7f905"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.0.20161224",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUQ/BHwi8uS8o4q0wGgpyHirzZalzCPEZZWw2/sV9raTiqtWws7CT4kGjG7l2HWWSfMV11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "empty",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.8.20.209",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "354658",
    "app": "10000",
    "token": "4258eb0ac3be76ae9d2c3795fa1e4629",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T04:14:27.459Z"),
  "updatedAt": ISODate("2016-12-26T04:14:27.459Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58609a83686b2e5b24e7f90a"),
  "account_id": NumberInt(134435319),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Coolpad 9190L",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.0.20161224",
    "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"9322E220-AFAA-40A2-AE77-E81444DEB8C2\"}",
    "telco": "T-Mobile",
    "manufacturer": "YuLong",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Coolpad 9190L Build/KOT49H)",
    "brand": "Coolpad",
    "channel": "empty",
    "type": "device",
    "google_aid": "9322E220-AFAA-40A2-AE77-E81444DEB8C2",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "667197",
    "app": "10000",
    "token": "9c1f0aecf5439630adffd8b959e2ca10",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Coolpad 9190L Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T04:20:19.634Z"),
  "updatedAt": ISODate("2016-12-26T04:20:19.634Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58609b2a686b2e5b24e7f90f"),
  "account_id": NumberInt(574023869),
  "params": {
    "manufacturer": "unknown",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.0.20161224",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "6a222e7bf8a7f2e25e0405833c84d3f4e761590c",
    "brand": "Android",
    "model": "Android SDK built for x86",
    "telco": "Android",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"83B039FA-9E38-4DA4-80E7-34B75858072C\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; Android SDK built for x86 Build/NYC)",
    "ip_user": "10.0.2.15",
    "type": "device",
    "google_aid": "83B039FA-9E38-4DA4-80E7-34B75858072C",
    "ip": {
      "user": "10.0.2.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "739573",
    "app": "10000",
    "token": "8d2f36d320d6e76ef79725519fda24f2",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; Android SDK built for x86 Build/NYC)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T04:23:06.461Z"),
  "updatedAt": ISODate("2016-12-26T04:23:06.461Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58609c22686b2e5b24e7f914"),
  "account_id": NumberInt(533469009),
  "params": {
    "manufacturer": "unknown",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.0.20161224",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "5a2f785d84a047d5ec089c608163841f80506f09",
    "brand": "Android",
    "model": "Android SDK built for x86",
    "telco": "Android",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"F793F94D-5E35-45B2-877A-6A2505305902\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; Android SDK built for x86 Build/NYC)",
    "ip_user": "10.0.2.15",
    "type": "device",
    "google_aid": "F793F94D-5E35-45B2-877A-6A2505305902",
    "ip": {
      "user": "10.0.2.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "091967",
    "app": "10000",
    "token": "fa5884e349c780306d0206003c8ee218",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; Android SDK built for x86 Build/NYC)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T04:27:14.794Z"),
  "updatedAt": ISODate("2016-12-26T04:27:14.794Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5860c2c6686b2e5b24e7f91b"),
  "account_id": NumberInt(171415393),
  "params": {
    "version": "1.0",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.8.17.148",
    "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"9A047C29-E9E7-4DBC-B2D6-84D08AA7271E\",\n    \"device_id\" : \"b909ace5869b35ef4acbb6fde24e1025f1bbe775\"\n  },\n  \"appsflyer_id\" : \"1482427661000-2244720\",\n  \"ios_ifa\" : \"7394276C-1490-430D-854D-2158E7737444\",\n  \"ios_ifv\" : \"9A047C29-E9E7-4DBC-B2D6-84D08AA7271E\"\n}",
    "lang": "vi",
    "device_id": "b909ace5869b35ef4acbb6fde24e1025f1bbe775",
    "info": "{\"server_name\":\"Diamond_19124\",\"server_id\":\"1\",\"character_name\":\"saunghia6\",\"character_id\":\"132\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_1 like Mac OS X) AppleWebKit/602.2.14 (KHTML, like Gecko) Mobile/14B72",
    "model": "x86_64",
    "cR": false,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "10.8.17.148",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "870817",
    "app": "10000",
    "cookie": "sails.sid=s%3A38djeHFzlkKr1g0MyjjHiv7JMtyWWWWa.LMtCGWSlIVpb3lb0f262qyc6bYOxSFeGN%2FmDYeHFkxs",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_1 like Mac OS X) AppleWebKit/602.2.14 (KHTML, like Gecko) Mobile/14B72 | Global SDK 0.0.1 | RAM-8192MB + OSVersion-10.1 + Model-x86_64 + GameVersion-1.0",
    "token": "d201cee7d638d245de1222ba8b74ce45",
    "accept-language": "en-us",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T07:12:06.91Z"),
  "updatedAt": ISODate("2016-12-26T07:12:06.91Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5860c587686b2e5b24e7f91e"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.0.20161224",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUS2nucLzEayTCXhcrEVGF9lI4a1bDKslGUKs12DUCkW7G+2Ze4kqbyHnHgysj/kwXMV11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "empty",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\",\"pixel\":{\"device_id\":\"9aeecf78d976a095d6abd94c8160e0241780c4d3\",\"track_id\":\"9aeecf78d976a095d6abd94c8160e0241780c4d3_1482723324727\"}}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "507648",
    "app": "10000",
    "token": "a83f34df4ac8227112f7a45cdfb587e8",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T07:23:51.758Z"),
  "updatedAt": ISODate("2016-12-26T07:23:51.758Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5860c6ba686b2e5b24e7f920"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.0.20161224",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "350718",
    "app": "10000",
    "token": "6f945dde70f6d9af8d94841d79729039",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T07:28:58.619Z"),
  "updatedAt": ISODate("2016-12-26T07:28:58.619Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5860c8d6686b2e5b24e7f922"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.0.20161224",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUS2nucLzEayTCXhcrEVGF9lI4a1bDKslGUKs12DUCkW7G+2Ze4kqbyHnHgysj/kwXMV11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "empty",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\",\"pixel\":{\"device_id\":\"9aeecf78d976a095d6abd94c8160e0241780c4d3\",\"track_id\":\"9aeecf78d976a095d6abd94c8160e0241780c4d3_1482723324727\"}}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "705207",
    "app": "10000",
    "token": "d5b436974997911be121fa82d6c93808",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T07:37:58.307Z"),
  "updatedAt": ISODate("2016-12-26T07:37:58.307Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5860c91b686b2e5b24e7f924"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.0.20161224",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUS2nucLzEayTCXhcrEVGF9lI4a1bDKslGUKs12DUCkW7G+2Ze4kqbyHnHgysj/kwXMV11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "empty",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\",\"pixel\":{\"device_id\":\"9aeecf78d976a095d6abd94c8160e0241780c4d3\",\"track_id\":\"9aeecf78d976a095d6abd94c8160e0241780c4d3_1482723324727\"}}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "691661",
    "app": "10000",
    "token": "518f401d7617914322716a91c9b83aa5",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T07:39:07.756Z"),
  "updatedAt": ISODate("2016-12-26T07:39:07.756Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5860ce50686b2e5b24e7f929"),
  "account_id": NumberInt(714068092),
  "params": {
    "version": "1.0",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.8.17.158",
    "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
    "platform": "ios",
    "app": "10000",
    "package_name": "bai888.doden.giaitri.cothuong",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"5FC992B1-19E6-4D18-8B8C-5D10871757BF\",\n    \"device_id\" : \"cef8a581484c406707ad2ea58ca1b717c5640ced\"\n  },\n  \"appsflyer_id\" : \"1482763044000-1698753\",\n  \"ios_ifa\" : \"0262AFDC-701A-4880-8816-875992840DA9\",\n  \"ios_ifv\" : \"5FC992B1-19E6-4D18-8B8C-5D10871757BF\"\n}",
    "lang": "vi",
    "device_id": "cef8a581484c406707ad2ea58ca1b717c5640ced",
    "info": "{\"server_name\":\"Diamond_19124\",\"server_id\":\"1\",\"character_name\":\"saunghia6\",\"character_id\":\"132\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
    "model": "x86_64",
    "cR": false,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "10.8.17.158",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "416140",
    "app": "10000",
    "cookie": "sails.sid=s%3A1qSb1RH8160hPeohRwhTkEliBdqvoO72.RY6a6TZQ%2FtZ8LbAkgPmhrzAoXOP7xeE4r%2FKaTMY%2FqfU",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89 | Global SDK 0.0.1 | RAM-8192MB + OSVersion-10.2 + Model-x86_64 + GameVersion-1.0",
    "token": "6cee3509e77c30bd64fbe9ad0fbb6490",
    "accept-language": "en-us",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T08:01:20.413Z"),
  "updatedAt": ISODate("2016-12-26T08:01:20.413Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5860d0d8686b2e5b24e7f92b"),
  "account_id": NumberInt(714068092),
  "params": {
    "version": "1.0",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.8.17.158",
    "channel_cfg": "2|global|4.9.3|Appstore|gsv_3_store",
    "platform": "ios",
    "app": "10000",
    "package_name": "bai888.doden.giaitri.cothuong",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"AB216B39-BD29-4F5C-8374-4DF950EC3C09\",\n    \"device_id\" : \"cef8a581484c406707ad2ea58ca1b717c5640ced\"\n  },\n  \"appsflyer_id\" : \"1482765109000-8992114\",\n  \"ios_ifa\" : \"0262AFDC-701A-4880-8816-875992840DA9\",\n  \"ios_ifv\" : \"AB216B39-BD29-4F5C-8374-4DF950EC3C09\"\n}",
    "lang": "vi",
    "device_id": "cef8a581484c406707ad2ea58ca1b717c5640ced",
    "info": "{\"server_name\":\"Diamond_19124\",\"server_id\":\"1\",\"character_name\":\"saunghia6\",\"character_id\":\"132\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89",
    "model": "x86_64",
    "cR": false,
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "806776",
    "app": "10000",
    "cookie": "sails.sid=s%3A3f8dUZ8LCQe4MqMk8_qwU7vPp2fNmHPe.1vVUi3Jd0QSrXExydear%2F2G1TgD320BvBb26VpOuYM4",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C89 | Global SDK 0.0.1 | RAM-8192MB + OSVersion-10.2 + Model-x86_64 + GameVersion-1.0",
    "token": "7a3137ecda1ed4a1d4aaecc4790e5543",
    "accept-language": "en-us",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2016-12-26T08:12:08.308Z"),
  "updatedAt": ISODate("2016-12-26T08:12:08.308Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586b23677a5d056409d029f3"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUfv3OVG0JxUpplxknS5VEy016Hs0Je6q3Z2l4crq+OQyf6LsLFTWaBLtCxzlrpIJ1MV11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "empty",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "171789",
    "app": "10000",
    "token": "1399ac5c9447b271dcec47110b607e6b",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-03T04:07:03.199Z"),
  "updatedAt": ISODate("2017-01-03T04:07:03.199Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586cb4997a5d056409d029f6"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUW4KzTdW/Y24ACVEnM5ZvZk/sxzl7UnbcWnt3OTw0nu7HtOHWpj9/vOz+3HFdtOkd8V11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "270758",
    "app": "10000",
    "token": "27bf9af031126c0a1ee5b2b153841c62",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-04T08:38:49.682Z"),
  "updatedAt": ISODate("2017-01-04T08:38:49.682Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586cb4c37a5d056409d029f8"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUW4KzTdW/Y24ACVEnM5ZvZk/sxzl7UnbcWnt3OTw0nu7HtOHWpj9/vOz+3HFdtOkd8V11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "empty",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "739357",
    "app": "10000",
    "token": "42d7171ef37f2eaf04cb3e47a90247d7",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-04T08:39:31.615Z"),
  "updatedAt": ISODate("2017-01-04T08:39:31.615Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586cb5547a5d056409d029fb"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "010926",
    "app": "10000",
    "token": "a0d47c22a7bcc0333cc36f85bee79595",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-04T08:41:56.666Z"),
  "updatedAt": ISODate("2017-01-04T08:41:56.666Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586cba9b7a5d056409d02a06"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.playone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUTB3yPgDOW1MHcmVG1Rsdw5Pmdddtc41EqFVmIszToPWaEyhCiK/pNKlObkzQorSB8V11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"750000169\",\"character_name\":\"Android\",\"server_id\":\"0\",\"type_card\":\"1\"}",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "868847",
    "app": "10000",
    "token": "20ee513cd0f4ca46cd562e1cd1fd10b7",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-04T09:04:27.702Z"),
  "updatedAt": ISODate("2017-01-04T09:04:27.702Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586cbb037a5d056409d02a08"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.playone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUWs59CqKg0eDPwULJZjIGcL9geGHKwCT7kD8GP3TMobLy6M69LlTwNIFdp6D/6LI/8V11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"750000169\",\"character_name\":\"Android\",\"server_id\":\"0\",\"type_card\":\"1\"}",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "038141",
    "app": "10000",
    "token": "9055ae17012b80ad0cf891e8d4d9ec50",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-04T09:06:11.284Z"),
  "updatedAt": ISODate("2017-01-04T09:06:11.284Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586cbb487a5d056409d02a0a"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.playone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "458744",
    "app": "10000",
    "token": "0634d2894b1479a9e261ee67fa0776ed",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-04T09:07:20.490Z"),
  "updatedAt": ISODate("2017-01-04T09:07:20.490Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586cbb5c7a5d056409d02a0c"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.playone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUWs59CqKg0eDPwULJZjIGcL9geGHKwCT7kD8GP3TMobLy6M69LlTwNIFdp6D/6LI/8V11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"750000169\",\"character_name\":\"Android\",\"server_id\":\"0\",\"type_card\":\"1\"}",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "301616",
    "app": "10000",
    "token": "492b7a06c8b509f724e120463d885970",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-04T09:07:40.878Z"),
  "updatedAt": ISODate("2017-01-04T09:07:40.878Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586cbb677a5d056409d02a0e"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.playone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUWs59CqKg0eDPwULJZjIGcL9geGHKwCT7kD8GP3TMobLy6M69LlTwNIFdp6D/6LI/8V11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"750000169\",\"character_name\":\"Android\",\"server_id\":\"0\",\"type_card\":\"1\"}",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "301616",
    "app": "10000",
    "token": "492b7a06c8b509f724e120463d885970",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-04T09:07:51.15Z"),
  "updatedAt": ISODate("2017-01-04T09:07:51.15Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586cbfab7a5d056409d02a11"),
  "account_id": NumberInt(641467627),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.playone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUWs59CqKg0eDPwULJZjIGcL9geGHKwCT7kD8GP3TMobLy6M69LlTwNIFdp6D/6LI/8V11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"750000169\",\"character_name\":\"Android\",\"server_id\":\"0\",\"type_card\":\"1\"}",
    "lang": "vi",
    "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
    "brand": "samsung",
    "model": "SM-J700H",
    "telco": "Mobifone",
    "channel_cfg": "empty",
    "version": "1.0.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9D09C5BC-802D-45D7-9E0A-1A971DAF5EAC\",\"pixel\":{\"device_id\":\"9aeecf78d976a095d6abd94c8160e0241780c4d3\",\"track_id\":\"9aeecf78d976a095d6abd94c8160e0241780c4d3_1483520297020\"}}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "ip_user": "10.7.1.252",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "786168",
    "app": "10000",
    "token": "54dc87ef161a2e86e7f676640796f298",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J700H Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-04T09:26:03.152Z"),
  "updatedAt": ISODate("2017-01-04T09:26:03.152Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586dd58a7a5d056409d02a2a"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "com.hcg.cok.common",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUXX0A0phP+OiLWIg7ZrJ0UCCF8zNSC4knIcQ8eDYvg5T/OYXTH8NEkl0nedSB4QpHsV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.109",
    "type": "device",
    "google_aid": "93065B31-26AB-4CE2-91E5-D0F8DF379341",
    "ip": {
      "user": "192.168.2.109",
      "public": "119.129.114.15"
    },
    "ip_public": "119.129.114.15"
  },
  "header": {
    "x-forwarded-for": "119.129.114.15",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "848298",
    "app": "10000",
    "token": "0c8de223be4667ca70b5de64526bc9d8",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-05T05:11:38.605Z"),
  "updatedAt": ISODate("2017-01-05T05:11:38.605Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586ddaac7a5d056409d02a2c"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "com.hcg.cok.common",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.109",
    "ip_public": "119.129.119.146"
  },
  "header": {
    "x-forwarded-for": "119.129.119.146",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "876225",
    "app": "10000",
    "token": "589fbfcd6bf11f26856a02b6c5c9ce0d",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-05T05:33:32.741Z"),
  "updatedAt": ISODate("2017-01-05T05:33:32.741Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586ddb0d7a5d056409d02a2e"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "com.hcg.cok.common",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.109",
    "ip_public": "119.129.119.146"
  },
  "header": {
    "x-forwarded-for": "119.129.119.146",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "604681",
    "app": "10000",
    "token": "da1f460d053905e372ff205ca8343d11",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-05T05:35:09.341Z"),
  "updatedAt": ISODate("2017-01-05T05:35:09.341Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586de6cf7a5d056409d02a32"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "com.hcg.cok.common",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.253.7",
    "ip_public": "119.129.114.15"
  },
  "header": {
    "x-forwarded-for": "119.129.114.15",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "423754",
    "app": "10000",
    "token": "db28ff6c2419cdf14a3096aeebe6fa87",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-05T06:25:19.80Z"),
  "updatedAt": ISODate("2017-01-05T06:25:19.80Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586f4b147a5d056409d02a4f"),
  "account_id": NumberInt(134435319),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Coolpad 9190L",
    "channel_cfg": "empty",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUWh3ZNDDbR4HTscwoI+vy9AVT5r0MaHqUu+NxdqNIyJ1En6trA9Fobidkrqe4QsJ18V11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "package_name": "com.hcg.cok.common",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"9322E220-AFAA-40A2-AE77-E81444DEB8C2\"}",
    "telco": "T-Mobile",
    "manufacturer": "YuLong",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Coolpad 9190L Build/KOT49H)",
    "brand": "Coolpad",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "495830",
    "app": "10000",
    "token": "3ec5597ff578b2fa6f15dc989464f803",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Coolpad 9190L Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-06T07:45:24.611Z"),
  "updatedAt": ISODate("2017-01-06T07:45:24.611Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586f64c07a5d056409d02a55"),
  "account_id": NumberInt(674529448),
  "params": {
    "manufacturer": "vivo",
    "package_name": "com.hcg.cok.common",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "332fd4a5a6bc3c3cf6fe3b192e0bf3b922a3f48a",
    "brand": "vivo",
    "model": "vivo Xplay5A",
    "telco": "CMCC",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; vivo Xplay5A Build/LMY47V)",
    "ip_user": "192.168.2.109",
    "type": "device",
    "google_aid": "0",
    "ip": {
      "user": "192.168.2.109",
      "public": "119.129.119.146"
    },
    "ip_public": "119.129.119.146"
  },
  "header": {
    "x-forwarded-for": "119.129.119.146",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "408399",
    "app": "10000",
    "token": "dca6ab9cc7ab034df2a77a0f7a60cd6a",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; vivo Xplay5A Build/LMY47V)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-06T09:34:56.475Z"),
  "updatedAt": ISODate("2017-01-06T09:34:56.475Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("586f84ac7a5d056409d02a5b"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "com.hcg.cok.common",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "type": "device",
    "google_aid": "0",
    "ip": {
      "user": "10.0.3.15",
      "public": "119.129.119.146"
    },
    "ip_public": "119.129.119.146"
  },
  "header": {
    "x-forwarded-for": "119.129.119.146",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "783852",
    "app": "10000",
    "token": "6f7a8f569acf1b32ffca1bd2f549bed3",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-06T11:51:08.557Z"),
  "updatedAt": ISODate("2017-01-06T11:51:08.557Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58731c207a5d056409d02a6a"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "com.hcg.cok.common",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.106",
    "ip_public": "119.129.115.36"
  },
  "header": {
    "x-forwarded-for": "119.129.115.36",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "736896",
    "app": "10000",
    "token": "a4f00edfb51d248ffd985e4559a69285",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-09T05:14:08.10Z"),
  "updatedAt": ISODate("2017-01-09T05:14:08.10Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587346d17a5d056409d02a6f"),
  "account_id": NumberInt(664494000),
  "params": {
    "account": "ngoctugobe",
    "email": "unomdk@gmail.com",
    "password": "44f46ec753b59b82eca94982317a9852",
    "version": "1.1.9",
    "channel": "",
    "telco": "45202",
    "ip_user": "10.8.20.53",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cos.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"6359389B-DBD3-42C7-9A76-4465EF00623E\",\n    \"device_id\" : \"41c2d1c3070dabe25fb15e13b0f32ad6240a808d\"\n  },\n  \"appsflyer_id\" : \"1483974857000-8797901\",\n  \"ios_ifa\" : \"A91F9625-57AB-4B72-894C-F776C9861188\",\n  \"ios_ifv\" : \"6359389B-DBD3-42C7-9A76-4465EF00623E\"\n}",
    "lang": "vi",
    "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
    "model": "iPhone7,2",
    "cR": false,
    "google_aid": "",
    "ip": {
      "user": "10.8.20.53",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "465497",
    "app": "10000",
    "cookie": "sails.sid=s%3AH8BzwKhrZ7u-cgleJ62lg0NtfmbVTQOi.B9F97fahd%2BA2Gl7ysjqSqi89wk8lLW3PId2nQI%2B%2F0UU",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36 | Global SDK 0.0.1 | RAM-989MB + OSVersion-9.3.5 + Model-iPhone7,2 + GameVersion-1.1.9",
    "token": "cf26ac8d609743d1466309a06a3e1f22",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-09T08:16:17.468Z"),
  "updatedAt": ISODate("2017-01-09T08:16:17.468Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587348627a5d056409d02a73"),
  "account_id": NumberInt(623603900),
  "params": {
    "account": "vinacafe",
    "email": "nghia@gmail.com",
    "password": "25d55ad283aa400af464c76d713c07ad",
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.1.141",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cos.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"FB0502C0-E799-4057-964F-96B09252B91B\",\n    \"device_id\" : \"159ed6d2808811ac4212035be56c2e94013fe5cb\"\n  },\n  \"appsflyer_id\" : \"1483974854000-9100182\",\n  \"ios_ifa\" : \"D4141418-0D21-405E-9025-BC63D78C0F72\",\n  \"ios_ifv\" : \"FB0502C0-E799-4057-964F-96B09252B91B\"\n}",
    "lang": "vi",
    "device_id": "159ed6d2808811ac4212035be56c2e94013fe5cb",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92",
    "model": "iPad4,8",
    "cR": false,
    "google_aid": "",
    "ip": {
      "user": "10.7.1.141",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "739676",
    "app": "10000",
    "cookie": "sails.sid=s%3AhZM0C2LBcw13zJ1I17hRmS55IcfUFgdL.dfofVB0Xt5XziJEUaMGs0tZns6g168y4tjDESjXTFU0",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2 + Model-iPad4,8 + GameVersion-1.1.9",
    "token": "638e2d61db71e1938d0baf5164b35d21",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-09T08:22:58.500Z"),
  "updatedAt": ISODate("2017-01-09T08:22:58.500Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58734adf7a5d056409d02a75"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "com.hcg.cok.common",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.104",
    "ip_public": "119.129.113.33"
  },
  "header": {
    "x-forwarded-for": "119.129.113.33",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "050243",
    "app": "10000",
    "token": "e17b9432e8725510b2e944fdb0b21f7f",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-09T08:33:35.762Z"),
  "updatedAt": ISODate("2017-01-09T08:33:35.762Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5873514d7a5d056409d02a78"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "com.hcg.cok.common",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.104",
    "ip_public": "119.129.118.239"
  },
  "header": {
    "x-forwarded-for": "119.129.118.239",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "468236",
    "app": "10000",
    "token": "15facd4ca650bd002c02edc1b9b06355",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-09T09:01:01.949Z"),
  "updatedAt": ISODate("2017-01-09T09:01:01.949Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5873516c7a5d056409d02a7a"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "com.hcg.cok.common",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.104",
    "ip_public": "119.129.118.239"
  },
  "header": {
    "x-forwarded-for": "119.129.118.239",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "689358",
    "app": "10000",
    "token": "b20757bfd0adeed5001dc3ec4463ab8e",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-09T09:01:32.168Z"),
  "updatedAt": ISODate("2017-01-09T09:01:32.168Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587385027a5d056409d02a84"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "com.hcg.cok.common",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.104",
    "ip_public": "119.129.113.33"
  },
  "header": {
    "x-forwarded-for": "119.129.113.33",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "537465",
    "app": "10000",
    "token": "8c76a036a9740add7a7b6c9e491d627c",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-09T12:41:38.18Z"),
  "updatedAt": ISODate("2017-01-09T12:41:38.18Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587392687a5d056409d02a86"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "com.hcg.cok.common",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.104",
    "ip_public": "119.129.118.239"
  },
  "header": {
    "x-forwarded-for": "119.129.118.239",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "926543",
    "app": "10000",
    "token": "4e8096d63f6a667df625e02c6a724f2b",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-09T13:38:48.826Z"),
  "updatedAt": ISODate("2017-01-09T13:38:48.826Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58748c087a5d056409d02a94"),
  "account_id": NumberInt(622299893),
  "params": {
    "account": "ngoctugobe2",
    "email": "unomdk1@gmail.com",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "channel": "",
    "telco": "45202",
    "ip_user": "10.7.3.167",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cos.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"6359389B-DBD3-42C7-9A76-4465EF00623E\",\n    \"device_id\" : \"41c2d1c3070dabe25fb15e13b0f32ad6240a808d\"\n  },\n  \"appsflyer_id\" : \"1483974857000-8797901\",\n  \"ios_ifa\" : \"A91F9625-57AB-4B72-894C-F776C9861188\",\n  \"ios_ifv\" : \"6359389B-DBD3-42C7-9A76-4465EF00623E\"\n}",
    "lang": "vi",
    "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
    "model": "iPhone7,2",
    "cR": false,
    "google_aid": "",
    "ip": {
      "user": "10.7.3.167",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "997257",
    "app": "10000",
    "cookie": "sails.sid=s%3AOZ5C1UcwAVJ4zRLqu-EuJg7epmm2cdyu.2ZaF8kY6j6MViT%2FdhZUDf88HO%2Fnb5A%2Fb3jQWWRWh22M",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36 | Global SDK 0.0.1 | RAM-989MB + OSVersion-9.3.5 + Model-iPhone7,2 + GameVersion-1.1.9",
    "token": "a67f9302d1195286e4493c91d63e4c7d",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-10T07:23:52.240Z"),
  "updatedAt": ISODate("2017-01-10T07:23:52.240Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5874b54c7a5d056409d02aa6"),
  "account_id": NumberInt(603473627),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "IM-A900L",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "10.7.3.209",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"5D30A2CC-032B-4A5D-8631-904C90E2DECE\"}",
    "telco": "empty",
    "email": "unomdk2@gmail.com",
    "manufacturer": "PANTECH",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "brand": "VEGA",
    "account": "ngoctugobe3",
    "channel": "empty",
    "google_aid": "5D30A2CC-032B-4A5D-8631-904C90E2DECE",
    "ip": {
      "user": "10.7.3.209",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "379071",
    "app": "10000",
    "token": "52c45498ba841b202b5a4cc4482afb63",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-10T10:19:56.897Z"),
  "updatedAt": ISODate("2017-01-10T10:19:56.897Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5874b7117a5d056409d02aab"),
  "account_id": NumberInt(325069536),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "SAMSUNG-SM-N900A",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "d255ff902c494eb8674c75c5a232c584aca5ddc8",
    "lang": "vi",
    "password": "32eed2fa19282809408bee3d2665a44d",
    "ip_user": "10.0.3.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"08C62398-443F-4FCC-8D49-BBF649B50988\"}",
    "telco": "Android",
    "email": "34909433@qq.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; SAMSUNG-SM-N900A Build/tt)",
    "brand": "SAMSUNG",
    "account": "18124532600",
    "channel": "empty",
    "google_aid": "08C62398-443F-4FCC-8D49-BBF649B50988",
    "ip": {
      "user": "10.0.3.15",
      "public": "119.129.118.239"
    },
    "ip_public": "119.129.118.239"
  },
  "header": {
    "x-forwarded-for": "119.129.118.239",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "108332",
    "app": "10000",
    "token": "368f31d7c92cc4d9c0b0658dcf227b01",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; SAMSUNG-SM-N900A Build/tt)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-10T10:27:29.213Z"),
  "updatedAt": ISODate("2017-01-10T10:27:29.213Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5874b8377a5d056409d02aaf"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "881349",
    "app": "10000",
    "token": "030c26b47deec876b0a08d449e88654b",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-10T10:32:23.217Z"),
  "updatedAt": ISODate("2017-01-10T10:32:23.217Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5874b9e07a5d056409d02ab4"),
  "account_id": NumberInt(881773336),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "type": "device",
    "google_aid": "0",
    "ip": {
      "user": "10.0.3.15",
      "public": "113.119.8.114"
    },
    "ip_public": "113.119.8.114"
  },
  "header": {
    "x-forwarded-for": "113.119.8.114",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "759937",
    "app": "10000",
    "token": "625a99ae530bfe3215e0e15c1d539116",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-10T10:39:28.439Z"),
  "updatedAt": ISODate("2017-01-10T10:39:28.439Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5874d4a07a5d056409d02aba"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "205266",
    "app": "10000",
    "token": "feae1bbd284c0439af3e87bfe2181aa9",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-10T12:33:36.501Z"),
  "updatedAt": ISODate("2017-01-10T12:33:36.501Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875903c7a5d056409d02abd"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "695434",
    "app": "10000",
    "token": "594aa9a170567aa6b23122747777c834",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T01:54:04.756Z"),
  "updatedAt": ISODate("2017-01-11T01:54:04.756Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587591577a5d056409d02ac6"),
  "account_id": NumberInt(845597805),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.167",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cos.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"89E56A1B-6773-4DDC-9AAF-915562533725\",\n    \"device_id\" : \"41c2d1c3070dabe25fb15e13b0f32ad6240a808d\"\n  },\n  \"appsflyer_id\" : \"1484124690000-5332300\",\n  \"ios_ifa\" : \"A91F9625-57AB-4B72-894C-F776C9861188\",\n  \"ios_ifv\" : \"89E56A1B-6773-4DDC-9AAF-915562533725\"\n}",
    "lang": "vi",
    "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
    "info": "{\"character_id\":\"100001484099783363475\",\"character_name\":\"Empire0191\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
    "model": "iPhone7,2",
    "cR": false,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "10.7.3.167",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "784643",
    "app": "10000",
    "cookie": "sails.sid=s%3A59DSc_VM2yuYq1MfQ6edgR1SCIIHlkxj.Yp9sS07QqONHgs4jVWe%2FA6dsI2jHCg9JLP6VFG0mXxI",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36 | Global SDK 0.0.1 | RAM-989MB + OSVersion-9.3.5 + Model-iPhone7,2 + GameVersion-1.1.9",
    "token": "8983de217175efd8c8b1f44f5d1a7919",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T01:58:47.47Z"),
  "updatedAt": ISODate("2017-01-11T01:58:47.47Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587591707a5d056409d02ac8"),
  "account_id": NumberInt(845597805),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.167",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cos.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"89E56A1B-6773-4DDC-9AAF-915562533725\",\n    \"device_id\" : \"41c2d1c3070dabe25fb15e13b0f32ad6240a808d\"\n  },\n  \"appsflyer_id\" : \"1484124690000-5332300\",\n  \"ios_ifa\" : \"A91F9625-57AB-4B72-894C-F776C9861188\",\n  \"ios_ifv\" : \"89E56A1B-6773-4DDC-9AAF-915562533725\"\n}",
    "lang": "vi",
    "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
    "model": "iPhone7,2",
    "cR": false,
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "738739",
    "app": "10000",
    "cookie": "sails.sid=s%3AfoSo-sHDXI98RebhmYf_XEHaqr-MgDSh.M8PucTRKZeMhLwaT0YceeqrNVkpzpehoPbu0OiwzCHI",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36 | Global SDK 0.0.1 | RAM-989MB + OSVersion-9.3.5 + Model-iPhone7,2 + GameVersion-1.1.9",
    "token": "7dc2914924a7d02ad63077577e829429",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T01:59:12.164Z"),
  "updatedAt": ISODate("2017-01-11T01:59:12.164Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587591cf7a5d056409d02acd"),
  "account_id": NumberInt(938824509),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.167",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cos.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"89E56A1B-6773-4DDC-9AAF-915562533725\",\n    \"device_id\" : \"41c2d1c3070dabe25fb15e13b0f32ad6240a808d\"\n  },\n  \"appsflyer_id\" : \"1484124690000-5332300\",\n  \"ios_ifa\" : \"A91F9625-57AB-4B72-894C-F776C9861188\",\n  \"ios_ifv\" : \"89E56A1B-6773-4DDC-9AAF-915562533725\"\n}",
    "lang": "vi",
    "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
    "model": "iPhone7,2",
    "cR": false,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "10.7.3.167",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "113328",
    "app": "10000",
    "cookie": "sails.sid=s%3Aa1etHsIVCaETDGPnzV9bdGpQSHVBbxJL.N6YaX%2FfbY3y3o0PBpiOZud14TL3C%2B1RYtMDJxmRfEns",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36 | Global SDK 0.0.1 | RAM-989MB + OSVersion-9.3.5 + Model-iPhone7,2 + GameVersion-1.1.9",
    "token": "c088f68f4286479f155d0c369d2fdc8d",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T02:00:47.781Z"),
  "updatedAt": ISODate("2017-01-11T02:00:47.781Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58759d6b7a5d056409d02ad5"),
  "account_id": NumberInt(881773336),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "113.119.8.114"
  },
  "header": {
    "x-forwarded-for": "113.119.8.114",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "994664",
    "app": "10000",
    "token": "8eba285dc5bbcb25a906426ec89e9913",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T02:50:19.415Z"),
  "updatedAt": ISODate("2017-01-11T02:50:19.415Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875a7e37a5d056409d02adc"),
  "account_id": NumberInt(413867888),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "GN305",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "383eec310f7c23010e0bf811e689151e686b1396",
    "lang": "vi",
    "password": "25d55ad283aa400af464c76d713c07ad",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"FC658945-454A-4FC7-8318-1E816B11C51E\"}",
    "telco": "T-Mobile",
    "email": "df@fjdk.com",
    "manufacturer": "GiONEE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "samsung",
    "account": "01627717257",
    "channel": "empty",
    "google_aid": "FC658945-454A-4FC7-8318-1E816B11C51E",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "580065",
    "app": "10000",
    "token": "cd0e97a99c67b17732533a8e8ea91fed",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T03:34:59.15Z"),
  "updatedAt": ISODate("2017-01-11T03:34:59.15Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875aa147a5d056409d02ae5"),
  "account_id": NumberInt(236921287),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "type": "device",
    "google_aid": "D78AA261-6BEB-4FE2-B62E-4E271C3F27F5",
    "ip": {
      "user": "10.8.8.120",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "910693",
    "app": "10000",
    "token": "ea7f43c87b4241504b5cbff4858f2297",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T03:44:20.654Z"),
  "updatedAt": ISODate("2017-01-11T03:44:20.654Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875b0517a5d056409d02aec"),
  "account_id": NumberInt(826337153),
  "params": {
    "account": "saunghia",
    "email": "saukt3@gmail.com",
    "password": "89463a37f6d72b8ed089e234b1b35a88",
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUVOPv2Spqhnw1fik27EQdnKovXI3YbUd0s8oeQRR9IaIYuSeiTs+zD+e+NvMzB9c3MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"100001483949777558244\",\"character_name\":\"Empire0161\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "google_aid": "D78AA261-6BEB-4FE2-B62E-4E271C3F27F5",
    "ip": {
      "user": "10.8.8.120",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "662642",
    "app": "10000",
    "token": "44af14e4f464c5e0eefeec034a6d6805",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T04:10:57.610Z"),
  "updatedAt": ISODate("2017-01-11T04:10:57.610Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875b5bd7a5d056409d02af1"),
  "account_id": NumberInt(541278944),
  "params": {
    "account": "ngoctugobe5",
    "email": "hdhd@hdh.com",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "google_aid": "D78AA261-6BEB-4FE2-B62E-4E271C3F27F5",
    "ip": {
      "user": "10.8.8.120",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "495603",
    "app": "10000",
    "token": "687b599a43795b29a272c308882aecfe",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T04:34:05.852Z"),
  "updatedAt": ISODate("2017-01-11T04:34:05.852Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875b5e47a5d056409d02af3"),
  "account_id": NumberInt(236921287),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "746777",
    "app": "10000",
    "token": "762df9776860eba2490c847ef64d4c16",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T04:34:44.315Z"),
  "updatedAt": ISODate("2017-01-11T04:34:44.315Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875b6227a5d056409d02af8"),
  "account_id": NumberInt(365513464),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUVOPv2Spqhnw1fik27EQdnKovXI3YbUd0s8oeQRR9IaIYuSeiTs+zD+e+NvMzB9c3MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"100001483949777558244\",\"character_name\":\"Empire0161\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "type": "device",
    "google_aid": "D78AA261-6BEB-4FE2-B62E-4E271C3F27F5",
    "ip": {
      "user": "10.8.8.120",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "986999",
    "app": "10000",
    "token": "b3abb68755b8f4c3a974bfb52128be93",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T04:35:46.800Z"),
  "updatedAt": ISODate("2017-01-11T04:35:46.800Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875b8a07a5d056409d02afb"),
  "account_id": NumberInt(938824509),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.167",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"C55D01BE-C364-405C-AD35-C845DCDC5A02\",\n    \"device_id\" : \"41c2d1c3070dabe25fb15e13b0f32ad6240a808d\"\n  },\n  \"appsflyer_id\" : \"1484135147000-7732898\",\n  \"ios_ifa\" : \"A91F9625-57AB-4B72-894C-F776C9861188\",\n  \"ios_ifv\" : \"C55D01BE-C364-405C-AD35-C845DCDC5A02\"\n}",
    "lang": "vi",
    "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
    "info": "{\"character_id\":\"100001484099783363475\",\"character_name\":\"Empire0191\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
    "model": "iPhone7,2",
    "cR": false,
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "869843",
    "app": "10000",
    "cookie": "sails.sid=s%3ATbX97rb04qMsz0QvN3bV-AHc3wXW3kko.ApUhLQctFMJ9l6rTowBAxqGL%2Fm4JLCpU%2BN4g5ileick",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36 | Global SDK 0.0.1 | RAM-989MB + OSVersion-9.3.5 + Model-iPhone7,2 + GameVersion-1.1.9",
    "token": "2267195b9805e4c5fdfd75a8a9120ec1",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T04:46:24.784Z"),
  "updatedAt": ISODate("2017-01-11T04:46:24.784Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875b8a87a5d056409d02afd"),
  "account_id": NumberInt(881773336),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.118.239"
  },
  "header": {
    "x-forwarded-for": "119.129.118.239",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "213044",
    "app": "10000",
    "token": "c8a7f831686b755965ac89f04367206b",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T04:46:32.472Z"),
  "updatedAt": ISODate("2017-01-11T04:46:32.472Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875c2897a5d056409d02b01"),
  "account_id": NumberInt(881773336),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "113.119.8.114"
  },
  "header": {
    "x-forwarded-for": "113.119.8.114",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "949232",
    "app": "10000",
    "token": "6cd86a5cae2e99aea2288825429f5f7a",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T05:28:41.813Z"),
  "updatedAt": ISODate("2017-01-11T05:28:41.813Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875c89f7a5d056409d02b03"),
  "account_id": NumberInt(881773336),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.118.239"
  },
  "header": {
    "x-forwarded-for": "119.129.118.239",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "887918",
    "app": "10000",
    "token": "bf7c689b655febe91de3d48b7ea60253",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T05:54:39.748Z"),
  "updatedAt": ISODate("2017-01-11T05:54:39.748Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875ca7b7a5d056409d02b08"),
  "account_id": NumberInt(358206907),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.253.8",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"221C1738-2287-4EED-A2C1-C19308C87711\",\n    \"device_id\" : \"6a94b6479f4e678f3f0749e7ab269f1f4e38a726\"\n  },\n  \"appsflyer_id\" : \"1484130879000-7541226\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"221C1738-2287-4EED-A2C1-C19308C87711\"\n}",
    "lang": "vi",
    "device_id": "6a94b6479f4e678f3f0749e7ab269f1f4e38a726",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "192.168.253.8",
      "public": "219.135.226.39"
    },
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "512527",
    "app": "10000",
    "cookie": "sails.sid=s%3AzILzWUXfidji-buCbnQNcOJM7usBCtUj.Pejx4SB9OtpNUKR4SCqNZF4nqTYnsDRaJ1L2KmXwKJE",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "331b0a95e89edd7e641bc9591c36a042",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T06:02:35.943Z"),
  "updatedAt": ISODate("2017-01-11T06:02:35.943Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875cae67a5d056409d02b0b"),
  "account_id": NumberInt(881773336),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.118.239"
  },
  "header": {
    "x-forwarded-for": "119.129.118.239",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "964512",
    "app": "10000",
    "token": "efdbeb5cb69a0350e36f3b369b81d8f7",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T06:04:22.448Z"),
  "updatedAt": ISODate("2017-01-11T06:04:22.448Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875e2cf7a5d056409d02b23"),
  "account_id": NumberInt(382786256),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.2.100",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"FE0A4ACA-EC10-4FFC-B99C-9FC710155473\",\n    \"device_id\" : \"f3d0b09c4cfe33fc5d9657274c93b9d4efb08856\"\n  },\n  \"appsflyer_id\" : \"1484144625000-703063\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"FE0A4ACA-EC10-4FFC-B99C-9FC710155473\"\n}",
    "lang": "vi",
    "device_id": "f3d0b09c4cfe33fc5d9657274c93b9d4efb08856",
    "info": "{\"character_id\":\"100001482489018600938\",\"character_name\":\"yi34909433\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "192.168.2.100",
      "public": "113.119.8.114"
    },
    "ip_public": "113.119.8.114"
  },
  "header": {
    "x-forwarded-for": "113.119.8.114",
    "host": "graph.addgold.net",
    "connection": "close",
    "accept": "*/*",
    "otp": "868355",
    "if-none-match": "W/\"780-NtyVvRK4rLDjayNGOWk1TA\"",
    "app": "10000",
    "token": "58d4b639d9c4f1f8631b8a75aca959e2",
    "accept-language": "zh-cn",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "accept-encoding": "gzip, deflate",
    "content-type": "application/x-www-form-urlencoded",
    "cookie": "sails.sid=s%3AFCvAVba-6HmaPTMGOv_-zRaPU-Wr_5j-.ZB3XocUv0ACSB8N%2BLeypWvEHNm0lANOiiR7oYyD6A6A"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T07:46:23.434Z"),
  "updatedAt": ISODate("2017-01-11T07:46:23.434Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5875f10a7a5d056409d02b39"),
  "account_id": NumberInt(426077797),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "SAMSUNG-SM-N900A",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "d255ff902c494eb8674c75c5a232c584aca5ddc8",
    "lang": "vi",
    "ip_user": "10.0.3.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"08C62398-443F-4FCC-8D49-BBF649B50988\"}",
    "telco": "Android",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; SAMSUNG-SM-N900A Build/tt)",
    "brand": "SAMSUNG",
    "channel": "empty",
    "type": "device",
    "google_aid": "08C62398-443F-4FCC-8D49-BBF649B50988",
    "ip": {
      "user": "10.0.3.15",
      "public": "119.129.116.8"
    },
    "ip_public": "119.129.116.8"
  },
  "header": {
    "x-forwarded-for": "119.129.116.8",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "979437",
    "app": "10000",
    "token": "80269cdf859548dcc24a99e7f5e4fa5a",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; SAMSUNG-SM-N900A Build/tt)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T08:47:06.667Z"),
  "updatedAt": ISODate("2017-01-11T08:47:06.667Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587610317a5d056409d02b3b"),
  "account_id": NumberInt(426077797),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "SAMSUNG-SM-N900A",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "d255ff902c494eb8674c75c5a232c584aca5ddc8",
    "lang": "vi",
    "ip_user": "10.0.3.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"08C62398-443F-4FCC-8D49-BBF649B50988\"}",
    "telco": "Android",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; SAMSUNG-SM-N900A Build/tt)",
    "brand": "SAMSUNG",
    "channel": "empty",
    "ip_public": "119.129.116.8"
  },
  "header": {
    "x-forwarded-for": "119.129.116.8",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "026198",
    "app": "10000",
    "token": "4a85215957139bfe4b440c30f8331145",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; SAMSUNG-SM-N900A Build/tt)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-11T11:00:01.570Z"),
  "updatedAt": ISODate("2017-01-11T11:00:01.570Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5876fb8a7a5d056409d02b46"),
  "account_id": NumberInt(365513464),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"100001484099783363475\",\"character_name\":\"Empire0191\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "602236",
    "app": "10000",
    "token": "0b55da7c91c46af7ac0dabd590055848",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-12T03:44:10.644Z"),
  "updatedAt": ISODate("2017-01-12T03:44:10.644Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5876fe647a5d056409d02b4c"),
  "account_id": NumberInt(365513464),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"100001484109246995657\",\"character_name\":\"Empire01d1\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "312235",
    "app": "10000",
    "token": "52829c5858a44aeef3c01fc0c6baeea6",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-12T03:56:20.477Z"),
  "updatedAt": ISODate("2017-01-12T03:56:20.477Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587708c37a5d056409d02b4e"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.116.8"
  },
  "header": {
    "x-forwarded-for": "119.129.116.8",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "615666",
    "app": "10000",
    "token": "949d9b36a689ce34c606b862a732c2ca",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-12T04:40:35.85Z"),
  "updatedAt": ISODate("2017-01-12T04:40:35.85Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58770a417a5d056409d02b50"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.116.8"
  },
  "header": {
    "x-forwarded-for": "119.129.116.8",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "022298",
    "app": "10000",
    "token": "f81dce1793f42ffdbf603c9866ec8a65",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-12T04:46:57.734Z"),
  "updatedAt": ISODate("2017-01-12T04:46:57.734Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58770aee7a5d056409d02b52"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.116.8"
  },
  "header": {
    "x-forwarded-for": "119.129.116.8",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "672173",
    "app": "10000",
    "token": "50d4e24e93b36392a49588c578f9d19c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-12T04:49:50.319Z"),
  "updatedAt": ISODate("2017-01-12T04:49:50.319Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58770c987a5d056409d02b5a"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.116.8"
  },
  "header": {
    "x-forwarded-for": "119.129.116.8",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "237837",
    "app": "10000",
    "token": "5dc94ec3c0ad784dbfcc87bbd09562a8",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-12T04:56:56.71Z"),
  "updatedAt": ISODate("2017-01-12T04:56:56.71Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58770ecc7a5d056409d02b5c"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.116.8"
  },
  "header": {
    "x-forwarded-for": "119.129.116.8",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "671652",
    "app": "10000",
    "token": "8087d80684d61481b9bf9633edee973e",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-12T05:06:20.279Z"),
  "updatedAt": ISODate("2017-01-12T05:06:20.279Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587724587a5d056409d02b5e"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.113.125"
  },
  "header": {
    "x-forwarded-for": "119.129.113.125",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "826210",
    "app": "10000",
    "token": "318e24500c5b43fce5b156e8a063e50d",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-12T06:38:16.34Z"),
  "updatedAt": ISODate("2017-01-12T06:38:16.34Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587759ff7a5d056409d02b64"),
  "account_id": NumberInt(881773336),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.113.125"
  },
  "header": {
    "x-forwarded-for": "119.129.113.125",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "164018",
    "app": "10000",
    "token": "438406923d88fd41df8940bf088a644d",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-12T10:27:11.572Z"),
  "updatedAt": ISODate("2017-01-12T10:27:11.572Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58775ddb7a5d056409d02b66"),
  "account_id": NumberInt(881773336),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.116.8"
  },
  "header": {
    "x-forwarded-for": "119.129.116.8",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "800436",
    "app": "10000",
    "token": "9b821626fb0d1bad7361d9f675ed1a5f",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-12T10:43:39.743Z"),
  "updatedAt": ISODate("2017-01-12T10:43:39.743Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587833767a5d056409d02b68"),
  "account_id": NumberInt(881773336),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.116.8"
  },
  "header": {
    "x-forwarded-for": "119.129.116.8",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "086486",
    "app": "10000",
    "token": "092dd6b384adaf1f74f4b1fe94c58e96",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-13T01:55:02.475Z"),
  "updatedAt": ISODate("2017-01-13T01:55:02.475Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58783c5f7a5d056409d02b6a"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "942676",
    "app": "10000",
    "token": "a7a2e6c58e3938e10742d90e7d4b90c5",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-13T02:33:03.319Z"),
  "updatedAt": ISODate("2017-01-13T02:33:03.319Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587841ff7a5d056409d02b6c"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "932302",
    "app": "10000",
    "token": "cf7ea5304bd6b34e1ae878bc285ae142",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-13T02:57:03.866Z"),
  "updatedAt": ISODate("2017-01-13T02:57:03.866Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5878499d7a5d056409d02b70"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "022989",
    "app": "10000",
    "token": "111bdf4e500b8b9cccdaea2ea9056932",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-13T03:29:33.669Z"),
  "updatedAt": ISODate("2017-01-13T03:29:33.669Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58784cf17a5d056409d02b77"),
  "account_id": NumberInt(209492665),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "Droid4X-WIN",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "d2ab26bdea002a6355f879eb5b5178be3d76aea2",
    "lang": "vi",
    "password": "25f9e794323b453885f5181f1b624d0b",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"DEF99822-D620-4C49-A149-2D528BB8328E\"}",
    "email": "ducpn@mecorp.vn",
    "manufacturer": "MIT",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "Android",
    "account": "ducpn216",
    "channel": "empty",
    "google_aid": "DEF99822-D620-4C49-A149-2D528BB8328E",
    "ip": {
      "user": "10.0.3.15",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "286460",
    "app": "10000",
    "token": "093f8de7b9f554c77215018219367ec8",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-13T03:43:45.10Z"),
  "updatedAt": ISODate("2017-01-13T03:43:45.10Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5878a97d7a5d056409d02b7f"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "076398",
    "app": "10000",
    "token": "0450da3477411138ff078c9d66c6f3a6",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-13T10:18:37.897Z"),
  "updatedAt": ISODate("2017-01-13T10:18:37.897Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5878a9da7a5d056409d02b81"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "495880",
    "app": "10000",
    "token": "35f0f93e9f383d4ca92393d270bb95f8",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-13T10:20:10.8Z"),
  "updatedAt": ISODate("2017-01-13T10:20:10.8Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5878a9dc7a5d056409d02b83"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "495880",
    "app": "10000",
    "token": "35f0f93e9f383d4ca92393d270bb95f8",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-13T10:20:12.290Z"),
  "updatedAt": ISODate("2017-01-13T10:20:12.290Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5878aa167a5d056409d02b85"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "412510",
    "app": "10000",
    "token": "251cc0874640272448cf5071f4833a06",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-13T10:21:10.60Z"),
  "updatedAt": ISODate("2017-01-13T10:21:10.60Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587dce2f7a5d056409d02bd3"),
  "account_id": NumberInt(473360909),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "IM-A900L",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
    "lang": "vi",
    "password": "25d55ad283aa400af464c76d713c07ad",
    "ip_user": "10.7.3.209",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"5D30A2CC-032B-4A5D-8631-904C90E2DECE\"}",
    "telco": "empty",
    "email": "aaaa@gmail.com",
    "manufacturer": "PANTECH",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "brand": "VEGA",
    "account": "vinacafe88",
    "channel": "empty",
    "google_aid": "5D30A2CC-032B-4A5D-8631-904C90E2DECE",
    "ip": {
      "user": "10.7.3.209",
      "public": "113.161.78.101"
    },
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "019688",
    "app": "10000",
    "token": "23bd3dae788cf0f1c98cffe8e7900b95",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-17T07:56:31.10Z"),
  "updatedAt": ISODate("2017-01-17T07:56:31.10Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587ded6f7a5d056409d02bf5"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "org.cocos2dx.lua",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "063358",
    "app": "10001",
    "token": "13a549f2b2f14521dac41d594d0d1697",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-17T10:09:51.834Z"),
  "updatedAt": ISODate("2017-01-17T10:09:51.834Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587ee91a7a5d056409d02c01"),
  "account_id": NumberInt(833957994),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "SM-N9008",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "f87106d46b64c9b5ca5bcd390878c5269dddb064",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "10.0.3.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"EEC68DA3-BD61-41DF-9CAE-BA29D70DDAE3\"}",
    "telco": "gsm.operator.alpha",
    "email": "mail01@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
    "brand": "samsung",
    "account": "acctestpp1",
    "channel": "empty",
    "google_aid": "EEC68DA3-BD61-41DF-9CAE-BA29D70DDAE3",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "076496",
    "app": "10000",
    "token": "7d60c1c833266e7c3667e5379fc4a8f6",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T04:03:38.97Z"),
  "updatedAt": ISODate("2017-01-18T04:03:38.97Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587ee9387a5d056409d02c05"),
  "account_id": NumberInt(794532413),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail25@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp26",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "929135",
    "app": "10000",
    "token": "ac8ab701261bdc3f3d6794264af59877",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T04:04:08.668Z"),
  "updatedAt": ISODate("2017-01-18T04:04:08.668Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587eeb777a5d056409d02c0a"),
  "account_id": NumberInt(837071868),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "e3620a38c04ff5006d6dd413deaf7824acc7d08e",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"2383205A-EDBF-46F6-A0D4-C37FE9FCAF7A\"}",
    "telco": "T-Mobile",
    "email": "mail27@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp27",
    "channel": "empty",
    "google_aid": "2383205A-EDBF-46F6-A0D4-C37FE9FCAF7A",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "934426",
    "app": "10000",
    "token": "e49f3e2f31307836484a0bf667e44bdf",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T04:13:43.668Z"),
  "updatedAt": ISODate("2017-01-18T04:13:43.668Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587eed797a5d056409d02c0e"),
  "account_id": NumberInt(557100311),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "9c43233e987321961b6d4d6570346c3bdf5275ff",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"6B342D88-A31F-4F3A-8200-59675861FB77\"}",
    "telco": "T-Mobile",
    "email": "mail28@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp28",
    "channel": "empty",
    "google_aid": "6B342D88-A31F-4F3A-8200-59675861FB77",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "973978",
    "app": "10000",
    "token": "8ffe433c3ace12a7a7a9c4b86ee8ea0c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T04:22:17.746Z"),
  "updatedAt": ISODate("2017-01-18T04:22:17.746Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587eee017a5d056409d02c13"),
  "account_id": NumberInt(317092231),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "NoxW",
    "channel_cfg": "empty",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "fa8877104f33cb53c31561dc914c017a501fcc55",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "10.0.3.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"840F7895-73CC-4F94-B835-B8AC787F922E\"}",
    "telco": "T-Mobile",
    "email": "mail02@mailnesia.com",
    "manufacturer": "bigsamsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; NoxW Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp2",
    "channel": "empty",
    "google_aid": "840F7895-73CC-4F94-B835-B8AC787F922E",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "160857",
    "app": "10000",
    "token": "d8e22925169aa021a791a57b8a7e0ab8",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; NoxW Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T04:24:33.528Z"),
  "updatedAt": ISODate("2017-01-18T04:24:33.528Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587eee287a5d056409d02c17"),
  "account_id": NumberInt(176676877),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "ba499a7a0d8e99226787bea95950a32a1bd5952d",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"pixel\":{\"track_id\":\"ba499a7a0d8e99226787bea95950a32a1bd5952d_1484713476174\",\"device_id\":\"ba499a7a0d8e99226787bea95950a32a1bd5952d\"},\"google_aid\":\"E5B2BDCB-790A-4B81-86A8-7948F9182A50\"}",
    "telco": "T-Mobile",
    "email": "mail29@mailnesia.com",
    "manufacturer": "bigsamsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp29",
    "channel": "empty",
    "google_aid": "E5B2BDCB-790A-4B81-86A8-7948F9182A50",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "513327",
    "app": "10000",
    "token": "eb5fa1c32cf1d29023c6b3b8414f3b24",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T04:25:12.941Z"),
  "updatedAt": ISODate("2017-01-18T04:25:12.941Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587eef9a7a5d056409d02c1b"),
  "account_id": NumberInt(993151346),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "cda1536591c4fa1bc6e3a7b7ab57420941c31118",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"B14705D7-4BCF-464D-BCFC-75298808B1C2\"}",
    "email": "mail03@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp3",
    "channel": "empty",
    "google_aid": "B14705D7-4BCF-464D-BCFC-75298808B1C2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "285775",
    "app": "10000",
    "token": "a53b648a614a57a0f8abb1d7628d60b3",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T04:31:22.403Z"),
  "updatedAt": ISODate("2017-01-18T04:31:22.403Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587eefa47a5d056409d02c1f"),
  "account_id": NumberInt(215908852),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "4700479dd165d0c396ba673fd7cc1b4498cfde67",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"7A2BE7D6-DEF5-408C-8476-6C1196B6A3F4\"}",
    "telco": "T-Mobile",
    "email": "mail30@mailnesia.com",
    "manufacturer": "bigsamsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp30",
    "channel": "empty",
    "google_aid": "7A2BE7D6-DEF5-408C-8476-6C1196B6A3F4",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "871235",
    "app": "10000",
    "token": "c66faf7e25316abca77ed1484047e830",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T04:31:32.304Z"),
  "updatedAt": ISODate("2017-01-18T04:31:32.304Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587ef0d87a5d056409d02c23"),
  "account_id": NumberInt(765008541),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "cda1536591c4fa1bc6e3a7b7ab57420941c31118",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"B14705D7-4BCF-464D-BCFC-75298808B1C2\"}",
    "email": "mail04@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp4",
    "channel": "empty",
    "google_aid": "B14705D7-4BCF-464D-BCFC-75298808B1C2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "034466",
    "app": "10000",
    "token": "4adf04591f265e6f124bf5ccd76e47f5",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T04:36:40.763Z"),
  "updatedAt": ISODate("2017-01-18T04:36:40.763Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587ef1097a5d056409d02c28"),
  "account_id": NumberInt(242226525),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "52deaf2add5cff22910d82283574ee1ba1ec9c9c",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"80CFDF07-3DC4-44AF-A810-065F33919195\"}",
    "telco": "T-Mobile",
    "email": "mail31@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp31",
    "channel": "empty",
    "google_aid": "80CFDF07-3DC4-44AF-A810-065F33919195",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "501626",
    "app": "10000",
    "token": "2ddbd493309a89340357cb1bdc9a7c65",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T04:37:29.149Z"),
  "updatedAt": ISODate("2017-01-18T04:37:29.149Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587ef76d7a5d056409d02c2d"),
  "account_id": NumberInt(987685642),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "cda1536591c4fa1bc6e3a7b7ab57420941c31118",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"B14705D7-4BCF-464D-BCFC-75298808B1C2\"}",
    "email": "mail05@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp5",
    "channel": "empty",
    "google_aid": "B14705D7-4BCF-464D-BCFC-75298808B1C2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "288086",
    "app": "10000",
    "token": "5b1ff72ec01e119200fe77805b08be75",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T05:04:45.533Z"),
  "updatedAt": ISODate("2017-01-18T05:04:45.533Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f0caa7a5d056409d02c31"),
  "account_id": NumberInt(954597658),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail06@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp6",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "173305",
    "app": "10000",
    "token": "5396786c3a2baf40e7694f2a9e3b1439",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:35:22.913Z"),
  "updatedAt": ISODate("2017-01-18T06:35:22.913Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f102fa35c87f925326a46"),
  "account_id": NumberInt(513144128),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail07@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp7",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "586412",
    "app": "10000",
    "token": "fc2540190f3bae2172d9932ae3fa37f6",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:50:23.680Z"),
  "updatedAt": ISODate("2017-01-18T06:50:23.680Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f10bb9c2a972926275876"),
  "account_id": NumberInt(608747097),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail32@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp32",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "021707",
    "app": "10000",
    "token": "d7e11bedc87880c7ca732721c350c656",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:52:43.272Z"),
  "updatedAt": ISODate("2017-01-18T06:52:43.272Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f10e39c2a97292627587a"),
  "account_id": NumberInt(338175191),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail33@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp33",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "935221",
    "app": "10000",
    "token": "458f0497e1401dbd417ec53b80a16d5f",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:53:23.890Z"),
  "updatedAt": ISODate("2017-01-18T06:53:23.890Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f11029c2a97292627587e"),
  "account_id": NumberInt(142785846),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail34@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp34",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "791424",
    "app": "10000",
    "token": "f62213f58c35292293581f5f623e2467",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:53:54.938Z"),
  "updatedAt": ISODate("2017-01-18T06:53:54.938Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f11339c2a972926275882"),
  "account_id": NumberInt(899870940),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail35@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp35",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "903824",
    "app": "10000",
    "token": "a5241d47528a92966091dc8de6cd7126",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:54:43.225Z"),
  "updatedAt": ISODate("2017-01-18T06:54:43.225Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f114f9c2a972926275886"),
  "account_id": NumberInt(368168539),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail36@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp36",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "586061",
    "app": "10000",
    "token": "21ff23f04f7377066fff96436c489c66",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:55:11.683Z"),
  "updatedAt": ISODate("2017-01-18T06:55:11.683Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f11a09c2a97292627588a"),
  "account_id": NumberInt(904408219),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail37@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp37",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "357317",
    "app": "10000",
    "token": "46bd9a4baef6ed02c2de66df24755524",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:56:32.742Z"),
  "updatedAt": ISODate("2017-01-18T06:56:32.742Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f11be9c2a97292627588e"),
  "account_id": NumberInt(194641934),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail08@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp8",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "238911",
    "app": "10000",
    "token": "c1d572e445ecde21629d8c929e0703b9",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:57:02.101Z"),
  "updatedAt": ISODate("2017-01-18T06:57:02.101Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f11d09c2a972926275892"),
  "account_id": NumberInt(645009632),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail38@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp38",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "238911",
    "app": "10000",
    "token": "7f168828d2f040ca78ca6e52aa814591",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:57:20.771Z"),
  "updatedAt": ISODate("2017-01-18T06:57:20.771Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f11fd9c2a972926275896"),
  "account_id": NumberInt(226593441),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail39@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp39",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "754792",
    "app": "10000",
    "token": "e3d7e7c768a6a99974e4a2fdadc8d8ea",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:58:05.906Z"),
  "updatedAt": ISODate("2017-01-18T06:58:05.906Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f12189c2a97292627589a"),
  "account_id": NumberInt(960555095),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "beee47d70a7fc4c0c2cd2b517cc4b134",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail40@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp40",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "374723",
    "app": "10000",
    "token": "45843e7e0959b01d0f96cb46529035ed",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:58:32.421Z"),
  "updatedAt": ISODate("2017-01-18T06:58:32.421Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f12309c2a97292627589e"),
  "account_id": NumberInt(355402171),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail41@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp41",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "374723",
    "app": "10000",
    "token": "e8418be2ddbc8a52b4e8f7432d0b26a9",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:58:56.804Z"),
  "updatedAt": ISODate("2017-01-18T06:58:56.804Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f125f9c2a9729262758a2"),
  "account_id": NumberInt(971379233),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail42@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp42",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "174739",
    "app": "10000",
    "token": "308010b77d531cf6cf162cbd5b6aa4ba",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T06:59:43.211Z"),
  "updatedAt": ISODate("2017-01-18T06:59:43.211Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f12939c2a9729262758a6"),
  "account_id": NumberInt(703165330),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail43@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp43",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "074372",
    "app": "10000",
    "token": "5a6aedc97edc66c296a4c852e17072ea",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:00:35.571Z"),
  "updatedAt": ISODate("2017-01-18T07:00:35.571Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f12bc9c2a9729262758aa"),
  "account_id": NumberInt(496717410),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail44@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp44",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "249718",
    "app": "10000",
    "token": "274aeb113e31def3990f8286ca5ce9b7",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:01:16.582Z"),
  "updatedAt": ISODate("2017-01-18T07:01:16.582Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f130c9c2a9729262758ae"),
  "account_id": NumberInt(209713169),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail45@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp45",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "269015",
    "app": "10000",
    "token": "1e5ac2982bca27544caa299bb031d9a6",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:02:36.281Z"),
  "updatedAt": ISODate("2017-01-18T07:02:36.281Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f13399c2a9729262758b2"),
  "account_id": NumberInt(990336139),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail46@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp46",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "440969",
    "app": "10000",
    "token": "4548603e559a16d5570bb39b7fe3381e",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:03:21.724Z"),
  "updatedAt": ISODate("2017-01-18T07:03:21.724Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f136d9c2a9729262758b6"),
  "account_id": NumberInt(726760790),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail47@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp47",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "575834",
    "app": "10000",
    "token": "3386abe358fa6e24e2fb812c4cc9a9b4",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:04:13.944Z"),
  "updatedAt": ISODate("2017-01-18T07:04:13.944Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f13759c2a9729262758ba"),
  "account_id": NumberInt(854928309),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail09@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp9",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "575834",
    "app": "10000",
    "token": "038c5afb38ff5225cad1f0c57db6a1b9",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:04:21.389Z"),
  "updatedAt": ISODate("2017-01-18T07:04:21.389Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f13939c2a9729262758be"),
  "account_id": NumberInt(987907901),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail48@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp48",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "575349",
    "app": "10000",
    "token": "178962f295af382ff3c5904d8d539cf1",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:04:51.546Z"),
  "updatedAt": ISODate("2017-01-18T07:04:51.546Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f13a19c2a9729262758c2"),
  "account_id": NumberInt(178480333),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail10@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp10",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "286610",
    "app": "10000",
    "token": "69e9dc6d00e6ad36733a159da9e81f5a",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:05:05.323Z"),
  "updatedAt": ISODate("2017-01-18T07:05:05.323Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f13ba9c2a9729262758c6"),
  "account_id": NumberInt(109534067),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail49@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp49",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "416007",
    "app": "10000",
    "token": "495a11af3fe1f6b6d0382dc300bfed67",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:05:30.664Z"),
  "updatedAt": ISODate("2017-01-18T07:05:30.664Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f13d19c2a9729262758ca"),
  "account_id": NumberInt(812106407),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail11@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp11",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "416007",
    "app": "10000",
    "token": "4e0510bda6cfd56e23573fa6a72b855f",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:05:53.281Z"),
  "updatedAt": ISODate("2017-01-18T07:05:53.281Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f13d79c2a9729262758ce"),
  "account_id": NumberInt(264307438),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "Nexus 6",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "6b0ca92acff97e636ddc2a56d83b085639791e5f",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"FD908E13-BC12-406E-A577-0657CAE48649\"}",
    "telco": "T-Mobile",
    "email": "mail50@mailnesia.com",
    "manufacturer": "bignox",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "Android",
    "account": "acctestpp50",
    "channel": "empty",
    "google_aid": "FD908E13-BC12-406E-A577-0657CAE48649",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "416007",
    "app": "10000",
    "token": "0aa52cb4a1142dc45bf044dcaa5dba47",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:05:59.173Z"),
  "updatedAt": ISODate("2017-01-18T07:05:59.173Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f14369c2a9729262758d3"),
  "account_id": NumberInt(889796512),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail12@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp12",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "827550",
    "app": "10000",
    "token": "5e84297455b4074a3f51ce2181e30224",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:07:34.933Z"),
  "updatedAt": ISODate("2017-01-18T07:07:34.933Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f144f9c2a9729262758d8"),
  "account_id": NumberInt(604542294),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail13@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp13",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "827550",
    "app": "10000",
    "token": "2e5553ce965a9dd4af7b6d8ad10e298c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:07:59.444Z"),
  "updatedAt": ISODate("2017-01-18T07:07:59.444Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f146b9c2a9729262758dd"),
  "account_id": NumberInt(509366294),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail14@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp14",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "883680",
    "app": "10000",
    "token": "ac6d871a17271e554c24aca81f4a23e7",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:08:27.422Z"),
  "updatedAt": ISODate("2017-01-18T07:08:27.422Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f14889c2a9729262758e3"),
  "account_id": NumberInt(922482929),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail15@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp15",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "464652",
    "app": "10000",
    "token": "d2ac005209ecd8555e29bd4717839e4c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:08:56.243Z"),
  "updatedAt": ISODate("2017-01-18T07:08:56.243Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f14a69c2a9729262758e7"),
  "account_id": NumberInt(722777634),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail16@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp16",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "730571",
    "app": "10000",
    "token": "5b209fc74d94e1f294f0a999d7ee90c5",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:09:26.79Z"),
  "updatedAt": ISODate("2017-01-18T07:09:26.79Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f14c09c2a9729262758ed"),
  "account_id": NumberInt(294777283),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail17@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp17",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "377378",
    "app": "10000",
    "token": "a6a00ee1f3ab6758128e375cd48e1441",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:09:52.503Z"),
  "updatedAt": ISODate("2017-01-18T07:09:52.503Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f14d99c2a9729262758f1"),
  "account_id": NumberInt(765291945),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail18@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp18",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "328549",
    "app": "10000",
    "token": "ee99db76c28962b65ce43b787a620d69",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:10:17.478Z"),
  "updatedAt": ISODate("2017-01-18T07:10:17.478Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f14f39c2a9729262758f7"),
  "account_id": NumberInt(713921890),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail19@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp19",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "650327",
    "app": "10000",
    "token": "55dc29874e953013a9d32b8339b0a41b",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:10:43.391Z"),
  "updatedAt": ISODate("2017-01-18T07:10:43.391Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f150a9c2a9729262758fc"),
  "account_id": NumberInt(483596016),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail20@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp20",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "252353",
    "app": "10000",
    "token": "0eceaa6c0c2bafc2ff4d2910bbcb51df",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:11:06.955Z"),
  "updatedAt": ISODate("2017-01-18T07:11:06.955Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f15239c2a972926275901"),
  "account_id": NumberInt(647519020),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail21@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp21",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "792037",
    "app": "10000",
    "token": "b1604135b2201d9d670a4f12803b6e30",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:11:31.796Z"),
  "updatedAt": ISODate("2017-01-18T07:11:31.796Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f15499c2a972926275907"),
  "account_id": NumberInt(571640584),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail22@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp22",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "754283",
    "app": "10000",
    "token": "1d9d61257a11666c977f6966cfda110e",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:12:09.621Z"),
  "updatedAt": ISODate("2017-01-18T07:12:09.621Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f157e9c2a97292627590d"),
  "account_id": NumberInt(958032415),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail23@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp23",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "701131",
    "app": "10000",
    "token": "04b3ca088d81768696cb044112120f45",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:13:02.688Z"),
  "updatedAt": ISODate("2017-01-18T07:13:02.688Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f159d9c2a972926275912"),
  "account_id": NumberInt(964683672),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail24@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp24",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "423690",
    "app": "10000",
    "token": "8d2e68b08079b30e88af534ce2403f7f",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:13:33.430Z"),
  "updatedAt": ISODate("2017-01-18T07:13:33.430Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f15cd9c2a972926275919"),
  "account_id": NumberInt(304640751),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUUfpx4ONTe9H2uLNRaFfuiBcubePmByi5yZXOyzIiLriqlopwc0VlwwGSaDtglyb/MV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "94257a9014761b6e902676873f9e5c8da7fce8c1",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"296E31D7-AA50-44C1-A201-7673F53EE0D2\"}",
    "email": "mail26@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "account": "acctestpp25",
    "channel": "empty",
    "google_aid": "296E31D7-AA50-44C1-A201-7673F53EE0D2",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "069938",
    "app": "10000",
    "token": "ac4833a3882d95eb6ef75734ea316195",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T07:14:21.165Z"),
  "updatedAt": ISODate("2017-01-18T07:14:21.165Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f3220974ff98d26afa007"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "918010",
    "app": "10000",
    "token": "f6b13bfd7ccf44b99e88a5b7a61e7538",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T09:15:12.790Z"),
  "updatedAt": ISODate("2017-01-18T09:15:12.790Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("587f351a974ff98d26afa00b"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "219.135.226.39"
  },
  "header": {
    "x-forwarded-for": "219.135.226.39",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "264924",
    "app": "10000",
    "token": "22ac291ab2b44b49949e073d3cd50205",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-18T09:27:54.340Z"),
  "updatedAt": ISODate("2017-01-18T09:27:54.340Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58801ee9974ff98d26afa02f"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "org.cocos2dx.lua",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.112.96"
  },
  "header": {
    "x-forwarded-for": "119.129.112.96",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "092476",
    "app": "10001",
    "token": "1507a7a443e8a8f432c6c7fa37259584",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-19T02:05:29.97Z"),
  "updatedAt": ISODate("2017-01-19T02:05:29.97Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("588182b4974ff98d26afa05b"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "org.cocos2dx.lua",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.119.221"
  },
  "header": {
    "x-forwarded-for": "119.129.119.221",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "483993",
    "app": "10001",
    "token": "7d68a2ea1bfb6b10681d8f4d77f69f69",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-01-20T03:23:32.521Z"),
  "updatedAt": ISODate("2017-01-20T03:23:32.521Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5897e747974ff98d26afa06e"),
  "account_id": NumberInt(855783386),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "GT-I9260",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "a9432a64b77559509f6b3834fad1f7cfb9924be5",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"pixel\":{\"track_id\":\"a9432a64b77559509f6b3834fad1f7cfb9924be5_1486350130697\",\"device_id\":\"a9432a64b77559509f6b3834fad1f7cfb9924be5\"},\"google_aid\":\"118450E7-4BC3-4880-B21F-332972A9912B\"}",
    "telco": "gsm.operator.alpha",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
    "brand": "samsung",
    "channel": "empty",
    "type": "device",
    "google_aid": "118450E7-4BC3-4880-B21F-332972A9912B",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "575254",
    "app": "10000",
    "token": "d976e21921d62feb0dd42473c454de8a",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-06T03:02:31.371Z"),
  "updatedAt": ISODate("2017-02-06T03:02:31.371Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5897e7db974ff98d26afa072"),
  "account_id": NumberInt(703732667),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "GT-I9260",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "a9432a64b77559509f6b3834fad1f7cfb9924be5",
    "lang": "vi",
    "password": "25d55ad283aa400af464c76d713c07ad",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"118450E7-4BC3-4880-B21F-332972A9912B\"}",
    "telco": "gsm.operator.alpha",
    "email": "trongdh1@gmail.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
    "brand": "samsung",
    "account": "trongdh113",
    "channel": "empty",
    "google_aid": "118450E7-4BC3-4880-B21F-332972A9912B",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "718491",
    "app": "10000",
    "token": "ea22c8275a4226ed5ce7d48b37c7c5ef",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-06T03:04:59.195Z"),
  "updatedAt": ISODate("2017-02-06T03:04:59.195Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5897e856974ff98d26afa076"),
  "account_id": NumberInt(365513464),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "436640",
    "app": "10000",
    "token": "1edbbe0715aa82bc9dc6c87d66863826",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-06T03:07:02.885Z"),
  "updatedAt": ISODate("2017-02-06T03:07:02.885Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5897e91e974ff98d26afa078"),
  "account_id": NumberInt(365513464),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUTA1W+ignbsZ5FrHBSSyCML0ZaEDHsiimDRrQ2lGcUEwnTX8dZ9ZKjm2Z+XIoUIlmMV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"100001484043597420787\",\"character_name\":\"mobotestflight2\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "490158",
    "app": "10000",
    "token": "0c0ae8bc7b7cc61d13b5c432d220d76f",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-06T03:10:22.983Z"),
  "updatedAt": ISODate("2017-02-06T03:10:22.983Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("5898423d974ff98d26afa07f"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "org.cocos2dx.lua",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.119.103"
  },
  "header": {
    "x-forwarded-for": "119.129.119.103",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "806723",
    "app": "10001",
    "token": "4b6956f5257279fd85ac36af60551a7c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-06T09:30:37.201Z"),
  "updatedAt": ISODate("2017-02-06T09:30:37.201Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("589bdb49974ff98d26afa08f"),
  "account_id": NumberInt(520269142),
  "params": {
    "account": "trongdh1",
    "email": "trongdh1@mailnesia.com",
    "password": "25d55ad283aa400af464c76d713c07ad",
    "manufacturer": "samsung",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "23094ddbb07ab715df0d4430fdb079164f5acb50",
    "brand": "samsung",
    "model": "SM-T805",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9592072E-F895-4166-B1ED-0FF306EFC3DB\",\"pixel\":{\"device_id\":\"23094ddbb07ab715df0d4430fdb079164f5acb50\",\"track_id\":\"23094ddbb07ab715df0d4430fdb079164f5acb50_1486609082914\"}}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
    "ip_user": "10.7.1.119",
    "google_aid": "9592072E-F895-4166-B1ED-0FF306EFC3DB",
    "ip": {
      "user": "10.7.1.119",
      "public": "113.161.78.101"
    },
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "100799",
    "app": "10000",
    "token": "4beaad6586bf8b14ca6b8d134c531fc3",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-09T03:00:25.845Z"),
  "updatedAt": ISODate("2017-02-09T03:00:25.845Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("589c09d9974ff98d26afa093"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "org.cocos2dx.lua",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.116.162"
  },
  "header": {
    "x-forwarded-for": "119.129.116.162",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "816463",
    "app": "10001",
    "token": "4d49422944c37f92c781187206606b8b",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-09T06:19:05.723Z"),
  "updatedAt": ISODate("2017-02-09T06:19:05.723Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("589c3408974ff98d26afa099"),
  "account_id": NumberInt(701747494),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "SM-N9008",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "org.cocos2dx.lua",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "f87106d46b64c9b5ca5bcd390878c5269dddb064",
    "lang": "vi",
    "password": "25d55ad283aa400af464c76d713c07ad",
    "ip_user": "10.0.3.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"EEC68DA3-BD61-41DF-9CAE-BA29D70DDAE3\"}",
    "telco": "gsm.operator.alpha",
    "email": "huynhquochuy01@gmail.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
    "brand": "samsung",
    "account": "0935133433",
    "channel": "empty",
    "google_aid": "EEC68DA3-BD61-41DF-9CAE-BA29D70DDAE3",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "506541",
    "app": "10001",
    "token": "272b68956d917291222674952c80370a",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-09T09:19:04.546Z"),
  "updatedAt": ISODate("2017-02-09T09:19:04.546Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("589d3bcb974ff98d26afa0ab"),
  "account_id": NumberInt(311919192),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "3|pp|1.0|GP|psv_2_store",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "password": "1ab762649cb0e46a7c054739c1b0660c",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "email": "trangiainguyen@gmail.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "account": "0947736530",
    "channel": "empty",
    "google_aid": "69FE38AC-F603-4219-A251-02C4F1354E6F",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "018227",
    "app": "10001",
    "token": "653992738c91fb6a71c7ca9917c88f26",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-10T04:04:27.904Z"),
  "updatedAt": ISODate("2017-02-10T04:04:27.904Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a11e54974ff98d26afa0b2"),
  "account_id": NumberInt(134435319),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "YQ603",
    "channel_cfg": "empty",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUY20ymJte6uqLTk/5PfA/iR345f67aNhDvwqrqsFTeAW7iKFg7OiP/mgUAvqXKnTpcV11AdFvnrk5RsmvyxjUuni9aQ7QneoaGG6bjae7yHtSvRVJEQdUIP02JLIcCVJcCSXcxBRRgckdPuMB5f7TyWrYhrsKZUTBXaRFEBbLF6RKtr44U8wm7IL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"1AF9B64E-60AE-4623-9EE4-7169F9AE339F\"}",
    "telco": "T-Mobile",
    "manufacturer": "smartisan",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "brand": "SMARTISAN",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "266942",
    "app": "10000",
    "token": "34c7f453ab97cce82e467fbffd14c74c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-13T02:47:48.816Z"),
  "updatedAt": ISODate("2017-02-13T02:47:48.816Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a11fcd974ff98d26afa0b5"),
  "account_id": NumberInt(134435319),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "YQ603",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"1AF9B64E-60AE-4623-9EE4-7169F9AE339F\"}",
    "telco": "T-Mobile",
    "manufacturer": "smartisan",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "brand": "SMARTISAN",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "480907",
    "app": "10000",
    "token": "ae840500ddfe6d605d786fa68c07ba8c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-13T02:54:05.370Z"),
  "updatedAt": ISODate("2017-02-13T02:54:05.370Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a27372974ff98d26afa0be"),
  "account_id": NumberInt(229098311),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "IM-A900L",
    "channel_cfg": "3|pp|1.0|GP|psv_2_store",
    "sd": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
    "lang": "vi",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "ip_user": "10.7.3.209",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"5D30A2CC-032B-4A5D-8631-904C90E2DECE\"}",
    "telco": "empty",
    "email": "ujdj@js.con",
    "manufacturer": "PANTECH",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "brand": "VEGA",
    "account": "jfjdjdjsns",
    "channel": "empty",
    "google_aid": "5D30A2CC-032B-4A5D-8631-904C90E2DECE",
    "ip": {
      "user": "10.7.3.209",
      "public": "113.161.78.101"
    },
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "914573",
    "app": "10001",
    "token": "f1bf56140108bf14a6312a7f11c5ac80",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-14T03:03:14.747Z"),
  "updatedAt": ISODate("2017-02-14T03:03:14.747Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a275b2974ff98d26afa0c3"),
  "account_id": NumberInt(362515620),
  "params": {
    "platform": "wp",
    "channel": "",
    "channel_cfg": "4|global|1.0.0|WPStore|gsv_2_store",
    "device_id": "AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=",
    "telco": "",
    "version": "1.0.0.2",
    "sdk_version": "1.0.1.3",
    "lang": "vi",
    "tracking_info": "{\"windows_aid\":\"\",\"pixel\":{\"device_id\":\"AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=\",\"track_id\":\"AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=_1487037814354\"}}",
    "user_agent": "12345",
    "package_name": "08b1628f-c29d-46a4-9065-67d2502d5b6c",
    "app": "10000",
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "accept": "*/*",
    "accept-encoding": "identity",
    "cache-control": "no-cache",
    "otp": "446759",
    "app": "10000",
    "token": "2b3750a0ea7ebe7b8ac0b2feb068585a",
    "user-agent": "NativeHost"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-14T03:12:50.782Z"),
  "updatedAt": ISODate("2017-02-14T03:12:50.782Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a276c8974ff98d26afa0c7"),
  "account_id": NumberInt(362515620),
  "params": {
    "platform": "wp",
    "channel": "",
    "channel_cfg": "4|global|1.0.0|WPStore|gsv_2_store",
    "device_id": "AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=",
    "telco": "",
    "version": "1.0.0.2",
    "sdk_version": "1.0.1.3",
    "lang": "vi",
    "tracking_info": "{\"windows_aid\":\"\",\"pixel\":{\"device_id\":\"AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=\",\"track_id\":\"AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=_1487037814354\"}}",
    "user_agent": "12345",
    "package_name": "08b1628f-c29d-46a4-9065-67d2502d5b6c",
    "app": "10000",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "accept": "*/*",
    "accept-encoding": "identity",
    "cache-control": "no-cache",
    "otp": "684821",
    "app": "10000",
    "token": "c5efebe550989c93003caa3c1b12055c",
    "user-agent": "NativeHost"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-14T03:17:28.574Z"),
  "updatedAt": ISODate("2017-02-14T03:17:28.574Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a276e5974ff98d26afa0cb"),
  "account_id": NumberInt(380454574),
  "params": {
    "platform": "wp",
    "channel": "",
    "channel_cfg": "4|global|1.0.0|WPStore|gsv_2_store",
    "device_id": "AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=",
    "telco": "",
    "version": "1.0.0.2",
    "sdk_version": "1.0.1.3",
    "lang": "vi",
    "tracking_info": "{\"windows_aid\":\"\",\"pixel\":{\"device_id\":\"AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=\",\"track_id\":\"AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=_1487037814354\"}}",
    "user_agent": "12345",
    "package_name": "08b1628f-c29d-46a4-9065-67d2502d5b6c",
    "account": "khoa1234",
    "password": "94b8cea57c49a3007225a0c70c475450",
    "email": "khoant@mecorp.vn",
    "app": "10000",
    "model": "",
    "google_aid": "",
    "ip": {
      "user": "",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "accept": "*/*",
    "accept-encoding": "identity",
    "cache-control": "no-cache",
    "otp": "971442",
    "app": "10000",
    "token": "c5b6c6ec958bb1f1b55dfa680734a2cb",
    "user-agent": "NativeHost"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-14T03:17:57.625Z"),
  "updatedAt": ISODate("2017-02-14T03:17:57.625Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a402f5974ff98d26afa0d3"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn9ECF+1FU0FpM3yGWAIvzaxL/J3EZwPXv8yuUQIt7Uc66n0QgQhYucakj8Yxe9Y0jUf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "type": "device",
    "google_aid": "69FE38AC-F603-4219-A251-02C4F1354E6F",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "167564",
    "app": "10001",
    "token": "c1521151606cdd3e28a6d20281ee1e92",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-15T07:27:49.769Z"),
  "updatedAt": ISODate("2017-02-15T07:27:49.769Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a404e8974ff98d26afa0d6"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn9ECF+1FU0FpM3yGWAIvzaxL/J3EZwPXv8yuUQIt7Uc66n0QgQhYucakj8Yxe9Y0jUf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "895592",
    "app": "10001",
    "token": "0186579c8a60e68882af300a451343eb",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-15T07:36:08.511Z"),
  "updatedAt": ISODate("2017-02-15T07:36:08.511Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a4072f974ff98d26afa0db"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn9ECF+1FU0FpM3yGWAIvzaxL/J3EZwPXv8yuUQIt7Uc66n0QgQhYucakj8Yxe9Y0jUf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "845942",
    "app": "10001",
    "token": "938661d537b6d866bd5b6f073d0220a7",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-15T07:45:51.389Z"),
  "updatedAt": ISODate("2017-02-15T07:45:51.389Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a409d7974ff98d26afa0df"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn9ECF+1FU0FpM3yGWAIvzaxL/J3EZwPXv8yuUQIt7Uc66n0QgQhYucakj8Yxe9Y0jUf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "101506",
    "app": "10001",
    "token": "2756ebd3d1afc24126c637008a9f6933",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-15T07:57:11.334Z"),
  "updatedAt": ISODate("2017-02-15T07:57:11.334Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a40fe7974ff98d26afa0e5"),
  "account_id": NumberInt(683868448),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "SM-N9008",
    "channel_cfg": "empty",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn6SLheYaVnyQCBENzGO8PJgA+n8b/rCnYY7rOzDzjgmSDIdj6BQziC70LbEJGobsW0f/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQsZPEKcXPxrk1+dBlKTQBZw5JSTHPuhTrZOOmDJpCCxe6klPJNXvCKQ3D3kPlp0rYcEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "f87106d46b64c9b5ca5bcd390878c5269dddb064",
    "lang": "vi",
    "password": "25d55ad283aa400af464c76d713c07ad",
    "ip_user": "10.0.3.15",
    "version": "1.0",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"EEC68DA3-BD61-41DF-9CAE-BA29D70DDAE3\"}",
    "telco": "gsm.operator.alpha",
    "email": "huynhquochuy01@mailnesia.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
    "brand": "samsung",
    "account": "0983833520",
    "channel": "empty",
    "google_aid": "EEC68DA3-BD61-41DF-9CAE-BA29D70DDAE3",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "977396",
    "app": "10001",
    "token": "f5aed93060190e81141e6dd2f5bbf217",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-15T08:23:03.216Z"),
  "updatedAt": ISODate("2017-02-15T08:23:03.216Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a56309974ff98d26afa0f0"),
  "account_id": NumberInt(477637806),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn0DPgjx/fB97nRaxnk5WO1KKh3SRXoUpbmhVvgG5RGDVFBy2ignS+p7lP6wyKA9DKUf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "password": "1ab762649cb0e46a7c054739c1b0660c",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "email": "nguyentg001@gmail.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "account": "1030003701",
    "channel": "empty",
    "google_aid": "69FE38AC-F603-4219-A251-02C4F1354E6F",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "569377",
    "app": "10001",
    "token": "6a8536ede9ee719ec189ac8823a92319",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-16T08:30:01.246Z"),
  "updatedAt": ISODate("2017-02-16T08:30:01.246Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a67101974ff98d26afa0fb"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn0DPgjx/fB97nRaxnk5WO1KKh3SRXoUpbmhVvgG5RGDVFBy2ignS+p7lP6wyKA9DKUf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.124"
  },
  "header": {
    "x-forwarded-for": "115.78.161.124",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "792591",
    "app": "10001",
    "token": "974185839ecca873682bf871fdf1ab2c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-17T03:41:53.977Z"),
  "updatedAt": ISODate("2017-02-17T03:41:53.977Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a6c5a7974ff98d26afa100"),
  "account_id": NumberInt(134435319),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "YQ603",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"48909B49-B42F-48F9-A2FF-441E271F35FF\"}",
    "telco": "T-Mobile",
    "manufacturer": "smartisan",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "brand": "SMARTISAN",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "518898",
    "app": "10000",
    "token": "85bb969afa11da32daafed6443a4d3e1",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-17T09:43:03.131Z"),
  "updatedAt": ISODate("2017-02-17T09:43:03.131Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a973676bfb4fd74dd20a0a"),
  "account_id": NumberInt(139638350),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "SM-G3812",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "4487e5dd52b3e5721878b4f3a05221e715b484a9",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"172EA3A5-F05C-4C89-84D3-DECD44CFB80B\"}",
    "telco": "T-Mobile",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SM-G3812 Build/KOT49H)",
    "brand": "samsung",
    "channel": "empty",
    "type": "device",
    "google_aid": "172EA3A5-F05C-4C89-84D3-DECD44CFB80B",
    "ip": {
      "user": "172.16.152.15",
      "public": "42.117.126.128"
    },
    "ip_public": "42.117.126.128"
  },
  "header": {
    "x-forwarded-for": "42.117.126.128",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "322365",
    "app": "10001",
    "token": "fbda398a7efba0d06aebd002ff6447c0",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SM-G3812 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-19T10:28:55.412Z"),
  "updatedAt": ISODate("2017-02-19T10:28:55.412Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a9758e6bfb4fd74dd20a0c"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.115.160"
  },
  "header": {
    "x-forwarded-for": "119.129.115.160",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "070356",
    "app": "10000",
    "token": "5e1a07597703d190472910769a59b60b",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-19T10:38:06.534Z"),
  "updatedAt": ISODate("2017-02-19T10:38:06.534Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a976256bfb4fd74dd20a0e"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.115.160"
  },
  "header": {
    "x-forwarded-for": "119.129.115.160",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "581699",
    "app": "10000",
    "token": "878ce8c9af22b650d1eaa03ee3e7b331",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-19T10:40:37.766Z"),
  "updatedAt": ISODate("2017-02-19T10:40:37.766Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58a988816bfb4fd74dd20a10"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.116.144"
  },
  "header": {
    "x-forwarded-for": "119.129.116.144",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "933131",
    "app": "10000",
    "token": "925a50fb4d3f2d9c95e569283007c7c8",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-19T11:58:57.847Z"),
  "updatedAt": ISODate("2017-02-19T11:58:57.847Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58aa58f56bfb4fd74dd20a13"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.116.144"
  },
  "header": {
    "x-forwarded-for": "119.129.116.144",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "389382",
    "app": "10000",
    "token": "987faae06c4fe4ff0ac84c2ecdbf94f7",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-20T02:48:21.501Z"),
  "updatedAt": ISODate("2017-02-20T02:48:21.501Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58aa5d216bfb4fd74dd20a15"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.116.144"
  },
  "header": {
    "x-forwarded-for": "119.129.116.144",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "141562",
    "app": "10000",
    "token": "a2c6edadb7cc1bb4353a233323ec9009",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-20T03:06:09.268Z"),
  "updatedAt": ISODate("2017-02-20T03:06:09.268Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58aa95520fee726152db8fa7"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.115.160"
  },
  "header": {
    "x-forwarded-for": "119.129.115.160",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "153060",
    "app": "10000",
    "token": "7aa514a8cb81a8803d67913f2318b9c7",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-20T07:05:54.115Z"),
  "updatedAt": ISODate("2017-02-20T07:05:54.115Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58aa9bd6568a2f86524fb15a"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\",\"pixel\":{\"device_id\":\"d12a4a40cc2d7293a3a26eba6153f79e5345a8d3\",\"track_id\":\"d12a4a40cc2d7293a3a26eba6153f79e5345a8d3_1487576039225\"}}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.116.144"
  },
  "header": {
    "x-forwarded-for": "119.129.116.144",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "327786",
    "app": "10000",
    "token": "0852345fc17b7a514206e2536b731597",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-20T07:33:42.420Z"),
  "updatedAt": ISODate("2017-02-20T07:33:42.420Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58aaa146568a2f86524fb163"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.115.160"
  },
  "header": {
    "x-forwarded-for": "119.129.115.160",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "931071",
    "app": "10000",
    "token": "bbd0141889cd517e3cc75b9b046d881d",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-20T07:56:54.711Z"),
  "updatedAt": ISODate("2017-02-20T07:56:54.711Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58aac02a568a2f86524fb167"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn0DPgjx/fB97nRaxnk5WO1KKh3SRXoUpbmhVvgG5RGDVFBy2ignS+p7lP6wyKA9DKUf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "362303",
    "app": "10001",
    "token": "95c26736a4d3098268639ec0c7c32c6d",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-20T10:08:42.213Z"),
  "updatedAt": ISODate("2017-02-20T10:08:42.213Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58aac200568a2f86524fb169"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "532974",
    "app": "10001",
    "token": "85fb1653844ea1e67c3b31cff70e0779",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-20T10:16:32.445Z"),
  "updatedAt": ISODate("2017-02-20T10:16:32.445Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58aac3c6568a2f86524fb16d"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn0DPgjx/fB97nRaxnk5WO1KKh3SRXoUpbmhVvgG5RGDVFBy2ignS+p7lP6wyKA9DKUf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "379840",
    "app": "10001",
    "token": "668ae45bbd61d3011a7237b4f9ca1dd7",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-20T10:24:06.917Z"),
  "updatedAt": ISODate("2017-02-20T10:24:06.917Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58aae7e8568a2f86524fb172"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10000",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.1.9",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "218.32.57.130"
  },
  "header": {
    "x-forwarded-for": "218.32.57.130",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "716268",
    "app": "10000",
    "token": "7626b2fd47e2a78c1708c678b6ce6510",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-20T12:58:16.641Z"),
  "updatedAt": ISODate("2017-02-20T12:58:16.641Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abaac6568a2f86524fb178"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn2u23QTEjD5LU3w8bniZFX8TB7/cDGQ6Rv42LCaTkOJr0g3PhFnqziliH0jptoBZkEf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQsZPEKcXPxrk1+dBlKTQBZw5JSTHPuhTrZOOmDJpCCxe6klPJNXvCKQ3D3kPlp0rYcEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "684580",
    "app": "10001",
    "token": "fb58da0669e9968dc5ac2c130339d33e",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T02:49:42.62Z"),
  "updatedAt": ISODate("2017-02-21T02:49:42.62Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abacb8568a2f86524fb17b"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn2u23QTEjD5LU3w8bniZFX8TB7/cDGQ6Rv42LCaTkOJr0g3PhFnqziliH0jptoBZkEf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQsZPEKcXPxrk1+dBlKTQBZw5JSTHPuhTrZOOmDJpCCxe6klPJNXvCKQ3D3kPlp0rYcEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "027107",
    "app": "10001",
    "token": "a062a4d3b035223df00b6032a7a8124e",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T02:58:00.878Z"),
  "updatedAt": ISODate("2017-02-21T02:58:00.878Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abb340568a2f86524fb17e"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn2u23QTEjD5LU3w8bniZFX8TB7/cDGQ6Rv42LCaTkOJr0g3PhFnqziliH0jptoBZkEf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQsZPEKcXPxrk1+dBlKTQBZw5JSTHPuhTrZOOmDJpCCxe6klPJNXvCKQ3D3kPlp0rYcEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "676266",
    "app": "10001",
    "token": "32f30ce421d2639a574b606bb3c394d3",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T03:25:52.648Z"),
  "updatedAt": ISODate("2017-02-21T03:25:52.648Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abb862568a2f86524fb182"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn2u23QTEjD5LU3w8bniZFX8TB7/cDGQ6Rv42LCaTkOJr0g3PhFnqziliH0jptoBZkEf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQsZPEKcXPxrk1+dBlKTQBZw5JSTHPuhTrZOOmDJpCCxe6klPJNXvCKQ3D3kPlp0rYcEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "437576",
    "app": "10001",
    "token": "86e4504b45eab5cba62e197f2effe547",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T03:47:46.413Z"),
  "updatedAt": ISODate("2017-02-21T03:47:46.413Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abe817568a2f86524fb189"),
  "account_id": NumberInt(850291276),
  "params": {
    "manufacturer": "OPPO",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
    "brand": "OPPO",
    "model": "F1w",
    "telco": "VN MOBIFONE",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"605BC9E9-2175-4B68-A5A8-D213CD879EE6\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
    "ip_user": "10.7.2.147",
    "type": "device",
    "google_aid": "605BC9E9-2175-4B68-A5A8-D213CD879EE6",
    "ip": {
      "user": "10.7.2.147",
      "public": "113.161.78.101"
    },
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "668743",
    "app": "10000",
    "token": "c310dd8991d71efc32ecb260f7d8757f",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T07:11:19.464Z"),
  "updatedAt": ISODate("2017-02-21T07:11:19.464Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abe927568a2f86524fb18b"),
  "account_id": NumberInt(365513464),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "534776",
    "app": "10000",
    "token": "4c244bf86c8e779796f1246ed83a2c4c",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T07:15:51.280Z"),
  "updatedAt": ISODate("2017-02-21T07:15:51.280Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abea4f568a2f86524fb191"),
  "account_id": NumberInt(995530891),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "MuMu",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "a7497e685217510a4cad648adc9f66de17b53735",
    "lang": "vi",
    "ip_user": "10.0.3.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "telco": "empty",
    "manufacturer": "Netease",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
    "brand": "Android",
    "channel": "empty",
    "type": "device",
    "google_aid": "0",
    "ip": {
      "user": "10.0.3.15",
      "public": "119.129.115.160"
    },
    "ip_public": "119.129.115.160"
  },
  "header": {
    "x-forwarded-for": "119.129.115.160",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "919166",
    "app": "10000",
    "token": "3cd7a30a7fe01a9fc2262ec984affd94",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T07:20:47.832Z"),
  "updatedAt": ISODate("2017-02-21T07:20:47.832Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abebde568a2f86524fb198"),
  "account_id": NumberInt(365513464),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUT5OynNOZ/VDmtf8MiqqkXG1PZt0SCMv6fAUbhwp8HoFBf13IPcqcvRj6e3uFK6mpsV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"100001487661767224178\",\"character_name\":\"Empire05b1\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "913109",
    "app": "10000",
    "token": "1ed1a4075dfbed19518623bab357c610",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T07:27:26.748Z"),
  "updatedAt": ISODate("2017-02-21T07:27:26.748Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abedb3568a2f86524fb19d"),
  "account_id": NumberInt(734425202),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.253.8",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"95718EE9-BAD4-42B7-ADFE-83AE0C119CC2\",\n    \"device_id\" : \"bb5957b3b420afd400fd61ad3aefd4c73b580f4c\"\n  },\n  \"appsflyer_id\" : \"1487428064000-861247\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"95718EE9-BAD4-42B7-ADFE-83AE0C119CC2\"\n}",
    "lang": "vi",
    "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "192.168.253.8",
      "public": "119.129.115.160"
    },
    "ip_public": "119.129.115.160"
  },
  "header": {
    "x-forwarded-for": "119.129.115.160",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "178008",
    "app": "10000",
    "cookie": "sails.sid=s%3AgRr_HZoUJYNtJM6XV7iHk-QarHKQaS4m.qkPz98TiKv4BXt855TXINkmmY%2Bg%2FbgJYjFUMxkRGiYk",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "f7f349e600167a47823ea8fc815dc18c",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T07:35:15.641Z"),
  "updatedAt": ISODate("2017-02-21T07:35:15.641Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abef61568a2f86524fb1a1"),
  "account_id": NumberInt(580604812),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ASUS_T00J",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
    "lang": "vi",
    "password": "c4ca359042fd251bc6bcc28b0dfca751",
    "ip_user": "10.0.2.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"35CBFB72-96C2-4FE4-8E24-0653E87DA7C9\"}",
    "telco": "Vodafone.de",
    "email": "khanhtk82apk@gmail.com",
    "manufacturer": "asus",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "brand": "asus",
    "account": "khanhtk82",
    "channel": "empty",
    "google_aid": "35CBFB72-96C2-4FE4-8E24-0653E87DA7C9",
    "ip": {
      "user": "10.0.2.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "446722",
    "app": "10000",
    "token": "c30e5ebd0b775e581fd37b2c027f3470",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T07:42:25.385Z"),
  "updatedAt": ISODate("2017-02-21T07:42:25.385Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abf83c568a2f86524fb1a7"),
  "account_id": NumberInt(995530891),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "MuMu",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "a7497e685217510a4cad648adc9f66de17b53735",
    "lang": "vi",
    "ip_user": "10.0.3.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "telco": "empty",
    "manufacturer": "Netease",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
    "brand": "Android",
    "channel": "empty",
    "ip_public": "119.129.115.160"
  },
  "header": {
    "x-forwarded-for": "119.129.115.160",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "164687",
    "app": "10000",
    "token": "741f3bac25f4b61322acc0c9b7f9d027",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T08:20:12.766Z"),
  "updatedAt": ISODate("2017-02-21T08:20:12.766Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abfb0b568a2f86524fb1ad"),
  "account_id": NumberInt(896801707),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "MuMu",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "36b84752f7dee3c9aaae3f94856d648a755ac757",
    "lang": "vi",
    "ip_user": "10.0.3.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "telco": "empty",
    "manufacturer": "Netease",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
    "brand": "Android",
    "channel": "empty",
    "type": "device",
    "google_aid": "0",
    "ip": {
      "user": "10.0.3.15",
      "public": "119.129.115.160"
    },
    "ip_public": "119.129.115.160"
  },
  "header": {
    "x-forwarded-for": "119.129.115.160",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "740653",
    "app": "10000",
    "token": "3e04f7f5b1033753385fd41e06673179",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T08:32:11.769Z"),
  "updatedAt": ISODate("2017-02-21T08:32:11.769Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58abfc9a568a2f86524fb1af"),
  "account_id": NumberInt(896801707),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "MuMu",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "36b84752f7dee3c9aaae3f94856d648a755ac757",
    "lang": "vi",
    "ip_user": "10.0.3.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "telco": "empty",
    "manufacturer": "Netease",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
    "brand": "Android",
    "channel": "empty",
    "ip_public": "119.129.115.160"
  },
  "header": {
    "x-forwarded-for": "119.129.115.160",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "612368",
    "app": "10000",
    "token": "12c1b7c54b7b19d55af784722fb744f9",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; MuMu Build/V417IR)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T08:38:50.169Z"),
  "updatedAt": ISODate("2017-02-21T08:38:50.169Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ac0cf9568a2f86524fb1b1"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.115.160"
  },
  "header": {
    "x-forwarded-for": "119.129.115.160",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "539240",
    "app": "10001",
    "token": "ddbce95506b7e0b895e39688f8ad9bed",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-21T09:48:41.915Z"),
  "updatedAt": ISODate("2017-02-21T09:48:41.915Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58acfe1d568a2f86524fb1b3"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.119.209"
  },
  "header": {
    "x-forwarded-for": "119.129.119.209",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "576546",
    "app": "10001",
    "token": "dde8603262ac480c6d6802cc4f972206",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-22T02:57:33.406Z"),
  "updatedAt": ISODate("2017-02-22T02:57:33.406Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ad075d568a2f86524fb1b5"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.119.209"
  },
  "header": {
    "x-forwarded-for": "119.129.119.209",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "699066",
    "app": "10001",
    "token": "21d4db0289adbab4261cc7f89bed9a59",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-22T03:37:01.597Z"),
  "updatedAt": ISODate("2017-02-22T03:37:01.597Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ad086e568a2f86524fb1b7"),
  "account_id": NumberInt(850291276),
  "params": {
    "manufacturer": "OPPO",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
    "brand": "OPPO",
    "model": "F1w",
    "telco": "VN MOBIFONE",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"605BC9E9-2175-4B68-A5A8-D213CD879EE6\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
    "ip_user": "10.7.2.147",
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "394392",
    "app": "10000",
    "token": "1c38dea441d1646a5747027d32d1bbf3",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-22T03:41:34.77Z"),
  "updatedAt": ISODate("2017-02-22T03:41:34.77Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ad10e6568a2f86524fb1bc"),
  "account_id": NumberInt(260409820),
  "params": {
    "account": "testgame01",
    "email": "kevzhaoyun@gmail.com",
    "password": "25d55ad283aa400af464c76d713c07ad",
    "version": "1.1.9",
    "channel": "",
    "telco": "45201",
    "ip_user": "10.8.8.99",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"61087B25-2523-4380-8948-16E4197D9C39\",\n    \"device_id\" : \"a72e065124f462cf3ef675a27aee0e1f90633aa7\"\n  },\n  \"appsflyer_id\" : \"1487761635000-6159751\",\n  \"ios_ifa\" : \"3A5E2AEC-B758-444F-98ED-AB4299F05976\",\n  \"ios_ifv\" : \"61087B25-2523-4380-8948-16E4197D9C39\"\n}",
    "lang": "vi",
    "device_id": "a72e065124f462cf3ef675a27aee0e1f90633aa7",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69",
    "model": "iPhone6,2",
    "cR": false,
    "google_aid": "",
    "ip": {
      "user": "10.8.8.99",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "746472",
    "app": "10000",
    "cookie": "sails.sid=s%3AdX3jNc2t-aTHXX6ZDfLCCHan8AhBwA6F.8PMhPziX8zHOrsKoh3deWvX6r3zSt6orEIo8UIxKiFA",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.2 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "4138dfd82c7e786c6f32d04d27c710fb",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-22T04:17:42.313Z"),
  "updatedAt": ISODate("2017-02-22T04:17:42.313Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ad3d05568a2f86524fb1c4"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn7qdPecWEL3l36lyRwlWbM5tnG8Hu8MH/VY5mbfwKN3nM6oKB49OktTh1R8qkZ3hv0f/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "488300",
    "app": "10001",
    "token": "df15cdd8050227cfd3f0ebed3ea13664",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-22T07:25:57.131Z"),
  "updatedAt": ISODate("2017-02-22T07:25:57.131Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ad3f6f568a2f86524fb1c9"),
  "account_id": NumberInt(180840543),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "password": "1ab762649cb0e46a7c054739c1b0660c",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "email": "nguyentg05@gmail.com",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "account": "1030003705",
    "channel": "empty",
    "google_aid": "45813BE4-5B06-49D3-9ADC-EC92A9098393",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "374969",
    "app": "10001",
    "token": "f57f968d5756b08264a266d0607f053b",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-22T07:36:15.299Z"),
  "updatedAt": ISODate("2017-02-22T07:36:15.299Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ad4845568a2f86524fb1ce"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn7qdPecWEL3l36lyRwlWbM5tnG8Hu8MH/VY5mbfwKN3nM6oKB49OktTh1R8qkZ3hv0f/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "257728",
    "app": "10001",
    "token": "98dc5616852375ca0065bbca487b7b27",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-22T08:13:57.828Z"),
  "updatedAt": ISODate("2017-02-22T08:13:57.828Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ad484a568a2f86524fb1d3"),
  "account_id": NumberInt(497615639),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"0B492540-2B94-4EE9-9F0E-C0331F171ACD\",\n    \"device_id\" : \"13acd2b7683062a53d56585a34ac9acd8b7b46ac\"\n  },\n  \"appsflyer_id\" : \"1487688659000-6339959\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"0B492540-2B94-4EE9-9F0E-C0331F171ACD\"\n}",
    "lang": "vi",
    "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "10.7.3.123",
      "public": "113.161.78.101"
    },
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "889302",
    "app": "10000",
    "cookie": "sails.sid=s%3AC3h_yB-oXC7lP_UqFz9rGQcxxJtW4R3M.0nLoO%2BfPvBvFPoVhtXfb3ds6c6Ocvx0uzcobG0h%2BQI4",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "9f53d2ece7c03130d48785ed89ead863",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-22T08:14:02.693Z"),
  "updatedAt": ISODate("2017-02-22T08:14:02.693Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ae3ab8568a2f86524fb1df"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn7qdPecWEL3l36lyRwlWbM5tnG8Hu8MH/VY5mbfwKN3nM6oKB49OktTh1R8qkZ3hv0f/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "571320",
    "app": "10001",
    "token": "9604d0066ad7e1862d6314054667f13d",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-23T01:28:24.986Z"),
  "updatedAt": ISODate("2017-02-23T01:28:24.986Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ae9c9a568a2f86524fb1e5"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.113.231"
  },
  "header": {
    "x-forwarded-for": "119.129.113.231",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "488132",
    "app": "10001",
    "token": "9402dbaba87492a26cfb3223e8510220",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-23T08:26:02.718Z"),
  "updatedAt": ISODate("2017-02-23T08:26:02.718Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58af89b5568a2f86524fb1ec"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpnzAdF1CPYSEq8vjxOc1xb6aYmx/0Olxu2902EjN0YMVn6zjoFSGKfmS7+QNW8z67uUf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "185543",
    "app": "10001",
    "token": "ffa551573fedd76f9358ed6ca57c6b3f",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T01:17:41.81Z"),
  "updatedAt": ISODate("2017-02-24T01:17:41.81Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afa0f2568a2f86524fb1f6"),
  "account_id": NumberInt(935931406),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "SAMSUNG-SM-N900A",
    "channel_cfg": "empty",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUQ5Ym2v8JkyMz8/226LHz5JCNpTRAFCTWA7qkHOypuTaex57nevfBcrlW920Gx8IFsV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "b542730716d64a7bea662cd47c8e3cac7bf7095e",
    "lang": "vi",
    "ip_user": "10.0.2.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"442FEC18-A5AE-4F2E-8787-37DF858AB90C\"}",
    "telco": "T-Mobile",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
    "brand": "samsung",
    "channel": "empty",
    "type": "device",
    "google_aid": "442FEC18-A5AE-4F2E-8787-37DF858AB90C",
    "ip": {
      "user": "10.0.2.15",
      "public": "119.129.116.190"
    },
    "ip_public": "119.129.116.190"
  },
  "header": {
    "x-forwarded-for": "119.129.116.190",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "968833",
    "app": "10000",
    "token": "a2449f362661ec13c1e3005003ca2687",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T02:56:50.997Z"),
  "updatedAt": ISODate("2017-02-24T02:56:50.997Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afa13a568a2f86524fb1f8"),
  "account_id": NumberInt(935931406),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "SAMSUNG-SM-N900A",
    "channel_cfg": "empty",
    "sd": "DC3NcWGjy2JRMBw8u26M+FVdYgsnB6Seu2QSBn2z9hcWKNPe63oHILYMgUfA9n5q8oXR1UiYE0/yijlsa56DUQ5Ym2v8JkyMz8/226LHz5JCNpTRAFCTWA7qkHOypuTaex57nevfBcrlW920Gx8IFsV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY0Sv9sl4cXWFTzBwSinSWbgAC71ECknNmB/OvLPfZezsRG0rTH/B0pQa1G9+kEJnpSvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "b542730716d64a7bea662cd47c8e3cac7bf7095e",
    "lang": "vi",
    "ip_user": "10.0.2.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"442FEC18-A5AE-4F2E-8787-37DF858AB90C\"}",
    "telco": "T-Mobile",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.116.190"
  },
  "header": {
    "x-forwarded-for": "119.129.116.190",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "094843",
    "app": "10000",
    "token": "740f3f8d8e22e5c4f27c86cb41c01aa9",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T02:58:02.400Z"),
  "updatedAt": ISODate("2017-02-24T02:58:02.400Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afa26b568a2f86524fb1fd"),
  "account_id": NumberInt(751859388),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "IM-A900L",
    "channel_cfg": "3|pp|1.0|GP|psv_2_store",
    "sd": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
    "lang": "vi",
    "ip_user": "10.7.3.209",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"5D30A2CC-032B-4A5D-8631-904C90E2DECE\"}",
    "telco": "empty",
    "manufacturer": "PANTECH",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "brand": "VEGA",
    "channel": "empty",
    "type": "device",
    "google_aid": "5D30A2CC-032B-4A5D-8631-904C90E2DECE",
    "ip": {
      "user": "10.7.3.209",
      "public": "113.161.78.101"
    },
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "363299",
    "app": "10001",
    "token": "db9e1238374af60da328266cce74a7ed",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T03:03:07.924Z"),
  "updatedAt": ISODate("2017-02-24T03:03:07.924Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afa29f568a2f86524fb200"),
  "account_id": NumberInt(734425202),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.253.8",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"13F4C61A-CA02-4F27-9065-9B6D5AA8C7B7\",\n    \"device_id\" : \"bb5957b3b420afd400fd61ad3aefd4c73b580f4c\"\n  },\n  \"appsflyer_id\" : \"1487882085000-4629122\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"13F4C61A-CA02-4F27-9065-9B6D5AA8C7B7\"\n}",
    "lang": "vi",
    "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
    "info": "{\"character_id\":\"100001482489018600938\",\"character_name\":\"Empire01b1\",\"server_id\":\"\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "ip_public": "119.129.113.231"
  },
  "header": {
    "x-forwarded-for": "119.129.113.231",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "821294",
    "app": "10000",
    "cookie": "sails.sid=s%3A68WT9S2DwXj9xJzLO2XE-u9BY-fKGoGs.B62RLaOiN5dW1U%2BWb7YE2uyHt50%2BnrKqQchMhnPRgx4",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "7f3257d078a907178bad3bc59955fa6f",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T03:03:59.482Z"),
  "updatedAt": ISODate("2017-02-24T03:03:59.482Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afa2e3568a2f86524fb203"),
  "account_id": NumberInt(734425202),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.253.8",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"13F4C61A-CA02-4F27-9065-9B6D5AA8C7B7\",\n    \"device_id\" : \"bb5957b3b420afd400fd61ad3aefd4c73b580f4c\"\n  },\n  \"appsflyer_id\" : \"1487882085000-4629122\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"13F4C61A-CA02-4F27-9065-9B6D5AA8C7B7\"\n}",
    "lang": "vi",
    "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
    "info": "{\"character_id\":\"100001482489018600938\",\"character_name\":\"Empire01b1\",\"server_id\":\"\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "ip_public": "119.129.113.231"
  },
  "header": {
    "x-forwarded-for": "119.129.113.231",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "243963",
    "app": "10000",
    "cookie": "sails.sid=s%3Aq3vW2BzWEPjIuYNd8LPajJH7DVVO22cT.BGoZEx6uusIh1VO%2Fu3cdvhAy3WIOglHGrDOKc3%2BNzkw",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "a5269154e991355df2c506f1cc06bb64",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T03:05:07.175Z"),
  "updatedAt": ISODate("2017-02-24T03:05:07.175Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afa304568a2f86524fb205"),
  "account_id": NumberInt(734425202),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.253.8",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"13F4C61A-CA02-4F27-9065-9B6D5AA8C7B7\",\n    \"device_id\" : \"bb5957b3b420afd400fd61ad3aefd4c73b580f4c\"\n  },\n  \"appsflyer_id\" : \"1487882085000-4629122\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"13F4C61A-CA02-4F27-9065-9B6D5AA8C7B7\"\n}",
    "lang": "vi",
    "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
    "info": "{\"character_id\":\"6a94b6479f4e678f3f0749e7ab269f1f4e38a7261487905669828\",\"character_name\":\"Empire01e1\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "ip_public": "119.129.113.231"
  },
  "header": {
    "x-forwarded-for": "119.129.113.231",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "932495",
    "app": "10000",
    "cookie": "sails.sid=s%3Amo51KxnqbqvH8Lg5inVzk407WKE-AAdK.lJ7nRAakrZGHVBA6VZTBfDpvOYgE6FZuF8DH3is1l9c",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "175cd69271b59fd7bb2829b3ddd91d04",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T03:05:40.660Z"),
  "updatedAt": ISODate("2017-02-24T03:05:40.660Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afa3b1568a2f86524fb207"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.113.231"
  },
  "header": {
    "x-forwarded-for": "119.129.113.231",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "243143",
    "app": "10001",
    "token": "42bee944e8b33a15c4372f019a82c732",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T03:08:33.178Z"),
  "updatedAt": ISODate("2017-02-24T03:08:33.178Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afaa40568a2f86524fb20c"),
  "account_id": NumberInt(365513464),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUT5OynNOZ/VDmtf8MiqqkXG1PZt0SCMv6fAUbhwp8HoFBf13IPcqcvRj6e3uFK6mpsV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"100001487663027426379\",\"character_name\":\"TGN01\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "219837",
    "app": "10000",
    "token": "a0b7ada9df46f7e91e47665211514ab8",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T03:36:32.971Z"),
  "updatedAt": ISODate("2017-02-24T03:36:32.971Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afac2a568a2f86524fb20e"),
  "account_id": NumberInt(751859388),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "IM-A900L",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
    "lang": "vi",
    "ip_user": "10.7.3.209",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"5D30A2CC-032B-4A5D-8631-904C90E2DECE\"}",
    "telco": "empty",
    "manufacturer": "PANTECH",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "brand": "VEGA",
    "channel": "empty",
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "546887",
    "app": "10001",
    "token": "a3774a24fe615a4d4fc4fa916db6c250",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T03:44:42.647Z"),
  "updatedAt": ISODate("2017-02-24T03:44:42.647Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afb548568a2f86524fb213"),
  "account_id": NumberInt(978394739),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "password": "1ab762649cb0e46a7c054739c1b0660c",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "email": "nguyentg02@gmail.com",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "account": "1030003702",
    "channel": "empty",
    "google_aid": "45813BE4-5B06-49D3-9ADC-EC92A9098393",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "236105",
    "app": "10001",
    "token": "c344c4a85185f1f5fd040411d5e9fd4b",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T04:23:36.206Z"),
  "updatedAt": ISODate("2017-02-24T04:23:36.206Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afddf1568a2f86524fb219"),
  "account_id": NumberInt(751859388),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "IM-A900L",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
    "lang": "vi",
    "ip_user": "10.7.3.209",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"5D30A2CC-032B-4A5D-8631-904C90E2DECE\"}",
    "telco": "empty",
    "manufacturer": "PANTECH",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "brand": "VEGA",
    "channel": "empty",
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "274707",
    "app": "10000",
    "token": "4948be556d29a60540c86ba8416204be",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T07:17:05.995Z"),
  "updatedAt": ISODate("2017-02-24T07:17:05.995Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afdf08568a2f86524fb21b"),
  "account_id": NumberInt(850291276),
  "params": {
    "manufacturer": "OPPO",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
    "brand": "OPPO",
    "model": "F1w",
    "telco": "VN MOBIFONE",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"605BC9E9-2175-4B68-A5A8-D213CD879EE6\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
    "ip_user": "10.7.2.147",
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "211607",
    "app": "10000",
    "token": "9c02cc0e82c0adbb261b561a7b90807f",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T07:21:44.85Z"),
  "updatedAt": ISODate("2017-02-24T07:21:44.85Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afe4de568a2f86524fb221"),
  "account_id": NumberInt(560708617),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ASUS_T00J",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUZgh/SLhwZvgR9nyOxHWwfwGeg7MLiSvYIzw91tMqMT6MGEyjjNe3GQ8JxwLoexkYsV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdASvfrxBIErCsL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
    "lang": "vi",
    "ip_user": "10.0.2.15",
    "version": "1.1.9",
    "info": "{\"character_id\":\"100001487662945844213\",\"character_name\":\"anhtuantran241\",\"server_id\":\"1\"}",
    "tracking_info": "{\"google_aid\":\"35CBFB72-96C2-4FE4-8E24-0653E87DA7C9\"}",
    "telco": "Vodafone.de",
    "manufacturer": "asus",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "brand": "asus",
    "channel": "empty",
    "type": "device",
    "google_aid": "35CBFB72-96C2-4FE4-8E24-0653E87DA7C9",
    "ip": {
      "user": "10.0.2.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "016796",
    "app": "10000",
    "token": "c31259647f90d04c9e77181bc96c668c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T07:46:38.540Z"),
  "updatedAt": ISODate("2017-02-24T07:46:38.540Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58afee80568a2f86524fb224"),
  "account_id": NumberInt(497615639),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"21081199-6B4E-4298-A985-C2AF701FE296\",\n    \"device_id\" : \"13acd2b7683062a53d56585a34ac9acd8b7b46ac\"\n  },\n  \"appsflyer_id\" : \"1487948188000-5307987\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"21081199-6B4E-4298-A985-C2AF701FE296\"\n}",
    "lang": "vi",
    "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
    "info": "{\"character_id\":\"100001487663027426379\",\"character_name\":\"TGN01\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "029645",
    "app": "10000",
    "cookie": "sails.sid=s%3AwKMaL0Mvd-XU5Ssqxg9K5JHulIAdqFs7.RfMGLlYJZusSOOOPeWcaGVQ%2FxGhMF5cjmzEywUa6EWo",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "a399c1088b0e347b6dab97e9a8d61e29",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T08:27:44.479Z"),
  "updatedAt": ISODate("2017-02-24T08:27:44.479Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b00ba7568a2f86524fb22f"),
  "account_id": NumberInt(497615639),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"21081199-6B4E-4298-A985-C2AF701FE296\",\n    \"device_id\" : \"13acd2b7683062a53d56585a34ac9acd8b7b46ac\"\n  },\n  \"appsflyer_id\" : \"1487948188000-5307987\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"21081199-6B4E-4298-A985-C2AF701FE296\"\n}",
    "lang": "vi",
    "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
    "info": "{\"character_id\":\"100001487663027426379\",\"character_name\":\"TGN01\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "403265",
    "app": "10000",
    "cookie": "sails.sid=s%3Adf3s-U9GuUGheLgcvYAbUn69YTvNLVQk.%2Bv7tSEXPm4NwHbeipIYykf7csyzlacdEaIJD%2F7Glow0",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "a86235cb2855408c7c9d23df3ae8ac69",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T10:32:07.488Z"),
  "updatedAt": ISODate("2017-02-24T10:32:07.488Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b01536568a2f86524fb232"),
  "account_id": NumberInt(497615639),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"21081199-6B4E-4298-A985-C2AF701FE296\",\n    \"device_id\" : \"13acd2b7683062a53d56585a34ac9acd8b7b46ac\"\n  },\n  \"appsflyer_id\" : \"1487948188000-5307987\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"21081199-6B4E-4298-A985-C2AF701FE296\"\n}",
    "lang": "vi",
    "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
    "info": "{\"character_id\":\"100001487663027426379\",\"character_name\":\"TGN01\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "897902",
    "app": "10000",
    "cookie": "sails.sid=s%3AXA7KnWI8Betbvil4EQTc_UyUJ8ef_Q1k.piMa3WS2xXgYwoOdAAHl4%2FpqPiY7jYzKM6tKNOjs%2FVI",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "72a624bdf6517cdaf997aa855afa9818",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-24T11:12:54.114Z"),
  "updatedAt": ISODate("2017-02-24T11:12:54.114Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b10ea6568a2f86524fb236"),
  "account_id": NumberInt(497615639),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.1.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"21081199-6B4E-4298-A985-C2AF701FE296\",\n    \"device_id\" : \"13acd2b7683062a53d56585a34ac9acd8b7b46ac\"\n  },\n  \"appsflyer_id\" : \"1487948188000-5307987\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"21081199-6B4E-4298-A985-C2AF701FE296\"\n}",
    "lang": "vi",
    "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
    "info": "{\"character_id\":\"100001487663027426379\",\"character_name\":\"TGN01\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "1.53.254.9"
  },
  "header": {
    "x-forwarded-for": "1.53.254.9",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "977077",
    "app": "10000",
    "cookie": "sails.sid=s%3AULUsMyZWDJZisMd60QBx1K0xiRjPrHfV.vE0ZynjjmAMMVecvxFnNYP1Oj5GWYSYX6yNII3TGvHQ",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "92602159791f1f52395cdaf51b795135",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-25T04:57:10.121Z"),
  "updatedAt": ISODate("2017-02-25T04:57:10.121Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b39d24568a2f86524fb23a"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn7nTkLAVGnGtc7bgRJxWKXYEQNLNFwKPG1VG864uecMCElDRaHmr3vyX0acxU6/H+Uf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "067778",
    "app": "10001",
    "token": "0c44a900b5ac8d2f757c6819f4bbaf81",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T03:29:40.236Z"),
  "updatedAt": ISODate("2017-02-27T03:29:40.236Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3a2c3568a2f86524fb241"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "type": "device",
    "google_aid": "0",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "769416",
    "app": "10001",
    "token": "b481f3c6259e2850379b71e7b393f22c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T03:53:39.424Z"),
  "updatedAt": ISODate("2017-02-27T03:53:39.424Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3ac18568a2f86524fb244"),
  "account_id": NumberInt(751859388),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "IM-A900L",
    "channel_cfg": "empty",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUfSVwihqwJMx0+z0caG1HcLvfNCkKM1MqS9LY/hM27F4njCSnu3lzY2xDx8O2hexSMV11AdFvnrk5RsmvyxjUuni9aQ7QneoaGG6bjae7yHtSvRVJEQdUIP02JLIcCVJcCSXcxBRRgckdPuMB5f7TyWrYhrsKZUTBXaRFEBbLF6RKtr44U8wm7IL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
    "lang": "vi",
    "ip_user": "10.7.3.209",
    "version": "1.0",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"5D30A2CC-032B-4A5D-8631-904C90E2DECE\"}",
    "telco": "empty",
    "manufacturer": "PANTECH",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "brand": "VEGA",
    "channel": "empty",
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "015831",
    "app": "10000",
    "token": "6c3a0c82676ee4c4a8c9decde5975796",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T04:33:28.55Z"),
  "updatedAt": ISODate("2017-02-27T04:33:28.55Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3ac31568a2f86524fb249"),
  "account_id": NumberInt(168012970),
  "params": {
    "version": "1.0",
    "channel": "",
    "telco": "45204",
    "ip_user": "10.7.3.167",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"E8DC9FD9-B179-43EC-BE86-749EF12326B8\",\n    \"device_id\" : \"540833bb60df1140531e4f6bc29ff96f0d6078d3\"\n  },\n  \"appsflyer_id\" : \"1488195197000-1737764\",\n  \"ios_ifa\" : \"A91F9625-57AB-4B72-894C-F776C9861188\",\n  \"ios_ifv\" : \"E8DC9FD9-B179-43EC-BE86-749EF12326B8\"\n}",
    "lang": "vi",
    "device_id": "540833bb60df1140531e4f6bc29ff96f0d6078d3",
    "info": "{\"server_name\":\"Diamond_19124\",\"server_id\":\"1\",\"character_name\":\"saunghia6\",\"character_id\":\"132\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPhone7,2",
    "cR": false,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "10.7.3.167",
      "public": "113.161.78.101"
    },
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "325488",
    "app": "10000",
    "cookie": "sails.sid=s%3AM3WuVy6-SXVrT0NNmNCLUWIQ4QVctB6j.nMjPMS81bwyE1MxCBgp7QOEYqgNw0d%2BRTQli5ukLM34",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-989MB + OSVersion-10.2.1 + Model-iPhone7,2 + GameVersion-1.0",
    "token": "6906747e2e5b76eb766ef14fa8447aae",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T04:33:53.262Z"),
  "updatedAt": ISODate("2017-02-27T04:33:53.262Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3acff568a2f86524fb24e"),
  "account_id": NumberInt(751859388),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "IM-A900L",
    "channel_cfg": "empty",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUfSVwihqwJMx0+z0caG1HcLvfNCkKM1MqS9LY/hM27F4njCSnu3lzY2xDx8O2hexSMV11AdFvnrk5RsmvyxjUuni9aQ7QneoaGG6bjae7yHtSvRVJEQdUIP02JLIcCVJcCSXcxBRRgckdPuMB5f7TyWrYhrsKZUTBXaRFEBbLF6RKtr44U8wm7IL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
    "lang": "vi",
    "ip_user": "10.7.3.209",
    "version": "1.0",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"5D30A2CC-032B-4A5D-8631-904C90E2DECE\"}",
    "telco": "empty",
    "manufacturer": "PANTECH",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "brand": "VEGA",
    "channel": "empty",
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "430643",
    "app": "10000",
    "token": "89df980224cf5c8c438cdd6c09889a59",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; IM-A900L Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T04:37:19.192Z"),
  "updatedAt": ISODate("2017-02-27T04:37:19.192Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3ad24568a2f86524fb250"),
  "account_id": NumberInt(168012970),
  "params": {
    "version": "1.0",
    "channel": "",
    "telco": "45204",
    "ip_user": "10.7.3.167",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"E8DC9FD9-B179-43EC-BE86-749EF12326B8\",\n    \"device_id\" : \"540833bb60df1140531e4f6bc29ff96f0d6078d3\"\n  },\n  \"appsflyer_id\" : \"1488195197000-1737764\",\n  \"ios_ifa\" : \"A91F9625-57AB-4B72-894C-F776C9861188\",\n  \"ios_ifv\" : \"E8DC9FD9-B179-43EC-BE86-749EF12326B8\"\n}",
    "lang": "vi",
    "device_id": "540833bb60df1140531e4f6bc29ff96f0d6078d3",
    "info": "{\"server_name\":\"Diamond_19124\",\"server_id\":\"1\",\"character_name\":\"saunghia6\",\"character_id\":\"132\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPhone7,2",
    "cR": false,
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "418873",
    "app": "10000",
    "cookie": "sails.sid=s%3A8dKVIj1xozJbENUpwpHF0dLwWH7bUtTy.nhDyvvRHC4oNGMmBfjFWrIx%2FuPIxg0CRypMAHadcoIo",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-989MB + OSVersion-10.2.1 + Model-iPhone7,2 + GameVersion-1.0",
    "token": "a8286e6b4f79b538e242fa7a934ebae1",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T04:37:56.355Z"),
  "updatedAt": ISODate("2017-02-27T04:37:56.355Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3ae1a568a2f86524fb256"),
  "account_id": NumberInt(134435319),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "YQ603",
    "channel_cfg": "empty",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUfSVwihqwJMx0+z0caG1HcLvfNCkKM1MqS9LY/hM27F4njCSnu3lzY2xDx8O2hexSMV11AdFvnrk5RsmvyxjUuni9aQ7QneoaGG6bjae7yHtSvRVJEQdUIP02JLIcCVJcCSXcxBRRgckdPuMB5f7TyWrYhrsKZUTBXaRFEBbLF6RKtr44U8wm7IL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"48909B49-B42F-48F9-A2FF-441E271F35FF\"}",
    "telco": "T-Mobile",
    "manufacturer": "smartisan",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "brand": "SMARTISAN",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "461497",
    "app": "10000",
    "token": "9403af8d04d30b2fb591e5525809d4c9",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T04:42:02.140Z"),
  "updatedAt": ISODate("2017-02-27T04:42:02.140Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3b459568a2f86524fb259"),
  "account_id": NumberInt(497615639),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"21081199-6B4E-4298-A985-C2AF701FE296\",\n    \"device_id\" : \"13acd2b7683062a53d56585a34ac9acd8b7b46ac\"\n  },\n  \"appsflyer_id\" : \"1487948188000-5307987\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"21081199-6B4E-4298-A985-C2AF701FE296\"\n}",
    "lang": "vi",
    "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "236838",
    "app": "10000",
    "cookie": "sails.sid=s%3AdztqsG0iTeVBiFX-hVE3DXEMw7S61ZfH.rC5H%2FMjRZVycaEJMwDBmwMabUQVdIQ7DwWJLH7ibuCk",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "8dd79a6a16ed732cb91f4501f149a850",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T05:08:41.257Z"),
  "updatedAt": ISODate("2017-02-27T05:08:41.257Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3b493568a2f86524fb25c"),
  "account_id": NumberInt(497615639),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"21081199-6B4E-4298-A985-C2AF701FE296\",\n    \"device_id\" : \"13acd2b7683062a53d56585a34ac9acd8b7b46ac\"\n  },\n  \"appsflyer_id\" : \"1487948188000-5307987\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"21081199-6B4E-4298-A985-C2AF701FE296\"\n}",
    "lang": "vi",
    "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
    "info": "{\"character_id\":\"100001487663027426379\",\"character_name\":\"TGN01\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "794174",
    "app": "10000",
    "cookie": "sails.sid=s%3AdztqsG0iTeVBiFX-hVE3DXEMw7S61ZfH.rC5H%2FMjRZVycaEJMwDBmwMabUQVdIQ7DwWJLH7ibuCk",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "4eeaef653ea79595122176a2a48094a5",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T05:09:39.284Z"),
  "updatedAt": ISODate("2017-02-27T05:09:39.284Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3b496568a2f86524fb25f"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "794174",
    "app": "10000",
    "token": "c59449ae9edeb9544936177ce833d3dc",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T05:09:42.551Z"),
  "updatedAt": ISODate("2017-02-27T05:09:42.551Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3c1be568a2f86524fb261"),
  "account_id": NumberInt(734425202),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.253.8",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"13F4C61A-CA02-4F27-9065-9B6D5AA8C7B7\",\n    \"device_id\" : \"bb5957b3b420afd400fd61ad3aefd4c73b580f4c\"\n  },\n  \"appsflyer_id\" : \"1487882085000-4629122\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"13F4C61A-CA02-4F27-9065-9B6D5AA8C7B7\"\n}",
    "lang": "vi",
    "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
    "info": "{\"character_id\":\"6a94b6479f4e678f3f0749e7ab269f1f4e38a7261487905669828\",\"character_name\":\"Empire01e1\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "ip_public": "119.129.118.100"
  },
  "header": {
    "x-forwarded-for": "119.129.118.100",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "503919",
    "app": "10000",
    "cookie": "sails.sid=s%3AHuhJvRev9zGR7Bz9KSjW6N-1ZS9FbLKv.3UBwFWyuBroh1fkXMbENJoJpkZ2vKgmbblPFLEYAKLE",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "976599e7a56e1834cffd70c708ea16e4",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T06:05:50.224Z"),
  "updatedAt": ISODate("2017-02-27T06:05:50.224Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3c1d5568a2f86524fb263"),
  "account_id": NumberInt(734425202),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.253.8",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"13F4C61A-CA02-4F27-9065-9B6D5AA8C7B7\",\n    \"device_id\" : \"bb5957b3b420afd400fd61ad3aefd4c73b580f4c\"\n  },\n  \"appsflyer_id\" : \"1487882085000-4629122\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"13F4C61A-CA02-4F27-9065-9B6D5AA8C7B7\"\n}",
    "lang": "vi",
    "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
    "info": "{\"character_id\":\"6a94b6479f4e678f3f0749e7ab269f1f4e38a7261487905669828\",\"character_name\":\"Empire01e1\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "ip_public": "119.129.118.100"
  },
  "header": {
    "x-forwarded-for": "119.129.118.100",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "813748",
    "app": "10000",
    "cookie": "sails.sid=s%3AHuhJvRev9zGR7Bz9KSjW6N-1ZS9FbLKv.3UBwFWyuBroh1fkXMbENJoJpkZ2vKgmbblPFLEYAKLE",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "a59adf30d29164e80848441971bafc62",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T06:06:13.61Z"),
  "updatedAt": ISODate("2017-02-27T06:06:13.61Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3c227568a2f86524fb265"),
  "account_id": NumberInt(734425202),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.253.8",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"13F4C61A-CA02-4F27-9065-9B6D5AA8C7B7\",\n    \"device_id\" : \"bb5957b3b420afd400fd61ad3aefd4c73b580f4c\"\n  },\n  \"appsflyer_id\" : \"1487882085000-4629122\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"13F4C61A-CA02-4F27-9065-9B6D5AA8C7B7\"\n}",
    "lang": "vi",
    "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
    "info": "{\"character_id\":\"6a94b6479f4e678f3f0749e7ab269f1f4e38a7261488175800489\",\"character_name\":\"Empire01f1\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "ip_public": "119.129.118.100"
  },
  "header": {
    "x-forwarded-for": "119.129.118.100",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "761656",
    "app": "10000",
    "cookie": "sails.sid=s%3AHuhJvRev9zGR7Bz9KSjW6N-1ZS9FbLKv.3UBwFWyuBroh1fkXMbENJoJpkZ2vKgmbblPFLEYAKLE",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "3078c12eef72f4dd863d8951296a9ec7",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T06:07:35.401Z"),
  "updatedAt": ISODate("2017-02-27T06:07:35.401Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3c993568a2f86524fb267"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "info": "{\"character_id\":\"100001482489018600938\",\"character_name\":\"Empire01b1\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.117.255"
  },
  "header": {
    "x-forwarded-for": "119.129.117.255",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "547760",
    "app": "10000",
    "token": "d50d11aac3a6fcc10bf0991eb913c42b",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T06:39:15.293Z"),
  "updatedAt": ISODate("2017-02-27T06:39:15.293Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3c9af568a2f86524fb269"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "info": "{\"character_id\":\"100001482489018600938\",\"character_name\":\"Empire01b1\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.117.255"
  },
  "header": {
    "x-forwarded-for": "119.129.117.255",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "889981",
    "app": "10000",
    "token": "7b269f5fa745aa17b7dd23dfdf3ab30e",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T06:39:43.91Z"),
  "updatedAt": ISODate("2017-02-27T06:39:43.91Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3c9f5568a2f86524fb26c"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.117.255"
  },
  "header": {
    "x-forwarded-for": "119.129.117.255",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "125343",
    "app": "10000",
    "token": "559812df44b1b30cef177d25c66bed45",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T06:40:53.202Z"),
  "updatedAt": ISODate("2017-02-27T06:40:53.202Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3ca2f568a2f86524fb270"),
  "account_id": NumberInt(863300248),
  "params": {
    "account": "18665443311",
    "email": "3334968@qq.com",
    "password": "6f27ca2b7637cbe68f7f7a01ce2a3e96",
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "info": "empty",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "google_aid": "93065B31-26AB-4CE2-91E5-D0F8DF379341",
    "ip": {
      "user": "192.168.2.105",
      "public": "119.129.117.255"
    },
    "ip_public": "119.129.117.255"
  },
  "header": {
    "x-forwarded-for": "119.129.117.255",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "636870",
    "app": "10000",
    "token": "62679c03e3c16f2bb99aa15c23113064",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T06:41:51.178Z"),
  "updatedAt": ISODate("2017-02-27T06:41:51.178Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3ca4a568a2f86524fb272"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "info": "empty",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.117.255"
  },
  "header": {
    "x-forwarded-for": "119.129.117.255",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "714963",
    "app": "10000",
    "token": "4b4fd78bf8904f4d4934ae34c6cd669e",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T06:42:18.558Z"),
  "updatedAt": ISODate("2017-02-27T06:42:18.558Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3ca84568a2f86524fb274"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.117.255"
  },
  "header": {
    "x-forwarded-for": "119.129.117.255",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "689095",
    "app": "10000",
    "token": "7458dd49795919755417f354557b1a79",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T06:43:16.331Z"),
  "updatedAt": ISODate("2017-02-27T06:43:16.331Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3cbd1568a2f86524fb278"),
  "account_id": NumberInt(734425202),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.253.8",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"C8597155-7A4C-418D-9796-0041C989BBE0\",\n    \"device_id\" : \"bb5957b3b420afd400fd61ad3aefd4c73b580f4c\"\n  },\n  \"appsflyer_id\" : \"1488206511000-2858742\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"C8597155-7A4C-418D-9796-0041C989BBE0\"\n}",
    "lang": "vi",
    "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
    "info": "{\"character_id\":\"100001482489018600938\",\"character_name\":\"Empire01b1\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "ip_public": "119.129.118.100"
  },
  "header": {
    "x-forwarded-for": "119.129.118.100",
    "host": "graph.addgold.net",
    "connection": "close",
    "accept": "*/*",
    "otp": "639767",
    "if-none-match": "W/\"780-echf6awiZT08CpHA4rQ3XQ\"",
    "app": "10000",
    "token": "23345dc195478a7b8f0d12d4678fecd3",
    "accept-language": "zh-cn",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "accept-encoding": "gzip, deflate",
    "content-type": "application/x-www-form-urlencoded",
    "cookie": "sails.sid=s%3AifLB8qjQ3UGOY1QkyoFlvxPP6WKgNPrp.o07mMq%2F5HZCfMdpz%2FBRXLGMXlz%2B5gaGfeDQhuhUcFL8"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T06:48:49.42Z"),
  "updatedAt": ISODate("2017-02-27T06:48:49.42Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3d897568a2f86524fb281"),
  "account_id": NumberInt(913429778),
  "params": {
    "manufacturer": "htc",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "b1be02765dbe891473949fe35789a0b29366b326",
    "brand": "google",
    "model": "Nexus 9",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"B4A3DFAD-6090-437D-B33C-22AE907F9C50\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
    "ip_user": "10.7.1.96",
    "type": "device",
    "google_aid": "B4A3DFAD-6090-437D-B33C-22AE907F9C50",
    "ip": {
      "user": "10.7.1.96",
      "public": "113.161.78.101"
    },
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "385434",
    "app": "10000",
    "token": "4309e86b77233e01cc6bdacd194d401a",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T07:43:19.539Z"),
  "updatedAt": ISODate("2017-02-27T07:43:19.539Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3df45568a2f86524fb288"),
  "account_id": NumberInt(971282243),
  "params": {
    "account": "longpn01",
    "email": "longpn01@yahoo.com",
    "password": "5e75d4799da04009708cdf84fd70484d",
    "version": "1.1.9",
    "channel": "",
    "telco": "45201",
    "ip_user": "10.7.1.221",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"44A8C430-E6AD-48F0-94A0-F74408F382BC\",\n    \"device_id\" : \"689788233555f2f17b0688e294313bf056e4bb5e\"\n  },\n  \"appsflyer_id\" : \"1487783248000-1119614\",\n  \"ios_ifa\" : \"F7AD6327-C074-402D-90BB-C43F02501CCF\",\n  \"ios_ifv\" : \"44A8C430-E6AD-48F0-94A0-F74408F382BC\"\n}",
    "lang": "vi",
    "device_id": "689788233555f2f17b0688e294313bf056e4bb5e",
    "info": "{\"character_id\":\"100001487758637635303\",\"character_name\":\"Empire0601\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36",
    "model": "iPhone6,1",
    "cR": false,
    "google_aid": "",
    "ip": {
      "user": "10.7.1.221",
      "public": "113.161.78.101"
    },
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "391236",
    "app": "10000",
    "cookie": "sails.sid=s%3AmtZMkbPR2p0BWQW2aJctBVjQyS5U47NA.eIznkALsEyf%2FXBOdNoCfe%2F6mUzCCwJdkz6l7NFtT2QM",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.5 + Model-iPhone6,1 + GameVersion-1.1.9",
    "token": "1e683faab125bcd3e66a7b38e65baafc",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T08:11:49.745Z"),
  "updatedAt": ISODate("2017-02-27T08:11:49.745Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3e294568a2f86524fb28c"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "325827",
    "app": "10000",
    "token": "af29095a9ed68039c39863192986fd2b",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T08:25:56.238Z"),
  "updatedAt": ISODate("2017-02-27T08:25:56.238Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3e547568a2f86524fb28f"),
  "account_id": NumberInt(497615639),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"1E9A5815-AC94-46F3-826E-2C893F4B6B17\",\n    \"device_id\" : \"13acd2b7683062a53d56585a34ac9acd8b7b46ac\"\n  },\n  \"appsflyer_id\" : \"1488209460000-7111563\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"1E9A5815-AC94-46F3-826E-2C893F4B6B17\"\n}",
    "lang": "vi",
    "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "648665",
    "app": "10000",
    "cookie": "sails.sid=s%3ATyTDB5iHBLYju9F2YWjLLQaDH05bIlPT.pmFuEHStUywqx1Y5CSKeoeofpVGVN9E1mdIFp7ksUHw",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "54b1ab1c25c88d8ac71db64c1b5fdda6",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T08:37:27.500Z"),
  "updatedAt": ISODate("2017-02-27T08:37:27.500Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3e7f2568a2f86524fb292"),
  "account_id": NumberInt(560708617),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ASUS_T00J",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
    "lang": "vi",
    "ip_user": "10.0.2.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"35CBFB72-96C2-4FE4-8E24-0653E87DA7C9\"}",
    "telco": "Vodafone.de",
    "manufacturer": "asus",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "brand": "asus",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "549837",
    "app": "10000",
    "token": "2da6476098d31a0afd0ef12eb0455e47",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T08:48:50.762Z"),
  "updatedAt": ISODate("2017-02-27T08:48:50.762Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3f365568a2f86524fb296"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUSIR8OS1StfxaJN+waVa30IfWOlySkjTZy7bIO9+i6QqFnQ7ntDl4vEYQLC+ivv1+cV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "{\"character_id\":\"100001487928694906212\",\"character_name\":\"Empire0641\",\"server_id\":\"1\"}",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "525941",
    "app": "10000",
    "token": "79aecc0b35d2b30b7beb0e1631e76e96",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T09:37:41.788Z"),
  "updatedAt": ISODate("2017-02-27T09:37:41.788Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3f52c568a2f86524fb29d"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUSIR8OS1StfxaJN+waVa30IfWOlySkjTZy7bIO9+i6QqFnQ7ntDl4vEYQLC+ivv1+cV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "{\"character_id\":\"100001487928735710337\",\"character_name\":\"Empire0651\",\"server_id\":\"1\"}",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "549069",
    "app": "10000",
    "token": "09c0bb1e02b56e62f9f2642fa62240ca",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T09:45:16.523Z"),
  "updatedAt": ISODate("2017-02-27T09:45:16.523Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b3faee568a2f86524fb29f"),
  "account_id": NumberInt(497615639),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"1E9A5815-AC94-46F3-826E-2C893F4B6B17\",\n    \"device_id\" : \"13acd2b7683062a53d56585a34ac9acd8b7b46ac\"\n  },\n  \"appsflyer_id\" : \"1488209460000-7111563\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"1E9A5815-AC94-46F3-826E-2C893F4B6B17\"\n}",
    "lang": "vi",
    "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "424129",
    "app": "10000",
    "cookie": "sails.sid=s%3AbZULt93Q-QIRCTMVStGUrQ-ZqZq89ZPO.b3pAXoO%2FPYfPtE4xxD%2FQjTd5aTqQTKNUGs1dtE4JEYM",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "d6e23d10f19f7562973a500e07811665",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-27T10:09:50.479Z"),
  "updatedAt": ISODate("2017-02-27T10:09:50.479Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b4d4f9568a2f86524fb2a6"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.114.62"
  },
  "header": {
    "x-forwarded-for": "119.129.114.62",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "417050",
    "app": "10000",
    "token": "9ede61819f6c60b78047b853120e5f69",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T01:40:09.387Z"),
  "updatedAt": ISODate("2017-02-28T01:40:09.387Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b4da84568a2f86524fb2a9"),
  "account_id": NumberInt(935931406),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "SAMSUNG-SM-N900A",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "org.cocos2dx.lua",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "b542730716d64a7bea662cd47c8e3cac7bf7095e",
    "lang": "vi",
    "ip_user": "10.0.2.15",
    "version": "1.0",
    "tracking_info": "{\"pixel\":{\"track_id\":\"b542730716d64a7bea662cd47c8e3cac7bf7095e_1488247333631\",\"device_id\":\"b542730716d64a7bea662cd47c8e3cac7bf7095e\"},\"google_aid\":\"442FEC18-A5AE-4F2E-8787-37DF858AB90C\"}",
    "telco": "T-Mobile",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.114.62"
  },
  "header": {
    "x-forwarded-for": "119.129.114.62",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "254187",
    "app": "10001",
    "token": "2456c9df92acbfa8e531f33e54df2b00",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T02:03:48.726Z"),
  "updatedAt": ISODate("2017-02-28T02:03:48.726Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b4e3cc568a2f86524fb2ad"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn3IX5Hq5742Et7pYblgGsYB1de0oUpb3+vtM/PGk/w+Dg+Xx3ppLkmGelaSGDdLXM0f/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "939824",
    "app": "10001",
    "token": "50c41af26460cf1a6c9edc08cb809284",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T02:43:24.253Z"),
  "updatedAt": ISODate("2017-02-28T02:43:24.253Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b4eaad568a2f86524fb2b4"),
  "account_id": NumberInt(533574639),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "HTC 802t",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "2120bcc1464791f44ecd94df56a4c3ace117f887",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "HTC",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "ZTE",
    "channel": "empty",
    "type": "device",
    "google_aid": "0",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "533457",
    "app": "10001",
    "token": "463c7acea527911e67bb9ceb30ca5da7",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T03:12:45.955Z"),
  "updatedAt": ISODate("2017-02-28T03:12:45.955Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b5022e568a2f86524fb2bc"),
  "account_id": NumberInt(183213904),
  "params": {
    "app": "10003",
    "platform": "android",
    "model": "DOOV_D910T",
    "channel_cfg": "empty",
    "package_name": "com.pp.langgame",
    "sd": "EtuQCXQzVEKcqmkk1LF6BM2R0GEj831D5/ID+NfpeWhasi6fwsZG8sLHa14IvhXR7N6/1LI7ATkDi6nKru51vl37F080M9HUtRUw5X5QCoik6ZYhRJBBN5QiHJCyf+hoynHV+ekNPP4Gpg3sJa0cV5+DxiZri3460C5kCIlyYs4pp/h2TDe5xIF0TJIpbgLoOipmVWGey9Ua9t3lH6WPxnQ78xjzT257WTNJl7B7e9ZkGiR2h2ltj/2qQOR1pa2mHGsCEEP6C6AZrbIeLb/pDg==",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "23059b32e0b7d240b9abbbeff8d68c4233b2d67c",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "{\"character_id\":\"123456\",\"character_name\":\"saunghia\",\"server_id\":\"1\"}",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"A3AAF597-BA15-46B5-8B11-99617FB2B047\"}",
    "manufacturer": "DOOV",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "DOOV",
    "channel": "empty",
    "type": "device",
    "google_aid": "A3AAF597-BA15-46B5-8B11-99617FB2B047",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "686007",
    "app": "10003",
    "token": "ef93dcee6ea7f7d16738f12951dbf305",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T04:53:02.932Z"),
  "updatedAt": ISODate("2017-02-28T04:53:02.932Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b5041f568a2f86524fb2c3"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "868491",
    "app": "10000",
    "token": "2fa6d3b9651da59c333b918e955e224c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T05:01:19.164Z"),
  "updatedAt": ISODate("2017-02-28T05:01:19.164Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b5083d568a2f86524fb2c7"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10001",
    "info": "empty",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.114.62"
  },
  "header": {
    "x-forwarded-for": "119.129.114.62",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "983609",
    "app": "10001",
    "token": "2e7d8c3da665920fb2b80823794ba0da",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T05:18:53.212Z"),
  "updatedAt": ISODate("2017-02-28T05:18:53.212Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b5084f568a2f86524fb2c9"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn1tZWG6yJUqtVA5GBkJzE1/yadFN9XgAQROVrFsm7wJqvq344YfoY3oM3LfEz1SWdUf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQsZPEKcXPxrk1+dBlKTQBZw5JSTHPuhTrZOOmDJpCCxe6klPJNXvCKQ3D3kPlp0rYDBBEeMA+EiALRuVQ426TLnGs6Z84XHv6",
    "app": "10001",
    "info": "empty",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.253.7",
    "ip_public": "119.129.114.62"
  },
  "header": {
    "x-forwarded-for": "119.129.114.62",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "474045",
    "app": "10001",
    "token": "572763a256816aa1ac33b577dcf01e14",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T05:19:11.815Z"),
  "updatedAt": ISODate("2017-02-28T05:19:11.815Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b50a08568a2f86524fb2cb"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.114.62"
  },
  "header": {
    "x-forwarded-for": "119.129.114.62",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "348433",
    "app": "10001",
    "token": "1d3a0d1385c7f19694c3a2e57a5f123e",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T05:26:32.713Z"),
  "updatedAt": ISODate("2017-02-28T05:26:32.713Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b52272568a2f86524fb2d8"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "10.7.3.184",
    "type": "device",
    "google_aid": "70DBDEA7-D290-49BB-A798-EE00FCB4D782",
    "ip": {
      "user": "10.7.3.184",
      "public": "113.161.78.101"
    },
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "003708",
    "app": "10001",
    "token": "91faa32a9529ee8f939ed407d38b2cf7",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T07:10:42.68Z"),
  "updatedAt": ISODate("2017-02-28T07:10:42.68Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b52291568a2f86524fb2da"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "10.7.3.184",
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "786258",
    "app": "10001",
    "token": "c9193f48024156b95f454af64a604cc9",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T07:11:13.894Z"),
  "updatedAt": ISODate("2017-02-28T07:11:13.894Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b523d7568a2f86524fb2e1"),
  "account_id": NumberInt(560931514),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "d0b3f948daabe4c63b90c91463f41a2557076633",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "中国联通",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/V8.2.1.0.LXKCNDL)",
    "ip_user": "192.168.253.6",
    "type": "device",
    "google_aid": "0",
    "ip": {
      "user": "192.168.253.6",
      "public": "119.129.118.100"
    },
    "ip_public": "119.129.118.100"
  },
  "header": {
    "x-forwarded-for": "119.129.118.100",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "987994",
    "app": "10001",
    "token": "72a93dc142456193a5ca83d29389f875",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/V8.2.1.0.LXKCNDL)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T07:16:39.88Z"),
  "updatedAt": ISODate("2017-02-28T07:16:39.88Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b524df568a2f86524fb2e3"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.114.62"
  },
  "header": {
    "x-forwarded-for": "119.129.114.62",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "427820",
    "app": "10000",
    "token": "ecea9ff7259d3dea15b1c8e4084c224e",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T07:21:03.207Z"),
  "updatedAt": ISODate("2017-02-28T07:21:03.207Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b52c82568a2f86524fb2e5"),
  "account_id": NumberInt(734425202),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.253.8",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"C8597155-7A4C-418D-9796-0041C989BBE0\",\n    \"device_id\" : \"bb5957b3b420afd400fd61ad3aefd4c73b580f4c\"\n  },\n  \"appsflyer_id\" : \"1488206511000-2858742\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"C8597155-7A4C-418D-9796-0041C989BBE0\"\n}",
    "lang": "vi",
    "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "ip_public": "119.129.118.100"
  },
  "header": {
    "x-forwarded-for": "119.129.118.100",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "933142",
    "app": "10000",
    "cookie": "sails.sid=s%3AGervqDqX5c4Y4-xWV2pCZOfH5JvjqjLg.FzRWAEgeolb1NDCcWSY%2BklrC28cSmbZxkmGiJN15LyE",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "2659be921dea8622483229bd102256b9",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T07:53:38.595Z"),
  "updatedAt": ISODate("2017-02-28T07:53:38.595Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b53730568a2f86524fb2e9"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.114.62"
  },
  "header": {
    "x-forwarded-for": "119.129.114.62",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "427772",
    "app": "10000",
    "token": "b04fb54603d09da7399d4e23e59300a2",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T08:39:12.160Z"),
  "updatedAt": ISODate("2017-02-28T08:39:12.160Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b53817568a2f86524fb2eb"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.114.62"
  },
  "header": {
    "x-forwarded-for": "119.129.114.62",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "653016",
    "app": "10000",
    "token": "59ec58ba48ae1ac9273f84fae8d3c0f4",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T08:43:03.868Z"),
  "updatedAt": ISODate("2017-02-28T08:43:03.868Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b5388e568a2f86524fb2ed"),
  "account_id": NumberInt(629935977),
  "params": {
    "manufacturer": "Meizu",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
    "brand": "Meizu",
    "model": "MX4",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"93065B31-26AB-4CE2-91E5-D0F8DF379341\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "ip_user": "192.168.2.105",
    "ip_public": "119.129.114.62"
  },
  "header": {
    "x-forwarded-for": "119.129.114.62",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "535090",
    "app": "10000",
    "token": "a5ae5b5fc87b646713a33fd1f9f77c7c",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1; MX4 Build/LMY47I)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T08:45:02.51Z"),
  "updatedAt": ISODate("2017-02-28T08:45:02.51Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b53f5d568a2f86524fb2f0"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "401580",
    "app": "10000",
    "token": "15e9541033eaaa5d3ff59852d95ae7d2",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-02-28T09:14:05.108Z"),
  "updatedAt": ISODate("2017-02-28T09:14:05.108Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b626aa568a2f86524fb30f"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "727837",
    "app": "10000",
    "token": "8705ca2f0c25c54e443c5d8ca4872cbf",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-01T01:40:58.142Z"),
  "updatedAt": ISODate("2017-03-01T01:40:58.142Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b62822568a2f86524fb311"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "{\"character_id\":\"100001488172183353270\",\"character_name\":\"Empire0661\",\"server_id\":\"1\"}",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "034344",
    "app": "10000",
    "token": "37cf5b11c7899b4bec9e3a5e3be0e86a",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-01T01:47:14.800Z"),
  "updatedAt": ISODate("2017-03-01T01:47:14.800Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b6325d568a2f86524fb316"),
  "account_id": NumberInt(497615639),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"E86589FE-FB4E-42F2-A4F5-CFF55F5A0B39\",\n    \"device_id\" : \"13acd2b7683062a53d56585a34ac9acd8b7b46ac\"\n  },\n  \"appsflyer_id\" : \"1488289719000-1967545\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"E86589FE-FB4E-42F2-A4F5-CFF55F5A0B39\"\n}",
    "lang": "vi",
    "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "accept": "*/*",
    "otp": "772743",
    "if-none-match": "W/\"6b8-Faq3CjZjyHtYgtyWfJYD6w\"",
    "app": "10000",
    "token": "1fd1892227a4b22cfb3dc48a546c36e6",
    "accept-language": "vi-vn",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "accept-encoding": "gzip, deflate",
    "content-type": "application/x-www-form-urlencoded",
    "cookie": "sails.sid=s%3AxgcGYvUY4al-PA_tGBK_YD4r35gnB2-0.Boul9Imrr8WnvSpPSQ56xEc8PSbVCerOGUNOlisWM3E"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-01T02:30:53.844Z"),
  "updatedAt": ISODate("2017-03-01T02:30:53.844Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b6389d568a2f86524fb31a"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.119.174"
  },
  "header": {
    "x-forwarded-for": "119.129.119.174",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "023888",
    "app": "10001",
    "token": "a149f2ef097dde763731fbd777f51ab1",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-01T02:57:33.93Z"),
  "updatedAt": ISODate("2017-03-01T02:57:33.93Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b69e2d568a2f86524fb327"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn6G+rPha9Yj80+Tqn0EqzaSd3BaaLhSacMRKVdTr0Uxvlaa9H92N3PGpvvuLj+noTkf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5DBBEeMA+EiALRuVQ426TLnGs6Z84XHv6",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "info": "{\"character_id\":\"59\",\"character_name\":\"DP03\",\"server_id\":\"0\"}",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "944334",
    "app": "10001",
    "token": "1b4500e61b2c1254a6dcc3cc89227304",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-01T10:10:53.35Z"),
  "updatedAt": ISODate("2017-03-01T10:10:53.35Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b69f55568a2f86524fb32d"),
  "account_id": NumberInt(459123006),
  "params": {
    "account": "1030003703",
    "email": "nguyentg03@gmail.com",
    "password": "1ab762649cb0e46a7c054739c1b0660c",
    "version": "1.3.1",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10001",
    "package_name": "daupha.dptk.pp2",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"3B33E691-0633-4F04-BE11-BE66FDBE6072\",\n    \"device_id\" : \"13acd2b7683062a53d56585a34ac9acd8b7b46ac\"\n  },\n  \"appsflyer_id\" : \"1488387717000-7078615\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"3B33E691-0633-4F04-BE11-BE66FDBE6072\"\n}",
    "lang": "vi",
    "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "google_aid": "",
    "ip": {
      "user": "10.7.3.123",
      "public": "113.161.78.101"
    },
    "ip_public": "113.161.78.101"
  },
  "header": {
    "x-forwarded-for": "113.161.78.101",
    "host": "graph.addgold.net",
    "connection": "close",
    "accept": "*/*",
    "otp": "913782",
    "if-none-match": "W/\"78c-3YN9StLw6udIMPJVfHZkkA\"",
    "app": "10001",
    "token": "d4f78d50485e09eec5a6c0525243b657",
    "accept-language": "vi-vn",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.3.1",
    "accept-encoding": "gzip, deflate",
    "content-type": "application/x-www-form-urlencoded",
    "cookie": "sails.sid=s%3AvgdH_0bBAp7BmkJPYSoGPa5jA8F14ccJ.Maxq2ks%2FwOuNiyz64N180Tu%2FzXiek5pRrSFBF1p5jqc"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-01T10:15:49.946Z"),
  "updatedAt": ISODate("2017-03-01T10:15:49.946Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b6aa93568a2f86524fb331"),
  "account_id": NumberInt(935931406),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "SAMSUNG-SM-N900A",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "b542730716d64a7bea662cd47c8e3cac7bf7095e",
    "lang": "vi",
    "ip_user": "10.0.2.15",
    "version": "1.1.9",
    "tracking_info": "{\"pixel\":{\"track_id\":\"b542730716d64a7bea662cd47c8e3cac7bf7095e_1488366176290\",\"device_id\":\"b542730716d64a7bea662cd47c8e3cac7bf7095e\"},\"google_aid\":\"442FEC18-A5AE-4F2E-8787-37DF858AB90C\"}",
    "telco": "T-Mobile",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.114.62"
  },
  "header": {
    "x-forwarded-for": "119.129.114.62",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "627537",
    "app": "10000",
    "token": "d9ea820fc3023d739c4885e8585db40e",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SAMSUNG-SM-N900A Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-01T11:03:47.997Z"),
  "updatedAt": ISODate("2017-03-01T11:03:47.997Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b6b5e4568a2f86524fb335"),
  "account_id": NumberInt(168012970),
  "params": {
    "version": "1.0",
    "channel": "",
    "telco": "45204",
    "ip_user": "192.168.1.55",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"56F4B336-5167-4C0F-8860-CCB94861E192\",\n    \"device_id\" : \"540833bb60df1140531e4f6bc29ff96f0d6078d3\"\n  },\n  \"appsflyer_id\" : \"1488203348000-8025411\",\n  \"ios_ifa\" : \"A91F9625-57AB-4B72-894C-F776C9861188\",\n  \"ios_ifv\" : \"56F4B336-5167-4C0F-8860-CCB94861E192\"\n}",
    "lang": "vi",
    "device_id": "540833bb60df1140531e4f6bc29ff96f0d6078d3",
    "info": "{\"server_name\":\"Diamond_19124\",\"server_id\":\"1\",\"character_name\":\"saunghia6\",\"character_id\":\"132\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPhone7,2",
    "cR": false,
    "ip_public": "183.81.10.214"
  },
  "header": {
    "x-forwarded-for": "183.81.10.214",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "038033",
    "app": "10000",
    "cookie": "sails.sid=s%3AVHqAbGs9EACsqRfDsAGeIhkMhy8A6lYr.MD7lBtDWwgJrBr5KNAf1roOT5a3%2BMU1CuaQHOaFXoeI",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-989MB + OSVersion-10.2.1 + Model-iPhone7,2 + GameVersion-1.0",
    "token": "cd5633818151ece570efa063c274a5f2",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-01T11:52:04.234Z"),
  "updatedAt": ISODate("2017-03-01T11:52:04.234Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b7813c568a2f86524fb33a"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn6G+rPha9Yj80+Tqn0EqzaSd3BaaLhSacMRKVdTr0Uxvlaa9H92N3PGpvvuLj+noTkf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5DBBEeMA+EiALRuVQ426TLnGs6Z84XHv6",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "info": "{\"character_id\":\"70\",\"character_name\":\"PhượngDư\",\"server_id\":\"0\"}",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "849024",
    "app": "10001",
    "token": "331109b29782fd44f99d5798fe3d2166",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-02T02:19:40.831Z"),
  "updatedAt": ISODate("2017-03-02T02:19:40.831Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b784bd568a2f86524fb33c"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "449202",
    "app": "10001",
    "token": "e76fd0f889a4fce0664adf2f49a32b45",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-02T02:34:37.194Z"),
  "updatedAt": ISODate("2017-03-02T02:34:37.194Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b78d30568a2f86524fb345"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn6G+rPha9Yj80+Tqn0EqzaSd3BaaLhSacMRKVdTr0Uxvlaa9H92N3PGpvvuLj+noTkf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5DBBEeMA+EiALRuVQ426TLnGs6Z84XHv6",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "info": "{\"character_id\":\"74\",\"character_name\":\"DPTK03\",\"server_id\":\"0\"}",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "456884",
    "app": "10001",
    "token": "94a7faf0fdee120520c5d7aed1ec47b5",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-02T03:10:40.858Z"),
  "updatedAt": ISODate("2017-03-02T03:10:40.858Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b7a0f8568a2f86524fb34b"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "378785",
    "app": "10000",
    "token": "96222751f4601d6161a28476c13e4f97",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-02T04:35:04.330Z"),
  "updatedAt": ISODate("2017-03-02T04:35:04.330Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b7a19b568a2f86524fb350"),
  "account_id": NumberInt(999754777),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.2.100",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"29246F02-3EC6-41E1-BDDA-C02DB4198642\",\n    \"device_id\" : \"061788f5f3596f821af0dc767727615e2a7bea16\"\n  },\n  \"appsflyer_id\" : \"1488452197000-888178\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"29246F02-3EC6-41E1-BDDA-C02DB4198642\"\n}",
    "lang": "vi",
    "device_id": "061788f5f3596f821af0dc767727615e2a7bea16",
    "info": "{\"character_id\":\"100001482489018600938\",\"character_name\":\"Empire01b1\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "192.168.2.100",
      "public": "119.129.119.174"
    },
    "ip_public": "119.129.119.174"
  },
  "header": {
    "x-forwarded-for": "119.129.119.174",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "590090",
    "app": "10000",
    "cookie": "sails.sid=s%3A3nu9GhXOiEmv9GBVKGh4-zB8V-NSvxvp.WTG9ISCaYSq%2B1H0Tmocmw0qnsLE74b5edXH58q2x9R0",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "2705222ddc7dbea02c0ded6144e81ea1",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-02T04:37:47.467Z"),
  "updatedAt": ISODate("2017-03-02T04:37:47.467Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b7bb1e568a2f86524fb355"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn6G+rPha9Yj80+Tqn0EqzaSd3BaaLhSacMRKVdTr0Uxvlaa9H92N3PGpvvuLj+noTkf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5DBBEeMA+EiALRuVQ426TLnGs6Z84XHv6",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "info": "{\"character_id\":\"59\",\"character_name\":\"DP03\",\"server_id\":\"0\"}",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "615193",
    "app": "10001",
    "token": "cb30db45497f8735cca05814122e8dd2",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-02T06:26:38.543Z"),
  "updatedAt": ISODate("2017-03-02T06:26:38.543Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b7c08e568a2f86524fb35a"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "949664",
    "app": "10000",
    "token": "862fa9f42e5d184a6cf43ea8360eb9d2",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-02T06:49:50.377Z"),
  "updatedAt": ISODate("2017-03-02T06:49:50.377Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b7c1c6568a2f86524fb362"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUQm6/6Hc1hZuRFAiigTHzEMV4CoRNmII7vsoMcKAHUAO9ZuKCf0p2D6ecH3NbJzQycV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "{\"character_id\":\"100001487928735710337\",\"character_name\":\"Empire0651\",\"server_id\":\"1\"}",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "972873",
    "app": "10000",
    "token": "783f6f990e849ef34bb7be04d99fd8b3",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-02T06:55:02.763Z"),
  "updatedAt": ISODate("2017-03-02T06:55:02.763Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b7c621568a2f86524fb366"),
  "account_id": NumberInt(833537914),
  "params": {
    "app": "10003",
    "platform": "android",
    "model": "ZTE V955",
    "channel_cfg": "empty",
    "package_name": "com.pp.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "ce10ccaf273f9a88023c5c3e257eaeb04ac321ca",
    "lang": "vi",
    "password": "3317efb0a7a1db0e5b97b69386ac642f",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"A0241AA1-CA73-4954-911F-ABE49E70187B\"}",
    "email": "nhattuan.duong@gmail.com",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "ZTE",
    "account": "tuanduong",
    "channel": "empty",
    "google_aid": "A0241AA1-CA73-4954-911F-ABE49E70187B",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "569601",
    "app": "10003",
    "token": "def56ed75e3039b29f1b3d61fd2874ea",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-02T07:13:37.888Z"),
  "updatedAt": ISODate("2017-03-02T07:13:37.888Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b8d796568a2f86524fb36d"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "10.7.3.184",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "076466",
    "app": "10001",
    "token": "a0b323ac5034edbf2cbfe018dcebf033",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-03T02:40:22.693Z"),
  "updatedAt": ISODate("2017-03-03T02:40:22.693Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b8e15c568a2f86524fb372"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "empty",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn/2mLLJ9kEhy6hlyzmqvvCzo0VjgrDgGRZeCp++VW6CK8SCubpTrEkN3KsOdY2EGskf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQsZPEKcXPxrk1+dBlKTQBZw5JSTHPuhTrZOOmDJpCCxe6klPJNXvCKQ3D3kPlp0rYDBBEeMA+EiALRuVQ426TLnGs6Z84XHv6",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "523042",
    "app": "10001",
    "token": "8f4aaf4479c2d3c7c56d8d91649928db",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-03T03:22:04.239Z"),
  "updatedAt": ISODate("2017-03-03T03:22:04.239Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b8e936568a2f86524fb375"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "883800",
    "app": "10000",
    "token": "2dc6880700ba1917f1693ebe3fa6cd45",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-03T03:55:34.237Z"),
  "updatedAt": ISODate("2017-03-03T03:55:34.237Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b91735568a2f86524fb380"),
  "account_id": NumberInt(996958753),
  "params": {
    "account": "1030003704",
    "email": "nguyentg04@gmail.com",
    "password": "1ab762649cb0e46a7c054739c1b0660c",
    "version": "1.3.1",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10001",
    "package_name": "daupha.dptk.pp2",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"03CD794E-82F4-43BB-9C1E-84A135CCBCC7\",\n    \"device_id\" : \"13acd2b7683062a53d56585a34ac9acd8b7b46ac\"\n  },\n  \"appsflyer_id\" : \"1488549910000-6298477\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"03CD794E-82F4-43BB-9C1E-84A135CCBCC7\"\n}",
    "lang": "vi",
    "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "google_aid": "",
    "ip": {
      "user": "10.7.3.123",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "553377",
    "app": "10001",
    "cookie": "sails.sid=s%3AXYW1GpLpzb7cH9s6o4mtXJyyDknPnQKd.uFPJmFqhrsAGGWf0nD6TI5tgWYJeViIy5IvX1BjNlX8",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.3.1",
    "token": "943cf12bfcc40443a33b7d104b5ba7ac",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-03T07:11:49.125Z"),
  "updatedAt": ISODate("2017-03-03T07:11:49.125Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b934d8568a2f86524fb390"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn/2mLLJ9kEhy6hlyzmqvvCzo0VjgrDgGRZeCp++VW6CK8SCubpTrEkN3KsOdY2EGskf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQsZPEKcXPxrk1+dBlKTQBZw5JSTHPuhTrZOOmDJpCCxe6klPJNXvCKQ3D3kPlp0rYcEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "{\"character_id\":\"59\",\"character_name\":\"DP03\",\"server_id\":\"0\"}",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "795237",
    "app": "10001",
    "token": "b70a03cbff1132113da6981e2f42bf6c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-03T09:18:16.586Z"),
  "updatedAt": ISODate("2017-03-03T09:18:16.586Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b93605568a2f86524fb393"),
  "account_id": NumberInt(533574639),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "HTC 802t",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "2120bcc1464791f44ecd94df56a4c3ace117f887",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "HTC",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "216119",
    "app": "10001",
    "token": "3cb1bd952066548a6101398e80848d1f",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-03T09:23:17.426Z"),
  "updatedAt": ISODate("2017-03-03T09:23:17.426Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b9386d568a2f86524fb398"),
  "account_id": NumberInt(257035834),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "Coolpad 5930",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "54fedfca0e647d172ebed5d363402ec13c94b37b",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "YuLong",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "Coolpad",
    "channel": "empty",
    "type": "device",
    "google_aid": "0",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "810220",
    "app": "10001",
    "token": "1061da6c6f46016a47ddd46b7166cc9c",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-03T09:33:33.936Z"),
  "updatedAt": ISODate("2017-03-03T09:33:33.936Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58b9397d568a2f86524fb39a"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "287005",
    "app": "10000",
    "token": "ba843887f1c3094c2cf1261fd7c80b7a",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-03T09:38:05.714Z"),
  "updatedAt": ISODate("2017-03-03T09:38:05.714Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ba19ac568a2f86524fb3a8"),
  "account_id": NumberInt(741965519),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "MI 4W",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "68e1e024cf1a5cd9f5cf9677dc7a0648148b5b6e",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "Xiaomi",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "htc",
    "channel": "empty",
    "type": "device",
    "google_aid": "0",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "923684",
    "app": "10001",
    "token": "966e298ae6575bf6685a97db34ca4db6",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-04T01:34:36.771Z"),
  "updatedAt": ISODate("2017-03-04T01:34:36.771Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ba8284568a2f86524fb3ad"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "empty",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn/2mLLJ9kEhy6hlyzmqvvCzo0VjgrDgGRZeCp++VW6CK8SCubpTrEkN3KsOdY2EGskf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQsZPEKcXPxrk1+dBlKTQBZw5JSTHPuhTrZOOmDJpCCxe6klPJNXvCKQ3D3kPlp0rYDBBEeMA+EiALRuVQ426TLnGs6Z84XHv6",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "info": "{\"character_id\":\"59\",\"character_name\":\"DP03\",\"server_id\":\"0\"}",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "110953",
    "app": "10001",
    "token": "6b4b50f0e2cf62b9165faf5f86dc266a",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-04T09:01:56.802Z"),
  "updatedAt": ISODate("2017-03-04T09:01:56.802Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bb7489568a2f86524fb3b0"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn/2mLLJ9kEhy6hlyzmqvvCzo0VjgrDgGRZeCp++VW6CK8SCubpTrEkN3KsOdY2EGskf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQsZPEKcXPxrk1+dBlKTQBZw5JSTHPuhTrZOOmDJpCCxe6klPJNXvCKQ3D3kPlp0rYcEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "{\"character_id\":\"64\",\"character_name\":\"LêÔTiền\",\"server_id\":\"0\"}",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "308804",
    "app": "10001",
    "token": "ccab7468a18880ea4bc752ccacdcc29e",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-05T02:14:33.569Z"),
  "updatedAt": ISODate("2017-03-05T02:14:33.569Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bcc66a568a2f86524fb3b5"),
  "account_id": NumberInt(440605678),
  "params": {
    "account": "khanhtk82apk",
    "email": "khanhtk82@mecorp.vn",
    "password": "c4ca359042fd251bc6bcc28b0dfca751",
    "manufacturer": "htc",
    "package_name": "com.pp.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10003",
    "lang": "vi",
    "device_id": "b1be02765dbe891473949fe35789a0b29366b326",
    "brand": "google",
    "model": "Nexus 9",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"B4A3DFAD-6090-437D-B33C-22AE907F9C50\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
    "ip_user": "10.7.1.96",
    "google_aid": "B4A3DFAD-6090-437D-B33C-22AE907F9C50",
    "ip": {
      "user": "10.7.1.96",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "031543",
    "app": "10003",
    "token": "b74f5744eb0515f0020b13c559a6eece",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-06T02:16:10.144Z"),
  "updatedAt": ISODate("2017-03-06T02:16:10.144Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bcd54d568a2f86524fb3bc"),
  "account_id": NumberInt(913429778),
  "params": {
    "manufacturer": "htc",
    "package_name": "com.pp.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "EtuQCXQzVEKcqmkk1LF6BM2R0GEj831D5/ID+NfpeWhasi6fwsZG8sLHa14IvhXR7N6/1LI7ATkDi6nKru51vl37F080M9HUtRUw5X5QCoik6ZYhRJBBN5QiHJCyf+hoynHV+ekNPP4Gpg3sJa0cV5+DxiZri3460C5kCIlyYs5DLs0oM/s25XFvGfPUiXWTLu+Me+Mc7yUTj2EC9EiqvCtWa6Zm4amlJfiLTPe2tcyRAoPMaBV2ijkRK6gjTkDVP6SsPVC4zHb2/D27s+19wPcTfSWjrp1J",
    "app": "10003",
    "info": "empty",
    "lang": "vi",
    "device_id": "b1be02765dbe891473949fe35789a0b29366b326",
    "brand": "google",
    "model": "Nexus 9",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"B4A3DFAD-6090-437D-B33C-22AE907F9C50\",\"pixel\":{\"device_id\":\"b1be02765dbe891473949fe35789a0b29366b326\",\"track_id\":\"b1be02765dbe891473949fe35789a0b29366b326_1488766432240\"}}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
    "ip_user": "10.7.1.96",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "778106",
    "app": "10003",
    "token": "886cb98467b4cc832dc562687ebc75f9",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-06T03:19:41.853Z"),
  "updatedAt": ISODate("2017-03-06T03:19:41.853Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bcd872568a2f86524fb3c0"),
  "account_id": NumberInt(913429778),
  "params": {
    "manufacturer": "htc",
    "package_name": "com.pp.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "EtuQCXQzVEKcqmkk1LF6BM2R0GEj831D5/ID+NfpeWhasi6fwsZG8sLHa14IvhXR7N6/1LI7ATkDi6nKru51vl37F080M9HUtRUw5X5QCoik6ZYhRJBBN5QiHJCyf+hoynHV+ekNPP4Gpg3sJa0cV5+DxiZri3460C5kCIlyYs5DLs0oM/s25XFvGfPUiXWTLu+Me+Mc7yUTj2EC9EiqvCtWa6Zm4amlJfiLTPe2tcyRAoPMaBV2ijkRK6gjTkDVP6SsPVC4zHb2/D27s+19wPcTfSWjrp1J",
    "app": "10003",
    "info": "empty",
    "lang": "vi",
    "device_id": "b1be02765dbe891473949fe35789a0b29366b326",
    "brand": "google",
    "model": "Nexus 9",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"B4A3DFAD-6090-437D-B33C-22AE907F9C50\",\"pixel\":{\"device_id\":\"b1be02765dbe891473949fe35789a0b29366b326\",\"track_id\":\"b1be02765dbe891473949fe35789a0b29366b326_1488766432240\"}}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
    "ip_user": "10.7.1.96",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "746343",
    "app": "10003",
    "token": "4a0477a7502675e0d9639b1fe20c7e58",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-06T03:33:06.116Z"),
  "updatedAt": ISODate("2017-03-06T03:33:06.116Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bcd994568a2f86524fb3c4"),
  "account_id": NumberInt(106523393),
  "params": {
    "platform": "android",
    "app": "10003",
    "model": "ASUS_T00J",
    "channel_cfg": "empty",
    "sd": "EtuQCXQzVEKcqmkk1LF6BM2R0GEj831D5/ID+NfpeWhasi6fwsZG8sLHa14IvhXR7N6/1LI7ATkDi6nKru51vl37F080M9HUtRUw5X5QCoik6ZYhRJBBN5QiHJCyf+hoynHV+ekNPP4Gpg3sJa0cV5+DxiZri3460C5kCIlyYs4pp/h2TDe5xIF0TJIpbgLoOipmVWGey9Ua9t3lH6WPxnQ78xjzT257WTNJl7B7e9ZkGiR2h2ltj/2qQOR1pa2mHGsCEEP6C6AZrbIeLb/pDg==",
    "package_name": "com.pp.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
    "lang": "vi",
    "password": "c4ca359042fd251bc6bcc28b0dfca751",
    "ip_user": "10.0.2.15",
    "version": "1.0",
    "info": "empty",
    "tracking_info": "{\"pixel\":{\"track_id\":\"327f6dd4b7e2f56f9422b40749abb4e29bcfa619_1488770086399\",\"device_id\":\"327f6dd4b7e2f56f9422b40749abb4e29bcfa619\"},\"google_aid\":\"35CBFB72-96C2-4FE4-8E24-0653E87DA7C9\"}",
    "telco": "Vodafone.de",
    "email": "khanhtk@mecorp.vn",
    "manufacturer": "asus",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "brand": "asus",
    "account": "Khanhtk82ios",
    "channel": "empty",
    "google_aid": "35CBFB72-96C2-4FE4-8E24-0653E87DA7C9",
    "ip": {
      "user": "10.0.2.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "358739",
    "app": "10003",
    "token": "e71ce8ae35f3056a2d298e802c2f93e2",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-06T03:37:56.563Z"),
  "updatedAt": ISODate("2017-03-06T03:37:56.563Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bce645568a2f86524fb3c8"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "547515",
    "app": "10001",
    "token": "c5b10ffb73be6a223f57bede10d83f52",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-06T04:32:05.337Z"),
  "updatedAt": ISODate("2017-03-06T04:32:05.337Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bcebab568a2f86524fb3d4"),
  "account_id": NumberInt(266425902),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"BE3E4B48-8CEE-4F6F-9ABE-5D2156CF7A80\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1488800854000-4963392\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"BE3E4B48-8CEE-4F6F-9ABE-5D2156CF7A80\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "10.7.3.123",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "306266",
    "app": "10000",
    "cookie": "sails.sid=s%3AP0iZJ-GPzh_YWMzZP7QBlPReLXC89ok9.loiDDsgMZevKrtUGwqyt7v%2BZliLvFFMUfZI1habY8nM",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "00d0623b9dbef5c90de9eaf7058ec920",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-06T04:55:07.39Z"),
  "updatedAt": ISODate("2017-03-06T04:55:07.39Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bd0e71568a2f86524fb3df"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "092820",
    "app": "10000",
    "token": "0efd735b55a09c2b51213e8e3f92510b",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-06T07:23:29.292Z"),
  "updatedAt": ISODate("2017-03-06T07:23:29.292Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bd0ed8568a2f86524fb3e2"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUfc7Ug7PjjPan1ynbj/OWgfUJ3oJ28U3lH4f4VdTZiQ8iAM9W9CFHPOqDh6z7LyQdcV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "821191",
    "app": "10000",
    "token": "992f3bff7d598ab9add853b67fb5445a",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-06T07:25:12.112Z"),
  "updatedAt": ISODate("2017-03-06T07:25:12.112Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bd1676568a2f86524fb3e6"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUfc7Ug7PjjPan1ynbj/OWgfUJ3oJ28U3lH4f4VdTZiQ8iAM9W9CFHPOqDh6z7LyQdcV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "{\"card_type\":\"9006\",\"character_id\":\"1005271000001\"}",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "157593",
    "app": "10000",
    "token": "9161d4a4d73a535e0dffcc92f9e70013",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-06T07:57:42.850Z"),
  "updatedAt": ISODate("2017-03-06T07:57:42.850Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58be1760568a2f86524fb3f0"),
  "account_id": NumberInt(932883173),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.2.100",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"EA00B78C-D601-4DB0-99EB-79EF342825DD\",\n    \"device_id\" : \"cc2ca95c9b143c2986a17e0b5cb6a88a66d530cc\"\n  },\n  \"appsflyer_id\" : \"1488467962000-8513453\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"EA00B78C-D601-4DB0-99EB-79EF342825DD\"\n}",
    "lang": "vi",
    "device_id": "cc2ca95c9b143c2986a17e0b5cb6a88a66d530cc",
    "info": "{\"character_id\":\"100001482489018600938\",\"character_name\":\"Empire01b1\",\"server_id\":\"\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "type": "device",
    "google_aid": "",
    "ip": {
      "user": "192.168.2.100",
      "public": "119.129.116.155"
    },
    "ip_public": "119.129.116.155"
  },
  "header": {
    "x-forwarded-for": "119.129.116.155",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "218636",
    "app": "10000",
    "cookie": "sails.sid=s%3AmIpzF5sVmJW7yJ848A3fGMAWrGcWUI0B.pLRytx96Tio1CINgooFcamadDJcFKfujcEi7TvLWHd4",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "be4e9e1194f744493548617d0c96135a",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-07T02:13:52.652Z"),
  "updatedAt": ISODate("2017-03-07T02:13:52.652Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58be17f3568a2f86524fb3f5"),
  "account_id": NumberInt(175493606),
  "params": {
    "account": "18254322345",
    "email": "33567896@qq.com",
    "password": "32eed2fa19282809408bee3d2665a44d",
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.2.100",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"EA00B78C-D601-4DB0-99EB-79EF342825DD\",\n    \"device_id\" : \"cc2ca95c9b143c2986a17e0b5cb6a88a66d530cc\"\n  },\n  \"appsflyer_id\" : \"1488467962000-8513453\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"EA00B78C-D601-4DB0-99EB-79EF342825DD\"\n}",
    "lang": "vi",
    "device_id": "cc2ca95c9b143c2986a17e0b5cb6a88a66d530cc",
    "info": "{\"character_id\":\"100001482489018600938\",\"character_name\":\"Empire01b1\",\"server_id\":\"\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "google_aid": "",
    "ip": {
      "user": "192.168.2.100",
      "public": "119.129.116.155"
    },
    "ip_public": "119.129.116.155"
  },
  "header": {
    "x-forwarded-for": "119.129.116.155",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "892868",
    "app": "10000",
    "cookie": "sails.sid=s%3A3ogS9pCy0IOQ3KJWvIgi0goDHCUGmAzP.6vWq5z2V7Y%2FeJfMquLww4afhB5n795gx2rXx9gYh%2B9w",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "7e3f5e1138f4826f786814f1c25e91a6",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-07T02:16:19.104Z"),
  "updatedAt": ISODate("2017-03-07T02:16:19.104Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58be837e568a2f86524fb407"),
  "account_id": NumberInt(161195357),
  "params": {
    "account": "1030003707",
    "email": "nguyentg07@gmail.com",
    "password": "1ab762649cb0e46a7c054739c1b0660c",
    "version": "1.3.1",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10001",
    "package_name": "daupha.dptk.pp2",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"F2139E52-1F51-4FE2-A0D1-3C0A2933352F\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1488800751000-4864478\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"F2139E52-1F51-4FE2-A0D1-3C0A2933352F\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "google_aid": "",
    "ip": {
      "user": "10.7.3.123",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "406695",
    "app": "10001",
    "cookie": "sails.sid=s%3A5i035NEG-vSewgE6HudwPeht_q8gIcm6.xexqZ97puB9P7TFgLdSDI9nBqwl5JubEFw%2BmvZB2sFM",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.3.1",
    "token": "d4be968b3e8f154fe65c1b7dec165adb",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-07T09:55:10.589Z"),
  "updatedAt": ISODate("2017-03-07T09:55:10.589Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58be863d568a2f86524fb40a"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn4tCKSdGQ1Yr/PCLmI+go9Y4wIXXnMW4ZBNuOwt/nmvhKH2XW6wt65m5nBg0Eg9E3Uf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5DBBEeMA+EiALRuVQ426TLnGs6Z84XHv6",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "292903",
    "app": "10001",
    "token": "35210900990591863220e4068f9de918",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-07T10:06:53.731Z"),
  "updatedAt": ISODate("2017-03-07T10:06:53.731Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58be86a0568a2f86524fb40c"),
  "account_id": NumberInt(266425902),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"7895F106-F314-4741-90A7-2C384ED1FF33\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1488906203000-2458916\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"7895F106-F314-4741-90A7-2C384ED1FF33\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "accept": "*/*",
    "otp": "068475",
    "if-none-match": "W/\"6b8-3S8+A0jHNfOuCt/fppSvMQ\"",
    "app": "10000",
    "token": "65ed656083cfb1821f4d2015d232801e",
    "accept-language": "vi-vn",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "accept-encoding": "gzip, deflate",
    "content-type": "application/x-www-form-urlencoded",
    "cookie": "sails.sid=s%3Aw_RfvCVAWDDwX_zhvnR7OSE766Hfb5V-.IRinuLWqXm31nyp9p5hEvdBIjwoQZeg0SVjikDD7cT4"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-07T10:08:32.465Z"),
  "updatedAt": ISODate("2017-03-07T10:08:32.465Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bf5d58568a2f86524fb410"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn4tCKSdGQ1Yr/PCLmI+go9Y4wIXXnMW4ZBNuOwt/nmvhKH2XW6wt65m5nBg0Eg9E3Uf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5DBBEeMA+EiALRuVQ426TLnGs6Z84XHv6",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "info": "{\"character_id\":\"59\",\"character_name\":\"DP03\",\"server_id\":\"0\"}",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "817822",
    "app": "10001",
    "token": "ab400a9c2ef718cf672506db7158c3ee",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-08T01:24:40.85Z"),
  "updatedAt": ISODate("2017-03-08T01:24:40.85Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bf5f76568a2f86524fb413"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "198567",
    "app": "10000",
    "token": "0ae32604b8ef1ca928cd6b2543a235c0",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-08T01:33:42.831Z"),
  "updatedAt": ISODate("2017-03-08T01:33:42.831Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bf6478568a2f86524fb418"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0gs0djXmApHiIl3nukT+1iypM4f3BqPtJQXnmVS2arkY6d5ql5wYcLiotvcPev2BSaoUCCLTghpn4tCKSdGQ1Yr/PCLmI+go9Y4wIXXnMW4ZBNuOwt/nmvhKH2XW6wt65m5nBg0Eg9E3Uf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQdiJZtuwkctsfwsLEsHgc1nsW5OKWcGSvXI6T9lVyE81kheUTfIa9IMeR9hm1n5D5cEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "info": "empty",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "837196",
    "app": "10001",
    "token": "0ca1fe326022701ae36c7abfbfee5eeb",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-08T01:55:04.328Z"),
  "updatedAt": ISODate("2017-03-08T01:55:04.328Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bf6dae568a2f86524fb41b"),
  "account_id": NumberInt(365513464),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "183769",
    "app": "10000",
    "token": "4165be3c94465d1c1d2bf739e5c9669f",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-08T02:34:22.647Z"),
  "updatedAt": ISODate("2017-03-08T02:34:22.647Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58bfac1f568a2f86524fb425"),
  "account_id": NumberInt(365513464),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "3|pp|1.1.9|GP|psv_2_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "906760",
    "app": "10000",
    "token": "c7edaeff8f613af63e31c6ead5e64d4e",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-08T07:00:47.973Z"),
  "updatedAt": ISODate("2017-03-08T07:00:47.973Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c108b2568a2f86524fb42c"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.119.99"
  },
  "header": {
    "x-forwarded-for": "119.129.119.99",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "003143",
    "app": "10001",
    "token": "035d6b46b2fe7f191e0d1807b11d3931",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-09T07:48:02.415Z"),
  "updatedAt": ISODate("2017-03-09T07:48:02.415Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c20673568a2f86524fb42f"),
  "account_id": NumberInt(134435319),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "YQ603",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"48909B49-B42F-48F9-A2FF-441E271F35FF\"}",
    "telco": "T-Mobile",
    "manufacturer": "smartisan",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "brand": "SMARTISAN",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "270158",
    "app": "10000",
    "token": "c3ffc4429f15c9b97a84b0e3aa4c9fec",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-10T01:50:43.753Z"),
  "updatedAt": ISODate("2017-03-10T01:50:43.753Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c20c44568a2f86524fb431"),
  "account_id": NumberInt(574023869),
  "params": {
    "manufacturer": "unknown",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "6a222e7bf8a7f2e25e0405833c84d3f4e761590c",
    "brand": "Android",
    "model": "Android SDK built for x86",
    "telco": "Android",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"83B039FA-9E38-4DA4-80E7-34B75858072C\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; Android SDK built for x86 Build/NYC)",
    "ip_user": "10.0.2.15",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "102251",
    "app": "10000",
    "token": "ffffd75e85009c97473ec39ba5cdb247",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; Android SDK built for x86 Build/NYC)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-10T02:15:32.448Z"),
  "updatedAt": ISODate("2017-03-10T02:15:32.448Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c22273568a2f86524fb43a"),
  "account_id": NumberInt(187893547),
  "params": {
    "manufacturer": "samsung",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "dec6e2bfd653615598cdbe295c1488d62186ca14",
    "brand": "samsung",
    "model": "SM-J7109",
    "telco": "VN Mobifone",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"3C8B8D69-7697-4FBB-8396-24E1A29596C7\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J7109 Build/MMB29M)",
    "ip_user": "10.7.1.60",
    "type": "device",
    "google_aid": "3C8B8D69-7697-4FBB-8396-24E1A29596C7",
    "ip": {
      "user": "10.7.1.60",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "221662",
    "app": "10001",
    "token": "41b64235559e0c969dc73cec5a9bff32",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J7109 Build/MMB29M)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-10T03:50:11.215Z"),
  "updatedAt": ISODate("2017-03-10T03:50:11.215Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c240ed568a2f86524fb444"),
  "account_id": NumberInt(266425902),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"7895F106-F314-4741-90A7-2C384ED1FF33\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1488906203000-2458916\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"7895F106-F314-4741-90A7-2C384ED1FF33\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "{\"character_id\":\"100001487928694906212\",\"character_name\":\"Empire0641\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "930147",
    "app": "10000",
    "cookie": "sails.sid=s%3AWqlTp8keEPKq8e4MlyVM42jXna3cGhtC.wUk3b7Vw0IAl5cp7dtvl%2F7%2BHtzPBLjFWsq0l4XO3W1k",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "6f9d7377e05dd0ad45104329a5e74e3f",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-10T06:00:13.250Z"),
  "updatedAt": ISODate("2017-03-10T06:00:13.250Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c246d6568a2f86524fb44b"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "393404",
    "app": "10000",
    "token": "1249e7c4cb5108b65a9a57adbb5cafe8",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-10T06:25:26.191Z"),
  "updatedAt": ISODate("2017-03-10T06:25:26.191Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c26a8e568a2f86524fb456"),
  "account_id": NumberInt(266425902),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"7895F106-F314-4741-90A7-2C384ED1FF33\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1488906203000-2458916\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"7895F106-F314-4741-90A7-2C384ED1FF33\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "accept": "*/*",
    "otp": "690025",
    "if-none-match": "W/\"6b8-AHW5n5KXgxlZZjJyrUrfhQ\"",
    "app": "10000",
    "token": "0b6b690a9e5cf0e1208330594e707fbc",
    "accept-language": "vi-vn",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "accept-encoding": "gzip, deflate",
    "content-type": "application/x-www-form-urlencoded",
    "cookie": "sails.sid=s%3AUmv-Seja4U0JYRzJRyAWz_v6zknngvYm.xaru5qwABcvvDnoO6eZ29jHw2WiTQXHFOZ9EkTmvrQM"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-10T08:57:50.2Z"),
  "updatedAt": ISODate("2017-03-10T08:57:50.2Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c27f33568a2f86524fb45b"),
  "account_id": NumberInt(913429778),
  "params": {
    "manufacturer": "htc",
    "package_name": "org.hcg.IF",
    "sdk_version": "1.0.0.2_20170213",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "b1be02765dbe891473949fe35789a0b29366b326",
    "brand": "google",
    "model": "Nexus 9",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"B4A3DFAD-6090-437D-B33C-22AE907F9C50\",\"pixel\":{\"device_id\":\"b1be02765dbe891473949fe35789a0b29366b326\",\"track_id\":\"b1be02765dbe891473949fe35789a0b29366b326_1489141543730\"}}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
    "ip_user": "10.7.1.96",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "250863",
    "app": "10000",
    "token": "f9c7a12db459adc72bb07bbdaa1f65cd",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; Nexus 9 Build/N4F26Q)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-10T10:25:55.194Z"),
  "updatedAt": ISODate("2017-03-10T10:25:55.194Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c27f5a568a2f86524fb45e"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "org.hcg.IF",
    "sdk_version": "1.0.0.2_20170213",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\",\"pixel\":{\"device_id\":\"e5f2f26817d1717fa19573e7cf42acb3b42bdec0\",\"track_id\":\"e5f2f26817d1717fa19573e7cf42acb3b42bdec0_1489141565984\"}}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "10.7.3.184",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "017899",
    "app": "10000",
    "token": "4d4affa1b8e42372c8efaf0d9a94cc70",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-10T10:26:34.48Z"),
  "updatedAt": ISODate("2017-03-10T10:26:34.48Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c27f90568a2f86524fb460"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "org.hcg.IF",
    "sdk_version": "1.0.0.2_20170213",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "10.7.3.184",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "155040",
    "app": "10000",
    "token": "3973337a4a3e9df09f04b169adb6e591",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-10T10:27:28.147Z"),
  "updatedAt": ISODate("2017-03-10T10:27:28.147Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c6190d568a2f86524fb46e"),
  "account_id": NumberInt(900669215),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "GT-P5210",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn/9sCcU3LAcZ36shPd4AGhmiwCLTaCiFT7pVIfpouVMdnSoklJPWDNRt0jvGhYyykUf/4rT555VBZhugI4ehjn7+utbj2GMyghOGXxXmo+wQsZPEKcXPxrk1+dBlKTQBZw5JSTHPuhTrZOOmDJpCCxe6klPJNXvCKQ3D3kPlp0rYcEvHXxfXpzZF3g1W66q2KaQtzinsk0ca",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CMCC",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "119.129.119.172"
  },
  "header": {
    "x-forwarded-for": "119.129.119.172",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "855514",
    "app": "10001",
    "token": "7c39f21f8e3ff5fde49d8848ae302afc",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; GT-P5210 Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-13T03:59:09.117Z"),
  "updatedAt": ISODate("2017-03-13T03:59:09.117Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c64b5c568a2f86524fb476"),
  "account_id": NumberInt(360894272),
  "params": {
    "account": "khanhtk82ppp",
    "email": "khanhtk@gmail.com",
    "password": "c4ca359042fd251bc6bcc28b0dfca751",
    "version": "1.0.0",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.1.141",
    "channel_cfg": "2|me|1.0.0|Appstore|psv_1_store",
    "platform": "ios",
    "app": "10003",
    "package_name": "langgame.casual.mmo.slg",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"6B293E72-567C-4D8C-B217-3BEFF4A03063\",\n    \"device_id\" : \"2e2ed8a9966570b679f3241b44481d7a26cc1f18\"\n  },\n  \"appsflyer_id\" : \"1489415197000-516344\",\n  \"ios_ifa\" : \"DC74C512-0323-428A-A607-1A2A025D98D3\",\n  \"ios_ifv\" : \"6B293E72-567C-4D8C-B217-3BEFF4A03063\"\n}",
    "lang": "vi",
    "device_id": "2e2ed8a9966570b679f3241b44481d7a26cc1f18",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,8",
    "cR": false,
    "google_aid": "",
    "ip": {
      "user": "10.7.1.141",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "461317",
    "app": "10003",
    "cookie": "sails.sid=s%3A1Iye8reZ-8SZyEdpF8G1C7rnEYmXPMmS.zo02WeK%2Ffp8wGEal6w%2FOnRnjGPZc7wly8R85%2Fr%2Bx5s0",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,8 + GameVersion-1.0.0",
    "token": "b7a90eeb05396f4c55215ba458efc5c1",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-13T07:33:48.923Z"),
  "updatedAt": ISODate("2017-03-13T07:33:48.923Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c65114568a2f86524fb47d"),
  "account_id": NumberInt(932883173),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.2.106",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"EA00B78C-D601-4DB0-99EB-79EF342825DD\",\n    \"device_id\" : \"cc2ca95c9b143c2986a17e0b5cb6a88a66d530cc\"\n  },\n  \"appsflyer_id\" : \"1488467962000-8513453\",\n  \"ios_ifa\" : \"61710F6B-D869-41C4-9D09-229A99F6B8A5\",\n  \"ios_ifv\" : \"EA00B78C-D601-4DB0-99EB-79EF342825DD\"\n}",
    "lang": "vi",
    "device_id": "cc2ca95c9b143c2986a17e0b5cb6a88a66d530cc",
    "info": "{\"character_id\":\"100001488852979408702\",\"character_name\":\"Empire0241\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34",
    "model": "iPhone6,2",
    "cR": true,
    "ip_public": "119.129.116.58"
  },
  "header": {
    "x-forwarded-for": "119.129.116.58",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "610505",
    "app": "10000",
    "cookie": "sails.sid=s%3ADpu14MWyUn-Zb-vdR22jQYVHRtgA7BES.aS5g7Chrs4R2WsWYtFFljfAFdRVjX%2BZh4i38ZpDbPcA",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G34 | Global SDK 0.0.1 | RAM-1000MB + OSVersion-9.3.3 + Model-iPhone6,2 + GameVersion-1.1.9",
    "token": "730a16eb4f3bdfcee42d85c44e10d1c2",
    "accept-language": "zh-cn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-13T07:58:12.774Z"),
  "updatedAt": ISODate("2017-03-13T07:58:12.774Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c66f1f568a2f86524fb484"),
  "account_id": NumberInt(354465044),
  "params": {
    "app": "10003",
    "platform": "android",
    "model": "ZTE N909",
    "channel_cfg": "empty",
    "package_name": "conggame.vietnam",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "9057dd30b71b30a08e745995375f5eb38bfde930",
    "lang": "vi",
    "password": "e19d5cd5af0378da05f63f891c7467af",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"462FAE79-FD93-46AA-A5EE-538461F1AF0F\"}",
    "email": "ht.swen@gmail.com",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "ZTE",
    "account": "thinhtrh",
    "channel": "empty",
    "google_aid": "462FAE79-FD93-46AA-A5EE-538461F1AF0F",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "628033",
    "app": "10003",
    "token": "54f693b5ebc0ee637aff4423829f0dc1",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-13T10:06:23.721Z"),
  "updatedAt": ISODate("2017-03-13T10:06:23.721Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c764c2568a2f86524fb48c"),
  "account_id": NumberInt(405632381),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUWwk48XusRYZ2eeRoDy67nrphOK0jjkuMKiDTfRjcpJnhcjAl8aIH07TW7T75G2/1cV11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "empty",
    "lang": "vi",
    "device_id": "3b96c6e82456c6fb8a33fa513aaffea5a9f3ba95",
    "brand": "samsung",
    "model": "SM-T705",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"EE025A2D-3FBE-4A67-8541-15AA48933201\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-T705 Build/MMB29K)",
    "ip_user": "10.7.2.56",
    "type": "device",
    "google_aid": "EE025A2D-3FBE-4A67-8541-15AA48933201",
    "ip": {
      "user": "10.7.2.56",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "476823",
    "app": "10000",
    "token": "5295197644ea839840180a463a829edc",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-T705 Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-14T03:34:26.239Z"),
  "updatedAt": ISODate("2017-03-14T03:34:26.239Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c764d2568a2f86524fb48e"),
  "account_id": NumberInt(405632381),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUWwk48XusRYZ2eeRoDy67nrphOK0jjkuMKiDTfRjcpJnhcjAl8aIH07TW7T75G2/1cV11AdFvnrk5RsmvyxjUuljWn8E1YLiIzkoRmgtCGG1BkxqIWjZ1HEIUb1FzUnfn6RWhwS8GCBLy0Klc6RMcmC6/ghKUqJa3ZShDgSrISOXIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "empty",
    "lang": "vi",
    "device_id": "3b96c6e82456c6fb8a33fa513aaffea5a9f3ba95",
    "brand": "samsung",
    "model": "SM-T705",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"EE025A2D-3FBE-4A67-8541-15AA48933201\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-T705 Build/MMB29K)",
    "ip_user": "10.7.2.56",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "503476",
    "app": "10000",
    "token": "4dc8b9d80fe129923b35867e1ed57eb8",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-T705 Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-14T03:34:42.165Z"),
  "updatedAt": ISODate("2017-03-14T03:34:42.165Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c76acb568a2f86524fb491"),
  "account_id": NumberInt(405632381),
  "params": {
    "manufacturer": "samsung",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "3b96c6e82456c6fb8a33fa513aaffea5a9f3ba95",
    "brand": "samsung",
    "model": "SM-T705",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"EE025A2D-3FBE-4A67-8541-15AA48933201\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-T705 Build/MMB29K)",
    "ip_user": "10.7.2.56",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "585631",
    "app": "10000",
    "token": "b31ae4c3990b79eaf7d557140dbe9976",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-T705 Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-14T04:00:11.418Z"),
  "updatedAt": ISODate("2017-03-14T04:00:11.418Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c7b873568a2f86524fb49a"),
  "account_id": NumberInt(560708617),
  "params": {
    "platform": "android",
    "app": "10003",
    "model": "ASUS_T00J",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "conggame.vietnam",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
    "lang": "vi",
    "ip_user": "10.0.2.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"35CBFB72-96C2-4FE4-8E24-0653E87DA7C9\"}",
    "telco": "Vodafone.de",
    "manufacturer": "asus",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "brand": "asus",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "884019",
    "app": "10003",
    "token": "a58d5bb925d024054eaf9a5c50456f16",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-14T09:31:31.20Z"),
  "updatedAt": ISODate("2017-03-14T09:31:31.20Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c8ff4e568a2f86524fb4a7"),
  "account_id": NumberInt(424810432),
  "params": {
    "account": "1030003708",
    "email": "nguyentg08@gmail.com",
    "password": "1ab762649cb0e46a7c054739c1b0660c",
    "version": "1.3.1",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10001",
    "package_name": "daupha.dptk.pp2",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"7134E992-6061-4C1D-A9ED-2B43E5E21088\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1489059646000-7245364\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"7134E992-6061-4C1D-A9ED-2B43E5E21088\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "google_aid": "",
    "ip": {
      "user": "10.7.3.123",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "886728",
    "app": "10001",
    "cookie": "sails.sid=s%3AMAm_McUmbnE8fMGc7NOTsspTqvTMvFUM.qLU8zWSRX1aD7qilELg3pw%2B6%2BYFQiLIrLwRb1iDZrEo",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.3.1",
    "token": "45c66164259681756159954e2492dbcd",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-15T08:46:06.377Z"),
  "updatedAt": ISODate("2017-03-15T08:46:06.377Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c91259568a2f86524fb4ab"),
  "account_id": NumberInt(766445263),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SCH-I919U",
    "channel_cfg": "3|pp|1.0|GP|psv_4_store",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"69FE38AC-F603-4219-A251-02C4F1354E6F\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "463811",
    "app": "10001",
    "token": "92412145c108296a99efdb151e02d745",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-15T10:07:21.899Z"),
  "updatedAt": ISODate("2017-03-15T10:07:21.899Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c9ed3e568a2f86524fb4b5"),
  "account_id": NumberInt(134435319),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "YQ603",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"48909B49-B42F-48F9-A2FF-441E271F35FF\"}",
    "telco": "T-Mobile",
    "manufacturer": "smartisan",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "brand": "SMARTISAN",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "980323",
    "app": "10000",
    "token": "daef6232c674b1601f088ef0ba8d7931",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T01:41:18.287Z"),
  "updatedAt": ISODate("2017-03-16T01:41:18.287Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c9ee4a568a2f86524fb4b8"),
  "account_id": NumberInt(560708617),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ASUS_T00J",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
    "lang": "vi",
    "ip_user": "10.0.2.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"35CBFB72-96C2-4FE4-8E24-0653E87DA7C9\"}",
    "telco": "Vodafone.de",
    "manufacturer": "asus",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "brand": "asus",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "997031",
    "app": "10000",
    "token": "7c3327439652c086632b6e6a6d4a4175",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T01:45:46.827Z"),
  "updatedAt": ISODate("2017-03-16T01:45:46.827Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58c9f281568a2f86524fb4ba"),
  "account_id": NumberInt(134435319),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "YQ603",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"48909B49-B42F-48F9-A2FF-441E271F35FF\"}",
    "telco": "T-Mobile",
    "manufacturer": "smartisan",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "brand": "SMARTISAN",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "496289",
    "app": "10000",
    "token": "1d3b0550e04defaccc6e743d0f4ae560",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T02:03:45.272Z"),
  "updatedAt": ISODate("2017-03-16T02:03:45.272Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ca03f6568a2f86524fb4bc"),
  "account_id": NumberInt(134435319),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "YQ603",
    "channel_cfg": "empty",
    "sd": "DC3NcWGjy2KkRMsaLT2QSt7RJuq5eDy93rOn5o9PF6nZ8y5fl5cQW8KSOfaMKkn5u6MkP1fNW0Hyijlsa56DUTCJKlPSYbm4BgLAzLZvFlLMM0OzI9Xyw/1xdx1H5Uyf90AhM7coyc8Bxxpbv9W2DMV11AdFvnrk5RsmvyxjUuni9aQ7QneoaGG6bjae7yHtSvRVJEQdUIP02JLIcCVJcCSXcxBRRgckdPuMB5f7TyWrYhrsKZUTBXaRFEBbLF6RKtr44U8wm7IL9GP6FWk4a0T7CWEjHo6E",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "info": "empty",
    "tracking_info": "{\"google_aid\":\"48909B49-B42F-48F9-A2FF-441E271F35FF\"}",
    "telco": "T-Mobile",
    "manufacturer": "smartisan",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "brand": "SMARTISAN",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "126643",
    "app": "10000",
    "token": "423241a4783294180a1efcd06c8e76d1",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T03:18:14.285Z"),
  "updatedAt": ISODate("2017-03-16T03:18:14.285Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ca0a84568a2f86524fb4c1"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.1.9|Ent|psv_1_file",
    "sd": "DC3NcWGjy2Ir2P2IBDnQ7dhYQgl5WDPvCcjr+/DnRG5BwWbs64dSZ7H8W4NZyS4ymaCp2pOSL3Tyijlsa56DUfN9YMSTcLegeTtMDo9Ip++DzygPhmTcRRDoHUPO/zhHWkW1f0LfnHNMLmG0d+QXicV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbY52jsDcqj+pc7GMX0juq85O3aQ36G5NIscujtV+FPD4PZ9zRK/laJcurPZR8pEzdAIgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "info": "{\"character_id\":\"100001487928735710337\",\"character_name\":\"GOK01\",\"server_id\":\"\"}",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "070490",
    "app": "10000",
    "token": "4e8b4f2ffce815ef3570dfe1296ee6e9",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T03:46:12.464Z"),
  "updatedAt": ISODate("2017-03-16T03:46:12.464Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ca0ac3568a2f86524fb4c3"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "org.hcg.IF",
    "sdk_version": "1.0.0.2_20170213",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "055343",
    "app": "10000",
    "token": "8d8b0bd5bbb4f764b724ec3934ce26f6",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T03:47:15.254Z"),
  "updatedAt": ISODate("2017-03-16T03:47:15.254Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ca2d40568a2f86524fb4d4"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "org.hcg.IF",
    "sdk_version": "1.0.0.2_20170213",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "157316",
    "app": "10000",
    "token": "8b30433e328547d260fe7973cc91d314",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T06:14:24.543Z"),
  "updatedAt": ISODate("2017-03-16T06:14:24.543Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ca333d568a2f86524fb4db"),
  "account_id": NumberInt(535239602),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "ZTE V988",
    "channel_cfg": "3|pp|1.0|GP|psv_4_store",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "62b5a12864f0d67447dadc359990a53f5f3b6964",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"0\"}",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "AMOI",
    "channel": "empty",
    "type": "device",
    "google_aid": "0",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "876784",
    "app": "10001",
    "token": "3c297130bdbea425aac6f51f965fc3a4",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T06:39:57.909Z"),
  "updatedAt": ISODate("2017-03-16T06:39:57.909Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ca41bc568a2f86524fb4e4"),
  "account_id": NumberInt(560708617),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ASUS_T00J",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "org.hcg.IF",
    "sdk_version": "1.0.0.2_20170213",
    "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
    "lang": "vi",
    "ip_user": "10.0.2.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"35CBFB72-96C2-4FE4-8E24-0653E87DA7C9\"}",
    "telco": "Vodafone.de",
    "manufacturer": "asus",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "brand": "asus",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "325850",
    "app": "10000",
    "token": "cb61c62a61742a762731c2b57e6c4150",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ASUS_T00J Build/KVT49L)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T07:41:48.744Z"),
  "updatedAt": ISODate("2017-03-16T07:41:48.744Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ca6437568a2f86524fb4ee"),
  "account_id": NumberInt(266425902),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"7895F106-F314-4741-90A7-2C384ED1FF33\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1488906203000-2458916\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"7895F106-F314-4741-90A7-2C384ED1FF33\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "859314",
    "app": "10000",
    "cookie": "sails.sid=s%3A9cWvdqyJUvlA_lGaOtet8OPXHb9h68_2.Tkgn7T4aIv4z6MEtgBWi9h2H9aTHUlRrdRDQUG3UCZ8",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "f1459621d06b3cbb6ac4cdb958996720",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T10:08:55.810Z"),
  "updatedAt": ISODate("2017-03-16T10:08:55.810Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ca6550568a2f86524fb4f0"),
  "account_id": NumberInt(266425902),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"7895F106-F314-4741-90A7-2C384ED1FF33\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1488906203000-2458916\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"7895F106-F314-4741-90A7-2C384ED1FF33\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "025718",
    "app": "10000",
    "cookie": "sails.sid=s%3Awr96JJnd9i2nmLC8UIe9bGKxkUSQQNRi.klBtAK7lkr0q3kMz2WQbRnIoNIX6BBiqOQTdxgUT%2Bd4",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "3ade326cf1e0526d0639dae8692c0358",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T10:13:36.130Z"),
  "updatedAt": ISODate("2017-03-16T10:13:36.130Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ca7fc4568a2f86524fb4f4"),
  "account_id": NumberInt(662143003),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "SM-G3812",
    "channel_cfg": "3|pp|1.0|GP|psv_4_store",
    "sd": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "4487e5dd52b3e5721878b4f3a05221e715b484a9",
    "lang": "vi",
    "password": "1ab762649cb0e46a7c054739c1b0660c",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"172EA3A5-F05C-4C89-84D3-DECD44CFB80B\"}",
    "telco": "T-Mobile",
    "email": "nguyentg10@gmail.com",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SM-G3812 Build/KOT49H)",
    "brand": "samsung",
    "account": "1030003710",
    "channel": "empty",
    "google_aid": "172EA3A5-F05C-4C89-84D3-DECD44CFB80B",
    "ip": {
      "user": "172.16.152.15",
      "public": "58.186.246.224"
    },
    "ip_public": "58.186.246.224"
  },
  "header": {
    "x-forwarded-for": "58.186.246.224",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "320013",
    "app": "10001",
    "token": "f05a16c19ace03fc358cdbd04b32e77f",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; SM-G3812 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T12:06:28.909Z"),
  "updatedAt": ISODate("2017-03-16T12:06:28.909Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58ca9f03568a2f86524fb4f6"),
  "account_id": NumberInt(187893547),
  "params": {
    "manufacturer": "samsung",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "dec6e2bfd653615598cdbe295c1488d62186ca14",
    "brand": "samsung",
    "model": "SM-J7109",
    "telco": "VN Mobifone",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"3C8B8D69-7697-4FBB-8396-24E1A29596C7\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J7109 Build/MMB29M)",
    "ip_user": "192.168.0.103",
    "ip_public": "118.69.119.139"
  },
  "header": {
    "x-forwarded-for": "118.69.119.139",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "322755",
    "app": "10001",
    "token": "f461ff7fa8163084eab402f7acc8c2ce",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J7109 Build/MMB29M)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-16T14:19:47.39Z"),
  "updatedAt": ISODate("2017-03-16T14:19:47.39Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cb3ef9568a2f86524fb4f9"),
  "account_id": NumberInt(768894069),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "org.hcg.IF",
    "sdk_version": "1.0.0.2_20170213",
    "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "355409",
    "app": "10000",
    "token": "f63e1c3956e554de1c0be2aba67761ac",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-17T01:42:17.295Z"),
  "updatedAt": ISODate("2017-03-17T01:42:17.295Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cb78a9568a2f86524fb4ff"),
  "account_id": NumberInt(266425902),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "10.7.3.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"7895F106-F314-4741-90A7-2C384ED1FF33\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1488906203000-2458916\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"7895F106-F314-4741-90A7-2C384ED1FF33\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "{\"character_id\":\"100001487928694906212\",\"character_name\":\"Empire0641\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "363647",
    "app": "10000",
    "cookie": "sails.sid=s%3Av6hFk4kg85H1UaPq28hdqBrUkeAO-jdV.1jVWeVk%2BnNj%2BEWDHJiwtC3AVviSgaMq0ck5jSJ2xPbM",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "ed30abd61205e46ecb13f4a9f12b2fc6",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-17T05:48:25.787Z"),
  "updatedAt": ISODate("2017-03-17T05:48:25.787Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cc9e54568a2f86524fb504"),
  "account_id": NumberInt(299389352),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "device_id": "14caeff4f25ef9718bcc68f79443cb2edd6e699f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "type": "device",
    "google_aid": "45813BE4-5B06-49D3-9ADC-EC92A9098393",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "069166",
    "app": "10000",
    "token": "3ab8dce5a6a6c68f4b9717b0b7eb6596",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-18T02:41:24.699Z"),
  "updatedAt": ISODate("2017-03-18T02:41:24.699Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cc9f08568a2f86524fb507"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "10.7.3.184",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "096709",
    "app": "10000",
    "token": "88a36bce5e30696ddd39705933882880",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-18T02:44:24.193Z"),
  "updatedAt": ISODate("2017-03-18T02:44:24.193Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cf3b22568a2f86524fb50e"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "10.7.3.184",
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "860550",
    "app": "10000",
    "token": "592023a7eb101fcb9b06ca20fa8d31a4",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-20T02:14:58.179Z"),
  "updatedAt": ISODate("2017-03-20T02:14:58.179Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cf3f7c568a2f86524fb513"),
  "account_id": NumberInt(496791534),
  "params": {
    "app": "10001",
    "platform": "android",
    "model": "SM-G3818",
    "channel_cfg": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sd": "empty",
    "sdk_version": "1.0.0.4_20170316",
    "device_id": "66c1e3d4582377cca556b310f6b7e189e005e045",
    "lang": "vi",
    "version": "1.0",
    "ip_user": "10.0.3.15",
    "telco": "CHINA MOBILE",
    "tracking_info": "{\"google_aid\":\"064757D8-297E-4152-916E-97BE650E7B67\"}",
    "manufacturer": "samsung",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "brand": "samsung",
    "channel": "empty",
    "type": "device",
    "google_aid": "064757D8-297E-4152-916E-97BE650E7B67",
    "ip": {
      "user": "10.0.3.15",
      "public": "115.78.161.88"
    },
    "ip_public": "115.78.161.88"
  },
  "header": {
    "x-forwarded-for": "115.78.161.88",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "178091",
    "app": "10001",
    "token": "29d1914a370eb59ef6b43c6a8cfcff7a",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.2.2; Droid4X-WIN Build/JDQ39E)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-20T02:33:32.404Z"),
  "updatedAt": ISODate("2017-03-20T02:33:32.404Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cf4000568a2f86524fb516"),
  "account_id": NumberInt(365513464),
  "params": {
    "manufacturer": "Xiaomi",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
    "brand": "Xiaomi",
    "model": "Mi-4c",
    "telco": "VIETTEL",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"D78AA261-6BEB-4FE2-B62E-4E271C3F27F5\",\"pixel\":{\"device_id\":\"2c8676fc7a23a228a2999e380fc2f66c4655a4d5\",\"track_id\":\"2c8676fc7a23a228a2999e380fc2f66c4655a4d5_1489977326699\"}}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "ip_user": "10.8.8.120",
    "ip_public": "171.253.29.4"
  },
  "header": {
    "x-forwarded-for": "171.253.29.4",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "119787",
    "app": "10001",
    "token": "6f0531ac7265580c3d0cf120debe9c4c",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; Mi-4c MIUI/6.8.11)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-20T02:35:44.418Z"),
  "updatedAt": ISODate("2017-03-20T02:35:44.418Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cf4b53568a2f86524fb51f"),
  "account_id": NumberInt(180190237),
  "params": {
    "manufacturer": "samsung",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "23094ddbb07ab715df0d4430fdb079164f5acb50",
    "brand": "samsung",
    "model": "SM-T805",
    "telco": "empty",
    "channel_cfg": "3|pp|1.0|GP|psv_4_store",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9592072E-F895-4166-B1ED-0FF306EFC3DB\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
    "ip_user": "10.7.1.119",
    "type": "device",
    "google_aid": "9592072E-F895-4166-B1ED-0FF306EFC3DB",
    "ip": {
      "user": "10.7.1.119",
      "public": "118.69.76.212"
    },
    "ip_public": "118.69.76.212"
  },
  "header": {
    "x-forwarded-for": "118.69.76.212",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "226909",
    "app": "10001",
    "token": "6ae863e35b9c1e637bea95402495470a",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-20T03:24:03.602Z"),
  "updatedAt": ISODate("2017-03-20T03:24:03.602Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cf4bc5568a2f86524fb521"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "3|pp|1.0|GP|psv_4_store",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "fe80::c875:60ff:fea9:6c68%dummy0",
    "ip_public": "113.185.26.35"
  },
  "header": {
    "x-forwarded-for": "113.185.26.35",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "366978",
    "app": "10001",
    "token": "f311e9261987ec042e1ad51c1ceadd8c",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-20T03:25:57.491Z"),
  "updatedAt": ISODate("2017-03-20T03:25:57.491Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cf4f00568a2f86524fb52b"),
  "account_id": NumberInt(180190237),
  "params": {
    "manufacturer": "samsung",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "23094ddbb07ab715df0d4430fdb079164f5acb50",
    "brand": "samsung",
    "model": "SM-T805",
    "telco": "VN MobiFone",
    "channel_cfg": "3|pp|1.0|GP|psv_4_store",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9592072E-F895-4166-B1ED-0FF306EFC3DB\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
    "ip_user": "10.236.188.35",
    "ip_public": "103.199.37.65"
  },
  "header": {
    "x-forwarded-for": "103.199.37.65",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "172349",
    "app": "10001",
    "token": "57dc751d23ac3bdcf8f9afebc3063403",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-20T03:39:44.395Z"),
  "updatedAt": ISODate("2017-03-20T03:39:44.395Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cf5418568a2f86524fb52e"),
  "account_id": NumberInt(180190237),
  "params": {
    "manufacturer": "samsung",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "23094ddbb07ab715df0d4430fdb079164f5acb50",
    "brand": "samsung",
    "model": "SM-T805",
    "telco": "VN MobiFone",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9592072E-F895-4166-B1ED-0FF306EFC3DB\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
    "ip_user": "10.237.190.205",
    "ip_public": "103.199.37.67"
  },
  "header": {
    "x-forwarded-for": "103.199.37.67",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "874474",
    "app": "10000",
    "token": "3842c1cbc78285bb0c86145ea85ea012",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-20T04:01:28.909Z"),
  "updatedAt": ISODate("2017-03-20T04:01:28.909Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cf54d8568a2f86524fb530"),
  "account_id": NumberInt(180190237),
  "params": {
    "manufacturer": "samsung",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "DC3NcWGjy2LaYtIbeyGYLb0aSC9zKdHrO1OJw3A7u2ZAE0v1o6iF7AkULq3DxxmQMovd6+7Vm13yijlsa56DUd8OJf4zdAwqsEDr/5L2lsyqE17xT+sjhb2TuXssuNLgYd6eqOUNrxAKjXwmnMb7wsV11AdFvnrk/qooeoJwAipX9aObEYxYpMBV6ttZvqbYIQCTM5gjmO4CksW4KqQIUzLL5Uy4P2wyy8MTn2r33VHDV/CGHtKL3LE0BjrAe881IgLs3so7SPo01R0/WFH/9kXeK+aeirST",
    "app": "10000",
    "info": "{\"character_id\":\"100001489982489143046\",\"character_name\":\"nghia.fpt.hcm\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "23094ddbb07ab715df0d4430fdb079164f5acb50",
    "brand": "samsung",
    "model": "SM-T805",
    "telco": "VN MobiFone",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"9592072E-F895-4166-B1ED-0FF306EFC3DB\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
    "ip_user": "10.237.190.205",
    "ip_public": "103.199.37.67"
  },
  "header": {
    "x-forwarded-for": "103.199.37.67",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "243018",
    "app": "10000",
    "token": "a76896e29c2bd1365367b312a532eeaa",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; SM-T805 Build/LRX22G)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-20T04:04:40.141Z"),
  "updatedAt": ISODate("2017-03-20T04:04:40.141Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58cf64e1568a2f86524fb53b"),
  "account_id": NumberInt(284138741),
  "params": {
    "account": "1030003711",
    "email": "nguyentg11@gmail.com",
    "password": "1ab762649cb0e46a7c054739c1b0660c",
    "manufacturer": "Sony",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "3|pp|1.0|GP|psv_4_store",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "fe80::c875:60ff:fea9:6c68%dummy0",
    "google_aid": "70DBDEA7-D290-49BB-A798-EE00FCB4D782",
    "ip": {
      "user": "fe80::c875:60ff:fea9:6c68%dummy0",
      "public": "113.185.26.253"
    },
    "ip_public": "113.185.26.253"
  },
  "header": {
    "x-forwarded-for": "113.185.26.253",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "337823",
    "app": "10001",
    "token": "7397e1427a88b4b8a53167974bfbfb79",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-20T05:13:05.962Z"),
  "updatedAt": ISODate("2017-03-20T05:13:05.962Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d08679568a2f86524fb546"),
  "account_id": NumberInt(134435319),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "YQ603",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "net.dxplayone.app",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"48909B49-B42F-48F9-A2FF-441E271F35FF\"}",
    "telco": "T-Mobile",
    "manufacturer": "smartisan",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "brand": "SMARTISAN",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "307479",
    "app": "10000",
    "token": "d386040d92bdb87c757820ebe259e450",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-21T01:48:41.284Z"),
  "updatedAt": ISODate("2017-03-21T01:48:41.284Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d093de568a2f86524fb54a"),
  "account_id": NumberInt(299389352),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "ZTE B2015",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "device_id": "14caeff4f25ef9718bcc68f79443cb2edd6e699f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "264668",
    "app": "10000",
    "token": "407890993cc2783ccab4cf283294ac82",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-21T02:45:50.566Z"),
  "updatedAt": ISODate("2017-03-21T02:45:50.566Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d0a224568a2f86524fb553"),
  "account_id": NumberInt(861346265),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "YQ603",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "device_id": "65251d5b93c829e03961b2804f4e2ad05312cb20",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"pixel\":{\"track_id\":\"65251d5b93c829e03961b2804f4e2ad05312cb20_1490067983734\",\"device_id\":\"65251d5b93c829e03961b2804f4e2ad05312cb20\"},\"google_aid\":\"48909B49-B42F-48F9-A2FF-441E271F35FF\"}",
    "telco": "T-Mobile",
    "manufacturer": "smartisan",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "brand": "SMARTISAN",
    "channel": "empty",
    "type": "device",
    "google_aid": "48909B49-B42F-48F9-A2FF-441E271F35FF",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.134"
    },
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "146477",
    "app": "10001",
    "token": "6cb95553ff763ca8559f18cb515add10",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-21T03:46:44.98Z"),
  "updatedAt": ISODate("2017-03-21T03:46:44.98Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d0ca3a568a2f86524fb557"),
  "account_id": NumberInt(134435319),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "YQ603",
    "channel_cfg": "empty",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.2_20170213",
    "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"48909B49-B42F-48F9-A2FF-441E271F35FF\"}",
    "telco": "T-Mobile",
    "manufacturer": "smartisan",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "brand": "SMARTISAN",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "030834",
    "app": "10000",
    "token": "627a8fa14f828113d1f4bd0db76803f2",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; YQ603 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-21T06:37:46.703Z"),
  "updatedAt": ISODate("2017-03-21T06:37:46.703Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d0d1e9568a2f86524fb55c"),
  "account_id": NumberInt(299389352),
  "params": {
    "platform": "android",
    "app": "10001",
    "model": "ZTE B2015",
    "channel_cfg": "1|pp|1.0|Ent|psv_1_file",
    "sd": "empty",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.1.20161227",
    "device_id": "14caeff4f25ef9718bcc68f79443cb2edd6e699f",
    "lang": "vi",
    "ip_user": "172.16.152.15",
    "version": "1.0",
    "tracking_info": "{\"google_aid\":\"45813BE4-5B06-49D3-9ADC-EC92A9098393\"}",
    "telco": "T-Mobile",
    "manufacturer": "ZTE",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "brand": "ZTE",
    "channel": "empty",
    "ip_public": "115.78.161.134"
  },
  "header": {
    "x-forwarded-for": "115.78.161.134",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "394882",
    "app": "10001",
    "token": "2fe9220fabcc48d3d70d766e15d64807",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; ZTE B2015 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-21T07:10:33.716Z"),
  "updatedAt": ISODate("2017-03-21T07:10:33.716Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d0d4f1568a2f86524fb55f"),
  "account_id": NumberInt(405632381),
  "params": {
    "manufacturer": "samsung",
    "package_name": "org.hcg.IF",
    "sdk_version": "1.0.0.2_20170213",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "3b96c6e82456c6fb8a33fa513aaffea5a9f3ba95",
    "brand": "samsung",
    "model": "SM-T705",
    "telco": "empty",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"EE025A2D-3FBE-4A67-8541-15AA48933201\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-T705 Build/MMB29K)",
    "ip_user": "10.7.2.56",
    "ip_public": "115.78.161.124"
  },
  "header": {
    "x-forwarded-for": "115.78.161.124",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "721315",
    "app": "10000",
    "token": "1f6804539d5f418d2573b5b78dae2db9",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-T705 Build/MMB29K)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-21T07:23:29.156Z"),
  "updatedAt": ISODate("2017-03-21T07:23:29.156Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d0da09568a2f86524fb564"),
  "account_id": NumberInt(187893547),
  "params": {
    "manufacturer": "samsung",
    "package_name": "org.hcg.IF",
    "sdk_version": "1.0.0.2_20170213",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "dec6e2bfd653615598cdbe295c1488d62186ca14",
    "brand": "samsung",
    "model": "SM-J7109",
    "telco": "VN Mobifone",
    "channel_cfg": "empty",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"3C8B8D69-7697-4FBB-8396-24E1A29596C7\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J7109 Build/MMB29M)",
    "ip_user": "10.7.1.60",
    "ip_public": "115.78.161.124"
  },
  "header": {
    "x-forwarded-for": "115.78.161.124",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "097977",
    "app": "10000",
    "token": "2c24aac61ca06c48b45af6149f04154d",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J7109 Build/MMB29M)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-21T07:45:13.830Z"),
  "updatedAt": ISODate("2017-03-21T07:45:13.830Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d0e6ff568a2f86524fb56b"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn5zwDPiRvvr6jUWBjxK27/pqx79D4vCIPKI82KWPPqy++IMRJ17EgA/VgVdghZzxJkf/4rT555VBZhugI4ehjn7ELB3HQ2AppvuDY6pQhAjjuXICE4MNOCFh+/W6pNOC0uDof2rwYJjm1exGhk3wIRiYX+UIf21HndOP6k4tqcEoXbmYIfAbGBzSdZxMRxbS5ASmszYUwKOH",
    "app": "10001",
    "info": "empty",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "fe80::c875:60ff:fea9:6c68%dummy0",
    "ip_public": "113.185.22.1"
  },
  "header": {
    "x-forwarded-for": "113.185.22.1",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "131850",
    "app": "10001",
    "token": "8bf6ed5d2ddca06dc5dcbb38a885b5da",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-21T08:40:31.639Z"),
  "updatedAt": ISODate("2017-03-21T08:40:31.639Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d1cfae568a2f86524fb573"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "10.7.3.184",
    "ip_public": "115.78.161.124"
  },
  "header": {
    "x-forwarded-for": "115.78.161.124",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "434252",
    "app": "10000",
    "token": "76d8087aafdf2943dd46251991a10258",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-22T01:13:18.599Z"),
  "updatedAt": ISODate("2017-03-22T01:13:18.599Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d1d783568a2f86524fb576"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "CeGVJegTW0h6S1o8DRBatFSO3PjLTd2C8VczyO1ke0VQWKvAv6EfMsLF/tylavpE90eP7vjo7aCoUCCLTghpn5zwDPiRvvr6jUWBjxK27/pqx79D4vCIPKI82KWPPqy++IMRJ17EgA/VgVdghZzxJkf/4rT555VBZhugI4ehjn7ELB3HQ2AppvuDY6pQhAjjuXICE4MNOCFh+/W6pNOC0uDof2rwYJjm1exGhk3wIRiYX+UIf21HndOP6k4tqcEoXbmYIfAbGBzSdZxMRxbS5ASmszYUwKOH",
    "app": "10001",
    "info": "{\"character_id\":\"37\",\"character_name\":\"DP01\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "empty",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\",\"pixel\":{\"device_id\":\"e5f2f26817d1717fa19573e7cf42acb3b42bdec0\",\"track_id\":\"e5f2f26817d1717fa19573e7cf42acb3b42bdec0_1490145794739\"}}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "fe80::c875:60ff:fea9:6c68%dummy0",
    "ip_public": "113.185.26.82"
  },
  "header": {
    "x-forwarded-for": "113.185.26.82",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "544281",
    "app": "10001",
    "token": "8f677989714e028468af107891618a07",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-22T01:46:43.216Z"),
  "updatedAt": ISODate("2017-03-22T01:46:43.216Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d1d9ee568a2f86524fb57d"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "DC3NcWGjy2LaYtIbeyGYLb0aSC9zKdHrO1OJw3A7u2ZAE0v1o6iF7AkULq3DxxmQMovd6+7Vm13yijlsa56DUaxtHMC6dXaeOv+8V9QpudDp0ktjBUXSFOez/Y6k9EsRFX6WEUJyZBTIcPJ2FUoArsV11AdFvnrk/qooeoJwAio/qTYvproS6sgAI6kJ7VFA/MeEKPbl76+GKgbF6BiZSntvLUoqCD+CAKZNK45LBGbtO3h5AP16AgCHoN3LjI3CaFR86JXqd2A/XjEaXsQrH+N4paDQhWKW",
    "app": "10000",
    "info": "{\"character_id\":\"100001487928694906212\",\"character_name\":\"Empire081\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "fe80::c875:60ff:fea9:6c68%dummy0",
    "ip_public": "113.185.26.82"
  },
  "header": {
    "x-forwarded-for": "113.185.26.82",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "791634",
    "app": "10000",
    "token": "94f65cc9757350e5fc095c7cc3c0ee1d",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-22T01:57:02.47Z"),
  "updatedAt": ISODate("2017-03-22T01:57:02.47Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d1df75568a2f86524fb580"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "DC3NcWGjy2LaYtIbeyGYLb0aSC9zKdHrO1OJw3A7u2ZAE0v1o6iF7AkULq3DxxmQMovd6+7Vm13yijlsa56DUaxtHMC6dXaeOv+8V9QpudDp0ktjBUXSFOez/Y6k9EsRFX6WEUJyZBTIcPJ2FUoArsV11AdFvnrk/qooeoJwAio/qTYvproS6sgAI6kJ7VFA/MeEKPbl76+GKgbF6BiZSntvLUoqCD+CAKZNK45LBGbtO3h5AP16AgCHoN3LjI3CaFR86JXqd2A/XjEaXsQrH+N4paDQhWKW",
    "app": "10000",
    "info": "{\"character_id\":\"100001487928694906212\",\"character_name\":\"GOK001\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "fe80::c875:60ff:fea9:6c68%dummy0",
    "ip_public": "113.185.26.208"
  },
  "header": {
    "x-forwarded-for": "113.185.26.208",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "727161",
    "app": "10000",
    "token": "ced931ce5fb76656239bb50d5f3159e2",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-22T02:20:37.679Z"),
  "updatedAt": ISODate("2017-03-22T02:20:37.679Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d1e0d3568a2f86524fb583"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "DC3NcWGjy2LaYtIbeyGYLb0aSC9zKdHrO1OJw3A7u2ZAE0v1o6iF7AkULq3DxxmQMovd6+7Vm13yijlsa56DUaxtHMC6dXaeOv+8V9QpudDp0ktjBUXSFOez/Y6k9EsRFX6WEUJyZBTIcPJ2FUoArsV11AdFvnrk/qooeoJwAio/qTYvproS6sgAI6kJ7VFA/MeEKPbl76+GKgbF6BiZSntvLUoqCD+CAKZNK45LBGbtO3h5AP16AgCHoN3LjI3CaFR86JXqd2A/XjEaXsQrH+N4paDQhWKW",
    "app": "10000",
    "info": "{\"character_id\":\"100001487928694906212\",\"character_name\":\"GOK001\",\"server_id\":\"1\"}",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "fe80::c875:60ff:fea9:6c68%dummy0",
    "ip_public": "113.185.26.208"
  },
  "header": {
    "x-forwarded-for": "113.185.26.208",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "845456",
    "app": "10000",
    "token": "a3c9b3e001cddf22a4dd44a94dbd58d5",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-22T02:26:27.737Z"),
  "updatedAt": ISODate("2017-03-22T02:26:27.737Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d271d0568a2f86524fb58f"),
  "account_id": NumberInt(266425902),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.1.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"B80B1319-3F0A-44BA-9645-81C3634CF211\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1490112337000-2716675\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"B80B1319-3F0A-44BA-9645-81C3634CF211\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "113.22.183.107"
  },
  "header": {
    "x-forwarded-for": "113.22.183.107",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "908035",
    "app": "10000",
    "cookie": "sails.sid=s%3AqAnQWHhCUcalvFoU9CHkwQFRtxYII9K9.VLqLnrngge5jZHexu4N4jpcUraFDUy2lP7zPdC8mznQ",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "c7be7b79e13b656c03f3bb7883263511",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-22T12:45:04.460Z"),
  "updatedAt": ISODate("2017-03-22T12:45:04.460Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d271eb568a2f86524fb591"),
  "account_id": NumberInt(266425902),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.1.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"B80B1319-3F0A-44BA-9645-81C3634CF211\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1490112337000-2716675\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"B80B1319-3F0A-44BA-9645-81C3634CF211\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "113.22.183.107"
  },
  "header": {
    "x-forwarded-for": "113.22.183.107",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "847039",
    "app": "10000",
    "cookie": "sails.sid=s%3AXe1LsQHKqMUomRpJURMGxV-sp5FrQMPP.9H8I18kVonh28fZWwMvYrJcgPvt2DNIjTSj1TIW64LQ",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "34cff376be58f4487221255175acd39d",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-22T12:45:31.603Z"),
  "updatedAt": ISODate("2017-03-22T12:45:31.603Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d27274568a2f86524fb594"),
  "account_id": NumberInt(266425902),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.1.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"B80B1319-3F0A-44BA-9645-81C3634CF211\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1490112337000-2716675\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"B80B1319-3F0A-44BA-9645-81C3634CF211\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "{\"character_id\":\"100001487928694906212\",\"character_name\":\"Empire0641\",\"server_id\":\"1\"}",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "113.22.183.107"
  },
  "header": {
    "x-forwarded-for": "113.22.183.107",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "984993",
    "app": "10000",
    "cookie": "sails.sid=s%3AfRwgpZTi8DkiQj3UkKk26h5OjyYsrozQ.G2Wr0%2B6aLJu0tJnk1MkVTI5OHYRDi4qFrun8wfgRGpg",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "d44df5888e85628eb97b1ee3c41e082a",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-22T12:47:48.993Z"),
  "updatedAt": ISODate("2017-03-22T12:47:48.993Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d34956568a2f86524fb59a"),
  "account_id": NumberInt(850291276),
  "params": {
    "manufacturer": "OPPO",
    "package_name": "daupha.thuongkhung.volam.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10001",
    "lang": "vi",
    "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
    "brand": "OPPO",
    "model": "F1w",
    "telco": "VN MOBIFONE",
    "channel_cfg": "3|pp|1.0|GP|psv_4_store",
    "version": "1.0",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"605BC9E9-2175-4B68-A5A8-D213CD879EE6\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
    "ip_user": "10.7.2.147",
    "ip_public": "115.78.161.124"
  },
  "header": {
    "x-forwarded-for": "115.78.161.124",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "306628",
    "app": "10001",
    "token": "0e9bdaa9f831e4d74075039cacf00668",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-23T04:04:38.972Z"),
  "updatedAt": ISODate("2017-03-23T04:04:38.972Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d34dbc568a2f86524fb59d"),
  "account_id": NumberInt(850291276),
  "params": {
    "manufacturer": "OPPO",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
    "brand": "OPPO",
    "model": "F1w",
    "telco": "VN MOBIFONE",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"605BC9E9-2175-4B68-A5A8-D213CD879EE6\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
    "ip_user": "fe80::25b5:9032:19ea:9463%rmnet_data0",
    "ip_public": "103.199.49.208"
  },
  "header": {
    "x-forwarded-for": "103.199.49.208",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "308548",
    "app": "10000",
    "token": "0b058efa69b81d29c8c2cc7188846c57",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-23T04:23:24.33Z"),
  "updatedAt": ISODate("2017-03-23T04:23:24.33Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d38852568a2f86524fb5a0"),
  "account_id": NumberInt(850291276),
  "params": {
    "manufacturer": "OPPO",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
    "brand": "OPPO",
    "model": "F1w",
    "telco": "VN MOBIFONE",
    "channel_cfg": "101|ref3727|1.0|GP|psv_4_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"605BC9E9-2175-4B68-A5A8-D213CD879EE6\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
    "ip_user": "fe80::9971:302b:4c5a:3cc5%rmnet_data0",
    "ip_public": "103.199.34.182"
  },
  "header": {
    "x-forwarded-for": "103.199.34.182",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "777663",
    "app": "10000",
    "token": "56365c1bb91d02bebc100b08fcc2d419",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 5.1.1; F1w Build/LMY47V)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-23T08:33:22.481Z"),
  "updatedAt": ISODate("2017-03-23T08:33:22.481Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d4c586568a2f86524fb5a2"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "10.7.3.184",
    "ip_public": "115.78.161.124"
  },
  "header": {
    "x-forwarded-for": "115.78.161.124",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "640114",
    "app": "10000",
    "token": "9abe390b6067437e877d245a30f6dcd3",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-24T07:06:46.74Z"),
  "updatedAt": ISODate("2017-03-24T07:06:46.74Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d4c5bf568a2f86524fb5a4"),
  "account_id": NumberInt(533403062),
  "params": {
    "manufacturer": "Sony",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "sd": "empty",
    "app": "10000",
    "lang": "vi",
    "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
    "brand": "Sony",
    "model": "E5803",
    "telco": "VN VINAPHONE",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "version": "1.1.9",
    "channel": "empty",
    "tracking_info": "{\"google_aid\":\"70DBDEA7-D290-49BB-A798-EE00FCB4D782\"}",
    "platform": "android",
    "user_agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "ip_user": "fe80::c875:60ff:fea9:6c68%dummy0",
    "ip_public": "113.185.22.4"
  },
  "header": {
    "x-forwarded-for": "113.185.22.4",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "135180",
    "app": "10000",
    "token": "82acff09d4a590b4b0e9b57a052022fe",
    "user-agent": "Dalvik/2.1.0 (Linux; U; Android 7.0; E5803 Build/32.3.A.0.376)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-24T07:07:43.260Z"),
  "updatedAt": ISODate("2017-03-24T07:07:43.260Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d4c8c0568a2f86524fb5a8"),
  "account_id": NumberInt(209775808),
  "params": {
    "platform": "android",
    "app": "10000",
    "model": "HTC D820u",
    "channel_cfg": "3|pp|1.1.9|GP|psv_4_store",
    "sd": "empty",
    "package_name": "cok.coc.lord.gok.langgame",
    "sdk_version": "1.0.0.4_20170316",
    "device_id": "f9b349c1867d707127f96d2eb7221b9fefeb2c36",
    "lang": "vi",
    "password": "25d55ad283aa400af464c76d713c07ad",
    "ip_user": "172.16.152.15",
    "version": "1.1.9",
    "tracking_info": "{\"google_aid\":\"9C3E1500-09D1-4C20-A190-3BA52F52CF12\"}",
    "telco": "Viettel Telecom",
    "email": "dnreddevil@gmail.com",
    "manufacturer": "HTC",
    "user_agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "brand": "htc",
    "account": "test0001",
    "channel": "empty",
    "google_aid": "9C3E1500-09D1-4C20-A190-3BA52F52CF12",
    "ip": {
      "user": "172.16.152.15",
      "public": "115.78.161.124"
    },
    "ip_public": "115.78.161.124"
  },
  "header": {
    "x-forwarded-for": "115.78.161.124",
    "host": "graph.addgold.net",
    "connection": "close",
    "otp": "167559",
    "app": "10000",
    "token": "107bc59a17e0a28a0c5fe6bc8b0b0417",
    "user-agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.2; Nexus 6 Build/KOT49H)",
    "accept-encoding": "gzip"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-24T07:20:32.980Z"),
  "updatedAt": ISODate("2017-03-24T07:20:32.980Z")
});
db.getCollection("activity").insert({
  "_id": ObjectId("58d5d3d0568a2f86524fb5ab"),
  "account_id": NumberInt(266425902),
  "params": {
    "version": "1.1.9",
    "channel": "",
    "telco": "empty",
    "ip_user": "192.168.1.123",
    "channel_cfg": "",
    "platform": "ios",
    "app": "10000",
    "package_name": "cok.king.pp1",
    "tracking_info": "{\n  \"pixel\" : {\n    \"track_id\" : \"B80B1319-3F0A-44BA-9645-81C3634CF211\",\n    \"device_id\" : \"0e7442de9cfe22f79b20b7c2514ba974a362428a\"\n  },\n  \"appsflyer_id\" : \"1490112337000-2716675\",\n  \"ios_ifa\" : \"A72B7F9D-5B64-48E4-B340-471DBD1A92C5\",\n  \"ios_ifv\" : \"B80B1319-3F0A-44BA-9645-81C3634CF211\"\n}",
    "lang": "vi",
    "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
    "info": "",
    "user_agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27",
    "model": "iPad4,7",
    "cR": false,
    "ip_public": "58.186.174.113"
  },
  "header": {
    "x-forwarded-for": "58.186.174.113",
    "host": "graph.addgold.net",
    "connection": "close",
    "content-type": "application/x-www-form-urlencoded",
    "otp": "671758",
    "app": "10000",
    "cookie": "sails.sid=s%3AE7CwijJbEmmzt7137C8NCIJl5nnyIQb9.RfJ3pSG53UnWF2T%2BzwTRnpaPsErWVtyUdWnJYJTgbtA",
    "accept": "*/*",
    "user-agent": "Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 | Global SDK 0.0.1 | RAM-970MB + OSVersion-10.2.1 + Model-iPad4,7 + GameVersion-1.1.9",
    "token": "1be4d55bea96394e9f5651b49d1818e4",
    "accept-language": "vi-vn",
    "accept-encoding": "gzip, deflate"
  },
  "type": "reg",
  "createdAt": ISODate("2017-03-25T02:20:00.895Z"),
  "updatedAt": ISODate("2017-03-25T02:20:00.895Z")
});

/** app records **/
db.getCollection("app").insert({
  "_id": ObjectId("5859f0253e3a7765088b4567"),
  "app": "10000",
  "description": "PP1",
  "service_id": "10000",
  "target_age": "18",
  "private_key": "2K4ZRMSYM3W3D4YY"
});
db.getCollection("app").insert({
  "_id": ObjectId("5859f0813e3a776b088b4567"),
  "app": "10001",
  "description": "PP2",
  "service_id": "10001",
  "target_age": "18",
  "private_key": "2K4ZRMSYM3W3K4AY"
});
db.getCollection("app").insert({
  "_id": ObjectId("5875b7833e3a77f7098b4567"),
  "app": "10003",
  "description": "Lang Game",
  "service_id": "10003",
  "target_age": "18",
  "private_key": "RMKZRMSYM3W3KYTX"
});
db.getCollection("app").insert({
  "_id": ObjectId("58a529963e3a77f2098b4567"),
  "app": "10004",
  "description": "Long Mon",
  "service_id": "10004",
  "target_age": "18",
  "private_key": "LONGRMSYM3W3KMON"
});

/** msi_service_10000 records **/
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("585bbba80003bd3f1452e77e"),
  "account_id": NumberInt(469086595),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001482406824524643",
  "createdAt": ISODate("2016-12-22T11:40:24.22Z"),
  "updatedAt": ISODate("2016-12-23T10:28:21.655Z"),
  "last_login": ISODate("2016-12-23T10:28:21.654Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("585bdc8c0003bd3f1452e783"),
  "account_id": NumberInt(825614777),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001482415244549336",
  "createdAt": ISODate("2016-12-22T14:00:44.262Z"),
  "updatedAt": ISODate("2017-03-16T01:53:20.623Z"),
  "last_login": ISODate("2017-03-16T01:53:20.623Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("585cad97bbe8dcfc215dced6"),
  "account_id": NumberInt(527736287),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001482468760283217",
  "createdAt": ISODate("2016-12-23T04:52:39.853Z"),
  "updatedAt": ISODate("2016-12-26T02:42:51.616Z"),
  "last_login": ISODate("2016-12-26T02:42:51.615Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("585cd166bbe8dcfc215dcedb"),
  "account_id": NumberInt(310711758),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001482477926982599",
  "createdAt": ISODate("2016-12-23T07:25:26.318Z"),
  "updatedAt": ISODate("2016-12-23T07:51:38.136Z"),
  "last_login": ISODate("2016-12-23T07:51:38.135Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("585cd5b83d1d271524771b61"),
  "account_id": NumberInt(304211009),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001482479032106492",
  "createdAt": ISODate("2016-12-23T07:43:52.265Z"),
  "updatedAt": ISODate("2016-12-23T07:43:52.265Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("585cd7b6686b2e5b24e7f8e2"),
  "account_id": NumberInt(709404877),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001482479542564863",
  "createdAt": ISODate("2016-12-23T07:52:22.484Z"),
  "updatedAt": ISODate("2016-12-26T02:35:44.339Z"),
  "last_login": ISODate("2016-12-26T02:35:44.337Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("585cfcb9686b2e5b24e7f8ec"),
  "account_id": NumberInt(271593315),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001482489018600938",
  "createdAt": ISODate("2016-12-23T10:30:17.831Z"),
  "updatedAt": ISODate("2017-03-10T10:22:29.763Z"),
  "last_login": ISODate("2017-03-10T10:22:29.762Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("585d0401686b2e5b24e7f8f0"),
  "account_id": NumberInt(914178751),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001482490881279996",
  "createdAt": ISODate("2016-12-23T11:01:21.337Z"),
  "updatedAt": ISODate("2017-03-10T07:54:01.809Z"),
  "last_login": ISODate("2017-03-10T07:54:01.808Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5860867b686b2e5b24e7f8f6"),
  "account_id": NumberInt(641467627),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001482720891278113",
  "createdAt": ISODate("2016-12-26T02:54:51.315Z"),
  "updatedAt": ISODate("2017-01-04T09:26:03.148Z"),
  "last_login": ISODate("2017-01-04T09:26:03.147Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58609a83686b2e5b24e7f908"),
  "account_id": NumberInt(134435319),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001482726020485641",
  "createdAt": ISODate("2016-12-26T04:20:19.622Z"),
  "updatedAt": ISODate("2017-03-21T06:37:46.699Z"),
  "last_login": ISODate("2017-03-21T06:37:46.696Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58609b2a686b2e5b24e7f90d"),
  "account_id": NumberInt(574023869),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001482726186184730",
  "createdAt": ISODate("2016-12-26T04:23:06.443Z"),
  "updatedAt": ISODate("2017-03-10T02:15:32.445Z"),
  "last_login": ISODate("2017-03-10T02:15:32.445Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58609c22686b2e5b24e7f912"),
  "account_id": NumberInt(533469009),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001482726435662633",
  "createdAt": ISODate("2016-12-26T04:27:14.782Z"),
  "updatedAt": ISODate("2016-12-26T04:27:14.789Z"),
  "last_login": ISODate("2016-12-26T04:27:14.789Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5860c2c6686b2e5b24e7f919"),
  "account_id": NumberInt(171415393),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001482736326113793",
  "createdAt": ISODate("2016-12-26T07:12:06.73Z"),
  "updatedAt": ISODate("2016-12-26T09:01:53.833Z"),
  "last_login": ISODate("2016-12-26T09:01:53.831Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5860ce50686b2e5b24e7f927"),
  "account_id": NumberInt(714068092),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001482739280862441",
  "createdAt": ISODate("2016-12-26T08:01:20.404Z"),
  "updatedAt": ISODate("2017-01-03T02:44:40.897Z"),
  "last_login": ISODate("2017-01-03T02:44:40.890Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("586dd58a7a5d056409d02a28"),
  "account_id": NumberInt(629935977),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001483593099876734",
  "createdAt": ISODate("2017-01-05T05:11:38.593Z"),
  "updatedAt": ISODate("2017-02-28T08:54:47.289Z"),
  "last_login": ISODate("2017-02-28T08:54:47.289Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("586f64c07a5d056409d02a53"),
  "account_id": NumberInt(674529448),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001483695296870983",
  "createdAt": ISODate("2017-01-06T09:34:56.462Z"),
  "updatedAt": ISODate("2017-01-31T12:42:22.968Z"),
  "last_login": ISODate("2017-01-31T12:42:22.961Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("586f84ac7a5d056409d02a59"),
  "account_id": NumberInt(900669215),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001483703469749504",
  "createdAt": ISODate("2017-01-06T11:51:08.546Z"),
  "updatedAt": ISODate("2017-02-21T03:46:05.519Z"),
  "last_login": ISODate("2017-02-21T03:46:05.518Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587346d17a5d056409d02a6d"),
  "account_id": NumberInt(664494000),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001483949777558244",
  "createdAt": ISODate("2017-01-09T08:16:17.452Z"),
  "updatedAt": ISODate("2017-03-23T04:30:21.505Z"),
  "last_login": ISODate("2017-03-23T04:30:21.504Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587348627a5d056409d02a71"),
  "account_id": NumberInt(623603900),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001483950178194044",
  "createdAt": ISODate("2017-01-09T08:22:58.481Z"),
  "updatedAt": ISODate("2017-03-20T09:15:32.360Z"),
  "last_login": ISODate("2017-03-20T09:15:32.359Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58748b487a5d056409d02a8c"),
  "account_id": NumberInt(801893030),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001484032840385030",
  "createdAt": ISODate("2017-01-10T07:20:40.38Z"),
  "updatedAt": ISODate("2017-02-27T04:36:05.502Z"),
  "last_login": ISODate("2017-02-27T04:36:05.502Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58748c087a5d056409d02a92"),
  "account_id": NumberInt(622299893),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001484033032496707",
  "createdAt": ISODate("2017-01-10T07:23:52.233Z"),
  "updatedAt": ISODate("2017-03-22T03:17:37.653Z"),
  "last_login": ISODate("2017-03-22T03:17:37.653Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58749fa67a5d056409d02a9a"),
  "account_id": NumberInt(754777018),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001484038055744948",
  "createdAt": ISODate("2017-01-10T08:47:34.910Z"),
  "updatedAt": ISODate("2017-01-10T10:00:28.914Z"),
  "last_login": ISODate("2017-01-10T10:00:28.913Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5874b54c7a5d056409d02aa4"),
  "account_id": NumberInt(603473627),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484043597420787",
  "createdAt": ISODate("2017-01-10T10:19:56.889Z"),
  "updatedAt": ISODate("2017-02-22T07:58:55.504Z"),
  "last_login": ISODate("2017-02-22T07:58:55.504Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5874b7117a5d056409d02aa9"),
  "account_id": NumberInt(325069536),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484044049683481",
  "createdAt": ISODate("2017-01-10T10:27:29.204Z"),
  "updatedAt": ISODate("2017-02-10T02:49:04.223Z"),
  "last_login": ISODate("2017-02-10T02:49:04.220Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5874b9e07a5d056409d02ab2"),
  "account_id": NumberInt(881773336),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484044768276214",
  "createdAt": ISODate("2017-01-10T10:39:28.425Z"),
  "updatedAt": ISODate("2017-02-10T08:32:44.255Z"),
  "last_login": ISODate("2017-02-10T08:32:44.254Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587590c67a5d056409d02ac0"),
  "account_id": NumberInt(333807226),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001484099783363475",
  "createdAt": ISODate("2017-01-11T01:56:22.902Z"),
  "updatedAt": ISODate("2017-02-27T06:53:19.650Z"),
  "last_login": ISODate("2017-02-27T06:53:19.649Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587591577a5d056409d02ac4"),
  "account_id": NumberInt(845597805),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001484099927578611",
  "createdAt": ISODate("2017-01-11T01:58:47.37Z"),
  "updatedAt": ISODate("2017-01-11T01:59:12.161Z"),
  "last_login": ISODate("2017-01-11T01:59:12.160Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587591cf7a5d056409d02acb"),
  "account_id": NumberInt(938824509),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001484100048751979",
  "createdAt": ISODate("2017-01-11T02:00:47.767Z"),
  "updatedAt": ISODate("2017-01-11T04:46:24.780Z"),
  "last_login": ISODate("2017-01-11T04:46:24.779Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5875a7e37a5d056409d02ada"),
  "account_id": NumberInt(413867888),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484105699963969",
  "createdAt": ISODate("2017-01-11T03:34:59.7Z"),
  "updatedAt": ISODate("2017-01-11T03:35:21.600Z"),
  "last_login": ISODate("2017-01-11T03:35:21.599Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5875aa147a5d056409d02ae3"),
  "account_id": NumberInt(236921287),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484106261366146",
  "createdAt": ISODate("2017-01-11T03:44:20.640Z"),
  "updatedAt": ISODate("2017-01-11T04:34:44.309Z"),
  "last_login": ISODate("2017-01-11T04:34:44.308Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5875b0517a5d056409d02aea"),
  "account_id": NumberInt(826337153),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484107858481695",
  "createdAt": ISODate("2017-01-11T04:10:57.604Z"),
  "updatedAt": ISODate("2017-03-16T08:40:58.196Z"),
  "last_login": ISODate("2017-03-16T08:40:58.196Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5875b5bd7a5d056409d02aef"),
  "account_id": NumberInt(541278944),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484109246995657",
  "createdAt": ISODate("2017-01-11T04:34:05.841Z"),
  "updatedAt": ISODate("2017-01-12T03:55:51.923Z"),
  "last_login": ISODate("2017-01-12T03:55:51.923Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5875b6227a5d056409d02af6"),
  "account_id": NumberInt(365513464),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484109347136725",
  "createdAt": ISODate("2017-01-11T04:35:46.790Z"),
  "updatedAt": ISODate("2017-03-08T07:00:47.969Z"),
  "last_login": ISODate("2017-03-08T07:00:47.968Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5875ca7b7a5d056409d02b06"),
  "account_id": NumberInt(358206907),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001484114556460373",
  "createdAt": ISODate("2017-01-11T06:02:35.927Z"),
  "updatedAt": ISODate("2017-01-11T06:02:35.939Z"),
  "last_login": ISODate("2017-01-11T06:02:35.939Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5875e2cf7a5d056409d02b21"),
  "account_id": NumberInt(382786256),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001484120783605775",
  "createdAt": ISODate("2017-01-11T07:46:23.409Z"),
  "updatedAt": ISODate("2017-01-11T07:47:10.811Z"),
  "last_login": ISODate("2017-01-11T07:47:10.811Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5875f10a7a5d056409d02b37"),
  "account_id": NumberInt(426077797),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484124427831923",
  "createdAt": ISODate("2017-01-11T08:47:06.655Z"),
  "updatedAt": ISODate("2017-01-20T06:19:20.731Z"),
  "last_login": ISODate("2017-01-20T06:19:20.729Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58770afb7a5d056409d02b55"),
  "account_id": NumberInt(928328432),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484196603267085",
  "createdAt": ISODate("2017-01-12T04:50:03.31Z"),
  "updatedAt": ISODate("2017-02-27T04:41:26.935Z"),
  "last_login": ISODate("2017-02-27T04:41:26.934Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58784cf17a5d056409d02b75"),
  "account_id": NumberInt(209492665),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484279025404911",
  "createdAt": ISODate("2017-01-13T03:43:45.2Z"),
  "updatedAt": ISODate("2017-03-16T08:31:10.343Z"),
  "last_login": ISODate("2017-03-16T08:31:10.342Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587dce2e7a5d056409d02bd1"),
  "account_id": NumberInt(473360909),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484639791904491",
  "createdAt": ISODate("2017-01-17T07:56:30.997Z"),
  "updatedAt": ISODate("2017-02-08T02:08:48.888Z"),
  "last_login": ISODate("2017-02-08T02:08:48.887Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587ee91a7a5d056409d02bff"),
  "account_id": NumberInt(833957994),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484712218792342",
  "createdAt": ISODate("2017-01-18T04:03:38.86Z"),
  "updatedAt": ISODate("2017-02-22T07:09:46.76Z"),
  "last_login": ISODate("2017-02-22T07:09:46.75Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587ee9387a5d056409d02c03"),
  "account_id": NumberInt(794532413),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484712249733003",
  "createdAt": ISODate("2017-01-18T04:04:08.661Z"),
  "updatedAt": ISODate("2017-01-18T09:42:51.673Z"),
  "last_login": ISODate("2017-01-18T09:42:51.672Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587eeb777a5d056409d02c08"),
  "account_id": NumberInt(837071868),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484712824887651",
  "createdAt": ISODate("2017-01-18T04:13:43.658Z"),
  "updatedAt": ISODate("2017-01-18T09:45:02.594Z"),
  "last_login": ISODate("2017-01-18T09:45:02.594Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587eed797a5d056409d02c0c"),
  "account_id": NumberInt(557100311),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484713338662823",
  "createdAt": ISODate("2017-01-18T04:22:17.740Z"),
  "updatedAt": ISODate("2017-01-18T09:47:35.64Z"),
  "last_login": ISODate("2017-01-18T09:47:35.64Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587eee017a5d056409d02c11"),
  "account_id": NumberInt(317092231),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484713474805783",
  "createdAt": ISODate("2017-01-18T04:24:33.520Z"),
  "updatedAt": ISODate("2017-01-19T02:24:49.74Z"),
  "last_login": ISODate("2017-01-19T02:24:49.74Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587eee287a5d056409d02c15"),
  "account_id": NumberInt(176676877),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484713513952295",
  "createdAt": ISODate("2017-01-18T04:25:12.902Z"),
  "updatedAt": ISODate("2017-01-18T09:49:09.111Z"),
  "last_login": ISODate("2017-01-18T09:49:09.110Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587eef9a7a5d056409d02c19"),
  "account_id": NumberInt(993151346),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484713882804314",
  "createdAt": ISODate("2017-01-18T04:31:22.395Z"),
  "updatedAt": ISODate("2017-01-19T02:27:51.591Z"),
  "last_login": ISODate("2017-01-19T02:27:51.590Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587eefa47a5d056409d02c1d"),
  "account_id": NumberInt(215908852),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484713892543004",
  "createdAt": ISODate("2017-01-18T04:31:32.298Z"),
  "updatedAt": ISODate("2017-01-18T09:50:00.881Z"),
  "last_login": ISODate("2017-01-18T09:50:00.881Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587ef0d87a5d056409d02c21"),
  "account_id": NumberInt(765008541),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484714201414127",
  "createdAt": ISODate("2017-01-18T04:36:40.755Z"),
  "updatedAt": ISODate("2017-01-19T02:28:59.218Z"),
  "last_login": ISODate("2017-01-19T02:28:59.215Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587ef1097a5d056409d02c26"),
  "account_id": NumberInt(242226525),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484714249423636",
  "createdAt": ISODate("2017-01-18T04:37:29.140Z"),
  "updatedAt": ISODate("2017-01-18T09:51:26.175Z"),
  "last_login": ISODate("2017-01-18T09:51:26.175Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587ef76d7a5d056409d02c2b"),
  "account_id": NumberInt(987685642),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484715886131124",
  "createdAt": ISODate("2017-01-18T05:04:45.524Z"),
  "updatedAt": ISODate("2017-01-19T02:29:40.132Z"),
  "last_login": ISODate("2017-01-19T02:29:40.132Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f0caa7a5d056409d02c2f"),
  "account_id": NumberInt(954597658),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484721323622781",
  "createdAt": ISODate("2017-01-18T06:35:22.906Z"),
  "updatedAt": ISODate("2017-01-19T02:31:13.168Z"),
  "last_login": ISODate("2017-01-19T02:31:13.167Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f102fa35c87f925326a44"),
  "account_id": NumberInt(513144128),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722224584924",
  "createdAt": ISODate("2017-01-18T06:50:23.665Z"),
  "updatedAt": ISODate("2017-01-19T02:32:01.817Z"),
  "last_login": ISODate("2017-01-19T02:32:01.816Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f10bb9c2a972926275874"),
  "account_id": NumberInt(608747097),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722363164848",
  "createdAt": ISODate("2017-01-18T06:52:43.257Z"),
  "updatedAt": ISODate("2017-01-18T09:52:32.398Z"),
  "last_login": ISODate("2017-01-18T09:52:32.397Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f10e39c2a972926275878"),
  "account_id": NumberInt(338175191),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722404582462",
  "createdAt": ISODate("2017-01-18T06:53:23.863Z"),
  "updatedAt": ISODate("2017-01-18T09:53:32.282Z"),
  "last_login": ISODate("2017-01-18T09:53:32.281Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f11029c2a97292627587c"),
  "account_id": NumberInt(142785846),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722435387315",
  "createdAt": ISODate("2017-01-18T06:53:54.924Z"),
  "updatedAt": ISODate("2017-01-18T09:54:27.33Z"),
  "last_login": ISODate("2017-01-18T09:54:27.32Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f11339c2a972926275880"),
  "account_id": NumberInt(899870940),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722483379661",
  "createdAt": ISODate("2017-01-18T06:54:43.214Z"),
  "updatedAt": ISODate("2017-01-18T09:55:23.345Z"),
  "last_login": ISODate("2017-01-18T09:55:23.344Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f114f9c2a972926275884"),
  "account_id": NumberInt(368168539),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722512647814",
  "createdAt": ISODate("2017-01-18T06:55:11.674Z"),
  "updatedAt": ISODate("2017-01-18T09:56:33.332Z"),
  "last_login": ISODate("2017-01-18T09:56:33.331Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f11a09c2a972926275888"),
  "account_id": NumberInt(904408219),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722593217808",
  "createdAt": ISODate("2017-01-18T06:56:32.728Z"),
  "updatedAt": ISODate("2017-01-18T09:57:18.74Z"),
  "last_login": ISODate("2017-01-18T09:57:18.73Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f11be9c2a97292627588c"),
  "account_id": NumberInt(194641934),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722622860708",
  "createdAt": ISODate("2017-01-18T06:57:02.91Z"),
  "updatedAt": ISODate("2017-01-19T02:33:17.870Z"),
  "last_login": ISODate("2017-01-19T02:33:17.870Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f11d09c2a972926275890"),
  "account_id": NumberInt(645009632),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722641528321",
  "createdAt": ISODate("2017-01-18T06:57:20.765Z"),
  "updatedAt": ISODate("2017-02-09T10:17:41.577Z"),
  "last_login": ISODate("2017-02-09T10:17:41.575Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f11fd9c2a972926275894"),
  "account_id": NumberInt(226593441),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722686679704",
  "createdAt": ISODate("2017-01-18T06:58:05.898Z"),
  "updatedAt": ISODate("2017-01-18T09:59:05.232Z"),
  "last_login": ISODate("2017-01-18T09:59:05.232Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f12189c2a972926275898"),
  "account_id": NumberInt(960555095),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722712133919",
  "createdAt": ISODate("2017-01-18T06:58:32.415Z"),
  "updatedAt": ISODate("2017-01-18T10:11:17.137Z"),
  "last_login": ISODate("2017-01-18T10:11:17.136Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f12309c2a97292627589c"),
  "account_id": NumberInt(355402171),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722737273806",
  "createdAt": ISODate("2017-01-18T06:58:56.798Z"),
  "updatedAt": ISODate("2017-01-18T10:01:37.814Z"),
  "last_login": ISODate("2017-01-18T10:01:37.814Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f125f9c2a9729262758a0"),
  "account_id": NumberInt(971379233),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722783491454",
  "createdAt": ISODate("2017-01-18T06:59:43.202Z"),
  "updatedAt": ISODate("2017-01-18T10:02:52.196Z"),
  "last_login": ISODate("2017-01-18T10:02:52.195Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f12939c2a9729262758a4"),
  "account_id": NumberInt(703165330),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722836683116",
  "createdAt": ISODate("2017-01-18T07:00:35.562Z"),
  "updatedAt": ISODate("2017-01-18T10:03:53.49Z"),
  "last_login": ISODate("2017-01-18T10:03:53.48Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f12bc9c2a9729262758a8"),
  "account_id": NumberInt(496717410),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722877435777",
  "createdAt": ISODate("2017-01-18T07:01:16.574Z"),
  "updatedAt": ISODate("2017-01-18T10:04:41.824Z"),
  "last_login": ISODate("2017-01-18T10:04:41.823Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f130c9c2a9729262758ac"),
  "account_id": NumberInt(209713169),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484722956115781",
  "createdAt": ISODate("2017-01-18T07:02:36.270Z"),
  "updatedAt": ISODate("2017-01-18T10:05:38.877Z"),
  "last_login": ISODate("2017-01-18T10:05:38.877Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f13399c2a9729262758b0"),
  "account_id": NumberInt(990336139),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723002874488",
  "createdAt": ISODate("2017-01-18T07:03:21.714Z"),
  "updatedAt": ISODate("2017-01-18T10:06:22.809Z"),
  "last_login": ISODate("2017-01-18T10:06:22.808Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f136d9c2a9729262758b4"),
  "account_id": NumberInt(726760790),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723054748443",
  "createdAt": ISODate("2017-01-18T07:04:13.935Z"),
  "updatedAt": ISODate("2017-01-18T10:07:07.868Z"),
  "last_login": ISODate("2017-01-18T10:07:07.867Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f13759c2a9729262758b8"),
  "account_id": NumberInt(854928309),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723061605982",
  "createdAt": ISODate("2017-01-18T07:04:21.382Z"),
  "updatedAt": ISODate("2017-01-19T02:36:35.441Z"),
  "last_login": ISODate("2017-01-19T02:36:35.440Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f13939c2a9729262758bc"),
  "account_id": NumberInt(987907901),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723092840900",
  "createdAt": ISODate("2017-01-18T07:04:51.539Z"),
  "updatedAt": ISODate("2017-01-18T10:07:55.955Z"),
  "last_login": ISODate("2017-01-18T10:07:55.954Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f13a19c2a9729262758c0"),
  "account_id": NumberInt(178480333),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723105728898",
  "createdAt": ISODate("2017-01-18T07:05:05.312Z"),
  "updatedAt": ISODate("2017-02-06T03:20:31.738Z"),
  "last_login": ISODate("2017-02-06T03:20:31.738Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f13ba9c2a9729262758c4"),
  "account_id": NumberInt(109534067),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723131845149",
  "createdAt": ISODate("2017-01-18T07:05:30.658Z"),
  "updatedAt": ISODate("2017-01-18T10:08:48.169Z"),
  "last_login": ISODate("2017-01-18T10:08:48.168Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f13d19c2a9729262758c8"),
  "account_id": NumberInt(812106407),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723153271006",
  "createdAt": ISODate("2017-01-18T07:05:53.271Z"),
  "updatedAt": ISODate("2017-01-19T02:38:00.423Z"),
  "last_login": ISODate("2017-01-19T02:38:00.422Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f13d79c2a9729262758cc"),
  "account_id": NumberInt(264307438),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723159327099",
  "createdAt": ISODate("2017-01-18T07:05:59.165Z"),
  "updatedAt": ISODate("2017-01-18T10:10:19.419Z"),
  "last_login": ISODate("2017-01-18T10:10:19.418Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f14369c2a9729262758d1"),
  "account_id": NumberInt(889796512),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723255169809",
  "createdAt": ISODate("2017-01-18T07:07:34.925Z"),
  "updatedAt": ISODate("2017-02-08T02:29:57.421Z"),
  "last_login": ISODate("2017-02-08T02:29:57.421Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f144f9c2a9729262758d6"),
  "account_id": NumberInt(604542294),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723279511514",
  "createdAt": ISODate("2017-01-18T07:07:59.436Z"),
  "updatedAt": ISODate("2017-01-19T02:40:31.650Z"),
  "last_login": ISODate("2017-01-19T02:40:31.649Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f146b9c2a9729262758db"),
  "account_id": NumberInt(509366294),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723307132343",
  "createdAt": ISODate("2017-01-18T07:08:27.412Z"),
  "updatedAt": ISODate("2017-01-19T02:41:01.328Z"),
  "last_login": ISODate("2017-01-19T02:41:01.328Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f14889c2a9729262758e1"),
  "account_id": NumberInt(922482929),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723336916439",
  "createdAt": ISODate("2017-01-18T07:08:56.236Z"),
  "updatedAt": ISODate("2017-01-19T02:41:50.235Z"),
  "last_login": ISODate("2017-01-19T02:41:50.235Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f14a69c2a9729262758e5"),
  "account_id": NumberInt(722777634),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723366983184",
  "createdAt": ISODate("2017-01-18T07:09:26.71Z"),
  "updatedAt": ISODate("2017-01-19T02:44:52.226Z"),
  "last_login": ISODate("2017-01-19T02:44:52.226Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f14c09c2a9729262758eb"),
  "account_id": NumberInt(294777283),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723392620180",
  "createdAt": ISODate("2017-01-18T07:09:52.496Z"),
  "updatedAt": ISODate("2017-01-19T02:47:31.264Z"),
  "last_login": ISODate("2017-01-19T02:47:31.264Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f14d99c2a9729262758ef"),
  "account_id": NumberInt(765291945),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723417114405",
  "createdAt": ISODate("2017-01-18T07:10:17.468Z"),
  "updatedAt": ISODate("2017-01-19T02:48:11.594Z"),
  "last_login": ISODate("2017-01-19T02:48:11.593Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f14f39c2a9729262758f5"),
  "account_id": NumberInt(713921890),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723443723878",
  "createdAt": ISODate("2017-01-18T07:10:43.381Z"),
  "updatedAt": ISODate("2017-01-19T02:48:50.297Z"),
  "last_login": ISODate("2017-01-19T02:48:50.295Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f150a9c2a9729262758fa"),
  "account_id": NumberInt(483596016),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723467795954",
  "createdAt": ISODate("2017-01-18T07:11:06.949Z"),
  "updatedAt": ISODate("2017-01-19T02:55:15.421Z"),
  "last_login": ISODate("2017-01-19T02:55:15.420Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f15239c2a9729262758ff"),
  "account_id": NumberInt(647519020),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723492910791",
  "createdAt": ISODate("2017-01-18T07:11:31.786Z"),
  "updatedAt": ISODate("2017-01-19T02:56:34.288Z"),
  "last_login": ISODate("2017-01-19T02:56:34.287Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f15499c2a972926275905"),
  "account_id": NumberInt(571640584),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723530486863",
  "createdAt": ISODate("2017-01-18T07:12:09.613Z"),
  "updatedAt": ISODate("2017-01-19T03:01:37.791Z"),
  "last_login": ISODate("2017-01-19T03:01:37.791Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f157e9c2a97292627590b"),
  "account_id": NumberInt(958032415),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723583186445",
  "createdAt": ISODate("2017-01-18T07:13:02.682Z"),
  "updatedAt": ISODate("2017-01-19T03:02:24.714Z"),
  "last_login": ISODate("2017-01-19T03:02:24.714Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f159d9c2a972926275910"),
  "account_id": NumberInt(964683672),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723613982283",
  "createdAt": ISODate("2017-01-18T07:13:33.423Z"),
  "updatedAt": ISODate("2017-01-19T03:02:54.439Z"),
  "last_login": ISODate("2017-01-19T03:02:54.438Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("587f15cd9c2a972926275917"),
  "account_id": NumberInt(304640751),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001484723661922912",
  "createdAt": ISODate("2017-01-18T07:14:21.158Z"),
  "updatedAt": ISODate("2017-02-06T02:29:52.976Z"),
  "last_login": ISODate("2017-02-06T02:29:52.975Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5887cc15974ff98d26afa05e"),
  "account_id": NumberInt(842115965),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001485294614192381",
  "createdAt": ISODate("2017-01-24T21:50:13.899Z"),
  "updatedAt": ISODate("2017-01-24T21:50:13.914Z"),
  "last_login": ISODate("2017-01-24T21:50:13.913Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5897e747974ff98d26afa06c"),
  "account_id": NumberInt(855783386),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001486350151228021",
  "createdAt": ISODate("2017-02-06T03:02:31.357Z"),
  "updatedAt": ISODate("2017-02-06T03:03:04.507Z"),
  "last_login": ISODate("2017-02-06T03:03:04.507Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("5897e7db974ff98d26afa070"),
  "account_id": NumberInt(703732667),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001486350299195463",
  "createdAt": ISODate("2017-02-06T03:04:59.188Z"),
  "updatedAt": ISODate("2017-02-09T02:19:56.960Z"),
  "last_login": ISODate("2017-02-09T02:19:56.960Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("589bdb49974ff98d26afa08d"),
  "account_id": NumberInt(520269142),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001486609226321322",
  "createdAt": ISODate("2017-02-09T03:00:25.835Z"),
  "updatedAt": ISODate("2017-02-09T09:19:58.171Z"),
  "last_login": ISODate("2017-02-09T09:19:58.170Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58a275b2974ff98d26afa0c1"),
  "account_id": NumberInt(362515620),
  "channel": "",
  "platform": "wp",
  "msi_id": "100001487041971644426",
  "createdAt": ISODate("2017-02-14T03:12:50.771Z"),
  "updatedAt": ISODate("2017-02-14T03:17:28.571Z"),
  "last_login": ISODate("2017-02-14T03:17:28.571Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58a276e5974ff98d26afa0c9"),
  "account_id": NumberInt(380454574),
  "channel": "",
  "platform": "wp",
  "msi_id": "100001487042278881314",
  "createdAt": ISODate("2017-02-14T03:17:57.619Z"),
  "updatedAt": ISODate("2017-02-17T02:39:15.199Z"),
  "last_login": ISODate("2017-02-17T02:39:15.199Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58abe817568a2f86524fb187"),
  "account_id": NumberInt(850291276),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001487661079891904",
  "createdAt": ISODate("2017-02-21T07:11:19.453Z"),
  "updatedAt": ISODate("2017-03-24T03:51:56.530Z"),
  "last_login": ISODate("2017-03-24T03:51:56.529Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58abea4f568a2f86524fb18f"),
  "account_id": NumberInt(995530891),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001487661648172292",
  "createdAt": ISODate("2017-02-21T07:20:47.819Z"),
  "updatedAt": ISODate("2017-02-21T08:47:01.635Z"),
  "last_login": ISODate("2017-02-21T08:47:01.634Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58abeac6568a2f86524fb194"),
  "account_id": NumberInt(865298498),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001487661767224178",
  "createdAt": ISODate("2017-02-21T07:22:46.508Z"),
  "updatedAt": ISODate("2017-02-21T07:26:06.643Z"),
  "last_login": ISODate("2017-02-21T07:26:06.642Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58abedb3568a2f86524fb19b"),
  "account_id": NumberInt(734425202),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001487662516873339",
  "createdAt": ISODate("2017-02-21T07:35:15.630Z"),
  "updatedAt": ISODate("2017-03-01T07:46:36.949Z"),
  "last_login": ISODate("2017-03-01T07:46:36.948Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58abef61568a2f86524fb19f"),
  "account_id": NumberInt(580604812),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001487662945844213",
  "createdAt": ISODate("2017-02-21T07:42:25.371Z"),
  "updatedAt": ISODate("2017-02-24T07:44:10.31Z"),
  "last_login": ISODate("2017-02-24T07:44:10.31Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58abefb2568a2f86524fb1a2"),
  "account_id": NumberInt(311919192),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001487663027426379",
  "createdAt": ISODate("2017-02-21T07:43:46.561Z"),
  "updatedAt": ISODate("2017-03-16T10:08:23.196Z"),
  "last_login": ISODate("2017-03-16T10:08:23.196Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58abfb0b568a2f86524fb1ab"),
  "account_id": NumberInt(896801707),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001487665932481022",
  "createdAt": ISODate("2017-02-21T08:32:11.753Z"),
  "updatedAt": ISODate("2017-03-02T02:18:09.365Z"),
  "last_login": ISODate("2017-03-02T02:18:09.364Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58ad10e6568a2f86524fb1ba"),
  "account_id": NumberInt(260409820),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001487737062640802",
  "createdAt": ISODate("2017-02-22T04:17:42.305Z"),
  "updatedAt": ISODate("2017-02-28T10:20:57.354Z"),
  "last_login": ISODate("2017-02-28T10:20:57.354Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58ad377d568a2f86524fb1bd"),
  "account_id": NumberInt(701747494),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001487746942560621",
  "createdAt": ISODate("2017-02-22T07:02:21.510Z"),
  "updatedAt": ISODate("2017-03-09T03:40:47.557Z"),
  "last_login": ISODate("2017-03-09T03:40:47.556Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58ad484a568a2f86524fb1d1"),
  "account_id": NumberInt(497615639),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001487751243196868",
  "createdAt": ISODate("2017-02-22T08:14:02.682Z"),
  "updatedAt": ISODate("2017-03-01T02:30:53.841Z"),
  "last_login": ISODate("2017-03-01T02:30:53.840Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58ad652d568a2f86524fb1d9"),
  "account_id": NumberInt(757576939),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001487758637635303",
  "createdAt": ISODate("2017-02-22T10:17:17.155Z"),
  "updatedAt": ISODate("2017-02-27T07:14:55.714Z"),
  "last_login": ISODate("2017-02-27T07:14:55.713Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58afa0f2568a2f86524fb1f4"),
  "account_id": NumberInt(935931406),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001487905011121951",
  "createdAt": ISODate("2017-02-24T02:56:50.985Z"),
  "updatedAt": ISODate("2017-03-21T03:45:31.852Z"),
  "last_login": ISODate("2017-03-21T03:45:31.851Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58afddf1568a2f86524fb217"),
  "account_id": NumberInt(751859388),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001487920626307058",
  "createdAt": ISODate("2017-02-24T07:17:05.984Z"),
  "updatedAt": ISODate("2017-02-27T04:37:19.189Z"),
  "last_login": ISODate("2017-02-27T04:37:19.188Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58afe4de568a2f86524fb21f"),
  "account_id": NumberInt(560708617),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001487922399864225",
  "createdAt": ISODate("2017-02-24T07:46:38.530Z"),
  "updatedAt": ISODate("2017-03-21T07:04:19.710Z"),
  "last_login": ISODate("2017-03-21T07:04:19.709Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58affd75568a2f86524fb226"),
  "account_id": NumberInt(477637806),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001487928694906212",
  "createdAt": ISODate("2017-02-24T09:31:33.763Z"),
  "updatedAt": ISODate("2017-03-22T12:47:12.396Z"),
  "last_login": ISODate("2017-03-22T12:47:12.395Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58affd9f568a2f86524fb228"),
  "account_id": NumberInt(978394739),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001487928735710337",
  "createdAt": ISODate("2017-02-24T09:32:15.494Z"),
  "updatedAt": ISODate("2017-03-16T10:02:30.507Z"),
  "last_login": ISODate("2017-03-16T10:02:30.506Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58b3ac31568a2f86524fb247"),
  "account_id": NumberInt(168012970),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001488170033793609",
  "createdAt": ISODate("2017-02-27T04:33:53.250Z"),
  "updatedAt": ISODate("2017-03-01T11:52:04.230Z"),
  "last_login": ISODate("2017-03-01T11:52:04.230Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58b3b496568a2f86524fb25d"),
  "account_id": NumberInt(768894069),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001488172183353270",
  "createdAt": ISODate("2017-02-27T05:09:42.541Z"),
  "updatedAt": ISODate("2017-03-17T01:42:33.673Z"),
  "last_login": ISODate("2017-03-17T01:42:33.673Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58b3ca2f568a2f86524fb26e"),
  "account_id": NumberInt(863300248),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001488177711923060",
  "createdAt": ISODate("2017-02-27T06:41:51.168Z"),
  "updatedAt": ISODate("2017-02-27T06:41:51.168Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58b3d897568a2f86524fb27f"),
  "account_id": NumberInt(913429778),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001488181400338498",
  "createdAt": ISODate("2017-02-27T07:43:19.527Z"),
  "updatedAt": ISODate("2017-03-10T10:25:55.191Z"),
  "last_login": ISODate("2017-03-10T10:25:55.190Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58b3df45568a2f86524fb286"),
  "account_id": NumberInt(971282243),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001488183110339121",
  "createdAt": ISODate("2017-02-27T08:11:49.738Z"),
  "updatedAt": ISODate("2017-03-21T03:49:01.280Z"),
  "last_login": ISODate("2017-03-21T03:49:01.279Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58b3e0c2568a2f86524fb289"),
  "account_id": NumberInt(683868448),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001488183491683396",
  "createdAt": ISODate("2017-02-27T08:18:10.967Z"),
  "updatedAt": ISODate("2017-02-27T10:44:23.535Z"),
  "last_login": ISODate("2017-02-27T10:44:23.534Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58b7a19b568a2f86524fb34e"),
  "account_id": NumberInt(999754777),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001488429467724414",
  "createdAt": ISODate("2017-03-02T04:37:47.455Z"),
  "updatedAt": ISODate("2017-03-02T04:37:47.463Z"),
  "last_login": ISODate("2017-03-02T04:37:47.462Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58b7c16c568a2f86524fb35c"),
  "account_id": NumberInt(180840543),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001488437612700913",
  "createdAt": ISODate("2017-03-02T06:53:32.348Z"),
  "updatedAt": ISODate("2017-03-18T02:44:58.807Z"),
  "last_login": ISODate("2017-03-18T02:44:58.806Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58b8ec2b568a2f86524fb379"),
  "account_id": NumberInt(459123006),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001488514091308162",
  "createdAt": ISODate("2017-03-03T04:08:11.42Z"),
  "updatedAt": ISODate("2017-03-16T06:14:13.485Z"),
  "last_login": ISODate("2017-03-16T06:14:13.485Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58bcebab568a2f86524fb3d2"),
  "account_id": NumberInt(266425902),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001488776107505894",
  "createdAt": ISODate("2017-03-06T04:55:07.31Z"),
  "updatedAt": ISODate("2017-03-25T02:20:09.831Z"),
  "last_login": ISODate("2017-03-25T02:20:09.830Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58bd0b8a568a2f86524fb3db"),
  "account_id": NumberInt(440605678),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001488784266120301",
  "createdAt": ISODate("2017-03-06T07:11:06.188Z"),
  "updatedAt": ISODate("2017-03-21T07:23:58.672Z"),
  "last_login": ISODate("2017-03-21T07:23:58.672Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58bd1689568a2f86524fb3e7"),
  "account_id": NumberInt(996958753),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001488787082219856",
  "createdAt": ISODate("2017-03-06T07:58:01.648Z"),
  "updatedAt": ISODate("2017-03-16T06:15:08.204Z"),
  "last_login": ISODate("2017-03-16T06:15:08.203Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58be1760568a2f86524fb3ee"),
  "account_id": NumberInt(932883173),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001488852833834620",
  "createdAt": ISODate("2017-03-07T02:13:52.639Z"),
  "updatedAt": ISODate("2017-03-21T07:36:35.453Z"),
  "last_login": ISODate("2017-03-21T07:36:35.451Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58be17f3568a2f86524fb3f3"),
  "account_id": NumberInt(175493606),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001488852979408702",
  "createdAt": ISODate("2017-03-07T02:16:19.96Z"),
  "updatedAt": ISODate("2017-03-13T07:57:16.365Z"),
  "last_login": ISODate("2017-03-13T07:57:16.364Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58bf73ad568a2f86524fb41c"),
  "account_id": NumberInt(106523393),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001488941998105352",
  "createdAt": ISODate("2017-03-08T02:59:57.899Z"),
  "updatedAt": ISODate("2017-03-08T02:59:57.907Z"),
  "last_login": ISODate("2017-03-08T02:59:57.906Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58c2694f568a2f86524fb453"),
  "account_id": NumberInt(161195357),
  "channel": "",
  "platform": "ios",
  "msi_id": "100001489135951625409",
  "createdAt": ISODate("2017-03-10T08:52:31.186Z"),
  "updatedAt": ISODate("2017-03-10T08:52:31.205Z"),
  "last_login": ISODate("2017-03-10T08:52:31.202Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58c27f5a568a2f86524fb45c"),
  "account_id": NumberInt(533403062),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001489141594185309",
  "createdAt": ISODate("2017-03-10T10:26:34.39Z"),
  "updatedAt": ISODate("2017-03-25T13:36:34.864Z"),
  "last_login": ISODate("2017-03-25T13:36:34.863Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58c764c2568a2f86524fb48a"),
  "account_id": NumberInt(405632381),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001489462466639444",
  "createdAt": ISODate("2017-03-14T03:34:26.228Z"),
  "updatedAt": ISODate("2017-03-21T07:23:29.150Z"),
  "last_login": ISODate("2017-03-21T07:23:29.149Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58ca2957568a2f86524fb4ca"),
  "account_id": NumberInt(351717188),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001489643863988587",
  "createdAt": ISODate("2017-03-16T05:57:43.141Z"),
  "updatedAt": ISODate("2017-03-16T11:05:33.627Z"),
  "last_login": ISODate("2017-03-16T11:05:33.627Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58ca2cb0568a2f86524fb4cd"),
  "account_id": NumberInt(424810432),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001489644721504717",
  "createdAt": ISODate("2017-03-16T06:12:00.962Z"),
  "updatedAt": ISODate("2017-03-17T01:51:34.616Z"),
  "last_login": ISODate("2017-03-17T01:51:34.616Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58cc9e54568a2f86524fb502"),
  "account_id": NumberInt(299389352),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001489804885343585",
  "createdAt": ISODate("2017-03-18T02:41:24.676Z"),
  "updatedAt": ISODate("2017-03-22T04:14:58.577Z"),
  "last_login": ISODate("2017-03-22T04:14:58.576Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58cf5418568a2f86524fb52c"),
  "account_id": NumberInt(180190237),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001489982489143046",
  "createdAt": ISODate("2017-03-20T04:01:28.894Z"),
  "updatedAt": ISODate("2017-03-20T04:04:40.137Z"),
  "last_login": ISODate("2017-03-20T04:04:40.136Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58cf5526568a2f86524fb531"),
  "account_id": NumberInt(683846975),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001489982759150283",
  "createdAt": ISODate("2017-03-20T04:05:58.932Z"),
  "updatedAt": ISODate("2017-03-20T04:05:58.938Z"),
  "last_login": ISODate("2017-03-20T04:05:58.938Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58cf5568568a2f86524fb533"),
  "account_id": NumberInt(723675476),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001489982824370488",
  "createdAt": ISODate("2017-03-20T04:07:04.311Z"),
  "updatedAt": ISODate("2017-03-20T04:10:38.612Z"),
  "last_login": ISODate("2017-03-20T04:10:38.611Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58d0da09568a2f86524fb562"),
  "account_id": NumberInt(187893547),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001490082314984417",
  "createdAt": ISODate("2017-03-21T07:45:13.812Z"),
  "updatedAt": ISODate("2017-03-21T07:45:13.825Z"),
  "last_login": ISODate("2017-03-21T07:45:13.825Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58d1d9c8568a2f86524fb579"),
  "account_id": NumberInt(284138741),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001490147784754880",
  "createdAt": ISODate("2017-03-22T01:56:24.278Z"),
  "updatedAt": ISODate("2017-03-22T01:56:24.287Z"),
  "last_login": ISODate("2017-03-22T01:56:24.287Z")
});
db.getCollection("msi_service_10000").insert({
  "_id": ObjectId("58d4c8c0568a2f86524fb5a6"),
  "account_id": NumberInt(209775808),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100001490340033286271",
  "createdAt": ISODate("2017-03-24T07:20:32.970Z"),
  "updatedAt": ISODate("2017-03-24T07:23:03.852Z"),
  "last_login": ISODate("2017-03-24T07:23:03.851Z")
});

/** msi_service_10001 records **/
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("5860894e686b2e5b24e7f8fb"),
  "account_id": NumberInt(271593315),
  "channel": "",
  "platform": "ios",
  "msi_id": "100011482721615287221",
  "createdAt": ISODate("2016-12-26T03:06:54.882Z"),
  "updatedAt": ISODate("2017-03-23T09:39:02.832Z"),
  "last_login": ISODate("2017-03-23T09:39:02.831Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("587ded6f7a5d056409d02bf3"),
  "account_id": NumberInt(900669215),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011484647792701793",
  "createdAt": ISODate("2017-01-17T10:09:51.816Z"),
  "updatedAt": ISODate("2017-03-23T09:31:12.837Z"),
  "last_login": ISODate("2017-03-23T09:31:12.836Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("587deebb7a5d056409d02bf6"),
  "account_id": NumberInt(825614777),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011484648123475895",
  "createdAt": ISODate("2017-01-17T10:15:23.351Z"),
  "updatedAt": ISODate("2017-01-17T10:22:02.876Z"),
  "last_login": ISODate("2017-01-17T10:22:02.875Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58803e77974ff98d26afa052"),
  "account_id": NumberInt(664494000),
  "channel": "",
  "platform": "ios",
  "msi_id": "100011484799607878692",
  "createdAt": ISODate("2017-01-19T04:20:07.134Z"),
  "updatedAt": ISODate("2017-03-23T03:52:27.636Z"),
  "last_login": ISODate("2017-03-23T03:52:27.635Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("589c3383974ff98d26afa094"),
  "account_id": NumberInt(304640751),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011486631812698984",
  "createdAt": ISODate("2017-02-09T09:16:51.570Z"),
  "updatedAt": ISODate("2017-02-09T09:16:51.584Z"),
  "last_login": ISODate("2017-02-09T09:16:51.583Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("589c3408974ff98d26afa097"),
  "account_id": NumberInt(701747494),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011486631945791816",
  "createdAt": ISODate("2017-02-09T09:19:04.534Z"),
  "updatedAt": ISODate("2017-02-17T03:41:05.666Z"),
  "last_login": ISODate("2017-02-17T03:41:05.664Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("589c38e0974ff98d26afa09a"),
  "account_id": NumberInt(603473627),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011486633184739017",
  "createdAt": ISODate("2017-02-09T09:39:44.265Z"),
  "updatedAt": ISODate("2017-02-09T09:39:44.301Z"),
  "last_login": ISODate("2017-02-09T09:39:44.300Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("589d3596974ff98d26afa0a4"),
  "account_id": NumberInt(703732667),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011486697878756918",
  "createdAt": ISODate("2017-02-10T03:37:58.382Z"),
  "updatedAt": ISODate("2017-02-10T03:37:58.393Z"),
  "last_login": ISODate("2017-02-10T03:37:58.392Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("589d35c3974ff98d26afa0a6"),
  "account_id": NumberInt(520269142),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011486697924513177",
  "createdAt": ISODate("2017-02-10T03:38:43.627Z"),
  "updatedAt": ISODate("2017-02-10T06:44:06.876Z"),
  "last_login": ISODate("2017-02-10T06:44:06.876Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("589d3bcb974ff98d26afa0a9"),
  "account_id": NumberInt(311919192),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011486699468627057",
  "createdAt": ISODate("2017-02-10T04:04:27.894Z"),
  "updatedAt": ISODate("2017-03-20T03:20:45.405Z"),
  "last_login": ISODate("2017-03-20T03:20:45.404Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58a270ee974ff98d26afa0b7"),
  "account_id": NumberInt(473360909),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011487040750426328",
  "createdAt": ISODate("2017-02-14T02:52:30.491Z"),
  "updatedAt": ISODate("2017-02-14T02:58:00.373Z"),
  "last_login": ISODate("2017-02-14T02:58:00.373Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58a272f0974ff98d26afa0b9"),
  "account_id": NumberInt(333807226),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011487041264379810",
  "createdAt": ISODate("2017-02-14T03:01:04.308Z"),
  "updatedAt": ISODate("2017-03-21T09:34:37.708Z"),
  "last_login": ISODate("2017-03-21T09:34:37.707Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58a27372974ff98d26afa0bc"),
  "account_id": NumberInt(229098311),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011487041395998586",
  "createdAt": ISODate("2017-02-14T03:03:14.739Z"),
  "updatedAt": ISODate("2017-02-14T03:03:14.739Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58a27608974ff98d26afa0c4"),
  "account_id": NumberInt(801893030),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011487042057183247",
  "createdAt": ISODate("2017-02-14T03:14:16.872Z"),
  "updatedAt": ISODate("2017-03-23T03:52:56.151Z"),
  "last_login": ISODate("2017-03-23T03:52:56.151Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58a402f5974ff98d26afa0d1"),
  "account_id": NumberInt(766445263),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011487143670193648",
  "createdAt": ISODate("2017-02-15T07:27:49.757Z"),
  "updatedAt": ISODate("2017-03-15T10:07:21.896Z"),
  "last_login": ISODate("2017-03-15T10:07:21.895Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58a40fe7974ff98d26afa0e3"),
  "account_id": NumberInt(683868448),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011487146983495277",
  "createdAt": ISODate("2017-02-15T08:23:03.209Z"),
  "updatedAt": ISODate("2017-02-15T08:23:03.209Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58a42c4f974ff98d26afa0e6"),
  "account_id": NumberInt(413867888),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011487154255758852",
  "createdAt": ISODate("2017-02-15T10:24:15.244Z"),
  "updatedAt": ISODate("2017-02-15T10:24:15.253Z"),
  "last_login": ISODate("2017-02-15T10:24:15.253Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58a56309974ff98d26afa0ee"),
  "account_id": NumberInt(477637806),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011487233801304787",
  "createdAt": ISODate("2017-02-16T08:30:01.237Z"),
  "updatedAt": ISODate("2017-03-24T07:52:36.838Z"),
  "last_login": ISODate("2017-03-24T07:52:36.837Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58a973676bfb4fd74dd20a08"),
  "account_id": NumberInt(139638350),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011487500135119227",
  "createdAt": ISODate("2017-02-19T10:28:55.399Z"),
  "updatedAt": ISODate("2017-02-19T10:45:42.793Z"),
  "last_login": ISODate("2017-02-19T10:45:42.792Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58ad3f6f568a2f86524fb1c7"),
  "account_id": NumberInt(180840543),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011487748975368073",
  "createdAt": ISODate("2017-02-22T07:36:15.289Z"),
  "updatedAt": ISODate("2017-03-06T06:32:30.763Z"),
  "last_login": ISODate("2017-03-06T06:32:30.763Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58afa26b568a2f86524fb1fb"),
  "account_id": NumberInt(751859388),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011487905388604291",
  "createdAt": ISODate("2017-02-24T03:03:07.915Z"),
  "updatedAt": ISODate("2017-02-24T03:44:42.644Z"),
  "last_login": ISODate("2017-02-24T03:44:42.643Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58afb548568a2f86524fb211"),
  "account_id": NumberInt(978394739),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011487910216192519",
  "createdAt": ISODate("2017-02-24T04:23:36.194Z"),
  "updatedAt": ISODate("2017-03-22T01:47:49.255Z"),
  "last_login": ISODate("2017-03-22T01:47:49.255Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58b3a2c3568a2f86524fb23f"),
  "account_id": NumberInt(768894069),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011488167619269830",
  "createdAt": ISODate("2017-02-27T03:53:39.413Z"),
  "updatedAt": ISODate("2017-03-08T01:24:40.82Z"),
  "last_login": ISODate("2017-03-08T01:24:40.81Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58b4da84568a2f86524fb2a7"),
  "account_id": NumberInt(935931406),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011488247429306198",
  "createdAt": ISODate("2017-02-28T02:03:48.716Z"),
  "updatedAt": ISODate("2017-02-28T03:57:28.176Z"),
  "last_login": ISODate("2017-02-28T03:57:28.174Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58b4eaad568a2f86524fb2b2"),
  "account_id": NumberInt(533574639),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011488251566770608",
  "createdAt": ISODate("2017-02-28T03:12:45.947Z"),
  "updatedAt": ISODate("2017-03-03T09:31:11.317Z"),
  "last_login": ISODate("2017-03-03T09:31:11.316Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58b5083d568a2f86524fb2c5"),
  "account_id": NumberInt(629935977),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011488259133191524",
  "createdAt": ISODate("2017-02-28T05:18:53.200Z"),
  "updatedAt": ISODate("2017-02-28T05:33:31.81Z"),
  "last_login": ISODate("2017-02-28T05:33:31.81Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58b52272568a2f86524fb2d6"),
  "account_id": NumberInt(533403062),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011488265842563449",
  "createdAt": ISODate("2017-02-28T07:10:42.57Z"),
  "updatedAt": ISODate("2017-03-22T01:46:43.210Z"),
  "last_login": ISODate("2017-03-22T01:46:43.209Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58b523d7568a2f86524fb2df"),
  "account_id": NumberInt(560931514),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011488266199184084",
  "createdAt": ISODate("2017-02-28T07:16:39.76Z"),
  "updatedAt": ISODate("2017-02-28T07:16:39.83Z"),
  "last_login": ISODate("2017-02-28T07:16:39.82Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58b69f55568a2f86524fb32b"),
  "account_id": NumberInt(459123006),
  "channel": "",
  "platform": "ios",
  "msi_id": "100011488363350363515",
  "createdAt": ISODate("2017-03-01T10:15:49.937Z"),
  "updatedAt": ISODate("2017-03-16T01:20:08.195Z"),
  "last_login": ISODate("2017-03-16T01:20:08.195Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58b91735568a2f86524fb37e"),
  "account_id": NumberInt(996958753),
  "channel": "",
  "platform": "ios",
  "msi_id": "100011488525109918199",
  "createdAt": ISODate("2017-03-03T07:11:49.113Z"),
  "updatedAt": ISODate("2017-03-06T06:41:09.321Z"),
  "last_login": ISODate("2017-03-06T06:41:09.321Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58b9386d568a2f86524fb396"),
  "account_id": NumberInt(257035834),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011488533614530327",
  "createdAt": ISODate("2017-03-03T09:33:33.926Z"),
  "updatedAt": ISODate("2017-03-03T10:55:18.739Z"),
  "last_login": ISODate("2017-03-03T10:55:18.738Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58ba19ac568a2f86524fb3a6"),
  "account_id": NumberInt(741965519),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011488591277875635",
  "createdAt": ISODate("2017-03-04T01:34:36.759Z"),
  "updatedAt": ISODate("2017-03-04T01:34:36.768Z"),
  "last_login": ISODate("2017-03-04T01:34:36.767Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58be837e568a2f86524fb405"),
  "account_id": NumberInt(161195357),
  "channel": "",
  "platform": "ios",
  "msi_id": "100011488880511658297",
  "createdAt": ISODate("2017-03-07T09:55:10.579Z"),
  "updatedAt": ISODate("2017-03-10T07:11:25.703Z"),
  "last_login": ISODate("2017-03-10T07:11:25.703Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58c22273568a2f86524fb438"),
  "account_id": NumberInt(187893547),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011489117811577386",
  "createdAt": ISODate("2017-03-10T03:50:11.204Z"),
  "updatedAt": ISODate("2017-03-16T14:19:47.34Z"),
  "last_login": ISODate("2017-03-16T14:19:47.34Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58c222a3568a2f86524fb43d"),
  "account_id": NumberInt(351717188),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011489117860312496",
  "createdAt": ISODate("2017-03-10T03:50:59.535Z"),
  "updatedAt": ISODate("2017-03-14T10:07:03.556Z"),
  "last_login": ISODate("2017-03-14T10:07:03.555Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58c8ff4e568a2f86524fb4a5"),
  "account_id": NumberInt(424810432),
  "channel": "",
  "platform": "ios",
  "msi_id": "100011489567566352625",
  "createdAt": ISODate("2017-03-15T08:46:06.369Z"),
  "updatedAt": ISODate("2017-03-16T08:48:47.685Z"),
  "last_login": ISODate("2017-03-16T08:48:47.684Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58ca1357568a2f86524fb4c8"),
  "account_id": NumberInt(903316983),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011489638232230250",
  "createdAt": ISODate("2017-03-16T04:23:51.949Z"),
  "updatedAt": ISODate("2017-03-16T07:22:18.203Z"),
  "last_login": ISODate("2017-03-16T07:22:18.202Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58ca333d568a2f86524fb4d9"),
  "account_id": NumberInt(535239602),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011489646398410841",
  "createdAt": ISODate("2017-03-16T06:39:57.894Z"),
  "updatedAt": ISODate("2017-03-16T07:29:29.472Z"),
  "last_login": ISODate("2017-03-16T07:29:29.471Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58ca3d46568a2f86524fb4dc"),
  "account_id": NumberInt(209492665),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011489648966943794",
  "createdAt": ISODate("2017-03-16T07:22:46.486Z"),
  "updatedAt": ISODate("2017-03-16T07:36:21.367Z"),
  "last_login": ISODate("2017-03-16T07:36:21.366Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58ca7fc4568a2f86524fb4f2"),
  "account_id": NumberInt(662143003),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011489665989625217",
  "createdAt": ISODate("2017-03-16T12:06:28.899Z"),
  "updatedAt": ISODate("2017-03-20T05:11:57.449Z"),
  "last_login": ISODate("2017-03-20T05:11:57.448Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58cf3f7c568a2f86524fb511"),
  "account_id": NumberInt(496791534),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011489977212286065",
  "createdAt": ISODate("2017-03-20T02:33:32.394Z"),
  "updatedAt": ISODate("2017-03-20T02:33:32.401Z"),
  "last_login": ISODate("2017-03-20T02:33:32.401Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58cf4000568a2f86524fb514"),
  "account_id": NumberInt(365513464),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011489977344427578",
  "createdAt": ISODate("2017-03-20T02:35:44.406Z"),
  "updatedAt": ISODate("2017-03-20T03:36:38.878Z"),
  "last_login": ISODate("2017-03-20T03:36:38.877Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58cf4b53568a2f86524fb51d"),
  "account_id": NumberInt(180190237),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011489980244935357",
  "createdAt": ISODate("2017-03-20T03:24:03.592Z"),
  "updatedAt": ISODate("2017-03-20T03:39:44.392Z"),
  "last_login": ISODate("2017-03-20T03:39:44.391Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58cf4d75568a2f86524fb524"),
  "account_id": NumberInt(683846975),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011489980790750317",
  "createdAt": ISODate("2017-03-20T03:33:09.513Z"),
  "updatedAt": ISODate("2017-03-20T03:33:09.520Z"),
  "last_login": ISODate("2017-03-20T03:33:09.520Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58cf4e4b568a2f86524fb528"),
  "account_id": NumberInt(723675476),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011489981003402879",
  "createdAt": ISODate("2017-03-20T03:36:43.287Z"),
  "updatedAt": ISODate("2017-03-20T08:04:55.457Z"),
  "last_login": ISODate("2017-03-20T08:04:55.456Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58cf64e1568a2f86524fb539"),
  "account_id": NumberInt(284138741),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011489986786166485",
  "createdAt": ISODate("2017-03-20T05:13:05.951Z"),
  "updatedAt": ISODate("2017-03-22T01:48:45.553Z"),
  "last_login": ISODate("2017-03-22T01:48:45.552Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58d0a224568a2f86524fb551"),
  "account_id": NumberInt(861346265),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011490068004723650",
  "createdAt": ISODate("2017-03-21T03:46:44.87Z"),
  "updatedAt": ISODate("2017-03-21T06:37:07.213Z"),
  "last_login": ISODate("2017-03-21T06:37:07.212Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58d0d1e9568a2f86524fb55a"),
  "account_id": NumberInt(299389352),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011490080234984552",
  "createdAt": ISODate("2017-03-21T07:10:33.703Z"),
  "updatedAt": ISODate("2017-03-21T07:10:33.713Z"),
  "last_login": ISODate("2017-03-21T07:10:33.712Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58d0e00a568a2f86524fb565"),
  "account_id": NumberInt(623603900),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011490083851607376",
  "createdAt": ISODate("2017-03-21T08:10:50.774Z"),
  "updatedAt": ISODate("2017-03-23T10:30:26.523Z"),
  "last_login": ISODate("2017-03-23T10:30:26.522Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58d1eaf4568a2f86524fb587"),
  "account_id": NumberInt(622299893),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011490152180312445",
  "createdAt": ISODate("2017-03-22T03:09:40.459Z"),
  "updatedAt": ISODate("2017-03-24T04:05:26.297Z"),
  "last_login": ISODate("2017-03-24T04:05:26.297Z")
});
db.getCollection("msi_service_10001").insert({
  "_id": ObjectId("58d34956568a2f86524fb598"),
  "account_id": NumberInt(850291276),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100011490241879186011",
  "createdAt": ISODate("2017-03-23T04:04:38.956Z"),
  "updatedAt": ISODate("2017-03-24T03:51:22.100Z"),
  "last_login": ISODate("2017-03-24T03:51:22.99Z")
});

/** msi_service_10003 records **/
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58aa9c16568a2f86524fb15b"),
  "account_id": NumberInt(271593315),
  "channel": "",
  "platform": "ios",
  "msi_id": "100031487576087653404",
  "createdAt": ISODate("2017-02-20T07:34:46.914Z"),
  "updatedAt": ISODate("2017-02-20T07:34:46.944Z"),
  "last_login": ISODate("2017-02-20T07:34:46.944Z")
});
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58b3d87f568a2f86524fb27b"),
  "account_id": NumberInt(826337153),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100031488181376746945",
  "createdAt": ISODate("2017-02-27T07:42:55.660Z"),
  "updatedAt": ISODate("2017-03-13T09:19:42.46Z"),
  "last_login": ISODate("2017-03-13T09:19:42.45Z")
});
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58b5022e568a2f86524fb2ba"),
  "account_id": NumberInt(183213904),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100031488257583494472",
  "createdAt": ISODate("2017-02-28T04:53:02.923Z"),
  "updatedAt": ISODate("2017-02-28T04:53:02.929Z"),
  "last_login": ISODate("2017-02-28T04:53:02.929Z")
});
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58b7c621568a2f86524fb364"),
  "account_id": NumberInt(833537914),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100031488438818359707",
  "createdAt": ISODate("2017-03-02T07:13:37.877Z"),
  "updatedAt": ISODate("2017-03-15T04:58:45.421Z"),
  "last_login": ISODate("2017-03-15T04:58:45.421Z")
});
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58bcc66a568a2f86524fb3b3"),
  "account_id": NumberInt(440605678),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100031488766570741252",
  "createdAt": ISODate("2017-03-06T02:16:10.131Z"),
  "updatedAt": ISODate("2017-03-14T10:33:05.649Z"),
  "last_login": ISODate("2017-03-14T10:33:05.647Z")
});
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58bcd496568a2f86524fb3b8"),
  "account_id": NumberInt(578610976),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100031488770199573303",
  "createdAt": ISODate("2017-03-06T03:16:38.593Z"),
  "updatedAt": ISODate("2017-03-06T03:16:38.602Z"),
  "last_login": ISODate("2017-03-06T03:16:38.602Z")
});
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58bcd54d568a2f86524fb3ba"),
  "account_id": NumberInt(913429778),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100031488770382988667",
  "createdAt": ISODate("2017-03-06T03:19:41.844Z"),
  "updatedAt": ISODate("2017-03-06T03:33:06.114Z"),
  "last_login": ISODate("2017-03-06T03:33:06.113Z")
});
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58bcd5f2568a2f86524fb3bd"),
  "account_id": NumberInt(580604812),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100031488770546924030",
  "createdAt": ISODate("2017-03-06T03:22:26.488Z"),
  "updatedAt": ISODate("2017-03-06T03:22:51.597Z"),
  "last_login": ISODate("2017-03-06T03:22:51.596Z")
});
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58bcd994568a2f86524fb3c2"),
  "account_id": NumberInt(106523393),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100031488771477427155",
  "createdAt": ISODate("2017-03-06T03:37:56.557Z"),
  "updatedAt": ISODate("2017-03-15T05:00:10.554Z"),
  "last_login": ISODate("2017-03-15T05:00:10.553Z")
});
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58c64b5c568a2f86524fb474"),
  "account_id": NumberInt(360894272),
  "channel": "",
  "platform": "ios",
  "msi_id": "100031489390429425098",
  "createdAt": ISODate("2017-03-13T07:33:48.913Z"),
  "updatedAt": ISODate("2017-03-14T08:30:35.54Z"),
  "last_login": ISODate("2017-03-14T08:30:35.53Z")
});
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58c66f1f568a2f86524fb482"),
  "account_id": NumberInt(354465044),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100031489399584273629",
  "createdAt": ISODate("2017-03-13T10:06:23.707Z"),
  "updatedAt": ISODate("2017-03-14T04:35:06.539Z"),
  "last_login": ISODate("2017-03-14T04:35:06.539Z")
});
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58c7b873568a2f86524fb498"),
  "account_id": NumberInt(560708617),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100031489483891398281",
  "createdAt": ISODate("2017-03-14T09:31:31.8Z"),
  "updatedAt": ISODate("2017-03-14T09:31:31.16Z"),
  "last_login": ISODate("2017-03-14T09:31:31.16Z")
});
db.getCollection("msi_service_10003").insert({
  "_id": ObjectId("58c89fc3568a2f86524fb49d"),
  "account_id": NumberInt(351717188),
  "channel": "empty",
  "platform": "android",
  "msi_id": "100031489543108457440",
  "createdAt": ISODate("2017-03-15T01:58:27.763Z"),
  "updatedAt": ISODate("2017-03-15T02:51:09.396Z"),
  "last_login": ISODate("2017-03-15T02:51:09.395Z")
});

/** msi_service_10004 records **/
db.getCollection("msi_service_10004").insert({
  "_id": ObjectId("58aa9c47568a2f86524fb15d"),
  "account_id": NumberInt(271593315),
  "channel": "",
  "platform": "ios",
  "msi_id": "100041487576136598528",
  "createdAt": ISODate("2017-02-20T07:35:35.855Z"),
  "updatedAt": ISODate("2017-02-20T07:36:06.604Z"),
  "last_login": ISODate("2017-02-20T07:36:06.603Z")
});
db.getCollection("msi_service_10004").insert({
  "_id": ObjectId("58aa9d3f568a2f86524fb15f"),
  "account_id": NumberInt(380454574),
  "channel": "",
  "platform": "wp",
  "msi_id": "100041487576384181902",
  "createdAt": ISODate("2017-02-20T07:39:43.978Z"),
  "updatedAt": ISODate("2017-02-20T07:39:43.990Z"),
  "last_login": ISODate("2017-02-20T07:39:43.988Z")
});

/** quick_account records **/
db.getCollection("quick_account").insert({
  "_id": ObjectId("585bbba80003bd3f1452e77d"),
  "account_id": NumberInt(469086595),
  "device_id": "fccf5ba067af9f7903a8f151ee3b3a7a33119e1e",
  "createdAt": ISODate("2016-12-22T11:40:24.17Z"),
  "updatedAt": ISODate("2016-12-22T11:40:24.17Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("585cd166bbe8dcfc215dceda"),
  "account_id": NumberInt(310711758),
  "device_id": "74500322465a218afeab622e7793f0515bd80a82",
  "createdAt": ISODate("2016-12-23T07:25:26.314Z"),
  "updatedAt": ISODate("2016-12-23T07:25:26.314Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("5860867b686b2e5b24e7f8f5"),
  "account_id": NumberInt(641467627),
  "device_id": "9aeecf78d976a095d6abd94c8160e0241780c4d3",
  "createdAt": ISODate("2016-12-26T02:54:51.311Z"),
  "updatedAt": ISODate("2016-12-26T02:54:51.311Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58609a83686b2e5b24e7f907"),
  "account_id": NumberInt(134435319),
  "device_id": "1a5fab1e50d1580c8c3c2a7f6d3a5aa108307bd0",
  "createdAt": ISODate("2016-12-26T04:20:19.619Z"),
  "updatedAt": ISODate("2016-12-26T04:20:19.619Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58609b2a686b2e5b24e7f90c"),
  "account_id": NumberInt(574023869),
  "device_id": "6a222e7bf8a7f2e25e0405833c84d3f4e761590c",
  "createdAt": ISODate("2016-12-26T04:23:06.440Z"),
  "updatedAt": ISODate("2016-12-26T04:23:06.440Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58609c22686b2e5b24e7f911"),
  "account_id": NumberInt(533469009),
  "device_id": "5a2f785d84a047d5ec089c608163841f80506f09",
  "createdAt": ISODate("2016-12-26T04:27:14.778Z"),
  "updatedAt": ISODate("2016-12-26T04:27:14.778Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("5860c2c6686b2e5b24e7f918"),
  "account_id": NumberInt(171415393),
  "device_id": "b909ace5869b35ef4acbb6fde24e1025f1bbe775",
  "createdAt": ISODate("2016-12-26T07:12:06.68Z"),
  "updatedAt": ISODate("2016-12-26T07:12:06.68Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("5860ce50686b2e5b24e7f926"),
  "account_id": NumberInt(714068092),
  "device_id": "cef8a581484c406707ad2ea58ca1b717c5640ced",
  "createdAt": ISODate("2016-12-26T08:01:20.400Z"),
  "updatedAt": ISODate("2016-12-26T08:01:20.400Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("586dd58a7a5d056409d02a27"),
  "account_id": NumberInt(629935977),
  "device_id": "d12a4a40cc2d7293a3a26eba6153f79e5345a8d3",
  "createdAt": ISODate("2017-01-05T05:11:38.587Z"),
  "updatedAt": ISODate("2017-01-05T05:11:38.587Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("586f64c07a5d056409d02a52"),
  "account_id": NumberInt(674529448),
  "device_id": "332fd4a5a6bc3c3cf6fe3b192e0bf3b922a3f48a",
  "createdAt": ISODate("2017-01-06T09:34:56.458Z"),
  "updatedAt": ISODate("2017-01-06T09:34:56.458Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("586f84ac7a5d056409d02a58"),
  "account_id": NumberInt(900669215),
  "device_id": "c7a1b7fbf168d240cf8574988e8f2f26daf03204",
  "createdAt": ISODate("2017-01-06T11:51:08.542Z"),
  "updatedAt": ISODate("2017-01-06T11:51:08.542Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("5874b9e07a5d056409d02ab1"),
  "account_id": NumberInt(881773336),
  "device_id": "cdb3474e668c3cb6360609fa184d092a12e3b493",
  "createdAt": ISODate("2017-01-10T10:39:28.422Z"),
  "updatedAt": ISODate("2017-01-10T10:39:28.422Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("587591cf7a5d056409d02aca"),
  "account_id": NumberInt(938824509),
  "device_id": "41c2d1c3070dabe25fb15e13b0f32ad6240a808d",
  "createdAt": ISODate("2017-01-11T02:00:47.764Z"),
  "updatedAt": ISODate("2017-01-11T02:00:47.764Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("5875b6227a5d056409d02af5"),
  "account_id": NumberInt(365513464),
  "device_id": "2c8676fc7a23a228a2999e380fc2f66c4655a4d5",
  "createdAt": ISODate("2017-01-11T04:35:46.787Z"),
  "updatedAt": ISODate("2017-01-11T04:35:46.787Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("5875ca7b7a5d056409d02b05"),
  "account_id": NumberInt(358206907),
  "device_id": "6a94b6479f4e678f3f0749e7ab269f1f4e38a726",
  "createdAt": ISODate("2017-01-11T06:02:35.921Z"),
  "updatedAt": ISODate("2017-01-11T06:02:35.921Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("5875e2cf7a5d056409d02b20"),
  "account_id": NumberInt(382786256),
  "device_id": "f3d0b09c4cfe33fc5d9657274c93b9d4efb08856",
  "createdAt": ISODate("2017-01-11T07:46:23.397Z"),
  "updatedAt": ISODate("2017-01-11T07:46:23.397Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("5875f10a7a5d056409d02b36"),
  "account_id": NumberInt(426077797),
  "device_id": "d255ff902c494eb8674c75c5a232c584aca5ddc8",
  "createdAt": ISODate("2017-01-11T08:47:06.651Z"),
  "updatedAt": ISODate("2017-01-11T08:47:06.651Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("5897e747974ff98d26afa06b"),
  "account_id": NumberInt(855783386),
  "device_id": "a9432a64b77559509f6b3834fad1f7cfb9924be5",
  "createdAt": ISODate("2017-02-06T03:02:31.353Z"),
  "updatedAt": ISODate("2017-02-06T03:02:31.353Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58a275b2974ff98d26afa0c0"),
  "account_id": NumberInt(362515620),
  "device_id": "AQBZ5gIAn9UDAGuNBAA0UQUAjWQHAAf7CAAbLwkAMyU=",
  "createdAt": ISODate("2017-02-14T03:12:50.767Z"),
  "updatedAt": ISODate("2017-02-14T03:12:50.767Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58a402f5974ff98d26afa0d0"),
  "account_id": NumberInt(766445263),
  "device_id": "58f4c46b44a6605998fc794ab16e7493d12956f7",
  "createdAt": ISODate("2017-02-15T07:27:49.753Z"),
  "updatedAt": ISODate("2017-02-15T07:27:49.753Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58a973676bfb4fd74dd20a07"),
  "account_id": NumberInt(139638350),
  "device_id": "4487e5dd52b3e5721878b4f3a05221e715b484a9",
  "createdAt": ISODate("2017-02-19T10:28:55.394Z"),
  "updatedAt": ISODate("2017-02-19T10:28:55.394Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58abe817568a2f86524fb186"),
  "account_id": NumberInt(850291276),
  "device_id": "58b70b437575c9c8ef8d299dcf5b41c17033019f",
  "createdAt": ISODate("2017-02-21T07:11:19.450Z"),
  "updatedAt": ISODate("2017-02-21T07:11:19.450Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58abea4f568a2f86524fb18e"),
  "account_id": NumberInt(995530891),
  "device_id": "a7497e685217510a4cad648adc9f66de17b53735",
  "createdAt": ISODate("2017-02-21T07:20:47.816Z"),
  "updatedAt": ISODate("2017-02-21T07:20:47.816Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58abedb3568a2f86524fb19a"),
  "account_id": NumberInt(734425202),
  "device_id": "bb5957b3b420afd400fd61ad3aefd4c73b580f4c",
  "createdAt": ISODate("2017-02-21T07:35:15.627Z"),
  "updatedAt": ISODate("2017-02-21T07:35:15.627Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58abfb0b568a2f86524fb1aa"),
  "account_id": NumberInt(896801707),
  "device_id": "36b84752f7dee3c9aaae3f94856d648a755ac757",
  "createdAt": ISODate("2017-02-21T08:32:11.747Z"),
  "updatedAt": ISODate("2017-02-21T08:32:11.747Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58ad484a568a2f86524fb1d0"),
  "account_id": NumberInt(497615639),
  "device_id": "13acd2b7683062a53d56585a34ac9acd8b7b46ac",
  "createdAt": ISODate("2017-02-22T08:14:02.679Z"),
  "updatedAt": ISODate("2017-02-22T08:14:02.679Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58afa0f2568a2f86524fb1f3"),
  "account_id": NumberInt(935931406),
  "device_id": "b542730716d64a7bea662cd47c8e3cac7bf7095e",
  "createdAt": ISODate("2017-02-24T02:56:50.982Z"),
  "updatedAt": ISODate("2017-02-24T02:56:50.982Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58afa26b568a2f86524fb1fa"),
  "account_id": NumberInt(751859388),
  "device_id": "26f6201f0dd83b41f7371ab746eb47aa4c848d69",
  "createdAt": ISODate("2017-02-24T03:03:07.911Z"),
  "updatedAt": ISODate("2017-02-24T03:03:07.911Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58afe4de568a2f86524fb21e"),
  "account_id": NumberInt(560708617),
  "device_id": "327f6dd4b7e2f56f9422b40749abb4e29bcfa619",
  "createdAt": ISODate("2017-02-24T07:46:38.526Z"),
  "updatedAt": ISODate("2017-02-24T07:46:38.526Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58b3a2c3568a2f86524fb23e"),
  "account_id": NumberInt(768894069),
  "device_id": "28502d6dc9b1b6d16821ba6d3be7c15976c07f0f",
  "createdAt": ISODate("2017-02-27T03:53:39.410Z"),
  "updatedAt": ISODate("2017-02-27T03:53:39.410Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58b3ac31568a2f86524fb246"),
  "account_id": NumberInt(168012970),
  "device_id": "540833bb60df1140531e4f6bc29ff96f0d6078d3",
  "createdAt": ISODate("2017-02-27T04:33:53.247Z"),
  "updatedAt": ISODate("2017-02-27T04:33:53.247Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58b3d897568a2f86524fb27e"),
  "account_id": NumberInt(913429778),
  "device_id": "b1be02765dbe891473949fe35789a0b29366b326",
  "createdAt": ISODate("2017-02-27T07:43:19.524Z"),
  "updatedAt": ISODate("2017-02-27T07:43:19.524Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58b4eaad568a2f86524fb2b1"),
  "account_id": NumberInt(533574639),
  "device_id": "2120bcc1464791f44ecd94df56a4c3ace117f887",
  "createdAt": ISODate("2017-02-28T03:12:45.942Z"),
  "updatedAt": ISODate("2017-02-28T03:12:45.942Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58b5022e568a2f86524fb2b9"),
  "account_id": NumberInt(183213904),
  "device_id": "23059b32e0b7d240b9abbbeff8d68c4233b2d67c",
  "createdAt": ISODate("2017-02-28T04:53:02.919Z"),
  "updatedAt": ISODate("2017-02-28T04:53:02.919Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58b52272568a2f86524fb2d5"),
  "account_id": NumberInt(533403062),
  "device_id": "e5f2f26817d1717fa19573e7cf42acb3b42bdec0",
  "createdAt": ISODate("2017-02-28T07:10:42.54Z"),
  "updatedAt": ISODate("2017-02-28T07:10:42.54Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58b523d7568a2f86524fb2de"),
  "account_id": NumberInt(560931514),
  "device_id": "d0b3f948daabe4c63b90c91463f41a2557076633",
  "createdAt": ISODate("2017-02-28T07:16:39.73Z"),
  "updatedAt": ISODate("2017-02-28T07:16:39.73Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58b7a19b568a2f86524fb34d"),
  "account_id": NumberInt(999754777),
  "device_id": "061788f5f3596f821af0dc767727615e2a7bea16",
  "createdAt": ISODate("2017-03-02T04:37:47.453Z"),
  "updatedAt": ISODate("2017-03-02T04:37:47.453Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58b9386d568a2f86524fb395"),
  "account_id": NumberInt(257035834),
  "device_id": "54fedfca0e647d172ebed5d363402ec13c94b37b",
  "createdAt": ISODate("2017-03-03T09:33:33.923Z"),
  "updatedAt": ISODate("2017-03-03T09:33:33.923Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58ba19ac568a2f86524fb3a5"),
  "account_id": NumberInt(741965519),
  "device_id": "68e1e024cf1a5cd9f5cf9677dc7a0648148b5b6e",
  "createdAt": ISODate("2017-03-04T01:34:36.756Z"),
  "updatedAt": ISODate("2017-03-04T01:34:36.756Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58bcebab568a2f86524fb3d1"),
  "account_id": NumberInt(266425902),
  "device_id": "0e7442de9cfe22f79b20b7c2514ba974a362428a",
  "createdAt": ISODate("2017-03-06T04:55:07.27Z"),
  "updatedAt": ISODate("2017-03-06T04:55:07.27Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58be1760568a2f86524fb3ed"),
  "account_id": NumberInt(932883173),
  "device_id": "cc2ca95c9b143c2986a17e0b5cb6a88a66d530cc",
  "createdAt": ISODate("2017-03-07T02:13:52.636Z"),
  "updatedAt": ISODate("2017-03-07T02:13:52.636Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58c22273568a2f86524fb437"),
  "account_id": NumberInt(187893547),
  "device_id": "dec6e2bfd653615598cdbe295c1488d62186ca14",
  "createdAt": ISODate("2017-03-10T03:50:11.201Z"),
  "updatedAt": ISODate("2017-03-10T03:50:11.201Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58c764c2568a2f86524fb489"),
  "account_id": NumberInt(405632381),
  "device_id": "3b96c6e82456c6fb8a33fa513aaffea5a9f3ba95",
  "createdAt": ISODate("2017-03-14T03:34:26.225Z"),
  "updatedAt": ISODate("2017-03-14T03:34:26.225Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58ca333d568a2f86524fb4d8"),
  "account_id": NumberInt(535239602),
  "device_id": "62b5a12864f0d67447dadc359990a53f5f3b6964",
  "createdAt": ISODate("2017-03-16T06:39:57.889Z"),
  "updatedAt": ISODate("2017-03-16T06:39:57.889Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58cc9e54568a2f86524fb501"),
  "account_id": NumberInt(299389352),
  "device_id": "14caeff4f25ef9718bcc68f79443cb2edd6e699f",
  "createdAt": ISODate("2017-03-18T02:41:24.671Z"),
  "updatedAt": ISODate("2017-03-18T02:41:24.671Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58cf3f7c568a2f86524fb510"),
  "account_id": NumberInt(496791534),
  "device_id": "66c1e3d4582377cca556b310f6b7e189e005e045",
  "createdAt": ISODate("2017-03-20T02:33:32.390Z"),
  "updatedAt": ISODate("2017-03-20T02:33:32.390Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58cf4b53568a2f86524fb51c"),
  "account_id": NumberInt(180190237),
  "device_id": "23094ddbb07ab715df0d4430fdb079164f5acb50",
  "createdAt": ISODate("2017-03-20T03:24:03.589Z"),
  "updatedAt": ISODate("2017-03-20T03:24:03.589Z")
});
db.getCollection("quick_account").insert({
  "_id": ObjectId("58d0a224568a2f86524fb550"),
  "account_id": NumberInt(861346265),
  "device_id": "65251d5b93c829e03961b2804f4e2ad05312cb20",
  "createdAt": ISODate("2017-03-21T03:46:44.82Z"),
  "updatedAt": ISODate("2017-03-21T03:46:44.82Z")
});

/** social_facebook records **/
db.getCollection("social_facebook").insert({
  "_id": ObjectId("58749fa67a5d056409d02a99"),
  "account_id": NumberInt(754777018),
  "facebook_id": "570830976447139",
  "facebook_token": "AbwNFv1KM161do-4",
  "createdAt": ISODate("2017-01-10T08:47:34.904Z"),
  "updatedAt": ISODate("2017-01-10T08:47:34.904Z")
});
db.getCollection("social_facebook").insert({
  "_id": ObjectId("587590c67a5d056409d02abf"),
  "account_id": NumberInt(333807226),
  "facebook_id": "246075105826973",
  "facebook_token": "Abxq2GJjZygcai2O",
  "createdAt": ISODate("2017-01-11T01:56:22.898Z"),
  "updatedAt": ISODate("2017-01-11T01:56:22.898Z")
});
db.getCollection("social_facebook").insert({
  "_id": ObjectId("58770afb7a5d056409d02b54"),
  "account_id": NumberInt(928328432),
  "facebook_id": "147779312383901",
  "facebook_token": "Abz2TfZTjayhuxbX",
  "createdAt": ISODate("2017-01-12T04:50:03.26Z"),
  "updatedAt": ISODate("2017-01-12T04:50:03.26Z")
});
db.getCollection("social_facebook").insert({
  "_id": ObjectId("5887cc15974ff98d26afa05d"),
  "account_id": NumberInt(842115965),
  "facebook_id": "10206639013014366",
  "facebook_token": "Aby2f8FX2N_eff68",
  "createdAt": ISODate("2017-01-24T21:50:13.891Z"),
  "updatedAt": ISODate("2017-01-24T21:50:13.891Z")
});
db.getCollection("social_facebook").insert({
  "_id": ObjectId("58abeac6568a2f86524fb193"),
  "account_id": NumberInt(865298498),
  "facebook_id": "1335304203192836",
  "facebook_token": "AbxxQLkQR1RWZBhH",
  "createdAt": ISODate("2017-02-21T07:22:46.504Z"),
  "updatedAt": ISODate("2017-02-21T07:22:46.504Z")
});
db.getCollection("social_facebook").insert({
  "_id": ObjectId("58ad652d568a2f86524fb1d8"),
  "account_id": NumberInt(757576939),
  "facebook_id": "1845566779024576",
  "facebook_token": "AbzQteNfNgEWQjip",
  "createdAt": ISODate("2017-02-22T10:17:17.152Z"),
  "updatedAt": ISODate("2017-02-22T10:17:17.152Z")
});
db.getCollection("social_facebook").insert({
  "_id": ObjectId("58bcd496568a2f86524fb3b7"),
  "account_id": NumberInt(578610976),
  "facebook_id": "1416201505090963",
  "facebook_token": "AbzTl7YQrA9ANQWE",
  "createdAt": ISODate("2017-03-06T03:16:38.590Z"),
  "updatedAt": ISODate("2017-03-06T03:16:38.590Z")
});
db.getCollection("social_facebook").insert({
  "_id": ObjectId("58c222a3568a2f86524fb43c"),
  "account_id": NumberInt(351717188),
  "facebook_id": "1158407264286114",
  "facebook_token": "Abx_pmnmD-JBnPAN",
  "createdAt": ISODate("2017-03-10T03:50:59.529Z"),
  "updatedAt": ISODate("2017-03-10T03:50:59.529Z")
});
db.getCollection("social_facebook").insert({
  "_id": ObjectId("58cf4d75568a2f86524fb523"),
  "account_id": NumberInt(683846975),
  "facebook_id": "188223691675234",
  "facebook_token": "AbwtQD4JW7HNLuML",
  "createdAt": ISODate("2017-03-20T03:33:09.510Z"),
  "updatedAt": ISODate("2017-03-20T03:33:09.510Z")
});

/** social_google records **/
db.getCollection("social_google").insert({
  "_id": ObjectId("58748b487a5d056409d02a8b"),
  "account_id": NumberInt(801893030),
  "google_id": "112873791435169629738",
  "createdAt": ISODate("2017-01-10T07:20:40.33Z"),
  "updatedAt": ISODate("2017-01-10T07:20:40.33Z")
});
db.getCollection("social_google").insert({
  "_id": ObjectId("58ca1357568a2f86524fb4c7"),
  "account_id": NumberInt(903316983),
  "google_id": "100339287848878010730",
  "createdAt": ISODate("2017-03-16T04:23:51.946Z"),
  "updatedAt": ISODate("2017-03-16T04:23:51.946Z")
});
db.getCollection("social_google").insert({
  "_id": ObjectId("58cf4e4b568a2f86524fb527"),
  "account_id": NumberInt(723675476),
  "google_id": "115790924525179146338",
  "createdAt": ISODate("2017-03-20T03:36:43.282Z"),
  "updatedAt": ISODate("2017-03-20T03:36:43.282Z")
});

/** tmp_col records **/

/** web records **/
