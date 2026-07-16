export const metadata = {
  title: "Privacy & Terms — SharePlate",
};

export default function PrivacyPage() {
  return (
    <div className="container-page max-w-3xl py-14">
      <h1 className="font-display text-3xl font-semibold text-paper-900">Privacy &amp; Terms</h1>
      <p className="mt-2 text-sm text-paper-500">Last updated: June 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-paper-700">
        <section>
          <h2 className="font-display text-lg font-semibold text-paper-900">1. What we collect</h2>
          <p className="mt-2">
            When you create an account, we store your name, email address, and a securely
            hashed password. When you post a listing, we store the listing details you provide
            (title, description, area, pickup window) so other users can find it. We do not sell
            or share this information with advertisers.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-paper-900">2. How listings work</h2>
          <p className="mt-2">
            SharePlate is a coordination platform: we help a donor's listing reach nearby people,
            but we are not a party to the exchange itself, don't handle payment for priced
            listings, and don't inspect food before pickup. Donors are responsible for the
            accuracy of what they post; claimants are responsible for judging whether a pickup
            is right for them.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-paper-900">3. Account responsibilities</h2>
          <p className="mt-2">
            You're responsible for keeping your login credentials private and for the accuracy of
            information in listings you post. Verified donor status can be revoked if a listing
            is found to be misleading or unsafe.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-paper-900">4. Cookies &amp; sessions</h2>
          <p className="mt-2">
            We use a single session cookie to keep you logged in. We don't use third-party
            advertising or tracking cookies.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-paper-900">5. Your rights</h2>
          <p className="mt-2">
            You can request a copy of your data or deletion of your account at any time by
            contacting hello@shareplate.app. We'll respond within a reasonable timeframe.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-paper-900">6. Changes to this policy</h2>
          <p className="mt-2">
            If we make material changes to these terms, we'll post the update here with a new
            "last updated" date.
          </p>
        </section>
      </div>
    </div>
  );
}
