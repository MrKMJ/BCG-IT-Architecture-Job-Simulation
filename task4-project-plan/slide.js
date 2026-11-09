function buildSlide(PptxGenJS) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_WIDE";
  pres.title = "SmartBank Project Plan";
  const s = pres.addSlide();
  const F = "Arial";
  s.addText("Project Plan: \"Better\" Modular Foundation (18 months)", { x: 0.4, y: 0.22, w: 12.5, h: 0.5, fontFace: F, fontSize: 22, bold: true, color: "1A1A1A", margin: 0 });
  s.addText("Four phases build the integration and data foundation first, then unify customer channels, then scale and prepare for the \"Best\" core replacement",
    { x: 0.4, y: 0.72, w: 12.5, h: 0.32, fontFace: F, fontSize: 11.5, color: "197A56", margin: 0 });
  const phases = [
    ["1. Mobilize & Design", "Months 0–3", "6E7B76", [
      ["Lock Target Architecture & Business Case", "Confirm scope, API/data blueprint, KPIs and budget", "Executive sponsorship (CIO, CFO); complete system inventory"],
      ["Stand Up Transformation Office", "Set up PMO and product squads; select integration, cloud data and CRM vendors", "Procurement lead times; skills gaps may need partners"],
      ["Stabilize CoreBank Batch Jobs", "Add monitoring and fix the daily P1 batch failures as a quick win", "CoreBank vendor support; change-freeze windows"]],
      "Approved blueprint and roadmap; teams and vendors in place; fewer P1 incidents"],
    ["2. Build Integration & Data Foundation", "Months 3–9", "197A56", [
      ["Launch API & Integration Layer", "API gateway and event bus around CoreBank; replace priority point-to-point links", "CoreBank interface documentation; security review"],
      ["Deploy Cloud Data Lakehouse", "Ingest core, CRM and channel data; set data ownership and quality rules", "Cloud landing zone; regulatory data-residency approval"],
      ["Go Live with Automated Reporting", "Move priority regulatory and management reports and BI dashboards off SmartReports", "One parallel run against old reports; compliance sign-off"]],
      "Reusable APIs; single source of truth for data; trusted near-real-time reporting"],
    ["3. Unify Customer Engagement", "Months 9–14", "137A5C", [
      ["Launch New CRM Platform", "Merge FinCRM and EmailBanker into one cloud CRM with a 360° customer view", "Clean customer data in the lakehouse; marketing training and adoption"],
      ["Release Omnichannel App & Portal", "Rebuild MobileSmartApp and OnlineBank on shared APIs; fix session logouts", "API layer live; UX research; app-store release cycle"],
      ["Enable Digital Onboarding & e-Sign", "Launch eKYC onboarding integrated with eSignAuth", "KYC/AML regulatory approval; identity-verification vendor"]],
      "Single customer view; higher CX and NPS; more self-service, less branch load"],
    ["4. Scale, Optimize & Prepare for \"Best\"", "Months 14–18", "0E4D36", [
      ["Decommission Legacy Integrations", "Retire point-to-point links and SmartReports", "All consumers migrated; tested rollback plan"],
      ["Embed DevOps & Product Model", "CI/CD, FinOps cost tracking and KPI reviews across product teams", "Team upskilling; role and HR changes"],
      ["Approve Core Modernization Roadmap", "Business case and vendor shortlist for a cloud-native core", "Phase 1–3 KPI results; board approval"]],
      "Lower run cost; faster releases; low-risk path to the core replacement"],
  ];
  const x0 = 0.4, gap = 0.12, w = (12.5 - 3 * gap) / 4, y0 = 1.15, hH = 0.62, mH = 1.42, mGap = 0.08, oH = 0.8;
  phases.forEach((p, i) => {
    const x = x0 + i * (w + gap);
    s.addShape("rect", { x, y: y0, w, h: hH, fill: { color: p[2] }, line: { color: p[2] } });
    s.addText([{ text: p[0], options: { bold: true, fontSize: 12, breakLine: true } }, { text: p[1], options: { fontSize: 10 } }],
      { x, y: y0, w, h: hH, fontFace: F, color: "FFFFFF", margin: 0.08, valign: "middle" });
    p[3].forEach((m, j) => {
      const y = y0 + hH + mGap + j * (mH + mGap);
      s.addShape("rect", { x, y, w, h: mH, fill: { color: "FFFFFF" }, line: { color: "D5DBD8", width: 0.75 } });
      s.addShape("rect", { x, y, w: 0.06, h: mH, fill: { color: p[2] }, line: { color: p[2] } });
      s.addText([
        { text: "Milestone " + (j + 1) + ": " + m[0], options: { bold: true, fontSize: 10, color: "1A1A1A", breakLine: true } },
        { text: m[1], options: { fontSize: 9, color: "1A1A1A", breakLine: true } },
        { text: "Dependencies: ", options: { bold: true, fontSize: 8.5, color: "6E7B76" } },
        { text: m[2], options: { fontSize: 8.5, color: "6E7B76" } },
      ], { x: x + 0.1, y, w: w - 0.14, h: mH, fontFace: F, margin: 0.05, valign: "middle", paraSpaceAfter: 3 });
    });
    const yo = y0 + hH + mGap + 3 * (mH + mGap);
    s.addShape("rect", { x, y: yo, w, h: oH, fill: { color: "EAF6F0" }, line: { color: "EAF6F0" } });
    s.addText([{ text: "Outputs: ", options: { bold: true, color: "197A56" } }, { text: p[4] }],
      { x, y: yo, w, h: oH, fontFace: F, fontSize: 9, color: "1A1A1A", margin: 0.08, valign: "middle" });
  });
  s.addText("Source: SmartBank \"Better\" scenario (modular foundation), prioritized pain points, systems overview and strategic objectives",
    { x: 0.4, y: 7.18, w: 12.5, h: 0.22, fontFace: F, fontSize: 8.5, color: "6E7B76", margin: 0 });
  return pres;
}
if (typeof module !== "undefined") module.exports = buildSlide;
