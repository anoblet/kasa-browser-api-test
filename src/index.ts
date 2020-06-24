export class Kasa {
  constructor(private config: { username: string; password: string }) {
      const response = fetch("https://wap.tplinkcloud.com", {
          body: JSON.stringify({
              "method": "login",
              "params": {
                "appType": "Kasa_Android",
                "cloudPassword": config.password,
                "cloudUserName": config.username,
              }
          }),
          method: "POST"
      });
      console.log(response)
  }
}
