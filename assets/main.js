// Simple per-browser read counter stored in localStorage
document.addEventListener('DOMContentLoaded', function(){
  try{
    const pageUrl = window.location.pathname;
    // only run on post pages (simple heuristic: path contains /YYYY/ or /posts/ or _posts rendered under /)
    // We'll run on any page that contains #read-count element.
    const rc = document.getElementById('read-count');
    if(!rc) return;
    const key = 'blog-readcount:' + pageUrl;
    let count = Number(localStorage.getItem(key) || 0);
    count += 1;
    localStorage.setItem(key, String(count));
    rc.innerText = count;
  }catch(e){console.error(e)}
});
