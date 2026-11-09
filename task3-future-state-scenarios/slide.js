function buildSlide(PptxGenJS) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_WIDE";
  pres.title = "SmartBank Potential Paths Forward";
  const s = pres.addSlide();
  const F = "Arial";
  s.addText("Potential Paths Forward", { x: 0.45, y: 0.25, w: 12.4, h: 0.55, fontFace: F, fontSize: 24, bold: true, color: "1A1A1A", margin: 0 });
  s.addText("Recommendation: start with \"Better\" to fix integration, data and channels within 18 months, designed as the launch pad for the \"Best\" core replacement",
    { x: 0.45, y: 0.8, w: 12.4, h: 0.35, fontFace: F, fontSize: 12.5, color: "197A56", margin: 0 });
  const G = "6E7B76", B = "197A56", X = "0E4D36";
  const cols = [
    ["Good", G, "Tactical Technical Upgrades"],
    ["Better (recommended)", B, "Modular Foundation Implementation"],
    ["Best", X, "End-to-End Cloud-Native Modernization"],
  ];
  const rows = [
    ["Description", [
      "Patch CoreBank issues (batch jobs, monitoring), clean SmartReports feeds, improve mobile/web session handling, rationalize CRM usage slightly",
      "Keep CoreBank but wrap it with an API and integration layer that replaces point-to-point links; add a cloud data lakehouse and BI, one cloud CRM and an API-first omnichannel layer for web and mobile",
      "Replace CoreBank 2000 with a cloud-native core and rebuild the estate on cloud: digital lending, AI/ML fraud detection, cloud DMS and e-signature, SAP S/4HANA, exit the data center"]],
    ["Scope", [
      "CoreBank 2000, SmartReports, MobileSmartApp, OnlineBank Portal, FinCRM; IT operations only, no new platforms",
      "Integration layer, data platform, FinCRM + EmailBanker, MobileSmartApp, OnlineBank Portal, eSignAuth, SmartReports; IT, marketing, digital and risk teams",
      "Entire landscape incl. core, LoanPro, RiskGuard, Documentum, SAP, TradeBank, ATMNet and infrastructure; operating model shifts to product teams, DevOps and managed services"]],
    ["Benefits", [
      "Stabilizes critical services; reduces immediate P1 incident volume; quick IT wins at low cost",
      "Single customer view and trusted, near-real-time reporting; faster feature releases via APIs; digital onboarding and fewer logouts; de-risks a later core swap",
      "Removes the root cause of incidents and tech debt; product launches in weeks; legacy run cost moves toward the 15% peer level; AI-driven personalization and open banking"]],
    ["Tradeoffs", [
      "Doesn't reduce long-term tech debt; missed opportunity for differentiation; no meaningful CX uplift",
      "Core tech debt and P1 risk remain until replaced; temporary dual running; moderate investment and change effort across teams",
      "Highest cost and delivery risk (core data migration, regulatory approval); large skills and change-management gap; benefits arrive late"]],
    ["Timeline", ["3–6 months", "12–18 months", "24–36 months, phased"]],
    ["Objective alignment", [
      "Reduce costs (partly) and minimize disruption; little impact on growth, data or CX goals",
      "Strong: time-to-market, unified data, CX and self-service; partial: cost reduction, new business growth",
      "All five objectives, incl. new business growth via digital innovation and full cost reduction"]],
  ];
  const hdr = [{ text: "", options: { fill: { color: "FFFFFF" } } }].concat(cols.map(c => ({
    text: [{ text: c[0], options: { bold: true, fontSize: 12, breakLine: true } }, { text: c[2], options: { fontSize: 10 } }],
    options: { color: "FFFFFF", fill: { color: c[1] }, valign: "middle" } })));
  const body = rows.map((r, i) => [{ text: r[0], options: { bold: true, fill: { color: "F2F4F3" }, color: "1A1A1A" } }]
    .concat(r[1].map((t, j) => ({ text: t, options: { fill: { color: j === 1 ? "EAF6F0" : "FFFFFF" }, bold: r[0] === "Timeline" } }))));
  s.addTable([hdr, ...body], {
    x: 0.45, y: 1.3, w: 12.4, colW: [1.55, 3.4, 3.75, 3.7], rowH: [0.55, 1.0, 0.85, 0.95, 0.85, 0.35, 0.75],
    fontFace: F, fontSize: 9.5, color: "1A1A1A", valign: "middle", margin: 0.06,
    border: { type: "solid", pt: 0.5, color: "D5DBD8" },
  });
  s.addText("Source: SmartBank strategic objectives, systems overview, IT run-cost breakdown and prioritized pain points (solutions A–E)",
    { x: 0.45, y: 7.1, w: 12.4, h: 0.25, fontFace: F, fontSize: 9, color: "6E7B76", margin: 0 });
  return pres;
}
if (typeof module !== "undefined") module.exports = buildSlide;
