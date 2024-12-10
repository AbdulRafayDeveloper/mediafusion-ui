"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <div className="flex justify-center items-center text-center mt-6">
          <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
            <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
              <h1 className="text-4xl font-bold mt-7">Terms & Conditions</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:max-w-[1200px] mx-auto p-7 mb-20">
          <div>
            <h1 className="text-3xl font-bold">Introduction</h1>
            <p className="text-md mt-3 text-justify">
              Welcome to our Video and Audio Converter platform. By accessing or using our services, you agree to comply with these Terms and Conditions. These terms govern the use of our platform, ensuring a secure, reliable, and user-friendly experience for all. Please review this document to fully understand your rights, responsibilities, and our policies.
            </p>
          </div>
          <div className="mt-5">
            <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-6">
              <div className="bg-white shadow-md p-4">
                <h1 className="text-3xl font-bold">Usage Policy</h1>
                <p className="text-md mt-3 text-justify">
                  Our platform is designed to facilitate video and audio conversion for personal and professional use. Prohibited activities include misuse for illegal content, copyright violations, and spamming. Adhering to this policy ensures a safe and ethical environment for all users.
                </p>
              </div>
              <div className="bg-white shadow-md p-4">
                <h1 className="text-3xl font-bold">User Responsibility</h1>
                <p className="text-md mt-3 text-justify">
                  Users must ensure that the files they process do not violate intellectual property laws or third-party rights. By using our platform, you agree to take full responsibility for how the converted content is utilized.
                </p>
              </div>
              <div className="bg-white shadow-md p-4">
                <h1 className="text-3xl font-bold">Data Privacy</h1>
                <p className="text-md mt-3 text-justify">
                  We value your privacy. Any data uploaded is used solely for the purpose of conversion and is not stored on our servers after the process is complete. Refer to our Privacy Policy for detailed information on how we handle your data.
                </p>
              </div>
              <div className="bg-white shadow-md p-4">
                <h1 className="text-3xl font-bold">Account Terms</h1>
                <p className="text-md mt-3 text-justify">
                  If account registration is required, users are expected to provide accurate information. Accounts may be terminated for violating these Terms and Conditions or engaging in prohibited activities.
                </p>
              </div>
              <div className="bg-white shadow-md p-4">
                <h1 className="text-3xl font-bold">Intellectual Property</h1>
                <p className="text-md mt-3 text-justify">
                  The platform and its tools, including branding and algorithms, are the intellectual property of the company. Users retain ownership of their original content, but reverse-engineering or unauthorized distribution of the platform is strictly prohibited.
                </p>
              </div>
              <div className="bg-white shadow-md p-4">
                <h1 className="text-3xl font-bold">Liability Limitation</h1>
                <p className="text-md mt-3 text-justify">
                  The platform is provided "as-is." We are not liable for any data loss, performance issues, or damages arising from the use of our services.
                </p>
              </div>
              <div className="bg-white shadow-md p-4">
                <h1 className="text-3xl font-bold">Changes to Terms</h1>
                <p className="text-md mt-3 text-justify">
                  We may update these Terms and Conditions from time to time. Continued use of the platform constitutes acceptance of any changes. Please check back periodically to stay informed.
                </p>
              </div>
              <div className="bg-white shadow-md p-4">
                <h1 className="text-3xl font-bold">Contact Information</h1>
                <p className="text-md mt-3 text-justify">
                  For inquiries or concerns regarding these Terms and Conditions, please contact us at [Your Email Address].
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
