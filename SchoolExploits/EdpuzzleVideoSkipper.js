javascript:(function() {
  function httpGet(url, callback, headers = [], method = "GET", content = null) {
    const request = new XMLHttpRequest();
    request.addEventListener("load", callback);
    request.open(method, url, true);
    headers.forEach((header) => request.setRequestHeader(header[0], header[1]));
    request.send(content);
  }

  function getAssignment() {
    const assignmentId = window.location.pathname.split("/")[2];
    const url = `https://edpuzzle.com/api/v4/assignments/${assignmentId}/play`;
    const headers = [
      ["accept", "application/json, text/plain, */*"],
      ["accept_language", "en-US,en;q=0.9"],
      ["content-type", "application/json"],
      ["referer", window.location.href],
    ];
    httpGet(url, function() {
      const data = JSON.parse(this.responseText);
      const attemptId = data.mediaAttempt._id;
      postAttempt(attemptId);
    }, headers);
  }

  function postAttempt(attemptId) {
    const url = `https://edpuzzle.com/api/v4/media_attempts/${attemptId}/watch`;
    const content = { "timeIntervalNumber": 10 };
    const headers = [
      ["accept", "application/json, text/plain, */*"],
      ["accept_language", "en-US,en;q=0.9"],
      ["content-type", "application/json"],
      ["referer", window.location.href],
    ];
    httpGet(url, function() {
      window.location.reload();
    }, headers, "POST", JSON.stringify(content));
  }

  getAssignment();
})();
