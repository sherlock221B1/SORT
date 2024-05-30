/*
  sort လုပ်တဲ့ အခါမှာ ဒီတိုင်းရိုးရိုးလည်းရတယ်။ 
  အထဲမှာ function တွေထည့်ပြီးလုပ်လည်းရတယ်။
  
  eg. const numbers = [1,4,2,3,4,3,121,24]
  - numbers.sort() ဆိုရင်  
    [1, 121, 2, 24, 3, 3, 4, 4]  ဒါမျိုးပုံစံပြန်ပေးမယ်။
  
  - numbers.sort((a,b)=>a-b) ဆိုရင်
    [1, 2, 3, 3, 4, 4, 24, 121] ဒါမျိုး ငယ်စဉ်ကြီးလိုက်စီပေးမယ်။

  - numbers.sort((a,b)=>b-a) ဆိုရင် 
    [121, 24, 4, 4, 3, 3, 2, 1] ဒါမျိုး ကြီးစဉ်ငယ်လိုက်စီပေးမယ်။



  -string နှစ်ခုကိုနှိုင်ယှဉ်ချင်ရင် str1.localeCompare(str2) ဒါမျိုး နှိုင်းယှဉ်လို့ရ။
  - eg. str1="apple",str2="apple",str3="APPLE",str4= "ball"
    str1.localeCompare(str2) = 0 (တူလို့)
    str1.localeCompare(str3) = -1 (စာလုံးသေးနဲ့ကြီးနဲ့ဆို စာလုံးသေးကအရင်လာမယ်)
    str1.localeCompare(str4) = -1 (a ကအရင်လာတာမို့)
    str4.localeCompare(str1) = 1 (b ကအရင်လာတာမို့)

  string တွေကို sort လုပ်ချင်ရင် ူlocaleCompare() ကိုသုံးပြီးလုပ်ရမယ်။
  eg. words = ["car","apple","ball","Apple"]
  - words.sort((a,b)=> a.localeCompare(b)) ဆိုရင်
    ["apple","APPLE","ball","car"]  ဒါမျိုး ငယ်စဉ်ကြီးလိုက်စီပေးမယ်။

  - words.sort((a,b)=> b.localeCompare(a)) ဆိုရင်
    ["car","ball","APPLE","apple"] ဒါမျိုး ကြီးစဉ်ငယ်လိုက်စီပေးမယ်။

*/

/* Sort */

const containerTag = document.querySelector(".container");
const sortTags = document.querySelectorAll(".dropdown-item");
sortTags.forEach((element) => {
  element.addEventListener("click", (event) => {
  if(event.target.id="ascending"){
    const vediosSortedByAscendingOrder = vedios.sort((a,b)=>a.loacleCompare(b));
    updateSort(vediosSortedByAscendingOrder);
  }else{
    const vediosSortedByDecendingOrder = vedios.sort((a,b)=>b.loacleCompare(a));
    updateSort(vediosSortedByDecendingOrder);
  };
  });
});

const videos = [
  {
    title: "Episode 82 - localStorage (Part 1)",
    thumbnail: "images/thumbnail_82.png",
    uploadDate: new Date(2021, 6, 5),
  },
  {
    title: "Episode 85 - JSON (Part 2)",
    thumbnail: "images/thumbnail_85.png",
    uploadDate: new Date(2021, 6, 8),
  },
  {
    title: "Episode 84 - JSON (Part 1)",
    thumbnail: "images/thumbnail_84.png",
    uploadDate: new Date(2021, 6, 7),
  },
  {
    title: "Episode 83 - localStorage (Part 2)",
    thumbnail: "images/thumbnail_83.png",
    uploadDate: new Date(2021, 6, 6),
  },
];

  const updateSort = (vedios)=>{
    videos.forEach((video) => {
      const videoTag = `
      <div class="videoContainer">
        <img src="${video.thumbnail}" class="img"/>
        <h6>${video.title}</h6>
        <p>${video.uploadDate}</p>
      </div>
    `;
      containerTag.innerHTML += videoTag;
    });  
  }

  updateSort(videos);