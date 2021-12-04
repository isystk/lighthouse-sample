"use strict";

const { Audit, NetworkRecords } = require("lighthouse");

const allowedTypes = new Set([
  "font",
  "image",
  "script",
  "serviceworker",
  "style",
  "worker"
]);

class BrokenLinkAudit extends Audit {
  static get meta() {
    return {
      id: "broken-link",
      title: "Link must not be broken.",
      failureTitle: "Have some broken links.",
      description: "Link must not be broken.",
      requiredArtifacts: ["LinkElements", "devtoolsLogs"]
    };
  }

  static async audit(artifacts, context) {
    const links = artifacts.LinkElements.map(e => e.href);

    const devtoolsLog = artifacts.devtoolsLogs[Audit.DEFAULT_PASS];

    const requests = await NetworkRecords.request(devtoolsLog, context);

    const badRequests = requests.filter(request => {
      const isTargetUrl = links.includes(request.url);
      if (isTargetUrl) {
        return request.statusCode !== 200;
      } else {
        return false;
      }
    });

    const passed = badRequests.length === 0;

    return {
      score: passed ? 1 : 0,
      displayValue: `Found ${badRequests.length} broken links.`
    };
  }
}

module.exports = BrokenLinkAudit;