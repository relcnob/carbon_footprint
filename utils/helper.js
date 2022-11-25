// DATA PER HOUR / GRAM
const config = {
  INSTAGRAM_CARB: 63,
  LINKEDIN_CARB: 42.6,
  SNAPCHAT_CARB: 52.2,
  TWITTER_CARB: 36,
  PINTEREST_CARB: 78,
  WHATSAPP_CARB: 125.9 /* dont have accurate data */,
  TIKTOK_CARB: 217.8,
  TINDER_CARB: 121.6 /* dont have accurate data */,
  YOUTUBE_CARB: 27.6,
  FACEBOOK_CARB: 47.4,
  TWITCH_CARB: 33,
  REDDIT_CARB: 148.8,
};

function getTotalEmission(data, option) {
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
  if (option === "clean") {
    return newData[0].total_emission_per_day;
  }
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

export { getOverall, getTotalEmission };
