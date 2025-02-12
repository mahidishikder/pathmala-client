import React from 'react';

function Terms() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 my-32">
      <h1 className="text-3xl font-bold text-center mb-6">Terms of Use</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Borrow Library! By accessing or using our services, you agree to abide by the following terms and conditions. 
            Please read these terms carefully.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. Eligibility</h2>
          <p>
            To use Borrow Library, you must be at least 18 years old or have the consent of a parent or legal guardian. 
            By using our platform, you confirm that you meet the eligibility requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
          <p>
            As a user of Borrow Library, you are responsible for providing accurate information and using the platform in a responsible manner. 
            Any misuse of our services may result in termination of access to the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Privacy Policy</h2>
          <p>
            Your privacy is important to us. We will collect, store, and use your personal data only in accordance with our Privacy Policy. 
            Please review our Privacy Policy to understand how we protect your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Limitations of Liability</h2>
          <p>
            Borrow Library will not be held liable for any damages resulting from the use or inability to use the platform, 
            including any loss of data, revenue, or other economic losses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of Bangladesh. Any disputes related to the platform will be resolved under the jurisdiction of the courts in Bangladesh.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Changes to Terms</h2>
          <p>
            Borrow Library reserves the right to update or modify these terms at any time. 
            We will notify users of any significant changes to these terms via email or platform notifications.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms;
