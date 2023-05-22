import React from "react";

export default function BtnMarketing({name, to, title}) {
  return <a title={title} className={`btn-marketing ${name}`} href={to} />;
}
