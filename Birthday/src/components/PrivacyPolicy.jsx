import React from 'react';
import './PrivacyPolicy.css'; 

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-heading">Privacy Policy</h1>
      <div className="privacy-content">
        <p>
          Your privacy is important to us at Jollify. We believe in transparency and want you to
          understand how we collect, use, and protect your personal information.
        </p>
        <h2>1. Collection of Personal Information</h2>
        <p>
          We may collect personal information when you use our app, such as when you register an
          account, book events, or participate in promotions. This may include your name, email
          address, and other relevant details.
        </p>
        <h2>2. Use of Personal Information</h2>
        <p>
          We use the personal information you provide to deliver our services, improve user
          experience, and send you relevant updates and promotions. We do not share your information
          with third parties without your consent.
        </p>
        <h2>3. Use of Non-Personal Information</h2>
        <p>
          We may collect non-personal information such as device information and usage data to
          improve our app and services. This information helps us understand user preferences and
          optimize our offerings.
        </p>
        <h2>4. Use of Cookies and Technologies</h2>
        <p>
          We use cookies and similar technologies to enhance user experience and improve our
          services. Cookies are used to personalize content, analyze site traffic, and provide
          targeted advertisements.
        </p>
        <h2>5. Disclosure to Third Parties</h2>
        <p>
          We may share personal information with service providers and partners to deliver our
          services effectively. However, we do not disclose your personal information to unrelated
          third parties.
        </p>
        <h2>6. Changes to this Privacy Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time. Users are encouraged to
          review this page periodically for any changes. We will notify users of any significant
          updates via email or app notifications.
        </p>
        <p>
          If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
          <a href="mailto:privacy@jollify.com">privacy@jollify.com</a>.
        </p>
        <p>
          Address: JollifyBirthdays, Kamarajar salai , Kovaipudur, Coimbatore, 600000 | Phone: +91 9489948948
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
