module.exports.config = {
	name: "আমল",
  version: "1.0.0",
  permission: 0,
  credits: "SIDDIK",
  description: "Avt pic",
  prefix: true, 
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
 
module.exports.run = async ({ api, event}) => {
   const { threadID, messageID, senderID } = event;
     async function getUserInfo(userID) {
            const userInfo = await api.getUserInfo(userID);
            return {gender: userInfo[userID].gender };
     }
    const gai = ["Em có thể đi theo anh được không? Bởi vì em luôn được cha mẹ bảo là phải theo giấc mơ của mình.",
 
        "Bầu trời xanh, làn mây trắng. Anh yêu nắng hay yêu em?.",
 
        "Nhờ có nắng mới thấy cầu vồng. Nhờ có anh mới thấy màu hạnh phúc.",
 
        "Anh yêu ơi ới ời. Anh đang ở đâu?.",
 
        "Soái ca là của ngôn tình. Còn anh thì chỉ của mình em thôi.",
 
        "Giữa cuộc đời hàng ngàn cám dỗ.Em chỉ cần bến đỗ anh thôi.",
 
        "Bồ công anh bay khi có gió. Em chỉ cười vì ở đó có anh.",
 
        "Chỉ cần anh nói yêu, em sẽ bám theo anh suốt đời. Cô gái đang muốn muốn bật đèn xanh đấy. Cô nàng muốn gợi ý là mình chung thủy lắm đấy. Anh cứ thử tỏ tình mà xem.",
 
        "Ba mươi chưa phải là Tết. Không làm bạn đâu phải là hết, còn có thể làm người yêu mà.",
 
        "Ai nào cho mượn avatar để em đỡ cô đơn đi.",
 
        "Nắng đã có mũ, mưa đã có ô, còn em sẽ có ai?.",
 
        "Chồng tương lai ơi, em chờ anh hơi lâu rồi đấy.",
 
        "Trời đổ mưa rồi sao anh chưa đổ em?.",
 
        "Dạo này anh có thấy mỏi chân? Sao cứ đi trong tim em mãi.",
 
        "Anh ơi, có nóng không? Tim em đang cháy nè.",
 
        "Anh gì ơi ! Anh đánh rơi người yêu này.",
 
        "Sao anh cười mãi thế. Da em đen mất rồi.",
 
        "Ủa đêm rồi mà sao tim mình vẫn đầy nắng thế?.",
 
        "Tim anh còn chỗ không? Em muốn chuyển nhà mà chưa tìm thấy chỗ.",
 
        "Uống nhầm 1 ánh mắt cơn say theo cả đời!.",
 
        "Em thích anh còn nhiều hơn muối ở biển…",
 
        "Em đọc hết “Mười vạn câu hỏi vì sao” những vẫn không hiểu được vì sao em thích anh nhiều thế.",
 
        "Đường thì dài, chân em thì ngắn. Phải đi bao xa mới có thể tìm thấy anh.",
 
        "Em xinh tươi, nhưng em chưa thuộc về ai.",
 
        "Chán thả thính rồi, ai cưa để em đổ một lần coi.",
 
        "Có phải cuộc sống quá bon chen nên anh mãi vẫn chưa tìm đến em?.",
 
        "Nếu có thể hãy để em một lần được yêu anh, được không?.",
 
        "Tuổi tác với chị không quan trọng, vấn đề là em đã có bằng lái chưa?.",
 
        "Trăng lên đỉnh núi trăng tà. Anh yêu em thật hay là yêu chơi?.",
 
        "Nếu ngoài kia nhiều bão tố, thì về đây với em.",
 
        "Em không muốn ngủ muộn, chỉ là đang chờ ai đó chúc ngủ ngon thôi.",
 
        "Cây đa, giếng nước sân đinh. Khi nào em hết một mình đây anh?.",
 
        "Cả thế giới này ai cũng yêu nhau chỉ có riêng mình em hẩm hiu một góc.",
 
        "Cần ai đó quan tâm để thấy mình được yêu thương.",
 
        "Anh gì ơi,cho em mượn đèn pin được không? Trời tối quá, em không tìm thấy đường vào tim anh.",
 
        "Say rượu say bia làm gì? Anh say em đi này.",
 
        "Thách ai nói yêu em đấy.",
 
        "Em ăn BƠ muốn vỡ bụng rồi đây ạ. Làng Face ai HẢO TÂM làm ơn cứu em với. Chỉ cần cái status này 500 like, bụng em lại lành!.",
 
        "Lâu rồi chưa biết cảm giác được đi ăn đi xem phim như thế nào, bài vở nhiều quá. Hôm nay rảnh có ai mời không nhỉ?.",
 
        "Rảnh quá có ai muốn đi chơi với mình không …",
 
        "Này anh, anh xem hộ em xem trong mắt em có gì hộ cái. Thấy chưa, toàn là hình bóng anh đấy!.",
 
        "Anh biết nhiều về Thuốc Mê không? Còn em gói gọn lại đó là anh.",
 
        "Anh có thấy dạo này da em đen không? Vì mải nhìn nụ cười Toả Nắng của anh đấy.",
 
        "Xin lỗi anh gì ơi anh đi đứng kiểu gì thế ngã vào trái tim em rồi kìa!.",
 
        "Anh có biết cài Win không ạ? Cài hộ em cái hệ điều hành nào mà có giao diện chính là Anh được không!.",
 
        "Em nghĩ chúng mình có điểm chung đấy. Đó là anh yêu bản thân anh, còn em thì cũng yêu anh!.",
 
        "Anh gì ơi cho em mượn cái đèn pin được không. Trời tối quá em không biết đường nào để đi đến trái tim anh.",
 
        "Anh biết sửa Tivi không. Sao kênh nào cũng chiếu toàn những nhung nhớ về anh thế này!.",
 
        "Anh ơi anh có hiểu rõ đường đi lối lại ở đây không. Chỉ hộ em xem đi đường nào để thoát khỏi nỗi nhớ anh cái!.",
 
        "Này anh gì ơi, anh có Anh hay Em Trai gì không? Em không tin là trên đời này có tận 2 thiên thần đâu!",
 
        "Ai dám nói nơi hạnh phúc nhất là thiên đường. Người đó chắc hẳn không biết đến khoảnh khắc mỗi khi anh cười rồi!.",
 
        "Nếu không có gì là mãi mãi, anh có thể là “không có gì” của em được không?.",
 
        "Anh có thể cho em mượn một nụ hôn được không? Em hứa là sẽ trả lại đầy đủ."
    ];
    const trai = ["Em có muốn con mình sau này có ADN của anh không?.",
 
                  "আযানের জবাব দেয়া :\n ““যখন তোমরা আযান শুনতে পাও তখন মুয়াজ্জিন যা বলে তার পুনরাবৃত্তি করে যাও। যখন আযান শেষ হয় তখন ((দায়া )চাও, তোমাকে দেয়া হবে।” [আবু দাউদ, আন নাসাঈ",
 
                  "রমজানের এবং শান্তিয়ালের রোজা রাখা :\n “যে ব্যক্তি রমজানের রোজা রাখলো, তারপর শাওয়ালের ৬টি রোজা রাখলো সে যেন এক বছর রোজা রাখলো।” [মুসলিম]",
 
                  "প্রত্যেক মাসে ৩টি রোজা রাখা :\n“প্রত্যেক মাসে ৩টি রোজা রাখা সারা বছর রোজা রাখার সমান।” [বুখারী, মুসলিম]",
 
                  "রোজাদার ব্যক্তিকে ইফতারি করানো :\n“যে ব্যক্তি কোন রোজাদারকে ইফতার করায় সে তার (রাজাদার) সমান প্রতিদান পায়, কিন্তু এর ফলে রোজাদারের প্রতিদানের মধ্যে কোন কমতি হবে না।” [তিরমিজি, ইবন মাজাহ",
 
                  "লাইলাতুল ক্বদরে ইবাদাতি করা :\n“মর্যাদাপূর্ণ এ রাখিটি হাজার মাসের চেয়ে উত্তম”। [স্বন্দর, ৯৭:৩]",
 
                  "ইসতিগফার করা : -\n“যে ব্যক্তি ঈমানদার নারী পুরুষের জন্য ইসতিগফার করে, আল্লাহ প্রত্যেকের জন্য ১টি করে নেক আমল লিখে দেন।-রিয়াদুস সালেহিন",
 
                  "যিলহাজ্জ এর প্রথম ১০ দিন বেশী বেশী ইবাদাত করা :\n ‘“এমন কোন দিন নেই যেদিনে কৃতি আমল এসব দিন অর্থাৎ যিলহাজ্জ এর প্রথম ১০ দিনের নেক আমলের মত আল্লাহর কাছে সর্বাধিক প্রিয়।” সাহাবীরা জিজ্ঞেস করলেন, “ইয়া রসূলুল্লাহ!!..",
 
                  "কুরআনের সূরা গুলো বার বার তিলাওয়াতি করা :\n ‘স্কুল হুওয়াল্লাহু আহাদ' কুরআনের এক তৃতীয়াংশ এবং ‘স্কুল ইয়া আইযুহাল কাফিরুন’ কুরআনের চার ভাগের এক ভাগ।” [আতি তাবারানী]",
 
                  "রিবার্ড (রাত জেগে ইবাদাতি করা) :\n‘“একদিন ও একরাতি স্বদেশের (মুসলিম দেশের সীমান্ত, যেখানে শত্রুর হামলার আশংখা আছে) সীমান্ত পাহারা দেয়া এক মাস ধরে রোজা রাখা ও রাতে ইবাদাত করার চাইতে বেশী মূল্যবান।",
 
                  "লাইলাতুল বন্দরে ইবাদাতি করা : \n- “মর্যাদাপূর্ণ এ রাতটি হাজার মাসের চেয়ে উত্তম”। [স্বর, ১৭:৩]",
 
                  "মানুষের প্রয়োজন পূরণ করা : \n‘যে ব্যক্তি তার মুসলমান ভাইয়ের প্রয়োজন পূরণ করে, আল্লাহ তার প্রয়োজন পূর্ণ করে দেন। যে ব্যক্তি তার মুসলমান ভাইয়ের কোন অসুবিধা (বিপদ) দূর করে দেয়, আলাহ এর বিনিময়ে ....",
 
                  "যিকর :\n“সুবহানালা-হি ওয়াল হামদু লিলা-হি, ওয়ালা ইলা-হা ইলালাহ-হু 'আলাহু 'আববার” এই কালিমা গুলো বলা, সূর্য যে সমস্ত জিনিসের ওপর উদিত হয়, সেই সমুদয় জিনিসের অপেক্ষা....",
 
                "“আলাহ কি তোমাদের জন্য ইশার সলাতি জামা'আতে পড়া হজ্জের সমান এবং ফজরের সলাত জামা'আতে পড়া ওমরাহর সমান করেন নি এবং “যে ফরজ সলাত জামা'আতে পড়ার জন্য হেঁটে যায়, তা হজ্জের সমান এবং যে নফল সলাত পড়ার জন্য হেঁটে যায়, তার সওয়াব নফল ....",
 
                  "সদকায়ে জারিয়াহ :\nরাসুলুল্লাহ (সা.) ইরশাদ করেন, 'যখন মানুষ মারা যায়, তখন তার আমল বন্ধ হয়ে যায়; কিন্তু তিনটি জিনিস বন্ধ হয় না- সদকায়ে জারিয়াহ, ওই ইলম, যা দ্বারা মানুষ উপকৃতি হয়; সুসন্তান,...",
 
                  "গোপনে নফল পড়ার ফজিলত :\nরাসুল (সা.) ইরশাদ করেন,জনসম্মুখের তুলনায় লুকিয়ে নফল নামাজ পড়ার মধ্যে ২৫ গুণ বেশি সস্তিয়াব।",
 
                  "“যে ব্যক্তি ফজরের সলাত জামা'আতের সাথে পড়ে, তারপর সূর্য ওঠার আগ পর্যন্ত আলাহর যিকর করে, তারপর দু' রাকমিতি সলাত পড়ে, সে যেন হজ্জ এবং ওমরাহর সওয়াব পূর্ণ করল৷ [রসূলুলাহ সালালাহু আলাইহি ওয়া সালাম একথাটি তবার জোড়ে জোড়ে পুনরাবৃত্তি করলেন।] .",
 
                  "সুরা ইখলাছের ফজিলত :\nরাসুল (সা.) ইরশাদ করেন, '(তোমরা কি কেউ প্রতি রাতে কোরআন শরিফের এক-তৃতীয়াংশ তিলাওয়াত করতে অক্ষম? তাহলে সে প্রতি রাতে সুরা ইখলাছ পড়বে। তাহলে কোরআনের ....",
 
                  "মানুষের উপকার করার ফজিলত :\nরাসুলুল্লাহ (সা.) ইরশাদ করেন, 'কোনো মুসলিম ভাইয়ের প্রয়োজনে কিছুক্ষণ সময় দেওয়া আমার কাছে এক মাস মসজিদে ইতেকাফ করার চেয়েও বেশি পছন্দনীয়।' (আল মু'জামুল",
 
                  "যখন কেউ তার ভাইয়ের জন্য দো'আ করে, তখন ফিরিশতারা বলেন, আমিন, তোমার জন্যও 'তা৷'' [সাহীহ আল জামি: ২১৪৩] হে আল্লাহ! 'অবশ্যই আমি তোমার নিকট কঠিন দুরবস্থা (অল্প ধনে জনের আধিক্য), দুর্ভাগ্যের নাগাল, মন্দ ভাগ্য এবং দুশমন-হাসি থেকে রক্ষা কামনা ....",
 
                  "অন্য হাদিসে ইরশাদ হচ্ছে, \n'হজরত আবু হুরায়রা (রা.) থেকে বর্ণিত, তিনি বলেন, রাসুল (সা.) ইরশাদ করেন, দুটি বাবণ্য ভ্রমন রয়েছে, যা বলা সহজ, আমলের পাল্লায় অনেক ভারী আ 'আল্লাহর কাছেও 'অধিক পছন্দনীয়। সেটি হলো, 'সুবহানাল্লাহি ওয়া বিহামদিহি সুবহানাল্লাহিল .....",
 
                  "আমলের নিয়তেও সওয়াব মেলে :\nরাসুল (সা.) ইরশাদ করেন, 'যদি কোনো ব্যক্তি রাতে শয়নকালে এই নিয়ত করে যে সে রাতে উঠে নামাজ পড়বে; কিন্তু প্রচন্ড ঘুমের কারণে সকাল হয়ে যায়, তাহলে সে তার নিয়ত অনুযায়ী...",
 
                  "রোগী দেখার ফজিলত : -\nরাসুলুল্লাহ (সা.) ইরশাদ করেন, 'যে ব্যক্তি কোনো মুসলমান ভাইয়ের রোগের খোঁজখবর নেয়, আল্লাহ সস্তির হাজার ফেরেশতাকে তার মাগফিরাতের দোয়ায় নিযুক্ত করে দেন। সে দিনের যে স...",
 
                  "বিশুদ্ধ নিয়ত :\n -নিয়ত অর্থ সংকল্প। এটি মনের সঙ্গে সংশ্লিষ্ট একটি আমল ৷ প্রত্যেক কাজ, তা দ্বীনী কাজ হোক কিংবা দুনিয়াবী, শুরুতেই নিয়তিকে শুদ্ধ করা কর্তব্য। সব কাজ আল্লাহর সন্তুষ্টির জন্য করার.....",
 
                  "আবু যর (রাঃ) থেকে রেওয়ায়েত করেছেন যে,\n রাসূলুল্লাহ (সঃ)বলেছেনঃ তিন ব্যাক্তির সাথে রোজ কিয়ামতে আল্লাহ পাক কথা বলবেন না । তাদের দিকে দৃষ্টিপাত করবেন না৷ তাদের কে পবিত্র করবেন না ৷ আর ঈদের জন্য রয়েছে ভীষন আযাব। রেওয়ায়েতকারী ব...",
 
                  "হযরত আবু হুরাইরা (রাঃ)\n‎‫(أبي هريرة رضي الله عنه)‬‎ হইতে বর্ণিত আছে যে, রসুলুল্লহ সল্লাল্লহু আ'লাইহি ওয়া সাল্লাম এরশাদ করিয়াছেন, (যখন) ...",
 
                  "রাসূল (সা:) বলেন.... অন্ধকারের মধ্যে যাহারা মসজিদে বেশী বেশী যাতায়ত করে, কেয়ামতের দিনের জন্য তাহাদেরকে পূর্ণ নূরের সুসংবাদ শুনাত্ত।” – (আল হাদীস)",
 
                  "আবূ হুরায়রা (রাঃ) বর্ণনা করেছেন :\nআল্লাহর রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম) বলেছেনঃ যে ব্যক্তি জুমু'আর দিন জানাবতি গোসলের ন্যায় গোসল করে এবং সালাতের জন্য আগমন করে সে যেন একটি উট কুরবানী কর...",
 
                  "হজরত নবী করিম (সা.) বলেছেন,\nকোনো সৎ কাজকেই কখনো খুচ্ছ জ্ঞান করবে না। যদিও তা হয় তোমার ভাইয়ের সঙ্গে হাসিমুখে সাক্ষাত। -সহিহ মুসলিম কারণ এই ধরনের সহজ আমলের মধ্যেও অনেক সময় নির্মিত থাকে অনেক প্রাপ্তি ও পুরস্কার। হাদিস শরিফে এমন অনেক ....",
 
                  "আন-নওয়াস বিন সাম'আন রাদিয়াল্লাহু 'আনহু হতে বর্ণিত হয়েছে, তিনি নবী সাল্লাল্লাহ “উত্তম ‘আলাইহি ওয়াসাল্লাম হতে বর্ণনা করেছেন, নবী সাল্লাল্লাহু 'আলাইহি ওয়াসাল্লাম বলেন: ' চরিত্র হচ্ছে নেবী, আর গোনাহ্ তাকে বলে যা তোমার মনকে সংশয়ের মধ্যে ফেলে এবং তা লো....",
 
                  "ভালো কাজ মন্দ কাজকে মুছে দেয় :\nআবূ যার জুনদুর বিন জুনাদাহ্ এবং আবূ আব্দুর রহমান মু'আয বিন জাবাল রাদিয়াল্লাহু “আনহুমা হতে বর্ণিত আছে, তারা বলেন, রাসূলুল্লাহ্ সাল্লাল্লাহু 'আলাইহি ওয়াসাল্লাম বলেছে...",
 
                  "প্রত্যেক ফরজ সলাত শেষে ৩৩ বার সুবহানাল্লাহ, ৩৩ বার আলহামদুলিল্লাহ্, ৩৩ বার আল্লাহ আকবার এবং ১ বার (লা ইলা-হা ইল্লাল্লাহু ওয়াহদাহু লা শারীকা লাহু, লাহুল মুলকু ওয়ালাহুল হামদু ওয়াহুয়া ‘আলা কুল্লি শাই'ইন কাদীর) পাঠ করুণ এতে আপনার অতীতের সব পাপ .....",
 
                  "সকালে ১০০ বার ও সন্ধ্যায় ১০০ বার সুবহানাল্লাহি ওয়া বিহামদিহি পাঠ করলে কিয়ামতের দিন তাব চেয়ে বেশী সওয়াব আর কারো হবে না। সহিহ মুসলিম, হাদিস নং- ২৬৯২।",
 
                  "প্রত্যেক ওযুর পর কালেমা শাহাদত পাঠ করুন (আশহাদু আল্লা-ইলাহা ইল্লাল্লাহু ওয়াহ্দাহু লা শারী বা লাহু ওয়া আশহাদু আন্না মুহাম্মাদান 'আব্দুহু ওয়া রাসূলুহু) । এতে জান্নাতের ৮টি দরজার যে বোন দরজা দিয়ে প্রবেশ করতে পারবেন। সহিহ মুসলিম, হাদিস নং- ২৩৪।",
 
                  "প্রত্যেক ফরজ সলাত শেষে আয়াল কুরসি পাঠ করুণ এতে মৃত্যুর সাথে সাথে জান্নাতে যেতে পারবেন৷ সহিহ নাসাই, সিলসিলাহ সহিহাহ, হাদিস নং- ৯৭২।",
 
                  "সকালে ও বিকালে ১০০ বার সুবহানাল্লাহ্, ১০০ বার আলহামদুলিল্লাহ্, ১০০ বার আল্লাহ (আববার এবং ১০০ বার লা ইলা-হা ইল্লাল্লাহু ওয়াহদাহু লা শারীকা লাহু, লাহুল মুলকু ওয়ালাহুল হামদু ওয়াহুয়া 'আলা কুল্লি শাই'ইন কাদীর পাঠ করলে অগণিত সওয়াব হবে ....",
 
                  "বাড়িতে সালাম দিয়ে প্রবেশ করুণ এতে আল্লাহ তা'লা নিজ জিম্মাদারিতে আপনাকে জান্নাতে প্রবেশ করাবেন৷ ইবনু হিব্বান, হাদিস নং- ৪৯৯, সহিহ তারগিব, হাদিস নং- ৩১৬।",
 
                  "বাজারে প্রবেশ করে- (লা ইলা-হা ইল্লাল্লাহু ওয়াহদাহু লা শারীকা লাহু, লাহুল মুলকু ওয়ালাহুল হামদু মুহয়ী ওয়া য়াযীতু ওয়া হুয়া হাইয়ুল লা য্যামূত, বিয়াদিছিল খাইরু ওয়াহুয়া 'আলা কুল্লি শাই'ইন কাদীর) পাঠ করুণ এতে ১০ লক্ষ পুণ্য হবে, ১০ লক্ষ পাপ মোচন হবে, ১০ লক্ষ ....",
 
                  "সকালে ১০০ বার ও বিকালে ১০০ বার সুবহানাল্লাহিল আজিম ওয়া বিহামদিহি পরলে সৃষ্টিকুলের সমস্ত মানুষ থেকে বেশী মর্যাদা দেওয়া হবে। সহিহ আবু দাউদ, হাদিস নং- ৫০৯১। হজরত জাবের (রা.) থেকে বর্ণিত, রাসুল (সা.) ইরশাদ করেন, 'যে ব্যক্তি 'সুবহানাল্লাহিল আজিম ওয়া",
 
                  "রাসুল (সাঃ)-এর উপর সকালে ১০ বার ও সন্ধ্যায় ১০ বার দরুদ পড়ুন এতে আপনি নিশ্চিত রাসুল (সাঃ)-এর সুপারিশ পাবেন। তবরানি, সহিহ তারগিব, হাদিস নং- ৬৫৬ ।",
 
                  "প্রতিরাতে সূরা মুলক পাঠ করুণ এতে কবরের শাস্তি থেকে মুক্তি পেয়ে যাবেন। সহিহ নাসাই, সহিহ তারগিব, হাকিম হাদিস নং- ৩৮৩৯, সিলসিলাহ সহিহাহ, হাদিস নং- ১১৪০।",
 
                  "প্রতিমাসের আয়ের একটা অংশ প্রতিমখানা বা মসজিদ মাদ্রাসা বা গরিব-দুখি, বিধবা ও দুস্থদের মাঝে দান করবেন হোক সেটা অতি অল্প এতে আপনি আল্লাহ তা'লার কাছে জিহাদকারির সমতুল্য হবেন৷ সহিহ বুখারি, হাদিস নং- ৬০০৭।",
 
                  "মহিলারা ৪টি কাজ করবেন, ১- ৫ ওয়াক্ত সলাত ২- রমজানের সিয়াম, ৩- লযযাস্থানের হেফাজত, ৪- স্বামীর আনুগত্য করুণ এতে জান্নাতের যে কোন দরজা দিয়ে প্রবেশ করতে পারবেন। সহিহ ইবনু হিব্বান, হাদিস নং- ৪১৬৩ ।",
 
                  "ঘুম থেকে উঠে ঘুমের দুয়া পড়া৷",
 
                  "জামাতে ইমামের প্রথম তাকবীরের সাথে ৪০ দিন সলাত আদায় করুন এতে আপনি নিশ্চিত জাহান্নাম থেকে মুক্তি পেয়ে যাবেন৷ তিরমিজি, সিলসিলাহ সহিহাহ, হাদিস নং-৭৪৭, সা তারগিব, হাদিস নং- ৪০৪)।",
 
                  "মসজিদে ফজরের সলাত আদায় করে বসে দোয়া জিকির পাঠ করুণ এবং সূর্য উঠে গেলে ২ রাবতি চাপ্তের সলাত আদায় করুণ এতে প্রতিদিন নিশ্চিত কবুল ১ টি হজ্জ ও উমরার সওয়াব পাবেন৷ তিরমিজি, তারগিব হাদিস নং- ৪৬১।",
 
                  "প্রতিটি ভালো কাজ ডান দিক দিয়ে বিসমিল্লাহ বলে শুরু করা।",
 
                  "মসজিদে ডান পা দিয়ে দরুদ ও দুয়া পড়ে ঢুকা এবং বাম পা দিয়ে দরুদ ও দুয়া পড়ে বের হওয়া।",
 
                  "ওযুর পূর্বে মিসওয়াক করার অভ্যাস করা। - ওযুর শুরুতে এবং শেষে হাদিসে বর্ণিত দুয়া পড়া।",
 
                  "ঘর থেকে বের হওয়ার সময় ডান পা দিয়ে দুয়া পড়ে বের হওয়া এবং প্রবেশের সময়ও ডান পা দিয়ে প্রবেশ করে সালাম দেয়া৷ যদিও ঘরে কেউ না থাকুক না কেন সালাম দেয়া সুন্নাহ, আল্লাহর হুকুম৷ যদি ঘরে কেউ নাকে' তবে এই সালাম ঘরের ফিরিশতাদের জন্য।",
 
                  "বাথরুমে যেতে দুয়া পড়ে বাম পা দিয়ে প্রবেশ করা, বের হওয়ার সময় ডান পা দিয়ে বের হয়ে দুয়া পড়া' [বাথরুমে কোন দুয়া পড়া যাবে না",
 
                  "ফরজ সালাত শেষে হাদিসে বর্ণিত যিকির, দুয়ার আমল করা। -ফজর ও মাগরিবের পর সূরা হাশরের শেষ তিন আয়াত পড়া, তিন স্কুল পড়ে শরীর দম করা, ইত্যাদি হাদিসে বর্ণিত আমল করা৷",
 
                  "রাস্তার ডানপাশে চলার সর্বোচ্চ চেষ্টা করা। না পারলে ভিন্ন কথা।",
 
                  "আযানের জবাব দেয়া, আযানের পর হাদিসে বর্ণিত দুয়া পড়া। (হাতি উত্তোলন না করে) চলতি ফিরতে ছোট বড় সকলকে সালাম দেয়া। সালাম দিয়ে কথা শুরু ও শেষ করা। শুদ্ধভাবে সালাম দেয়া৷",
 
                  "পানি খাওয়ার সময় ৬টি সুন্নত ভালোভাবে মেনে খাওয়ার চেষ্টা করা।",
 
                  "জামা ও জুতা পরার সময় ডান দিক থেকে পরা এবং খুলার সময় বামদিকে আগে খুলা সম্ভব হলে হাদিসে বর্ণিত দুয়া মুখস্থ করে আমলের অভ্যাস করা।",
 
                  "প্রতি বা যেকোন খাবার খাওয়ার সময় সমতল জায়গায় বসে দপ্তরখানা বিছিয়ে বিসমিল্লাহ বলে দুয়া পড়ে খাণ্ডিয়া, কিছু পরে গেলে তুলে ধুয়ে খাওয়া, খাওয়া শেষে আলহামদুলিল্লাহ্ পড়া৷",
 
                  "ঘুমানোর আগে সূরা মূলক তিলাওয়াত করা, তিন স্কুল(ইখলাস,ফালাঙ্ক,নাস) পড়ে তিনবার শরীর দম করা, ঘুমের দুয়া পড়া, আয়াতুল কুরসী পড়া, সূরা কাফিরুন পড়ে ডান কাত হয়ে শোয়া।",
 
                  "আত্মীয়তার সম্পর্ক রক্ষা করা : -\n“কেউ যদি চায় যে তার মূলধন বৃদ্ধি করা হোক এবং বয়স দীর্ঘ করা হোক, তবে তাকে বল সে যেন আত্মীয়তার সম্পর্ক রক্ষা করে।” [বুখারী, মুসলিম",
 
                  "২টি পবিত্র হারামে (মক্কা ও মাদীনা) সলাত পড়া : “আমার এই মাসজিদে সলাত পড়া অন্য কোথাও ১ হাজার বার সলাত পড়ার চেয়েও উত্তম, শুধুমাত্র মাসজিদুল হারাম ছাড়া এবং মসজিদুল হারাম এ সলাত পড়া অন্য কোথাও প্রকাশ হা....",
 
                  "ঘুমের মাঝখানে কোন খারাপ স্বপ্ন দেখলে উঠে বামপাশে তিনবার থু থু ফেলা এবং আউযুবিল্লাহি মিনাশ শাইত্বনির রজিম পড়ে আল্লাহর কাছে শয়তানের হাত থেকে পানাহ চাওয়া৷",
 
                  "“যে ব্যক্তি ইশার সলাত জামা'আতে পড়ল সে যেন অর্ধেক রতি ইবাদাত করল। আর যে ব্যক্তি ফজরের সলাতি জামা'আতে পড়ল সে যেন পুরো রাতি ইবাদাতি করল।” ' [মুসলিম]",
 
                  "“ জামা'আতে সলাত পড়া একাকী সলাত পড়ার চাইতে ২৭ গুন বেশী মর্যাদার।” [বুখারী, মুসলিম",
 
                  "যে জুমু'আহর দিনে গোসল করে, তারপর প্রথম খুৎবার পূর্বেই উপস্থিতি থাকে, পায়ে হেটে আসে, ইমামের কাছে বসে এবং মনোযোগ দিয়ে খুৎবা স্তনে ও বোন কথা না বলে -- তাহলে প্রতিটি পদক্ষেপের বিনিময়ে একবছর সলাত পড়া ও রোজা রাখার সমান সওয়াব পাবে...",
 
                  "যে ব্যক্তি ঘর থেকে নিজেকে পবিত্র করে, তারপর মাসজিদুল কু’বায় আসে এবং সে যেন ওমরাহর সওয়াব পেল।” [আন নাসাঈ, ইবন মাজাহ]",
 
                  "“ফরজ সলাত ছাড়া মানুষের সলাতের মধ্যে সেই সলাত উৎকৃষ্ট, যা সে ঘরে পড়ে।” ' [বুখারী, মুসলিম]",
 
                  "“যে দুনিয়াবি বোন কারন ছাড়া দ্বীনি ইলম শিখা বা শিখানোর উদ্দেশ্যে মাসজিদে যায়, সে ঐ ব্যক্তির মতি যে তার হজ্জ পূর্ণ করেছে।” [অতি তিাবারানী]",
 
                  "“যে ব্যক্তি নিজের গৃহ থেকে পবিত্রতা অর্জন করে (অজু ও প্রয়োজনে গোসলও করে) (আল্লাহর গৃহের মধ্য থেকে বোন একটি গৃহের দিকে যায়, আল্লাহর ফরজের মধ্য থেকে কোন একটি ফরজ আদায় করার উদ্দেশ্যে, তার একটি পদক্ষেপে একটি গুনাহ ক্ষমা করা হয় এবং অন্য পদক্ষেপ....",
 
                  "“যে ব্যক্তি ফজরের সলাতি জামাআতের সাথে পড়ে, তারপর সূর্য ওঠার আগ পর্যন্ত আল্লাহর ঠিকার করে, তারপর দু' রাকাতঅতি সলাত পড়ে, সে যেন হজ্জ এবং ওমরাহর সওয়ার পূর্ণ করল। [রসূলুল্লাহ সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম একথাটি তবার জোড়ে জোড়ে পুনরাবৃত্তি করলেন। [...",
 
                  "“রসূলুল্লাহ (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম) প্রথম সারির জন্য ৩ বার এবং দ্বিতীয় সারির জন্য ১ বার ক্ষমা প্রার্থনা করতেন।' [আন নাসাঈ, ইবন মাজাহ]",
                  
 ];
var mention = Object.keys(event.mentions);
   const data = await getUserInfo(senderID);
  if (Object.keys(event.mentions).length == 1) {
    if (data.gender == 2 ) {
        api.sendMessage(`Gửi lời thả thính đến ${event.mentions[on].replace("@", "")}:\n${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID);
    }
    if (data.gder == 1 ) {
        api.sendMessage(`Gửi lời thả thính đến ${event.mentions[mention].replace("@", "")}:\n${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  else {
    if (data.gender == 2) {
     api.sendMessage(`${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID); 
    }
    if (data.gender == 1 ) {
     api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  
  }
 
