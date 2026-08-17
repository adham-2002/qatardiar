"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  EXPLORE_HEADING,
  EXPLORE_LINK,
  PROJECT_SLIDES,
  REGION_FILTERS,
  REGION_MAP,
} from "./data";

export function ExploreProjects() {
  const [active, setActive] = useState(0);
  const [region, setRegion] = useState(REGION_FILTERS[0].value);

  const total = PROJECT_SLIDES.length;
  const go = (n: number) => setActive(((n % total) + total) % total);
  const slide = PROJECT_SLIDES[active];

  return (
    <section className="qd-explore">
      <div className="qd-explore-header">
        <h2 className="qd-explore-title">{EXPLORE_HEADING}</h2>
        <Link href={EXPLORE_LINK.href} className="qd-explore-cta">
          {EXPLORE_LINK.label}
        </Link>
      </div>

      <div className="qd-explore-filters">
        <div className="qd-filters-row">
          {REGION_FILTERS.map((f) => (
            <div key={f.value} data-checked={region === f.value} className="qd-filter-item">
              <label className="qd-filter-label">
                <input
                  type="radio"
                  name="region"
                  value={f.value}
                  checked={region === f.value}
                  onChange={() => setRegion(f.value)}
                  className="hidden"
                />
                {f.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="qd-map-wrap">
        <div className="qd-map">
          <Image src={REGION_MAP} alt="" width={997} height={656} priority />
          {PROJECT_SLIDES.map((p) => (
            <a
              key={p.slide}
              href="#"
              title={p.title}
              data-active={active === p.slide}
              onClick={(e) => {
                e.preventDefault();
                go(p.slide);
              }}
              style={{ left: p.markerLeft, top: p.markerTop }}
              className="qd-marker"
            >
              {p.title}
            </a>
          ))}
        </div>
      </div>

      <div className="qd-panel">
        <button
          type="button"
          aria-label="السابق"
          onClick={() => go(active - 1)}
          className="qd-arrow qd-prev"
        >
          prev
        </button>
        <button
          type="button"
          aria-label="التالي"
          onClick={() => go(active + 1)}
          className="qd-arrow qd-next"
        >
          next
        </button>

        <Link href={slide.href} className="qd-panel-photo">
          <Image src={slide.image} alt={slide.imageAlt} width={310} height={310} />
        </Link>

        <div className="qd-panel-text">
          <div className="qd-panel-meta">{slide.location}</div>
          <Link href={slide.href} className="qd-panel-title">
            {slide.title}
          </Link>
          <div className="qd-panel-meta qd-panel-status">{slide.status}</div>
        </div>
      </div>
    </section>
  );
}
