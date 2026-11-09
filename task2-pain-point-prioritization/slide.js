function buildSlide(PptxGenJS) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_WIDE";
  pres.title = "SmartBank Pain Point Prioritization";
  const s = pres.addSlide();
  s.addText("Pain Point Prioritization", { x: 0.5, y: 0.3, w: 12.3, h: 0.6, fontFace: "Arial", fontSize: 26, bold: true, color: "1A1A1A", margin: 0 });
  s.addText("The legacy core and customer-facing gaps need action first; data, CRM and cost issues are largely downstream of them",
    { x: 0.5, y: 0.92, w: 12.3, h: 0.4, fontFace: "Arial", fontSize: 14, color: "197A56", margin: 0 });
  const rows = [
    ["2", "Legacy Core Banking Platform", "High technical debt, performance issues and business-critical system risk.",
     "17 P1s, 35% of IT cost (peers 15%), 85% utilization, client-impacting outages", "High", "C0392B",
     "Impact: daily customer-facing failures. Scale: every product depends on it. Urgency: outage and capacity risk grow each month."],
    ["3", "Customer-Facing Experience Gaps", "High-friction onboarding and usage experiences hurt CX and NPS.",
     "25 incidents, high usage (app 82%, portal 77%), customer complaints", "High", "C0392B",
     "Impact: direct revenue and churn risk vs. digital-first banks. Scale: all retail and SME customers. Urgency: competitors are pulling ahead now."],
    ["5", "Outdated Reporting and Data Infrastructure", "Manual, inaccurate reporting and limited data reuse block compliance and decision-making.",
     "Low trust, underfunded (data 10% vs peers 20%), stakeholder dissatisfaction", "Medium", "E8A33D",
     "Impact: regulatory and decision risk. Scale: management and compliance users. Urgency: foundation for AI and personalization; escalate if regulators raise findings."],
    ["1", "CRM Fragmentation", "Lack of centralized customer data, redundant touchpoints and campaign inefficiency.",
     "Siloed data, underused CRM (63%, often bypassed), marketing pain", "Medium", "E8A33D",
     "Impact: weak personalization and cross-sell. Scale: sales and marketing. Urgency: best solved together with the data platform."],
    ["4", "Inefficient IT Operations and Cost Structure", "Over-indexed on run-the-business spend; minimal investment in change or innovation.",
     "68% run cost vs. peers 60%, innovation underfunded", "Low", "6E7B76",
     "Impact: real but mostly a symptom of the legacy estate. Urgency: falls as core and cloud moves land; take automation quick wins meanwhile."],
  ];
  const head = ["ID", "Pain Point", "Description", "Evidence", "Priority", "Why this priority (impact, scale, urgency)"]
    .map(t => ({ text: t, options: { bold: true, color: "FFFFFF", fill: { color: "197A56" }, fontSize: 11 } }));
  const body = rows.map((r, i) => {
    const fill = { color: i % 2 ? "F2F4F3" : "FFFFFF" };
    return [
      { text: r[0], options: { align: "center", bold: true, fill } },
      { text: r[1], options: { bold: true, fill } },
      { text: r[2], options: { fill } },
      { text: r[3], options: { fill } },
      { text: r[4], options: { bold: true, color: "FFFFFF", fill: { color: r[5] }, align: "center" } },
      { text: r[6], options: { fill } },
    ];
  });
  s.addTable([head, ...body], {
    x: 0.5, y: 1.45, w: 12.3, colW: [0.45, 1.95, 2.75, 2.6, 0.95, 3.6], rowH: [0.42, 0.88, 0.88, 0.88, 0.88, 0.88],
    fontFace: "Arial", fontSize: 10, color: "1A1A1A", valign: "middle", margin: 0.06,
    border: { type: "solid", pt: 0.5, color: "D5DBD8" },
  });
  s.addText([
    { text: "Priority logic: ", options: { bold: true } },
    { text: "High = customer-facing or business-critical, widespread, and worsening without action. Medium = significant but contained, or best fixed alongside a High item. Low = mainly a consequence of other pain points." },
  ], { x: 0.5, y: 6.5, w: 12.3, h: 0.45, fontFace: "Arial", fontSize: 10, color: "1A1A1A", margin: 0 });
  s.addText("Source: SmartBank IT run-cost breakdown, systems utilization report, incident log, stakeholder interviews",
    { x: 0.5, y: 7.05, w: 9, h: 0.25, fontFace: "Arial", fontSize: 9, color: "6E7B76", margin: 0 });
  return pres;
}
if (typeof module !== "undefined") module.exports = buildSlide;
