document.addEventListener('DOMContentLoaded', () => {
    // Homepage: Redirect to Online Database
    const onlineDatabaseBtn = document.getElementById('online-database-btn');
    if (onlineDatabaseBtn) {
      onlineDatabaseBtn.addEventListener('click', () => {
        window.location.href = "online-database.html";
      });
    }
    const eBooksbtn = document.getElementById('e-Books-btn');
    if (eBooksbtn) {
      eBooksbtn.addEventListener('click', () => {
        window.location.href = "E-books.html";
      });
    }
    const ejournalbtn=document.getElementById('e-journals-btn');
    if(ejournalbtn){
      ejournalbtn.addEventListener('click',()=>{
        window.location.href="E-journal.html"
      });
    }
    const servicebtn=document.getElementById('Services-btn');
    if(servicebtn){
      servicebtn.addEventListener('click',()=>{
        window.location.href="services.html"
      });
    }
    // Online Database: Redirect individual category buttons
    const linkMap = {
      'fashion-studies': 'fashion-studies.html',
      'art-design': 'art-design-communication.html',
      'apparel-textile': 'apparel-textile-industry.html',
      'management-tech': 'management-technology.html',
      'multidisciplinary': 'multidisciplinary-periodicals.html',
      'general-news': 'general-news.html'
    };
    
  
    for (const id in linkMap) {
      const button = document.getElementById(id);
      if (button) {
        button.addEventListener('click', () => {
          window.location.href = linkMap[id]; // Opens in the same tab
        });
      }
    }
  });
 