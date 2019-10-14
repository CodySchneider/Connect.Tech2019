// If your module is expected to work with data calls, this should mirror the data you
// expect your module to provide. You should include data mockups and a related story
// for all conditional data states that your module expects to handle.
export const SUMMARY_DATA_DAILY = {
  daypartName: 'Today',
  temperatureMax: 110,
  temperatureMin: 103,
  iconCode: 38,
  wxPhraseLong: 'Mostly Sunny',
  precipChance: 100,
};

export const SUMMARY_DATA_DAILY_SHORT = {
  daypartName: 'Fri 3',
  temperatureMax: 9,
  temperatureMin: 1,
  iconCode: 36,
  wxPhraseLong: 'Mostly Sunny',
  precipChance: 0,
};

export const SUMMARY_DATA_HOURLY = {
  daypartName: '12 pm',
  temperature: 103,
  iconCode: 33,
  wxPhraseLong: 'Mostly Sunny',
  precipChance: 100,
};

export const SUMMARY_DATA_HOURLY_SHORT = {
  daypartName: '12 pm',
  temperature: 1,
  iconCode: 33,
  wxPhraseLong: 'Mostly Sunny',
  precipChance: 0,
};
