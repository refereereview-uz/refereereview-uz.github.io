// uz / en switch; the choice is remembered in this browser when storage is available
(function () {
  var q = new URLSearchParams(location.search).get("lang"), saved = null;
  try { saved = localStorage.getItem("rr-lang"); } catch (e) {}
  var lang = q || saved || "uz";
  function set(l) {
    document.body.classList.toggle("en", l === "en"); document.documentElement.lang = l;
    document.querySelectorAll(".lang button").forEach(function (b) { b.classList.toggle("on", b.dataset.set === l); });
    try { localStorage.setItem("rr-lang", l); } catch (e) {}
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang button").forEach(function (b) { b.onclick = function () { set(b.dataset.set); }; });
    set(lang);
  });
})();
