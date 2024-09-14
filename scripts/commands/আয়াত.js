/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "আয়াত",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "Avt pic",
  prefix: true, 
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["ِلَ عَمَلًا صَالِحًا فَاُولٰٓئِکَ یُبَدِّلُ اللّٰهُ سَیِّاٰتِهِمۡ حَسَنٰتٍ ؕ وَ کَانَ اللّٰهُ غَفُوۡرًا رَّحِیۡمًا ﴿۷۰﴾\nযারা তওবা করে, বিশ্বাস ও সৎকাজ করে[1] আল্লাহ তাদের পাপকর্মগুলিকে পুণ্য দ্বারা পরিবর্তন করে দেবেন।[2] আর আল্লাহ চরম ক্ষমাশীল, পরম দয়ালু।\nExcept for those who repent, believe and do righteous work. For them Allah will replace their evil deeds with good. And ever is Allah Forgiving and Merciful",
"۲﴾\n-সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সৃষ্টিকুলের রব.!\n[All] praise is [due] to Allah, Lord of the worlds",

             
" بِاٰیٰتِ اللّٰهِ ۚ وَ اُولٰٓئِکَ هُمُ الۡکٰذِبُوۡنَ ﴿۱۰۵﴾\n-যারা আল্লাহর নিদর্শনে বিশ্বাস করে না, তারাই শুধু মিথ্যা উদ্ভাবন করে এবং তারাই মিথ্যাবাদী।\nThey only invent falsehood who do not believe in the verses of Allah, and it is those who are the liars.",

             
"اللّٰهُ ۚۖ وَ هُوَ خَیۡرُ الۡحٰکِمِیۡنَ ﴿۱۰۹﴾\n-আর তোমার নিকট যে ওহী পাঠানো হচ্ছে, তুমি তার অনুসরণ কর এবং সবর কর, যতক্ষণ না আল্লাহ ফয়সালা করেন। আর তিনিই উত্তম ফয়সালাকারী।\nAnd follow what is revealed to you, [O Muhammad], and be patient until Allah will judge. And He is the best of judges.",

             
"قَالَ رَبِّ اِنِّیۡ وَهَنَ الۡعَظۡمُ مِنِّیۡ وَ اشۡتَعَلَ الرَّاۡسُ شَیۡبًا وَّ لَ اَکُنۡۢ بِدُعَآئِکَ رَبِّ شَقِیًّا ﴿۴﴾\n-সে বলেছিল, ‘হে আমার রব! আমার হাড়গুলো দুর্বল হয়ে গেছে এবং বার্ধক্যবশতঃ আমার মাথার চুলগুলো সাদা হয়ে গেছে। হে আমার রব, আপনার নিকট দো‘আ করে আমি কখনো ব্যর্থ হইনি!\nHe said, My Lord, indeed my bones have weakened, and my head has filled with white, and never have I been in my supplication to You, my Lord, unhappy.",

             
"الۡجُوۡعِ وَ نَقۡصٍ مِّنَ الۡاَمۡوَالِ وَ الۡاَنۡفُسِ وَ الثَّمَرٰتِ ؕ وَ بَشِّرِ الصّٰبِرِیۡنَ ﴿۱۵۵﴾ۙ\nআর আমি অবশ্যই তোমাদেরকে পরীক্ষা করব কিছু ভয়, ক্ষুধা এবং জান-মাল ও ফল-ফলাদির স্বল্পতার মাধ্যমে। আর তুমি ধৈর্যশীলদের সুসংবাদ দাও।\nAnd We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient",
             
             
"الۡجُوۡعِ وَ نَقۡصٍ مِّنَ الۡاَمۡوَالِ وَ الۡاَنۡفُسِ وَ الثَّمَرٰتِ ؕ وَ بَشِّرِ الصّٰبِرِیۡنَ ﴿۱۵۵﴾ۙ\nআর আমি অবশ্যই তোমাদেরকে পরীক্ষা করব কিছু ভয়, ক্ষুধা এবং জান-মাল ও ফল-ফলাদির স্বল্পতার মাধ্যমে। আর তুমি ধৈর্যশীলদের সুসংবাদ দাও।\nAnd We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient",
             
             
"قَالَ رَبِّ اِنِّیۡ ظَلَمۡتُ نَفۡسِیۡ فَاغۡفِرۡ لِیۡ فَغَفَرَ لَهٗ ؕ اِنَّهٗ هُوَ الۡغَفُوۡرُ الرَّحِیۡمُ ﴿۱۶﴾\n-সে বলল, ‘হে আমার রব, নিশ্চয় আমি আমার নফসের প্রতি যুলম করেছি, সুতরাং আপনি আমাকে ক্ষমা করে দিন’। অতঃপর তিনি তাকে ক্ষমা করলেন। নিশ্চয় তিনি অতি ক্ষমাশীল, পরম দয়ালু।\nHe said, 'My Lord, indeed I have wronged myself, so forgive me', and He forgave him. Indeed, He is the Forgiving, the Merciful",
             

"اَلۡهٰکُمُ التَّکَاثُرُ ۙ﴿۱﴾\n-প্রাচুর্যের প্রতিযোগিতা তোমাদেরকে ভুলিয়ে রেখেছে।\nCompetition in [worldly] increase diverts you.",

             
" وُفِّیَتۡ کُلُّ نَفۡسٍ مَّا کَسَبَتۡ وَ هُمۡ لَا یُظۡلَمُوۡنَ ﴿۲۵﴾\n-সুতরাং কী অবস্থা হবে? যখন আমি তাদেরকে এমন দিনে সমবেত করব, যাতে কোন সন্দেহ নেই। আর প্রত্যেককে তার কৃতকর্মের প্রতিদান পূর্ণভাবে দেয়া হবে এবং তাদেরকে যুলম করা হবে না।\nSo how will it be when We assemble them for a Day about which there is no doubt? And each soul will be compensated [in full for] what it earned, and they will not be wronged.",
"ۙ۴۲﴾\n-আর নিশ্চয় তোমার রবের নিকটই হলো শেষ গন্তব্য।\nAnd that to your Lord is the finality.",
             
  
"یَعۡلَمُ خَآئِنَۃَ الۡاَعۡیُنِ وَ مَا تُخۡفِی الصُّدُوۡرُ ﴿۱۹﴾\n-চক্ষুসমূহের খেয়ানত এবং অন্তরসমূহ যা গোপন রাখে তিনি তা জানেন।\nHe knows that which deceives the eyes and what the breasts conceal.",
             
             
"فَلَا تَعۡلَمُ نَفۡسٌ مَّاۤ اُخۡفِیَ لَهُمۡ مِّنۡ قُرَّۃِ اَعۡیُنٍ ۚ جَزَآءًۢ بِمَا کَانُوۡا یَعۡمَلُوۡنَ ﴿۱۷﴾\n-অতঃপর কোন ব্যক্তি জানে না তাদের জন্য চোখ জুড়ানো কী জিনিস লুকিয়ে রাখা হয়েছে, তারা যা করত, তার বিনিময়স্বরূপ।\nAnd no soul knows what has been hidden for them of comfort for eyes as reward for what they used to do",
  ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/a/t5NUy1P.jpeg","https://i.imgur.com/E4Gznnq.jpeg",
"https://i.imgur.com/9fkqZWG.jpeg",
"https://i.imgur.com/BCBq7IG.jpeg",
"https://i.imgur.com/lVlr0H8.jpeg",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
