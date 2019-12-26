
/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address: "0.0.0.0", // Address to listen on, can be:
                          // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                          // - another specific IPv4/6 to listen on a specific interface
                          // - "", "0.0.0.0", "::" to listen on any interface
                          // Default, when address config is left out, is "localhost"
    port: 8080,
    ipWhitelist: [], // Set [] to allow all IP addresses
                                                           // or add a specific IPv4 of 192.168.1.5 :
                                                           // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                           // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                           // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    language: "de",
    timeFormat: 24,
    units: "metric",

    modules: [
            {
                    module: "alert",
            },
            {
                    module: "updatenotification",
                    position: "top_bar"
            },
            {
                    module: "clock",
                    position: "top_right"
            },
            {
                    module: "calendar",
                    header: "Feiertage und Ferien",
                    position: "top_left",
                    config: {
                            calendars: [
                                    {
                                            symbol: "calendar-check",
                                            url:    "webcal://feed.kleiner-kalender.de/ical/c48-feiertage-in-deutschland.ics"
                                    },
                                    {
                                            symbol: "umbrella-beach",
                                            url:    "webcal://i.cal.to/ical/78/rheinland-pfalz/ferien/10a79a18.14c726d8-c55c33d0.ics"
                                    }
                            ]
                    }
            },
            {
                    module: "compliments",
                    position: "lower_third"
            },
            {
                    module: "currentweather",
                    position: "top_right",
                    config: {
                            location: "Rheinland-Pfalz, DE",
                            locationID: "2847618",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                            appid: "YOUR_OPENWEATHER_API_KEY"
                    }
            },
            {
                    module: "weatherforecast",
                    position: "top_right",
                    header: "Weather Forecast",
                    config: {
                            location: "Rheinland-Pfalz, DE",
                            locationID: "2847618",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                            appid: "YOUR_OPENWEATHER_API_KEY"
                    }
            },
            {
                    module: "newsfeed",
                    position: "bottom_bar",
                    config: {
                            feeds: [
                                    {
                                            title: "Tagesschau",
                                            url: "http://www.tagesschau.de/xml/rss2"
                                    },
                                    {
                                            title: "Heise",
                                            url: "https://www.heise.de/rss/heise-atom.xml"
                                    }
                            ],
                            showSourceTitle: true,
                            showPublishDate: true,
                            broadcastNewsFeeds: true,
                            broadcastNewsUpdates: true
                    }
            },
    ]

};
