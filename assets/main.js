// CountAPI-based read counter with fallback to localStorage
document.addEventListener('DOMContentLoaded', function(){
  try{
    const rc = document.getElementById('read-count');
    if(!rc) return;

    const pageUrl = window.location.pathname; // use pathname as key (unique per post)
    const namespace = 'tujy859-blogs';
    const key = encodeURIComponent(pageUrl);
    const countApiUrl = `https://api.countapi.xyz/hit/${namespace}/${key}`;

    // Try CountAPI first
    fetch(countApiUrl)
      .then(response => response.json())
      .then(data => {
        if(data && (typeof data.value !== 'undefined')){
          rc.innerText = data.value;
        }else{
          // fallback to local storage
          fallbackCount();
        }
      }).catch(err => {
        // fallback
        fallbackCount();
      });

    function fallbackCount(){
      try{
        const lskey = 'blog-readcount:' + pageUrl;
        let count = Number(localStorage.getItem(lskey) || 0);
        count += 1;
        localStorage.setItem(lskey, String(count));
        rc.innerText = count;
      }catch(e){ rc.innerText = '0'; }
    }
  }catch(e){console.error(e)};
});
