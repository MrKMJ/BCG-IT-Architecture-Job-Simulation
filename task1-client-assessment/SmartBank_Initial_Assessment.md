# Task 1 — SmartBank client overview and initial assessment

Key patterns in SmartBank's IT landscape, from the systems overview, the IT run-cost breakdown, utilization data, the incident log and stakeholder interviews.

## 1. The estate is legacy-heavy and almost entirely on-premise
- 14 of 15 core systems run on-premise.
- Legacy maintenance takes **35%** of IT spend against a peer benchmark of **15%**. Stakeholders report that about 80% of the IT budget goes on running legacy systems.

## 2. The core banking platform is the main operational risk
- CoreBank 2000 runs at **85%** utilization.
- It has daily P1 batch failures, with an average resolution time of about 9.5 hours and direct client impact.
- Every product depends on it, so its failures spread to the digital channels and to reporting.

## 3. Spend goes to running the bank, not changing it
| Cost area | SmartBank | Peers |
|---|---|---|
| Legacy maintenance | 35% | 15% |
| Infrastructure | 20% | 15% |
| Licensing | 15% | 20% |
| IT operations | 15% | 10% |
| Data | 10% | 20% |
| Security | 5% | 20% |

Data and security are underfunded relative to peers. Both are needed for analytics, AI and regulatory compliance.

## 4. Customer-facing channels are heavily used but fragile
MobileSmartApp (82%) and OnlineBank Portal (77%) are heavily used. They also produce a large share of incidents, including session drops and onboarding friction.

## 5. Data and CRM are fragmented and under-used
- FinCRM sits at 63% utilization and is often bypassed.
- SmartReports sits at 44%, and stakeholders do not trust its output.
- RiskGuard (39%) and BranchQueue (21%) are under-used.
- Customer data is siloed across systems, so there is no single customer view.

## Initial hypothesis
SmartBank's issues stem from a legacy core and point-to-point integration rather than from individual applications. A modular path would add an integration/API layer, a modern data platform and a unified CRM and channels. That would cut incidents and improve CX quickly, while laying the groundwork for replacing the core later.
