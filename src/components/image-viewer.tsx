"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Screen } from "@/lib/proposal";

export function ImageViewer({
  screen,
  web = false,
}: {
  screen: Screen;
  web?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [failed, setFailed] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const source = `/screens/${screen.name}.webp`;

  function close() {
    dialog.current?.close();
    setZoomed(false);
  }

  return (
    <figure className={web ? "screen-figure web-figure" : "screen-figure"}>
      <button
        className="screen-button"
        onClick={() => dialog.current?.showModal()}
        aria-label={`View ${screen.title} screenshot fullscreen`}
      >
        {failed ? (
          <span className="image-error">
            Image unavailable. Open the original file from the project assets.
          </span>
        ) : (
          <Image
            src={source}
            alt={`${screen.title} — proposed ${web ? "management portal" : "mobile app"} interface`}
            width={web ? 1448 : 280}
            height={web ? 1086 : screen.name.startsWith("worker-") ? 523 : 556}
            onError={() => setFailed(true)}
          />
        )}
        <span className="expand-image" aria-hidden="true">
          ⤢ <span>Enlarge</span>
        </span>
      </button>
      <figcaption>
        <h3>{screen.title}</h3>
        <p>{screen.description}</p>
      </figcaption>
      <dialog
        ref={dialog}
        className={`image-dialog${zoomed ? " is-zoomed" : ""}`}
        aria-label={`${screen.title} screenshot`}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onClose={() => setZoomed(false)}
      >
        <div className="viewer-toolbar">
          <span>{screen.title}</span>
          <div>
            <button onClick={() => setZoomed(!zoomed)} aria-pressed={zoomed}>
              {zoomed ? "Fit to screen" : "Zoom in"}
            </button>
            <button
              className="viewer-close"
              onClick={close}
              aria-label="Close fullscreen image"
            >
              Close <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
        <div className="viewer-stage">
          <Image
            src={source}
            alt={`${screen.title} — enlarged interface`}
            width={web ? 1448 : 280}
            height={web ? 1086 : screen.name.startsWith("worker-") ? 523 : 556}
          />
        </div>
        <p className="viewer-hint">
          Illustrative design reference · Press Esc to close
        </p>
      </dialog>
    </figure>
  );
}
