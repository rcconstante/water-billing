"use client";

import { useEffect, useState, type ReactNode } from "react";
import { repositoryUrl, sections, totalPages } from "@/lib/proposal";

const sectionLabels: Readonly<Record<string, string>> = {
  onboarding: "Onboarding",
  "account-access": "Login, OTP & account",
  "customer-home": "Home, advisories & status",
  payments: "Bills, QR & confirmation",
  "web-overview": "Dashboard & customers",
  "web-billing": "Meter readings & billing",
  "web-collections": "Payments & reports",
  "web-administration": "Advisories & settings",
  "worker-route": "Routes & accounts",
  "worker-confirmation": "Capture & confirmation",
  "worker-manual": "Manual entry & history",
};
const navigation = [
  { id: "overview", title: "Proposal overview", group: "The proposal" },
  ...sections.map((section) => ({
    ...section,
    title: sectionLabels[section.id] ?? section.title,
  })),
  { id: "delivery", title: "Scope & delivery", group: "Next steps" },
];

export function DocumentShell({ children }: { children: ReactNode }) {
  const [active, setActive] = useState("overview");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("article[id]")
      .forEach((page) => observer.observe(page));
    return () => observer.disconnect();
  }, []);

  const current = Math.max(
    1,
    navigation.findIndex((item) => item.id === active) + 1,
  );
  return (
    <>
      <a className="skip-link" href="#document">
        Skip to proposal
      </a>
      <header className="app-header">
        <a
          className="brand"
          href="#overview"
          aria-label="Water Billing proposal overview"
        >
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 38">
              <path
                d="M16 2C13 8 3 18 3 25a13 13 0 0 0 26 0C29 18 19 8 16 2Z"
                fill="currentColor"
              />
              <path
                d="M8 26c3 5 10 6 16 0"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span>
            Water Billing
            <span className="brand-subtitle">Project proposal</span>
          </span>
        </a>
        <div className="header-actions">
          <span className="draft-status">
            <span />
            For discussion
          </span>
          <button className="print-button" onClick={() => window.print()}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path d="M6 9V3h12v6M6 18H3V9h18v9h-3M6 14h12v7H6z" />
            </svg>
            Print / Save PDF
          </button>
          <button
            className="contents-toggle"
            aria-expanded={open}
            aria-controls="document-nav"
            onClick={() => setOpen(!open)}
          >
            Contents
          </button>
        </div>
      </header>
      <aside className={`sidebar${open ? " is-open" : ""}`} id="document-nav">
        <div className="sidebar-title">
          Inside this proposal<span>{totalPages} pages</span>
        </div>
        <nav aria-label="Proposal contents">
          {navigation.map((item, index) => (
            <div key={item.id}>
              {(index === 0 || navigation[index - 1].group !== item.group) && (
                <p className="nav-group">{item.group}</p>
              )}
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                onClick={() => {
                  setActive(item.id);
                  setOpen(false);
                }}
              >
                <span className="nav-page">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.title}</span>
              </a>
            </div>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <p>
            A connected service.
            <br />
            From meter to payment.
          </p>
          <a href={repositoryUrl} target="_blank" rel="noreferrer">
            View project on GitHub ↗
          </a>
        </div>
      </aside>
      <main className="workspace" id="document">
        <div className="document-meta">
          <span>Water Billing System / Proposal</span>
          <span>
            Page {current} of {totalPages}
          </span>
        </div>
        <div className="document-pages">{children}</div>
        <p className="workspace-end">End of proposal · Water Billing System</p>
      </main>
    </>
  );
}
