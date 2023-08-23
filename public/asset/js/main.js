// Display pathname location below header
document.getElementById('loc').outerHTML = `<p class="loc">Location: ${window.location.pathname}`
// Display navigation inside footer
document.getElementById('map').outerHTML = `<hr />
                                            <p>Navigation & Sitemap</p>
                                            <ul class="map">
                                              <li><a href="/">Home</a></li>
                                              <li><a href="/form.html">Form</a></li>
                                              <li><a href="/documentation.html">Documentation</a></li>
                                              <li><a href="/cdn.html">CDN</a></li>
                                              <li><a href="/sitemap.html">Sitemap</a></li>
                                            </ul>`
// Display status form reseted
function formReset() {
  document.getElementById('form-status').innerHTML = 'Form resseted.'
}
// Display status form under maintenance
function formMaintenance() {
  document.getElementById('form-status').innerHTML = 'Sorry, the form is currently undergoing maintenance.'
}
