ABOUT ME
name : SK SIDDIK KHAN

age : N\A

link : [facebook]
(https://www.facebook.com/rxsiddik1)

CONTACT
modified : [SK SIDDIK](https://www.facebook.com/rxsiddik1)

UPDATES
• configure console output in SIDDIK/configs/console.js.

• fixed spam in ban system.

• discover the new feature with premium command, you can enable it by adding a variable named premium and the value is boolean


premium ussage example

module.exports.config = {
  name: "example",
  version: "example",
  credits: "SK SIDDIK",
  permission: 0,
  description: "example",
  category: "example",
  usages: "example",
  prefix: true,
  premium: true, // this is the example of premium feature ussage
  cooldown: 0,
  dependencies: {
    "": ""
  }
}
UPCOMING UPDATE :
adding aliases for each commands
CONFIG AND CUSTOM
Siddik.js : configure auto restart and auto accept pending messages.

Siddik.json : configure bot name, bot prefix, bot operators and admins.

Siddikstate.json : account cache data.

BOX APPROVAL
box approval is set as default, you can disable it on Siddik.json by setting the approval value into false

you can approve box by using approve command without using prefix, how to use? just type approve (box/remove) (uid/tid)

EXAMPLES :

view approved list

approve list
add box from approved list

approve box 4834812366643016
remove box from approved list

approve remove 4834812366643016
HOW TO GET 'SiddikSTATE.JSON' DATA?
to get Siddikstate.json data, please follow these steps :

step 1 : download fbstate exporter
step 2 : download kiwi browser from the play store.

step 3 : open kiwi browser and tap on the three dots at the top right corner.

step 4 : select extensions from the menu.

step 5 : tap on + from (.zip/ .crx/ .user.js) and choose the file "fbstate_exporter-1.0.xpi (1).zip" that you downloaded.

step 6 : once the extension is added, go to www.facebook.com and log in to the account you want to use as a bot.

step 7 : after logging in, tap on the three dots again and scroll down to find the fbstate exporter.

step 8 : click on it and then click on copy fbstate.

step 9 : paste the copied data into the Siddikstate.json file.

step 10 : finally, click on run to initiate the bot.

HOW TO ADD COMMANDS?
module.exports.config = {
  name: "example", // command name.
  version: "1.0.0", // command version.
  permission: 0, // set to 1 if you want to set the permission into a group admins, set to 2 if you want to set the permission into a bot admins, set to 3 if you want to set the permission into a bot operators.
  credits: "SK SIDDIK",
  description: "example", // command description.
  prefix: false, // set to true if you want to use the command with prefix, set to false if you want to use the commands without prefix.
  category: "example", // command category.
  usages: "example", // command ussage.
  cooldowns: 5, // 5 seconds command cooldown.
  dependencies: {
    "name": "version" // not required but if the command have a npm packages, you can type the package name and version to automatically install the package.
  }
};

module.exports.run = async ({api, event, args}) => {
  // start coding
}
