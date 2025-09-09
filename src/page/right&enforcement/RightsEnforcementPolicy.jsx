import React from "react";

const RightsEnforcementPolicy = () => {
  return (
    <section className="bg-gray-50">
      {/* Gradient Header */}
      <header className="mb-8 bg-gradient-to-r from-black via-red-600 to-black py-12">
        <h1 className="text-5xl font-bold text-white text-center">
          Our Rights & Enforcement Policy
        </h1>
        <hr className="border-white w-200 mt-4 mx-auto" />
      </header>
      {/* Content Container */}
      <div className="mx-14 space-y-8">
        {/* Monitoring & Disclosure */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mt-10">
            1. Monitoring and Disclosure
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed">
            We may, at our sole discretion, monitor use of the Site, including
            communication and uploaded content. We may disclose content or
            records if required:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>To comply with laws, regulations, or government requests</li>
            <li>To ensure site functionality and operational integrity</li>
            <li>To protect our legal rights, property, or the safety of other users</li>
          </ul>
          <p className="text-gray-700 mt-2 leading-relaxed">
            While we do not guarantee active monitoring of all content, upon
            notification of illegal or harmful material, we may investigate,
            remove, or request removal of such content at our discretion.
          </p>
        </section>

        {/* Right to Restrict Access */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            2. Right to Restrict Access
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed">
            We reserve the right to terminate or suspend user access without
            notice for conduct that violates these Terms or applicable law, or
            harms another user, third party, or Atal Optical itself.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed">
            We also reserve the right to refuse sales if there is reasonable
            belief products are being purchased for resale, and to limit
            quantities per customer.
          </p>
        </section>

        {/* Termination Policy */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            3. Termination Policy
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed">
            These Terms remain in effect unless terminated by either party. If
            you no longer accept them, you must stop using the Site. Atal
            Optical may suspend or revoke access, delete accounts, and restrict
            future use without prior warning.
          </p>
          <p className="text-gray-700 mt-2">
            You agree that no compensation or data restoration will be provided
            after termination.
          </p>
        </section>

        {/* Governing Law & Jurisdiction */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            4. Governing Law & Jurisdiction
          </h2>
          <h3 className="text-lg font-semibold mt-4">4.1. International Use</h3>
          <p className="text-gray-700 mt-1">
            We make no guarantee that content is suitable outside of Canada.
            Users accessing from other regions are responsible for compliance
            with local laws.
          </p>

          <h3 className="text-lg font-semibold mt-4">4.2. Export Restrictions</h3>
          <p className="text-gray-700 mt-1">
            Content may not be used or exported in violation of Canadian or U.S.
            export laws and regulations.
          </p>

          <h3 className="text-lg font-semibold mt-4">4.3. Jurisdiction</h3>
          <p className="text-gray-700 mt-1">
            All disputes will be governed by the laws of Ontario, Canada, and
            you consent to the exclusive jurisdiction of its courts.
          </p>
        </section>

          <h2 className="text-2xl font-semibold">5. Contact Us</h2>
          <p className="text-gray-700 mb-14">
            Atal Optical Inc.
            <br />
            34 Shining Willow Crescent, Brampton, Ontario, Canada
            <br />
            Toll-Free: 1-866-242-3545
            <br />
            Email:{" "}
            <a
              href="mailto:support@ataloptical.com"
              className="text-blue-600 hover:underline"
            >
              support@ataloptical.com
            </a>
          </p>
      </div>
    </section>
  );
};

export default RightsEnforcementPolicy;
