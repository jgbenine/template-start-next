import React from "react";
import "./Tooltip.scss";

type PropsTooltip = {
  text_1: string;
  text_2?: string;
  urlLink?: string;
};

export function Tooltip({ text_1, text_2, urlLink }: PropsTooltip) {
  return (
    <>
      <div className="tooltip">
        <span className="wrapper-text">
          <p className="text">{text_1}</p>
          {text_2 && <p className="text">{text_2}</p>}
        </span>
        {urlLink && (
          <a className="link" href={urlLink} target="__blank">
            {urlLink}
          </a>
        )}
      </div>
    </>
  );
}
