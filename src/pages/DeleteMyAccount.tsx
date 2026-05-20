import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";

const DELETE_ENDPOINT =
  "https://www.thelaundrybag.co.in/laundry_super_admin/index.php/cronjob/delete_my_account";

export default function DeleteMyAccount() {
  return (
    <>
      <SEO
        path="/delete-my-account"
        title="Delete My Account"
        description="Request deletion of your The Laundry Bag account. Enter the mobile number associated with your account and submit."
        noindex
      />
      <div className="breadcrumb-strip">
        <div className="container-page py-3 text-xs text-ink-500">
          <Link to="/" className="hover:text-brand-700">Home</Link>{" "}
          <span className="mx-2">/</span>{" "}
          <span className="text-ink-700">Delete My Account</span>
        </div>
      </div>

      <PageHero
        eyebrow="Account"
        title="Delete My Account"
        description="Enter your mobile number associated with the account you want to delete and click Submit. We'll process the request and email you a confirmation."
      />

      <section className="section">
        <div className="container-page max-w-xl">
          <form action={DELETE_ENDPOINT} method="post" className="card space-y-5">
            <div>
              <label className="text-sm font-semibold text-ink-800">
                Mobile number
              </label>
              <input
                type="tel"
                name="mobile_no"
                required
                placeholder="Enter your mobile number"
                pattern="[0-9+\s-]{6,20}"
                className="mt-1 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Submit
            </button>
            <p className="text-xs text-ink-500">
              After we receive your request, your account and personal data
              will be deleted from our systems within 7 working days. Order
              records may be retained for accounting and legal purposes as
              required by law.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
