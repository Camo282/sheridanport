//Need links to Github, Linkedin, and another platform (Twitter?)
import React from 'react';

function Footer() {
    return (
        <footer class="social-container">
            <h3>Social Follow</h3>
            <a href="https://github.com/Camo282" className="github social"><ion-icon name="logo-github"></ion-icon></a>
            <a href="https://www.linkedin.com/in/john-sheridan-b93042235/" className="linkedIn social"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="https://www.facebook.com/john.sheridan.5243" className="facebook social"><ion-icon name="logo-facebook"></ion-icon></a>           
        </footer>
    )
}

export default Footer;