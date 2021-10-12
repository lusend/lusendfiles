$(document).ready(function () {
  function getHostURL() {
    return window.location.protocol + "//" + window.location.host + "/?"
  }

  function runOnceLoaded(
    selector,
    callback,
    closeRegardless = 0,
    closeAfter = true
  ) {
    var interval = setInterval(runningOnceLoaded, 100)

    function runningOnceLoaded() {
      if ($(selector).length) {
        callback(selector)
        if (closeAfter) clearInterval(interval)
      }
    }

    if (closeRegardless > 0) {
      setTimeout(function () {
        clearInterval(interval)
      }, closeRegardless)
    }
  }

  // Add favicon
  $("head").append(
    '<link rel="icon" type="image/ico" href="https://liberty-sa.terradotta.com/_customtags/ct_FileRetrieve.cfm?File_ID=32124" />'
  )

  // Add media sharing meta tags
  $("head").append(
    '<meta name="description" content="LU Send exists to train Champions for Christ to become global citizens through experiential learning and cultural engagement" />'
  )
  $("head").append('<meta name="author" content="P. Christopher Bowers" />')
  $("head").append(
    '<meta itemprop="name" content="Liberty University LU Send" />'
  )
  $("head").append(
    '<meta itemprop="description" content="LU Send exists to train Champions for Christ to become global citizens through experiential learning and cultural engagement" />'
  )
  $("head").append(
    '<meta itemprop="image" content="http://liberty-sa.terradotta.com/_customtags/ct_Image.cfm?Image_ID=29644" />'
  )
  $("head").append(
    '<meta property="og:url" content="https://liberty-sa.terradotta.com" />'
  )
  $("head").append('<meta property="og:type" content="website" />')
  $("head").append(
    '<meta property="og:title" content="Liberty University LU Send" />'
  )
  $("head").append(
    '<meta property="og:description" content="LU Send exists to train Champions for Christ to become global citizens through experiential learning and cultural engagement" />'
  )
  $("head").append(
    '<meta property="og:image" content="http://liberty-sa.terradotta.com/_customtags/ct_Image.cfm?Image_ID=29644" />'
  )
  $("head").append('<meta name="twitter:card" content="summary_large_image" />')
  $("head").append(
    '<meta name="twitter:title" content="Liberty University LU Send" />'
  )
  $("head").append(
    '<meta name="twitter:description" content="LU Send exists to train Champions for Christ to become global citizens through experiential learning and cultural engagement" />'
  )
  $("head").append(
    '<meta name="twitter:image" content="http://liberty-sa.terradotta.com/_customtags/ct_Image.cfm?Image_ID=29644" />'
  )

  // Redirect from Staff Page and Deadlines Page
  if (
    getQueryVariable("FuseAction") === "StaffMain.Home" ||
    getQueryVariable("FuseAction") === "Programs.ViewDeadlines"
  ) {
    window.location.href = getHostURL()
  }

  // Redirect from Program Search Page
  if (
    getQueryVariable("FuseAction") === "Programs.SimpleSearch" ||
    getQueryVariable("FuseAction") === "Programs.ProgramDiscovery"
  ) {
    window.location.href = getHostURL() + "go=sterm"
  }

  // Remove Labels from Nav Bar if Not Logged In
  $("#top-navbar > ul.nav.navbar-nav.navbar-left > li").each(function (
    selector
  ) {
    runOnceLoaded(selector, function (s) {
      var text = $(s).text()
      if (text === "Programs" || text === "Staff" || text === "Deadlines") {
        $(s).hide()
      }
    })
  })

  runOnceLoaded(
    "app-admin-console-home",
    function (s) {
      if (!$(s).text()) {
        $(s).css("display", "flex")
        $(s).css("flex-direction", "column")
        $(s).css("padding", "1em")
        $(s).css("margin", "1em")
        $(s).css("justify-content", "center")
        $(s).css("align-items", "center")
        $(s).css("font-size", "2.5rem")
        $(s).css("text-align", "center")
        $(s).css("line-height", "1.5")
        $(s).html(
          "<p>Navigate to the <a href='" +
            getHostURL() +
            "FuseAction=Reviewers.ReviewerConsole'><strong>Reviewer Console</strong></a> and the <a href='" +
            getHostURL() +
            "FuseAction=REPORTS.visualReports'><strong>Analytics Page</strong></a> using the navigation menu on the left.</p><p style='text-align: left; font-size: 1.5rem'><em>NOTE: If you do not see <code>Reviewer Console</code> in the menu and/or you are receiving an error regarding permissions, no applications have been assigned to you for review.<br />NOTE: If you do not see <code>Analytics</code> in the menu and/or you do not see any queries/reports, no queries/reports have been shared with you.<br /><br />LU Send Staff will share queries, reports, and applications ready-to-be-reviewed as necessary.</em></p>"
        )
      }
    },
    0,
    false
  )
})
