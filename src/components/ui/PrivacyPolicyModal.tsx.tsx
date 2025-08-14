export const PrivacyPolicyModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="text-gray-700 space-y-3 text-sm">
          <p>
            We respect your privacy and are committed to protecting your
            personal information. Any data collected will be used solely for the
            purpose of providing our services.
          </p>
          <p>
            We do not sell, rent, or share your information with third parties,
            except as required by law.
          </p>
          <p>
            By using our services, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
