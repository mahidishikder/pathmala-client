import React from 'react';

function CookiePolicy() {
  return (
   <div className='dark:bg-slate-700'>
     <div className="max-w-7xl mx-auto px-4 py-8 mt-20 pt-16">
      <h1 className="text-3xl font-bold text-center mb-6 dark:text-white/90 text-black">Cookie Policy</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold dark:text-white/90 text-black">1. Introduction</h2>
          <p className="dark:text-white/70 text-black/80">
            This Cookie Policy explains how Borrow Library uses cookies and similar technologies to enhance your experience when you use our website. By using our website, you consent to the use of cookies as described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold dark:text-white/90 text-black">2. What Are Cookies?</h2>
          <p className="dark:text-white/70 text-black/80">
            Cookies are small text files stored on your device by websites you visit. They help websites remember your preferences, improve performance, and provide personalized content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold dark:text-white/90 text-black">3. Types of Cookies We Use</h2>
          <ul className="list-disc pl-5 dark:text-white/70 text-black/80">
            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
            <li><strong>Performance Cookies:</strong> These cookies collect information about how visitors use the website, such as which pages are visited most often.</li>
            <li><strong>Functional Cookies:</strong> These cookies allow the website to remember your preferences, such as language or region settings.</li>
            <li><strong>Advertising Cookies:</strong> These cookies are used to deliver relevant advertisements to users based on their behavior on the website.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold dark:text-white/90 text-black">4. How We Use Cookies</h2>
          <p className="dark:text-white/70 text-black/80">
            We use cookies to improve your browsing experience, analyze website traffic, and customize content and advertisements. Cookies help us provide a better user experience by remembering your preferences and actions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold dark:text-white/90 text-black">5. Managing Cookies</h2>
          <p className="dark:text-white/70 text-black/80">
            You can control and manage cookies through your browser settings. You may choose to block or delete cookies, but please note that this may affect the functionality of certain parts of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold dark:text-white/90 text-black">6. Changes to This Cookie Policy</h2>
          <p className="dark:text-white/70 text-black/80">
            Borrow Library reserves the right to update or modify this Cookie Policy at any time. Any changes will be posted on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold dark:text-white/90 text-black">7. Contact Us</h2>
          <p className="dark:text-white/70 text-black/80">
            If you have any questions about our Cookie Policy, feel free to contact us through our contact page or at [insert email address].
          </p>
        </section>
      </div>
    </div>
   </div>
  );
}

export default CookiePolicy;
