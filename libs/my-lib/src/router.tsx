import * as React from "react";
import { Router } from "boring-router";
import { BrowserHistory } from "boring-router-react";

const history = new BrowserHistory();

const router = new Router(history);

export const route = router.$route({
  $children: {
    // Match `/workbench`.
    workbench: true,
    // Match `/user-settings`.
    userSettings: true,
    // Match the rest.
    notFound: {
      $match: /.*/,
    },
  },
});
