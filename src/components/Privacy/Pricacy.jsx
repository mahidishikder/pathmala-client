import React from 'react';

function PrivacyPolicy() {
  return (
   <div className='bg-slate-700'>
     <div className="max-w-7xl mx-auto px-4 py-8 mt-20 pt-16 ">
      <h1 className="text-3xl font-bold text-center mb-6 dark:text-white/90">Privacy Policy</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold dark:text-white/70">1. Introduction</h2>
          <p className='dark:text-white/70'>
            At Borrow Library, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you use our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold dark:text-white/70">2. Information We Collect</h2>
          <p className='dark:text-white/70'>
            We collect personal information when you use our services, such as your name, email address, phone number, and payment details. We also collect non-personal information such as your IP address, browser type, and browsing behavior on our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold dark:text-white/70">3. How We Use Your Information</h2>
          <p>
            The information we collect is used to:
            <ul className="list-disc pl-5 dark:text-white/70">
              <li>Provide you with the services you request.</li>
              <li>Improve our website's functionality and user experience.</li>
              <li>Send you promotional offers or updates, if you've opted in.</li>
              <li>Respond to inquiries and support requests.</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold dark:text-white/70">4. Data Sharing</h2>
          <p className='dark:text-white/70'>
            We do not share your personal information with third parties, except in the following cases:
            <ul className="list-disc pl-5 dark:text-white/70">
              <li>If required by law or to comply with legal obligations.</li>
              <li>With service providers who assist in operating our website or services (e.g., payment processors, email providers).</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold dark:text-white/70">5. Data Security</h2>
          <p className='dark:text-white/70'>
            We implement a variety of security measures to protect your personal data. However, no method of transmission over the internet or method of electronic storage is 100% secure. We cannot guarantee the absolute security of your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold dark:text-white/70">6. Your Rights</h2>
          <p className='dark:text-white/70'>
            You have the right to:
            <ul className="list-disc pl-5 dark:text-white/70">
              <li>Access the personal data we hold about you.</li>
              <li>Request corrections or deletions of your data.</li>
              <li>Opt-out of marketing communications.</li>
            </ul>
            If you wish to exercise any of these rights, please contact us at [insert email address].
          </p>
        </section>

        <section>
          <h2 className="dark:text-white/70 text-2xl font-semibold">7. Cookies and Tracking Technologies</h2>
          <p className='dark:text-white/70'>
            We use cookies and similar technologies to improve your experience on our website. Please refer to our Cookie Policy for more details.
          </p>
        </section>

        <section className='dark:text-white/70'>
          <h2 className="text-2xl font-semibold">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated date will be indicated at the bottom of this policy.
          </p>
        </section>

        <section className='dark:text-white/70'>
          <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at [insert email address].
          </p>
        </section>
      </div>
    </div>
   </div>
  );
}

export default PrivacyPolicy;
