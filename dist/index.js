export class Kasa {
    constructor(config) {
        this.config = config;
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
        console.log(response);
    }
}
