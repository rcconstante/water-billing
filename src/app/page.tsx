import Image from "next/image";
import type { ReactNode } from "react";
import { DocumentShell } from "@/components/document-shell";
import { ImageViewer } from "@/components/image-viewer";
import { sections, totalPages } from "@/lib/proposal";

function Page({
  id,
  number,
  label,
  children,
}: {
  id: string;
  number: number;
  label: string;
  children: ReactNode;
}) {
  return (
    <article className="paper" id={id} aria-label={`Page ${number}: ${label}`}>
      <div className="page-running-head">
        <span>Water Billing System</span>
        <span>{label}</span>
      </div>
      <div className="page-content">{children}</div>
      <footer className="page-footer">
        <span>Project proposal · November 2026</span>
        <span>
          {String(number).padStart(2, "0")} / {totalPages}
        </span>
      </footer>
    </article>
  );
}

export default function Home() {
  return (
    <DocumentShell>
      <Page id="overview" number={1} label="Proposal overview">
        <div className="cover-intro">
          <span className="proposal-tag">Digital service proposal</span>
          <h1>
            Water Billing
            <br />
            System
          </h1>
          <p className="cover-subtitle">
            A simpler experience for your customers.
            <br />A clearer workflow for your team.
          </p>
          <p className="cover-description">
            A connected platform for customer billing, water district
            operations, and field meter reading — presented through the proposed
            mobile and web experiences.
          </p>
        </div>
        <div
          className="cover-preview"
          aria-label="Customer mobile app and staff web portal design references"
        >
          <div className="cover-web">
            <Image
              src="/screens/web-dashboard.webp"
              alt="Proposed water district management dashboard"
              width={1448}
              height={1086}
              priority
            />
          </div>
          <div className="cover-phone">
            <Image
              src="/screens/home.webp"
              alt="Proposed customer mobile home screen"
              width={247}
              height={490}
              priority
            />
          </div>
          <span className="preview-caption">
            One service, connected across mobile and web.
          </span>
        </div>
        <div className="cover-audiences">
          <div>
            <h2>For customers</h2>
            <p>Bills, advisories, service status, and guided payments.</p>
          </div>
          <div>
            <h2>For office staff</h2>
            <p>Customers, readings, billing, collections, and reporting.</p>
          </div>
          <div>
            <h2>For field workers</h2>
            <p>Assigned routes, manual readings, and submission history.</p>
          </div>
        </div>
        <div className="proposal-disclaimer">
          <strong>Proposal for discussion</strong>
          <p>
            Screens are supplied design references with illustrative names,
            amounts, and dates. They describe the intended experience; they do
            not represent a live billing or payment service.
          </p>
        </div>
      </Page>
      {sections.map((section, index) => (
        <Page
          key={section.id}
          id={section.id}
          number={index + 2}
          label={section.group}
        >
          <p className="section-context">{section.group}</p>
          <h2 className="page-title">{section.title}</h2>
          <p className="page-introduction">{section.introduction}</p>
          <div
            className={`screen-gallery ${section.group === "Management portal" ? "web-gallery" : "mobile-gallery"}${section.screens.length === 2 && section.group !== "Management portal" ? " two-screens" : ""}`}
          >
            {section.screens.map((screen) => (
              <ImageViewer
                key={screen.name}
                screen={screen}
                web={section.group === "Management portal"}
              />
            ))}
          </div>
          <p className="gallery-instruction">
            Click any screen to view it in full size.
          </p>
          <aside className="document-note">
            <h3>{section.note.title}</h3>
            <p>{section.note.text}</p>
          </aside>
        </Page>
      ))}
      <Page id="delivery" number={totalPages} label="Scope & delivery">
        <p className="section-context">Scope & delivery</p>
        <h2 className="page-title">
          A clear path from proposal to implementation
        </h2>
        <p className="page-introduction">
          Agree on the operational rules first, then connect the customer,
          office, and field experiences to a shared, verified source of records.
        </p>
        <h3 className="body-heading">Proposed platform scope</h3>
        <div className="scope-table">
          <table>
            <thead>
              <tr>
                <th>Experience</th>
                <th>Proposed coverage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Customer mobile app</th>
                <td>
                  Onboarding, mobile-number login, OTP verification, account
                  linking, home, advisories, service status, bill review, QR
                  payment, and confirmation.
                </td>
              </tr>
              <tr>
                <th>Staff web portal</th>
                <td>
                  Dashboard, customer records, meter reading validation,
                  billing, payments, advisories, reports, and controlled
                  settings.
                </td>
              </tr>
              <tr>
                <th>Field worker app</th>
                <td>
                  Assigned routes and accounts, photo evidence, manual meter
                  entry, review, submission, and reading history.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="body-heading">Decisions to confirm</h3>
        <ol className="delivery-list">
          <li>
            <strong>Account access & roles.</strong> Confirm customer
            activation, account ownership checks, staff permissions, and worker
            assignments.
          </li>
          <li>
            <strong>Billing & receipts.</strong> Approve rates, billing cycles,
            adjustments, overdue rules, meter exceptions, and cashier posting
            responsibilities.
          </li>
          <li>
            <strong>Payments & field capabilities.</strong> Select the payment
            provider and receipt workflow. Confirm whether OCR and offline
            synchronization are included.
          </li>
          <li>
            <strong>Data & rollout.</strong> Review the existing schema and
            records, migration needs, hosting, support, and acceptance criteria
            before estimating delivery.
          </li>
        </ol>
        <h3 className="body-heading">Implementation approach</h3>
        <p className="body-copy">
          This proposal website is built with Next.js and TypeScript. The
          operational platform will require authenticated services, server-side
          validation, role and account ownership checks, protected meter photos,
          and audit records. Database design and integrations must be validated
          against the actual system before implementation.
        </p>
        <div className="document-note">
          <h3>Approval defines the delivery commitment</h3>
          <p>
            No existing database schema, approved sprint specification, budget,
            or delivery dates were supplied. This document proposes the
            experience and review points; it does not assert that backend
            integration or payment processing is already implemented.
          </p>
        </div>
        <div className="closing-line">
          Better visibility for customers.
          <br />
          Better coordination for the district.
        </div>
      </Page>
    </DocumentShell>
  );
}
