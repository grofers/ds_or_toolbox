import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";
import "cypress-file-upload";

function getCustomSnapshotsDir(browser) {
  return `cypress/snapshots/${browser.family}/${
    browser.isHeadless ? "headless" : "headed"
  }`;
}

addMatchImageSnapshotCommand({
  failureThreshold: 0.05,
  failureThresholdType: "percent",
  customDiffConfig: { threshold: 0.05 },
  capture: "fullPage",
  customSnapshotsDir: getCustomSnapshotsDir(Cypress.browser),
  customDiffDir: getCustomSnapshotsDir(Cypress.browser) + "/__diff__",
});
