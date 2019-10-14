# Daily Forecast

## Usage
```js
import DailyForecast from "@wxu/components/src/organism/DailyForecast/DailyForecast";

<DailyForecast
  dailyData=[{
    day,
    night,
    summary,
  },
  ...]
  alertUrl="weather.com"
  alertSeverityCode={2}
  alertHeadline="River Flood Warning until SAT 7:00 PM CDT"
  alertCount={3}
  presentationName="Lake Charles, LA"
  adIndex1={5}
/>
```

# Acceptance Criteria
As a user, I would like to see daily weather information for the next 10 days.

* **Card Title**: H1 label - <City, State> 10 Day Weather
* **Translations Required**: Yes

### Display Rules
* Should always be visible.
* First row is expanded by default.
* Alerts should be displayed between the title and the first hour when alerts are present for the location.

### Locale Rules
* Should be available for all locales. Timestamps are localized using the Intl.dateTime browser API

### Alerts
* **Alert Headlines API URL Config**: getSunWeatherAlertHeadlinesUrlConfig
* **Alert Headlines API URL Doc**: https://docs.google.com/document/d/1fhvDbnpGmptPigFkw5NbUxKtuHreyC16TtZHfyGCsBk/edit
* **Alert to Show**: Use the primary alert, which is determined by sorting the alerts by severityCode lowest to highest and picking the one on top.
* **Alert Color**: Determined using ${severityCode}. This will change in the near future to be based off of phenom + significance codes instead.
* **Headline Text**: ${headlineText}
* **Number of Alerts**: Total number of alerts for the location

### Daily Data
* **Daily API URL Config**: getSunV3DailyForecastUrlConfig
* **Daily API URL Doc**: https://docs.google.com/document/d/1RY44O8ujbIA_tjlC4vYKHKzwSwEmNxuGw5sEJ9dYjG4/edit
* **Number of Days**: 15 Days
* **Collapsed View**:
  For the summary data in the collapsed view, we always use the "day" data for each day, except for "today". For today, we use data for whatever the active day part is.
  * **Daypart / Date**: For the first row, we show the daypart name ${data.daypart[0].daypartName[daypartIndex]}. For subsequent rows, we show the days date formatted to Short Day + Date (Ex: Fri 27). The date comes from ${data.validTimeLocal[dailyIndex]}
  * **High Temp**: ${data.temperatureMax[dailyIndex]}
  * **Low Temp**: ${data.temperatureMin[dailyIndex]}
  * **Icon Code**: ${data.daypart[0].iconCode[daypartIndex]}
  * **Chance of Precip**: ${data.daypart[0].precipChance[daypartIndex]}

* **Expanded View**:
  For the expanded view, we show data for both day and night for each day, except for "today". For today, if the active day part is night, the day data will drop off.
  * **Narrative**: ${data.daypart[0].narrative[daypartIndex]}
  * **Wind**:
    Cardinal Direction: ${data.daypart[0].windDirectionCardinal[daypartIndex]}
    Speed: ${data.daypart[0].windSpeed[daypartIndex]}
  * **Chance of Rain**: ${data.daypart[0].precipChance[daypartIndex]}
  * **Humidity**: ${data.daypart[0].relativeHumidity[daypartIndex]}
  * **UV Index**: ${data.daypart[0].uvIndex[daypartIndex]}
  * **Sunrise**: Shown only for "day". ${data.sunriseTimeLocal[dailyIndex]}
  * **Sunset**: Shown only for "day". ${data.sunsetTimeLocal[dailyIndex]}
  * **Moonrise**: Shown only for "night". ${data.moonriseTimeLocal[dailyIndex]}
  * **Moonset**: Shown only for "night". ${data.moonsetTimeLocal[dailyIndex]}

### Interspersed Ads
* An ad should be able to be shown between data points
* The spot that the ad is dropped into should be configurable in moonracer, and is equal to the number of data points shown before it. For example, if you want the ad to show up after the sixth day, the value in Moonracer will be 5 (the number of days - 1, as the count starts at 0).
* Use the prop ${adIndex1} from Moonracer

### Translation Strings
* Page Title
* Wind
* Chance of Rain
* Humidity
* UV Index
* Sunrise
* Sunset
* Moonrise
* Moonset
---
