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

// contact links: the address is assembled only on click (not written in the page)
document.addEventListener("click", function (e) {
  var a = e.target.closest && e.target.closest("a[data-u]");
  if (!a) return;
  e.preventDefault();
  var r = function (x) { return x.split("").reverse().join(""); };
  location.href = "mailto:" + r(a.dataset.u) + "@" + r(a.dataset.d) + "?subject=Referee%20Review";
});
