import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  formats: ["svg", "json", "png"],
  width: 800,
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: "Backers",
      preset: tierPresets.small,
    },
    {
      title: "Sponsors",
      monthlyDollars: 5,
      preset: tierPresets.medium,
      composeAfter: (composer, _tierSponsors, _config) => {
        composer.addSpan(10);
      },
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 20,
      preset: tierPresets.large,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 50,
      preset: tierPresets.xl,
    },
  ],
});
