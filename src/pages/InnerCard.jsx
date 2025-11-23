// InnerCard.jsx
import React from "react";
import "./SprintWrapped.css";

export default function InnerCard({ 
  icon, 
  iconClass,
  number, 
  numberClass,
  label, 
  labelClass,
  description,
  descClass,
  cardColor 
}) {
  return (
    <div className={`inner-card animate-scale ${cardColor || ""}`}>

      <div className={`inner-icon text-anim ${iconClass || ""}`}>
        {icon}
      </div>

      <div className={`inner-number text-anim-2 ${numberClass || ""}`}>
        {number}
      </div>

      <div className={`inner-label text-anim-3 ${labelClass || ""}`}>
        {label}
      </div>

      <div className={`inner-desc text-anim-4 ${descClass || ""}`}>
        {description}
      </div>

    </div>
  );
}
