// Display pathname location below header
document.getElementById('loc').outerHTML = `<p class="loc">Location: ${window.location.pathname}`

// Display navigation inside footer
document.getElementById('map').outerHTML = `<hr />
                                            <p>Navigation & Sitemap</p>
                                            <ul class="map">
                                              <li><a href="/" title="Go to home page">Home</a></li>
                                              <li><a href="/about.html" title="Go to about page">About</a></li>
                                              <li><a href="/service.html" title="Go to service page">Service</a></li>
                                              <li><a href="/form.html" title="Go to form submission page">Form</a></li>
                                              <li><a href="/contact.html" title="Go to contact page">Contact</a></li>
                                              <li><a href="/documentation.html" title="Go to documentation page">Docs</a></li>
                                              <li><a href="/cdn.html" title="Go to CDN page">CDN</a></li>
                                              <li><a href="/privacy-policy.html" title="Go to privacy & policy page">Policy</a></li>
                                              <li><a href="/sitemap.html" title="Go to sitemap page">Sitemap</a></li>
                                            </ul>`

// Display status form reseted
function formReset() {
  document.getElementById('form-status').innerHTML = 'Form resseted.'
}

// Display status form under maintenance
function formMaintenance() {
  document.getElementById('form-status').innerHTML = 'Sorry, the form is currently undergoing maintenance.'
}
