import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      
      <section className="section">
        <h2>Introduction</h2>
        <p>
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our website.
        </p>
      </section>
      
      <section className="section">
        <h2>Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, and browsing behavior to improve your experience.
        </p>
      </section>
      
      <section className="section">
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To provide customer support</li>
          <li>To monitor usage and improve our website</li>
        </ul>
      </section>
      
      <section className="section">
        <h2>Data Security</h2>
        <p>
          We take appropriate security measures to protect your data from unauthorized access or disclosure.
        </p>
      </section>
      
      <section className="section">
        <h2>Cookies</h2>
        <p>
          Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings.
        </p>
      </section>
      
      <section className="section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at: <a href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>.
        </p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
