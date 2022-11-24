// DATA PER HOUR
const config = {
  INSTAGRAM_CARB: 0.5,
  LINKEDIN_CARB: 0.2,
  SNAPCHAT_CARB: 0.3,
  TWITTER_CARB: 0.25,
  PINTEREST_CARB: 0.15,
  WHATSAPP_CARB: 0.2,
  TIKTOK_CARB: 0.35,
  TINDER_CARB: 0.12,
  YOUTUBE_CARB: 0.13,
  FACEBOOK_CARB: 0.14,
  TWITCH_CARB: 0.16,
  REDDIT_CARB: 0.18,
};

function getTotalEmission(data) {
  //Loop through data arr
  const newData = data.map((entry) => {
    // Reduce each object's carbon emission to grams in a mapped array of slug, total_emission and rest.
    const keys = Object.keys(entry).filter((el) => {
      if (el !== "id" && el !== "slug" && el !== "created_at" && el !== "other") {
        return el;
      }
    });
    let total_emission_per_day = 0;
    const carbs = {};
    // Populate total_emission_per_day
    keys.map((key) => {
      return (total_emission_per_day += Number(entry[key] * config[`${key.toUpperCase()}_CARB`]));
    });

    keys.forEach((el) => {
      carbs[el + "_carbon"] = entry[el] * config[`${el.toUpperCase()}_CARB`];
    });

    return { ...entry, ...carbs, total_emission_per_day };
  });
  return newData;
}

function getOverall(data, slug) {
  const fullData = getTotalEmission(data);
  //sort mapped array from least polutter to most polutter
  const sortedArr = [...fullData].sort((a, b) => {
    if (a.total_emission_per_day <= b.total_emission_per_day) {
      return -1;
    } else if (a.total_emission_per_day > b.total_emission_per_day) {
      return 1;
    }
  });
  // Find current element
  const current = sortedArr.find((el) => el.slug === slug);
  // Find index of current element in sorted array
  const rank = sortedArr.indexOf(current) + 1;
  const total_entries = fullData.length;

  return { ...current, rank, total_entries };
}

export { getOverall };
