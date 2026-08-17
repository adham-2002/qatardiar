import { Fragment } from "react";
import Link from "next/link";
import { INTRO_LINK, INTRO_TITLE, METRICS } from "./data";

export function StatsIntro() {
  return (
    <section className="qd-stats mx-auto mb-[60px] flex max-w-[1230px] flex-wrap justify-between px-[15px] pt-[10.1vh]">
      <div className="flex w-full flex-wrap">
        <div className="qd-stats-region w-1/2">
          <div className="qd-metrics mr-[30px] flex flex-wrap justify-start gap-x-[5%]">
            {METRICS.map((metric) => (
              <div
                key={metric.key}
                className="qd-metric-item basis-[calc(50%-30px)] py-[15px]"
              >
                <div className="qd-metric flex gap-[10px]">
                  <div className="qd-metric-key grow-0 text-[60px] leading-[60px] font-bold text-qd-navy">
                    {metric.key}
                  </div>
                  <div className="qd-metric-val max-w-[500px] pt-[10px] pr-0 pb-0 pl-[10px] text-[15px] leading-[20px]">
                    {metric.value.map((line, i) => (
                      <Fragment key={line}>
                        {i > 0 && <br />}
                        {line}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="qd-stats-region w-1/2">
          <div className="qd-intro-title mb-[25px] w-full pr-[15px] text-[24px] leading-[36px] font-bold text-qd-navy">
            {INTRO_TITLE}
          </div>
          <div>
            <Link
              href={INTRO_LINK.href}
              className="qd-stats-link block text-[14px] font-bold text-qd-gold uppercase"
            >
              {INTRO_LINK.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
