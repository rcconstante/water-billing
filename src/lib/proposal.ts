export type Screen = {
  name: string;
  title: string;
  description: string;
};

export type ProposalSection = {
  id: string;
  group: "Customer app" | "Management portal" | "Field worker app";
  title: string;
  introduction: string;
  screens: readonly Screen[];
  note: { title: string; text: string };
};

export const sections: readonly ProposalSection[] = [
  {
    id: "onboarding",
    group: "Customer app",
    title: "A simple introduction to better water service",
    introduction:
      "Three short onboarding screens introduce the app: understand your water use, stay informed about service, and pay your bill from your phone.",
    screens: [
      {
        name: "onboarding-welcome",
        title: "Welcome",
        description:
          "Introduce bills, water consumption, and account access in one convenient place.",
      },
      {
        name: "onboarding-advisories",
        title: "Stay updated",
        description:
          "Explain service advisories and maintenance announcements before customers begin.",
      },
      {
        name: "onboarding-payments",
        title: "Pay with ease",
        description:
          "Introduce available payment options and guide the customer to sign in.",
      },
    ],
    note: {
      title: "Designed for a confident first visit",
      text: "Keep onboarding brief and repeatable. Customers should be able to continue to sign-in without having to read every introduction again.",
    },
  },
  {
    id: "account-access",
    group: "Customer app",
    title: "Secure access, linked to the right account",
    introduction:
      "Customers sign in using their mobile number, verify a one-time code, and link their water account. Returning customers continue to their existing account after verification.",
    screens: [
      {
        name: "login",
        title: "Log in",
        description:
          "Enter a mobile number to request a one-time passcode. Explain how to get help if the registered number has changed.",
      },
      {
        name: "otp",
        title: "Verify the OTP",
        description:
          "Verify the code before allowing account access. Show code expiry, resend timing, and clear guidance for an invalid code.",
      },
      {
        name: "create-account",
        title: "Create an account",
        description:
          "Link the verified number to a water account after the district confirms the customer’s authority to access it.",
      },
    ],
    note: {
      title: "Account linking needs ownership verification",
      text: "An account number alone must not grant access. The final activation process should use the district’s verified customer records or staff approval, with limited OTP attempts and resend requests.",
    },
  },
  {
    id: "customer-home",
    group: "Customer app",
    title: "What your customers get, at a glance",
    introduction:
      "Give every customer a clear view of the amount due, due date, water use, service announcements, and connection status without a visit to the office.",
    screens: [
      {
        name: "home",
        title: "Home & water usage",
        description:
          "See the current amount due, payment deadline, monthly consumption, and quick access to bills and account information.",
      },
      {
        name: "advisories",
        title: "Advisories",
        description:
          "Read service interruptions, scheduled maintenance, and billing reminders relevant to the customer’s service area.",
      },
      {
        name: "status",
        title: "Service status",
        description:
          "Check connection status, meter details, the latest reading, and recorded consumption for the billing period.",
      },
    ],
    note: {
      title: "One consistent account record",
      text: "Bills, readings, advisories, and status should come from approved district records. Each customer should only see information they are authorized to access.",
    },
  },
  {
    id: "payments",
    group: "Customer app",
    title: "From an outstanding bill to payment confirmation",
    introduction:
      "A guided payment journey shows the bill, presents supported payment options, and explains when payment has been received and applied to the account.",
    screens: [
      {
        name: "pay-bill",
        title: "1. Review the bill",
        description:
          "Confirm the account, billing period, amount due, and due date before choosing an available payment method.",
      },
      {
        name: "qr-payment",
        title: "2. Pay using a QR code",
        description:
          "Display the provider-issued payment QR. Customers use a compatible wallet or bank app and can return to check the result.",
      },
      {
        name: "payment-success",
        title: "3. Receive confirmation",
        description:
          "Show the verified amount, account, transaction reference, and date. Distinguish received payments from official receipt posting.",
      },
    ],
    note: {
      title: "Payment integration is subject to approval",
      text: "QR Ph, GCash, Maya, and bank availability depend on the selected provider. A screenshot or a customer action is not proof of payment; confirmation must come from verified provider records. Cashier posting and official receipt rules must be agreed before launch.",
    },
  },
  {
    id: "web-overview",
    group: "Management portal",
    title: "A central workspace for the water district",
    introduction:
      "The browser-based management portal brings day-to-day office work together, giving authorized staff visibility into customers, billing activity, and items that require attention.",
    screens: [
      {
        name: "web-dashboard",
        title: "Operations dashboard",
        description:
          "Review billing progress, collections, overdue accounts, and pending actions. Figures reflect the selected reporting period and staff permissions.",
      },
      {
        name: "web-customer",
        title: "Customer records",
        description:
          "Find customer accounts and review connection and meter information. Authorized staff manage account details and mobile-access activation.",
      },
    ],
    note: {
      title: "Access follows the staff role",
      text: "Account management, meter validation, collections, reporting, and administration should have separate permissions. Sensitive changes need a record of who made them and when.",
    },
  },
  {
    id: "web-billing",
    group: "Management portal",
    title: "Turn reviewed readings into accurate bills",
    introduction:
      "Office staff review field readings before billing. Exceptions remain visible so an unusual value or incorrect entry can be resolved before it affects a customer’s bill.",
    screens: [
      {
        name: "web-meter-reading",
        title: "Meter reading review",
        description:
          "Compare previous and current readings, inspect consumption, and review flagged records by zone, reader, and billing period.",
      },
      {
        name: "web-billing",
        title: "Billing management",
        description:
          "Prepare and review bills using approved readings and the district’s agreed rates, adjustments, and billing rules.",
      },
    ],
    note: {
      title: "Validation before bill release",
      text: "A reading below the previous value, a duplicate submission, or unusual consumption should require review. Meter replacement and rollover cases need explicit handling under the district’s policies.",
    },
  },
  {
    id: "web-collections",
    group: "Management portal",
    title: "Keep collections and reporting traceable",
    introduction:
      "Cashiers and authorized office staff need a clear connection between a customer’s payment, the bill it settles, and the official receipt issued by the district.",
    screens: [
      {
        name: "web-payments",
        title: "Payment processing",
        description:
          "Review collections, match verified payments to accounts, and post official receipt references according to the approved cashier workflow.",
      },
      {
        name: "web-reports",
        title: "Reports & oversight",
        description:
          "Review billing, collection, and consumption reports for selected periods. Export access and report contents should follow staff permissions.",
      },
    ],
    note: {
      title: "Reconciliation protects the balance",
      text: "Prevent repeated posting of the same transaction. Reversals and corrections should preserve the original payment history and identify the authorized staff member responsible.",
    },
  },
  {
    id: "web-administration",
    group: "Management portal",
    title: "Keep customers informed and operations controlled",
    introduction:
      "The portal also supports service communication and administration, so the district can publish relevant notices and maintain the settings used throughout the system.",
    screens: [
      {
        name: "web-advisories",
        title: "Advisory management",
        description:
          "Prepare service announcements and maintenance notices for the relevant areas. Review content, timing, and affected zones before publishing.",
      },
      {
        name: "web-settings",
        title: "System settings",
        description:
          "Let authorized administrators manage approved operational settings and staff access. Changes to billing rules should follow a controlled review process.",
      },
    ],
    note: {
      title: "Relevant communication, controlled changes",
      text: "Keep advisory publishing separate from billing and access administration. Confirm the supported notification channels and approval responsibilities during project scoping.",
    },
  },
  {
    id: "worker-route",
    group: "Field worker app",
    title: "Make the daily meter-reading route easier",
    introduction:
      "Field workers get a focused mobile workspace for assigned accounts and routes. They can find the correct customer, check progress, and capture a clear meter photo while on-site.",
    screens: [
      {
        name: "worker-home",
        title: "Today’s assignments",
        description:
          "See assigned, completed, and pending readings with a route overview and a direct action to start the next reading.",
      },
      {
        name: "worker-accounts",
        title: "Find the right account",
        description:
          "Search assigned accounts by account number, customer, or address. Verify the service location and meter before recording a value.",
      },
      {
        name: "worker-capture",
        title: "Capture the meter",
        description:
          "Photograph the meter clearly as supporting evidence. Request camera permission only when it is needed and explain permission recovery.",
      },
    ],
    note: {
      title: "Manual reading remains a first-class workflow",
      text: "Workers must be able to enter a reading without relying on automated recognition. The photographed meter helps the worker and office staff verify the submitted value.",
    },
  },
  {
    id: "worker-confirmation",
    group: "Field worker app",
    title: "Review each reading before submission",
    introduction:
      "The reading workflow keeps the customer, meter value, and consumption visible together. Automated recognition, if approved, assists entry; the worker still verifies the reading.",
    screens: [
      {
        name: "worker-scan",
        title: "Review the captured value",
        description:
          "If OCR is included, treat the detected number as a suggestion. Workers must be able to correct it or retake an unclear image.",
      },
      {
        name: "worker-confirm",
        title: "Confirm consumption",
        description:
          "Compare the previous and current values, check calculated usage, and add remarks before submitting the reading.",
      },
      {
        name: "worker-saved",
        title: "Know when it is saved",
        description:
          "Show a clear result with the account, recorded reading, and consumption, then let the worker continue to the next account.",
      },
    ],
    note: {
      title: "Saved, submitted, and approved are different",
      text: "A local save must not be shown as server submission. Office validation is a separate step, and readings that need review should remain visible until an authorized reviewer resolves them.",
    },
  },
  {
    id: "worker-manual",
    group: "Field worker app",
    title: "A practical way to record readings manually",
    introduction:
      "When a meter is difficult to photograph or a detected number is incorrect, the worker can enter the value directly, explain the situation, and track the reading’s next step.",
    screens: [
      {
        name: "worker-manual",
        title: "Manual entry",
        description:
          "Enter the current meter value, confirm the account, and include a reason or remarks. Retain a meter photo when available for office verification.",
      },
      {
        name: "worker-history",
        title: "History & submission status",
        description:
          "Track submitted readings and records that need review. If offline support is approved, show pending uploads distinctly and provide a deliberate retry action.",
      },
    ],
    note: {
      title: "Reliable field-to-office handoff",
      text: "Validate readings on the server and restrict workers to assigned accounts. Any offline queue must avoid duplicate uploads and retain unsent work safely. OCR and offline synchronization are proposed capabilities requiring separate confirmation.",
    },
  },
];

export const totalPages = sections.length + 2;
export const repositoryUrl = "https://github.com/rcconstante/water-billing";
