import { PostHog } from "posthog-node";

export async function load() {
  const posthog = new PostHog("<API_KEY>", {
    host: "https://us.i.posthog.com",
  });

  posthog.capture({
    distinctId: "hog-test",
    event: "loaded_svelte_app",
  });

  const isEnabled = await posthog.isFeatureEnabled("key", "context");
  posthog.captureException(new Error("A random error: " + isEnabled));

  console.log("ran load function");

  await posthog.shutdown();
}
