function DiscordHook(name, address, postCode, city, email) {
    const botUrl = 'https://discord.com/api/webhooks/1009155207361466508/-cl2sZ7TGrIbbxZdHKyLc_GZNcJsJSQq7J3sf9hA1x-mjva1DRfvlKT0T9fKtGtswY18'
    const botMessage = {
        "content": `Order received from ${name}. The address is: ${address}, ${city}, ${postCode}. Their email is ${email}`
    }
    fetch(botUrl,{
        "method":"POST", "headers":{"content-type":"application/json"},
        "body": JSON.stringify(botMessage)
    })
}

export default DiscordHook;